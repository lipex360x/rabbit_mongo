import { CandleProps } from '@modules/candle/infra/schemas/Candle.schema'

import ICandleProps, { FindQtdeProps } from '@modules/candle/repositories/interfaces/ICandle.interface'
import { inject, injectable } from 'tsyringe'

@injectable()
export default class FindLastCandlesService {
  constructor (
    @inject('CandleRepository')
    private repository: ICandleProps
  ) {}

  async execute ({ quantity }:FindQtdeProps): Promise<CandleProps[]> {
    return this.repository.find({ quantity })
  }
}
