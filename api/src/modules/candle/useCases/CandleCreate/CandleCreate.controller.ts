import { Request, Response } from 'express'
import { container } from 'tsyringe'

import CandleCreateService from './CandleCreate.service'

export default class CandleCreateController {
  async handle (request: Request, response: Response): Promise<Response> {
    const service = container.resolve(CandleCreateService)

    const serviceResponse = await service.execute()

    return response.json(serviceResponse)
  }
}
