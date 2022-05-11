import ICrudProps, { CreateProps } from '@modules/crud/repositories/interfaces/ICrud.interface'
import { inject, injectable } from 'tsyringe'

@injectable()
export default class CrudCreateService {
  constructor (
    @inject('CrudRepository')
    private repository: ICrudProps
  ) {}

  async execute ({ content }:CreateProps): Promise<CreateProps> {
    return this.repository.create({ content })
  }
}
