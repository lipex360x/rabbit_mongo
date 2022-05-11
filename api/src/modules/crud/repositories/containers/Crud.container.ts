import { container } from 'tsyringe'

import ICrudRepository from '../interfaces/ICrud.interface'
import CrudRepository from '../../infra/repositories/Crud.repository'

container.registerSingleton<ICrudRepository>(
  'CrudRepository',
  CrudRepository
)

export default container
