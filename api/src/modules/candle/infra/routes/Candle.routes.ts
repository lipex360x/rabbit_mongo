import { Router } from 'express'

import FindLastCandlesController from '@modules/candle/useCases/FindLastCandles/FindLastCandles.controller'
import CandleCreateController from '@modules/candle/useCases/Create/CandleCreate.controller'

const candleRoutes = Router()

const findLastCandlesController = new FindLastCandlesController()
const candleCreateController = new CandleCreateController()

candleRoutes.get('/find/:quantity', findLastCandlesController.handle)
candleRoutes.post('/create', candleCreateController.handle)

export default candleRoutes
