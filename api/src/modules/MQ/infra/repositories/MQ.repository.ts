import IMQInterface, { ConsumeProps } from '@modules/MQ/repositories/interfaces/IMQ.interface'
import mqConnection from '../rabbitmq/mqConnection'

export default class MQRepository implements IMQInterface {
  async consume ({ queue_name }:ConsumeProps): Promise<string> {
    const mq = await mqConnection()

    const response = mq.consume(queue_name, async (msg) => {
      mq.ack(msg)
      return msg.content
    })

    return response.toString()
  }
}
