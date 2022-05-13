import 'reflect-metadata'

import CandleCreateService from './CandleCreate.service'

import FakeCandleRepository from '@modules/candle/repositories/fakes/FakeCandle.repository'

let candleCreateService: CandleCreateService
let fakeCandleRepository: FakeCandleRepository

describe('Candle Create', () => {
  beforeEach(() => {
    fakeCandleRepository = new FakeCandleRepository()
    candleCreateService = new CandleCreateService(fakeCandleRepository)
  })

  it('should be able to create a new candle', async () => {
    const content = await fakeCandleRepository.create({
      currency: 'BTC',
      finalDateTime: new Date(),
      open: 30000,
      close: 35000,
      high: 38000,
      low: 28000,
      color: 'green'
    })

    const newContent = await candleCreateService.execute(content)

    expect(newContent).toHaveProperty('_id')
  })
})
