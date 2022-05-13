import { Channel } from 'amqplib'
import axios from 'axios'
import sleep from '@shared/utils/sleep'

import CandlesRepository from '@modules/candles/repositories/Candles.repository'
import Period from '@modules/candles/enumerators/Periods'

export default class MessageChannelService {
  mq: Channel
  repository: CandlesRepository

  constructor (mq: Channel) {
    this.mq = mq
    this.repository = new CandlesRepository()
  }

  private async _readMarketPrice () {
    const result = await axios.get(process.env.API_URL)
    const data = result.data
    const price = data.bitcoin.usd
    return price
  }

  private _saveQueue (message: string): Boolean {
    return this.mq.sendToQueue(process.env.QUEUE_NAME, Buffer.from(message))
  }

  async execute () {
    while (true) {
      const loopTimes = Period.FIVE_MINUTES / Period.TEN_SECONDS
      let price = 0

      for (let i = 0; i < loopTimes; i++) {
        price = await this._readMarketPrice()
        this.repository.addValue(price)

        console.log(`Market Price #${i + 1} of ${loopTimes}`)
        await sleep(Period.TEN_SECONDS)
      }

      this.repository.closeCandle()

      const data = this.repository.toSimpleObject(price)
      const dataJson = JSON.stringify(data)

      if (this._saveQueue(dataJson)) console.log('queue saved')
    }
  }
}
