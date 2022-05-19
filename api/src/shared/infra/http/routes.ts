import { Router } from 'express'

import candleRoutes from '@modules/candle/infra/routes/Candle.routes'

const routes = Router()

routes.use('/candles', candleRoutes)

export default routes
