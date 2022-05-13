import Crud, { CrudProps } from '@modules/crud/infra/schemas/Crud.schema'
import ICrud, { CreateProps, FindQtdeProps } from '@modules/crud/repositories/interfaces/ICrud.interface'

export default class FakeCrudRepository implements ICrud {
  private repository: CrudProps[] = []

  async create ({ currency, finalDateTime, open, close, high, low, color }: CreateProps): Promise<CrudProps> {
    const crud = new Crud()

    Object.assign(crud, {
      ...crud,
      currency,
      finalDateTime,
      open,
      close,
      high,
      low,
      color
    })

    this.repository.push(crud)

    return crud
  }

  async find ({ quantity }: FindQtdeProps): Promise<CrudProps[]> {
    const qtde = quantity > 0 ? quantity : 10

    const response = []

    for (let i = 0; i < this.repository.length; i++) {
      if ((i + 1) > qtde) break

      response.push(this.repository[i])
    }

    return response
  }
}
