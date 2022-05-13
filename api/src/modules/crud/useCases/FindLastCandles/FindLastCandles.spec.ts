import 'reflect-metadata'

import CrudReadService from './FindLastCandles.service'

import FakeCrudRepository from '@modules/crud/repositories/fakes/FakeCrud.repository'

let crudReadService: CrudReadService
let fakeCrudRepository: FakeCrudRepository

describe('Crud Read', () => {
  beforeEach(() => {
    fakeCrudRepository = new FakeCrudRepository()
    crudReadService = new CrudReadService(fakeCrudRepository)
  })

  it('should be able get candles from db', async () => {
    await fakeCrudRepository.create({
      currency: 'BTC',
      finalDateTime: new Date(),
      open: 30000,
      close: 35000,
      high: 38000,
      low: 28000,
      color: 'green'
    })

    await fakeCrudRepository.create({
      currency: 'BTC',
      finalDateTime: new Date(),
      open: 30000,
      close: 25000,
      high: 38000,
      low: 28000,
      color: 'red'
    })

    await fakeCrudRepository.create({
      currency: 'BTC',
      finalDateTime: new Date(),
      open: 30000,
      close: 35000,
      high: 38000,
      low: 28000,
      color: 'green'
    })

    const newContent = await crudReadService.execute({ quantity: 3 })

    expect(newContent.length).toEqual(3)
  })
})
