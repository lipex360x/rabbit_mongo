import IMQInterface, { ConsumeProps } from '@modules/MQ/repositories/interfaces/IMQ.interface'

export default class MQRepository implements IMQInterface {
  private repository = []

  constructor () {
    this.repository = [{
      currency: 'BTC',
      finalDateTime: new Date(),
      open: 30000,
      close: 35000,
      high: 38000,
      low: 28000,
      color: 'green'
    }]
  }

  async consume ({ queue_name }:ConsumeProps): Promise<string> {
    return JSON.stringify(this.repository[0])
  }
}
