import { Request, Response } from 'express'
import { container } from 'tsyringe'

import CrudCreateService from './CrudCreate.service'

export default class CrudCreateController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { content } = request.body

    const service = container.resolve(CrudCreateService)

    const serviceResponse = await service.execute({ content })

    return response.json(serviceResponse)
  }
}
