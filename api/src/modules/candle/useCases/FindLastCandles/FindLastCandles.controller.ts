import { Request, Response } from 'express'
import { container } from 'tsyringe'

import CrudReadService from './FindLastCandles.service'

export default class FindLastCandles {
  async handle (request: Request, response: Response): Promise<Response> {
    const { quantity } = request.params
    const qtde = parseInt(quantity)

    const service = container.resolve(CrudReadService)

    const serviceResponse = await service.execute({ quantity: qtde })

    return response.json(serviceResponse)
  }
}
