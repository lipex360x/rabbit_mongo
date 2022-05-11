import 'reflect-metadata'

import CrudReadService from './CrudRead.service'

import FakeCrudRepository from '@modules/crud/repositories/fakes/FakeCrud.repository'

let crudReadService: CrudReadService
let fakeCrudRepository: FakeCrudRepository

describe('Crud Read', () => {
  beforeEach(() => {
    fakeCrudRepository = new FakeCrudRepository()
    crudReadService = new CrudReadService(fakeCrudRepository)
  })

  it('should be able search a register by id', async () => {
    const newData = await fakeCrudRepository.create({ content: 'Hello World' })

    const newContent = await crudReadService.execute({ id: newData._id })

    expect(newContent).toHaveProperty('read')
  })
})
