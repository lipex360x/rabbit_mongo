import { container } from 'tsyringe'

import ICandleInterface from '../interfaces/ICandle.interface'
import CandleRepository from '../../infra/repositories/Candle.repository'

container.registerSingleton<ICandleInterface>(
  'CandleRepository',
  CandleRepository
)

export default container
