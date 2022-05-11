import { CrudProps } from '@modules/crud/infra/schemas/Crud.schema'

import ICrudProps, { FindByIdProps } from '@modules/crud/repositories/interfaces/ICrud.interface'
import { inject, injectable } from 'tsyringe'

@injectable()
export default class FindByIdService {
  constructor (
    @inject('CrudRepository')
    private repository: ICrudProps
  ) {}

  async execute ({ id }:FindByIdProps): Promise<CrudProps> {
    return this.repository.findById({ id })
  }
}
