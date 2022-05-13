import { container } from 'tsyringe'

import IMQInterface from '../interfaces/IMQ.interface'
import MQRepository from '../../infra/repositories/MQ.repository'

container.registerSingleton<IMQInterface>(
  'MQRepository',
  MQRepository
)

export default container
