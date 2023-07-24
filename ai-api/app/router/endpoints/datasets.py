from datetime import datetime
import shutil
from typing import Annotated, List, Optional
from app.crud.dataset import (
    get_dataset,
    get_datasets,
    update_dataset_status,
    delete_dataset,
)
from app.crud.task import get_tasks_to_dataset

from pydantic import parse_obj_as

from app.database.minio_wrapper import minio_wrapper
from app.schema.dataset import DatasetStatus, DatasetType
from fastapi import APIRouter, Depends, Form, UploadFile, BackgroundTasks, Request
from supertokens_python.recipe.session import SessionContainer
from supertokens_python.recipe.session.framework.fastapi import verify_session

import app.clearml_wrapper.clearml_wrapper as clearml_wrapper
from app.utils.logger import logger
import shutil
from uuid import uuid4
import tempfile
import os
from app.schema.dataset import Dataset
from app.database.database import dataset_collection
from app.core.dataset.create_dataset import (
    create_dataset_backgroud,
    create_own_dataset_backgroud,
)
from clearml import Dataset as ClearmlDataset
import json
import requests

router = APIRouter()


@router.post("")
async def create_new_dataset(
    background_tasks: BackgroundTasks,
    data: Annotated[str, Form()],
    dataset_type: Annotated[DatasetType, Form()],
    file: Annotated[UploadFile, Form()] = UploadFile(...),
    s: SessionContainer = Depends(verify_session()),
):
    user_id = s.get_user_id()
    parsed_data = json.loads(data)
    new_dataset = await dataset_collection.insert_one(
        {
            "creator_id": user_id,
            "name": parsed_data["name"],
            "description": parsed_data["description"]
            if "description" in parsed_data
            else None,
            "dataset_type": dataset_type,
            "created_at": datetime.now(),
            "status": "saving",
            "metadata": {},
        }
    )

    dataset = await get_dataset(dataset_id=str(new_dataset.inserted_id))
    await update_dataset_status(dataset_id=dataset.id, status="processing")
    background_tasks.add_task(create_dataset_backgroud, dataset=dataset, file=file.file)
    return dataset


@router.post("/own")
async def create_new_own_dataset(
    background_tasks: BackgroundTasks,
    request: Request,
    body: dict,
    s: SessionContainer = Depends(verify_session()),
):
    # for data in body["tasks"]:
    #     task_id = data["task"]["id"]
    #     url = f"""http://lern_api:8000/tasks/task/{task_id}/mask"""
    #     logger.debug(url)
    #     response = requests.get(
    #         url,
    #         cookies=request.cookies,
    #     )
    #     with open(f"/app/{str(task_id)}.png", "wb") as out_file:
    #         shutil.copyfileobj(response.raw, out_file)
    user_id = s.get_user_id()
    # new_dataset = await dataset_collection.insert_one(
    #     {
    #         "creator_id": user_id,
    #         "name": body["name"],
    #         "description": body["description"] if "description" in body else None,
    #         "dataset_type": "segmentation",
    #         "created_at": datetime.now(),
    #         "status": "saving",
    #         "metadata": {},
    #     }
    # )
    # dataset = await get_dataset(dataset_id=str(new_dataset.inserted_id))
    # await update_dataset_status(dataset_id=dataset.id, status="processing")
    background_tasks.add_task(
        create_own_dataset_backgroud, data=body, cookies=request.cookies, dataset=None
    )
    return None
    # requests.post("http://lern_api:8000/tasks", cookies=request.cookies)

    # logger.info(data)


@router.get("", response_model=List[Dataset])
async def datasets(_: SessionContainer = Depends(verify_session())):
    return await get_datasets()


@router.get("/{dataset_id}", response_model=Dataset)
async def get_specific_dataset(
    dataset_id: str, _: SessionContainer = Depends(verify_session())
):
    return await get_dataset(dataset_id)


@router.delete("/{dataset_id}", response_model=Optional[Dataset])
async def dataset_delete(
    dataset_id: str, _: SessionContainer = Depends(verify_session())
):
    result = await get_tasks_to_dataset(dataset_id)
    logger.info(len(result))
    if len(result) > 0:
        return None

    dataset = await get_dataset(dataset_id)
    if dataset.clearml_dataset is not None:
        clearml_id = dataset.clearml_dataset["id"]
        clearml_project_id = dataset.clearml_dataset["project"]["id"]
        try:
            clearml_dataset = ClearmlDataset.delete(
                clearml_id,
                delete_files=True,
                delete_external_files=True,
                force=True,
                entire_dataset=True,
            )
            clearml_wrapper.delete_project(clearml_project_id)
        except Exception as error:
            logger.exception(
                f"Failed deleting dataset {dataset_id} (ClearML {clearml_id}): {error}"
            )

    await delete_dataset(dataset_id)

    return dataset


@router.get("/{dataset_id}/images")
async def get_dataset_images(
    dataset_id: str, _: SessionContainer = Depends(verify_session())
):
    dataset = await get_dataset(dataset_id)
    if dataset.clearml_dataset:
        return clearml_wrapper.get_datatset_debug_images(dataset.clearml_dataset["id"])
    return None
