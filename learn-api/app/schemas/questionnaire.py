from pydantic import BaseModel

from typing import Optional, List, Union

from app.schemas.questionnaire_question import (
    QuestionnaireQuestion,
    QuestionnaireQuestionCreate,
    QuestionnaireQuestionUpdate,
)


class QuestionnaireBase(BaseModel):
    name: Optional[str]
    description: Optional[str]
    is_mandatory: bool = False
    questions: Optional[List[QuestionnaireQuestion]]


class QuestionnaireCreate(QuestionnaireBase):
    questions: Optional[List[QuestionnaireQuestionCreate]]


class QuestionnaireUpdate(QuestionnaireBase):
    id: int
    is_mandatory: Optional[bool]
    questions: Optional[List[QuestionnaireQuestionUpdate]]


class QuestionnaireInDBBase(QuestionnaireBase):
    id: int

    class Config:
        orm_mode = True


class QuestionnaireInDB(QuestionnaireInDBBase):
    pass


class Questionnaire(QuestionnaireInDBBase):
    pass


class QuestionnaireDetail(Questionnaire):
    is_before: bool
