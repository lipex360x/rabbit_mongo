import { Request, Response } from 'express'
import { container } from 'tsyringe'

import CrudReadService from './CrudRead.service'

export default class CrudReadController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const service = container.resolve(CrudReadService)

    const serviceResponse = await service.execute({ id })

    return response.json(serviceResponse)
  }
}
