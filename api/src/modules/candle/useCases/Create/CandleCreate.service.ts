import { inject, injectable } from 'tsyringe'
import ICandleProps, { CreateProps } from '@modules/candle/repositories/interfaces/ICandle.interface'

@injectable()
export default class CandleCreateService {
  constructor (
    @inject('CandleRepository')
    private repository: ICandleProps
  ) {}

  async execute ({ currency, finalDateTime, open, close, high, low, color }:CreateProps): Promise<CreateProps> {
    return this.repository.create({ currency, finalDateTime, open, close, high, low, color })
  }
}
