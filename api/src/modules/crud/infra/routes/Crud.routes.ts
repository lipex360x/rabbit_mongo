import { Router } from 'express'

import CrudReadController from '@modules/crud/useCases/FindById/CrudRead.controller'
import CrudCreateController from '@modules/crud/useCases/Create/CrudCreate.controller'

const crudRoutes = Router()

const crudReadController = new CrudReadController()
const crudCreateController = new CrudCreateController()

crudRoutes.get('/findById/:id', crudReadController.handle)
crudRoutes.post('/create', crudCreateController.handle)

export default crudRoutes
