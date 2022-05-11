import { Router } from 'express'

import crudRoutes from '@modules/crud/infra/routes/Crud.routes'

const routes = Router()

routes.use('/crud', crudRoutes)

export default routes
