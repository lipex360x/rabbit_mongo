import Candle, { CandleProps } from '@modules/candle/infra/schemas/Candle.schema'
import ICandle, { CreateProps, FindQtdeProps } from '@modules/candle/repositories/interfaces/ICandle.interface'

export default class CandleRepository implements ICandle {
  async create ({ currency, finalDateTime, open, close, high, low, color }: CreateProps): Promise<CandleProps> {
    return Candle.create({ currency, finalDateTime, open, close, high, low, color })
  }

  async find ({ quantity }: FindQtdeProps): Promise<CandleProps[]> {
    const qtde = quantity > 0 ? quantity : 10

    const lastValues: CandleProps[] =
            await Candle
              .find()
              .sort({ _id: -1 })
              .limit(qtde)

    return lastValues
  }
}
