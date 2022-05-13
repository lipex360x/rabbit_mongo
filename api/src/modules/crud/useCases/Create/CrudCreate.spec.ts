import 'reflect-metadata'

import CrudCreateService from './CrudCreate.service'

import FakeCrudRepository from '@modules/crud/repositories/fakes/FakeCrud.repository'

let crudCreateService: CrudCreateService
let fakeCrudRepository: FakeCrudRepository

describe('Crud Create', () => {
  beforeEach(() => {
    fakeCrudRepository = new FakeCrudRepository()
    crudCreateService = new CrudCreateService(fakeCrudRepository)
  })

  it('should be able to create a new candle', async () => {
    const content = await fakeCrudRepository.create({
      currency: 'BTC',
      finalDateTime: new Date(),
      open: 30000,
      close: 35000,
      high: 38000,
      low: 28000,
      color: 'green'
    })

    const newContent = await crudCreateService.execute(content)

    expect(newContent).toHaveProperty('_id')
  })
})
