import 'reflect-metadata'

import FindLastCandlesService from './FindLastCandles.service'

import FakeCandleRepository from '@modules/candle/repositories/fakes/FakeCandle.repository'

let findLastCandlesService: FindLastCandlesService
let fakeCandleRepository: FakeCandleRepository

describe('Candle Read', () => {
  beforeEach(() => {
    fakeCandleRepository = new FakeCandleRepository()
    findLastCandlesService = new FindLastCandlesService(fakeCandleRepository)
  })

  it('should be able get candles from db', async () => {
    await fakeCandleRepository.create({
      currency: 'BTC',
      finalDateTime: new Date(),
      open: 30000,
      close: 35000,
      high: 38000,
      low: 28000,
      color: 'green'
    })

    await fakeCandleRepository.create({
      currency: 'BTC',
      finalDateTime: new Date(),
      open: 30000,
      close: 25000,
      high: 38000,
      low: 28000,
      color: 'red'
    })

    await fakeCandleRepository.create({
      currency: 'BTC',
      finalDateTime: new Date(),
      open: 30000,
      close: 35000,
      high: 38000,
      low: 28000,
      color: 'green'
    })

    const newContent = await findLastCandlesService.execute({ quantity: 3 })

    expect(newContent.length).toEqual(3)
  })
})
