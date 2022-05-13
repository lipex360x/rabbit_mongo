import { CrudProps } from '@modules/crud/infra/schemas/Crud.schema'

export type CreateProps = {
  currency: string
  finalDateTime: Date
  open: number
  close: number
  high: number
  low: number
  color: string
}

export type FindQtdeProps = {
  quantity?: number
}

type ICrudProps = {
  create(data: CreateProps): Promise<CrudProps>
  find(data: FindQtdeProps): Promise<CrudProps[]>
}

export default ICrudProps
