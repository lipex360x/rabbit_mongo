import { Router } from 'express'

import FindLastCandlesController from '@modules/crud/useCases/FindLastCandles/FindLastCandles.controller'
import CrudCreateController from '@modules/crud/useCases/Create/CrudCreate.controller'

const crudRoutes = Router()

const findLastCandlesController = new FindLastCandlesController()
const crudCreateController = new CrudCreateController()

crudRoutes.get('/find/:quantity', findLastCandlesController.handle)
crudRoutes.post('/create', crudCreateController.handle)

export default crudRoutes
