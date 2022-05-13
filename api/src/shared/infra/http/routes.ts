import { Router } from 'express'

import candleRoutes from '@modules/candle/infra/routes/Candle.routes'

const routes = Router()

routes.use('/candle', candleRoutes)

export default routes
