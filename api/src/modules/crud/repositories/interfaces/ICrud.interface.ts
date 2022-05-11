import { CrudProps } from '@modules/crud/infra/schemas/Crud.schema'

export type CreateProps = {
  content: string
}

export type FindQtdeProps = {
  quantity?: number
}

export type FindByIdProps = {
  id: string
}

export type UpdateProps = {
  content: CrudProps
}

export type DeleteProps = {
  id: string
}

type ICrudProps = {
  create(data: CreateProps): Promise<CrudProps>
  find(data: FindQtdeProps): Promise<CrudProps[]>
  findAll(): Promise<CrudProps[]>
  findById(data: FindByIdProps): Promise<CrudProps>
  update(data: UpdateProps): Promise<CrudProps>
  delete(data: DeleteProps): Promise<CrudProps>
}

export default ICrudProps
