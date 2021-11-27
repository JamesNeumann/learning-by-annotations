"""Tasks can be optionally solvedn

Revision ID: a5e49aaba65b
Revises: d898dc181fa0
Create Date: 2021-10-27 19:35:01.682120

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql
from sqlalchemy.engine.reflection import Inspector

# revision identifiers, used by Alembic.
revision = 'a5e49aaba65b'
down_revision = 'd898dc181fa0'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    conn = op.get_bind()
    inspector = Inspector.from_engine(conn)
    tables = inspector.get_table_names()
    if 'slide' in tables:
        op.drop_index('ix_slide_file_id', table_name='slide')
        op.drop_index('ix_slide_id', table_name='slide')
        op.drop_index('name', table_name='slide')
        op.drop_table('slide')

    op.create_index(op.f('ix_basetask_slide_id'), 'basetask', ['slide_id'], unique=False)
    op.add_column('task', sa.Column('can_be_solved', sa.Boolean(), nullable=True))
    op.alter_column('usersolution', 'failed_attempts',
               existing_type=mysql.INTEGER(),
               nullable=False,
               existing_server_default=sa.text('(0)'))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('usersolution', 'failed_attempts',
               existing_type=mysql.INTEGER(),
               nullable=True,
               existing_server_default=sa.text('(0)'))
    op.drop_column('task', 'can_be_solved')
    op.drop_index(op.f('ix_basetask_slide_id'), table_name='basetask')
    op.create_table('slide',
    sa.Column('id', mysql.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('name', mysql.VARCHAR(length=255), nullable=True),
    sa.Column('file_id', mysql.VARCHAR(length=255), nullable=True),
    sa.Column('status', mysql.CHAR(length=1), nullable=True),
    sa.Column('mag', mysql.INTEGER(), autoincrement=False, nullable=True),
    sa.Column('width', mysql.INTEGER(), autoincrement=False, nullable=True),
    sa.Column('height', mysql.INTEGER(), autoincrement=False, nullable=True),
    sa.Column('mpp', mysql.FLOAT(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    mysql_collate='utf8mb4_0900_ai_ci',
    mysql_default_charset='utf8mb4',
    mysql_engine='InnoDB'
    )
    op.create_index('name', 'slide', ['name'], unique=True)
    op.create_index('ix_slide_id', 'slide', ['id'], unique=False)
    op.create_index('ix_slide_file_id', 'slide', ['file_id'], unique=False)
    # ### end Alembic commands ###
