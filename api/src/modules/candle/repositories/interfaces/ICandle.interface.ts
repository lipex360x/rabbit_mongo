import { CandleProps } from '@modules/candle/infra/schemas/Candle.schema'

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

type ICandleRepository = {
  create(data: CreateProps): Promise<CandleProps>
  find(data: FindQtdeProps): Promise<CandleProps[]>
}

export default ICandleRepository
