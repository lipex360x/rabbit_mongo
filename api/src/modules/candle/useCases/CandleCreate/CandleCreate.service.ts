import { inject, injectable } from 'tsyringe'
import http from 'http'

import ICandleProps from '@modules/candle/repositories/interfaces/ICandle.interface'
import mqConnection from '@modules/candle/infra/rabbitmq/mqConnection'
import { Server } from 'socket.io'

@injectable()
export default class CandleCreateService {
  private _io: Server

  constructor (
    @inject('CandleRepository')
    private repository: ICandleProps,

    server: http.Server
  ) {
    this._io = new Server(server, {
      cors: {
        origin: '*',
        methods: ['GET', 'POST']
      }
    })

    this._io.on('connection', () => console.log('Web socket connection created'))
  }

  async execute (): Promise<Object> {
    const queue_name = process.env.QUEUE_NAME
    const mq = await mqConnection()

    const queue = await mq.consume(queue_name, async (msg) => {
      console.log(msg.content.toString())
      mq.ack(msg)
    })

    return queue

    // const candle:CreateProps = JSON.parse(getCandle)

    // return this.repository.create(candle)
  }
}
