import { inject, injectable } from 'tsyringe'
import http from 'http'

import ICandleProps, { CreateProps } from '@modules/candle/repositories/interfaces/ICandle.interface'
import mqConnection from '@modules/candle/infra/rabbitmq/mqConnection'
import { Server } from 'socket.io'

@injectable()
export default class CandleCreateService {
  private _io: Server

  constructor (
    @inject('CandleRepository')
    private repository: ICandleProps,

    private _server: http.Server
  ) {}

  private _socket (server: http.Server): Object {
    this._io = new Server(server, {
      cors: {
        origin: '*',
        methods: ['GET', 'POST']
      }
    })

    return this._io
  }

  async execute (): Promise<Object> {
    this._socket(this._server)

    const queue_name = process.env.QUEUE_NAME
    const mq = await mqConnection()

    const queue = mq.consume(queue_name, async (msg) => {
      const candle: CreateProps = JSON.parse(msg.content.toString())
      mq.ack(msg)

      await this.repository.create(candle)
      console.log('Candle Saved to dataBase')

      const socket = this._io.emit(process.env.QUEUE_NAME, candle)
      if (socket) console.log('Candle emited by web socket')
    })

    console.log('🚀 Candle consumer started')
    return queue
  }
}
