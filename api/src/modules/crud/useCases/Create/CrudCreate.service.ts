import ICrudProps, { CreateProps } from '@modules/crud/repositories/interfaces/ICrud.interface'
import { inject, injectable } from 'tsyringe'

@injectable()
export default class CrudCreateService {
  constructor (
    @inject('CrudRepository')
    private repository: ICrudProps
  ) {}

  async execute ({ currency, finalDateTime, open, close, high, low, color }:CreateProps): Promise<CreateProps> {
    return this.repository.create({ currency, finalDateTime, open, close, high, low, color })
  }
}
