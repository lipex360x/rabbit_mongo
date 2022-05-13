import { inject, injectable } from 'tsyringe'

import ICandleProps, { CreateProps } from '@modules/candle/repositories/interfaces/ICandle.interface'
import IMQRepository from '@modules/MQ/repositories/interfaces/IMQ.interface'

@injectable()
export default class CandleCreateService {
  constructor (
    @inject('CandleRepository')
    private repository: ICandleProps,

    @inject('MQRepository')
    private mq: IMQRepository
  ) {}

  async execute (): Promise<CreateProps> {
    const getCandle = await this.mq.consume({ queue_name: process.env.QUEUE_NAME })

    const candle:CreateProps = JSON.parse(getCandle)

    return this.repository.create(candle)
  }
}
