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

  it('should be able to create a new register', async () => {
    const content = await fakeCrudRepository.create({ content: 'Hello World' })

    const newContent = await crudCreateService.execute(content)

    expect(newContent).toHaveProperty('_id')
  })
})
