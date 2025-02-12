"""Initial migration

Revision ID: 27bb36400101
Revises: 
Create Date: 2025-02-12 14:55:22.691110

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = '27bb36400101'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('obras',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('nome', sa.String(), nullable=False),
    sa.Column('uf', sa.String(), nullable=False),
    sa.Column('situacao', sa.String(), nullable=False),
    sa.Column('tipo', sa.String(), nullable=False),
    sa.Column('executores', sa.String(), nullable=False),
    sa.Column('natureza', sa.String(), nullable=False),
    sa.Column('endereco', sa.String(), nullable=False),
    sa.Column('funcaoSocial', sa.Text(), nullable=False),
    sa.Column('dataInicialPrevista', sa.Date(), nullable=True),
    sa.Column('dataFinalPrevista', sa.Date(), nullable=True),
    sa.Column('fontesDeRecurso', postgresql.JSONB(astext_type=sa.Text()), nullable=False),
    sa.Column('valorInvestimentoPrevisto', sa.Float(), nullable=False),
    sa.Column('origemRecurso', sa.String(), nullable=False),
    sa.Column('qdtEmpregosGerados', sa.Integer(), nullable=False),
    sa.Column('geometria', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('usuario',
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('username', sa.String(), nullable=False),
    sa.Column('email', sa.String(), nullable=False),
    sa.Column('password', sa.String(), nullable=False),
    sa.Column('admin', sa.Boolean(), nullable=False),
    sa.Column('reset_token', sa.String(length=255), nullable=True),
    sa.Column('token_created_at', sa.DateTime(), nullable=True),
    sa.Column('token_expired_at', sa.DateTime(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('endereco',
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('cep', sa.String(length=10), nullable=False),
    sa.Column('cidade', sa.String(length=100), nullable=False),
    sa.Column('estado', sa.String(length=100), nullable=False),
    sa.Column('rua', sa.String(length=255), nullable=False),
    sa.Column('bairro', sa.String(length=255), nullable=False),
    sa.Column('numero', sa.String(length=10), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['usuario.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('endereco')
    op.drop_table('usuario')
    op.drop_table('obras')
    # ### end Alembic commands ###
