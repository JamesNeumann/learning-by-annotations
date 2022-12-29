"""Added task questionaires

Revision ID: 99d490a6c71d
Revises: 9e026d3bfae6
Create Date: 2022-12-14 10:27:44.201656

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = "99d490a6c71d"
down_revision = "9e026d3bfae6"
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table(
        "taskquestionnaires",
        sa.Column("task_id", sa.Integer(), nullable=False),
        sa.Column("questionnaire_id", sa.Integer(), nullable=False),
        sa.Column("is_before", sa.Boolean(), nullable=False),
        sa.ForeignKeyConstraint(
            ["questionnaire_id"],
            ["questionnaire.id"],
        ),
        sa.ForeignKeyConstraint(
            ["task_id"],
            ["task.id"],
        ),
        sa.PrimaryKeyConstraint("task_id", "questionnaire_id"),
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table("taskquestionnaires")
    # ### end Alembic commands ###
