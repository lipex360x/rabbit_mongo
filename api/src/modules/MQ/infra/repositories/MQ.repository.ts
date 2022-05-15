import IMQInterface, { ConsumeProps } from '@modules/MQ/repositories/interfaces/IMQ.interface'
import mqConnection from '../rabbitmq/mqConnection'

export default class MQRepository implements IMQInterface {
  private _message: string

  async consume ({ queue_name }:ConsumeProps): Promise<string> {
    const mq = await mqConnection()

    const response = await mq.consume(queue_name, async (msg) => {
      this.teste(msg.content.toString())
      mq.ack(msg)
    })

    return response.toString()
  }
}
