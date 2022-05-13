import { inject, injectable } from 'tsyringe'
import IMQProps from '@modules/mq/repositories/interfaces/IMQ.interface'

@injectable()
export default class MessageChannelService {
  constructor (
    @inject('CandleRepository')
    private repository: IMQProps
  ) {}

  async execute (): Promise<void> {
    this.repository.consumer()
  }
}
