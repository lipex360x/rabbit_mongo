import { Router } from 'express'

import FindLastCandlesController from '@modules/candle/useCases/FindLastCandles/FindLastCandles.controller'

const candleRoutes = Router()

const findLastCandlesController = new FindLastCandlesController()

candleRoutes.get('/:quantity', findLastCandlesController.handle)

export default candleRoutes
