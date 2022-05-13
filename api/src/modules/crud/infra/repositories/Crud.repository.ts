import Crud, { CrudProps } from '@modules/crud/infra/schemas/Crud.schema'
import ICrud, { CreateProps, FindQtdeProps } from '@modules/crud/repositories/interfaces/ICrud.interface'

export default class CrudRepository implements ICrud {
  async create ({ currency, finalDateTime, open, close, high, low, color }: CreateProps): Promise<CrudProps> {
    return Crud.create({ currency, finalDateTime, open, close, high, low, color })
  }

  async find ({ quantity }: FindQtdeProps): Promise<CrudProps[]> {
    const qtde = quantity > 0 ? quantity : 10

    const lastValues: CrudProps[] =
            await Crud
              .find()
              .sort({ _id: -1 })
              .limit(qtde)

    return lastValues
  }
}
