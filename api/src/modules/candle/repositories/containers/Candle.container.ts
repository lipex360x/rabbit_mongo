import { container } from 'tsyringe'

import ICandleRepository from '../interfaces/ICandle.interface'
import CandleRepository from '../../infra/repositories/Candle.repository'

container.registerSingleton<ICandleRepository>(
  'CandleRepository',
  CandleRepository
)

export default container
