import Candle, { CandleProps } from '@modules/candle/infra/schemas/Candle.schema'
import ICandle, { CreateProps, FindQtdeProps } from '@modules/candle/repositories/interfaces/ICandle.interface'

export default class FakeCandleRepository implements ICandle {
  private repository: CandleProps[] = []

  async create ({ currency, finalDateTime, open, close, high, low, color }: CreateProps): Promise<CandleProps> {
    const candle = new Candle()

    Object.assign(candle, {
      ...candle,
      currency,
      finalDateTime,
      open,
      close,
      high,
      low,
      color
    })

    this.repository.push(candle)

    return candle
  }

  async find ({ quantity }: FindQtdeProps): Promise<CandleProps[]> {
    const qtde = quantity > 0 ? quantity : 10

    const response = []

    for (let i = 0; i < this.repository.length; i++) {
      if ((i + 1) > qtde) break

      response.push(this.repository[i])
    }

    return response
  }
}
