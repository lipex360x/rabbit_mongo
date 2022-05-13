import { CrudProps } from '@modules/crud/infra/schemas/Crud.schema'

import ICrudProps, { FindQtdeProps } from '@modules/crud/repositories/interfaces/ICrud.interface'
import { inject, injectable } from 'tsyringe'

@injectable()
export default class FindLastCandlesService {
  constructor (
    @inject('CrudRepository')
    private repository: ICrudProps
  ) {}

  async execute ({ quantity }:FindQtdeProps): Promise<CrudProps[]> {
    return this.repository.find({ quantity })
  }
}
