import 'reflect-metadata'

import CandleCreateService from './CandleCreate.service'

import FakeCandleRepository from '@modules/candle/repositories/fakes/FakeCandle.repository'
import FakeMQRepository from '@modules/MQ/repositories/fakes/FakeMQ.repository'

let candleCreateService: CandleCreateService
let fakeCandleRepository: FakeCandleRepository
let fakeMQRepository: FakeMQRepository

describe('Candle Create', () => {
  beforeEach(() => {
    fakeCandleRepository = new FakeCandleRepository()
    fakeMQRepository = new FakeMQRepository()
    candleCreateService = new CandleCreateService(fakeCandleRepository, fakeMQRepository)
  })

  it('should be able to read a candle', async () => {
    const newContent = await candleCreateService.execute()

    expect(newContent).toHaveProperty('_id')
  })
})
