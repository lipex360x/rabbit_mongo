import Crud, { CrudProps } from '@modules/crud/infra/schemas/Crud.schema'
import ICrud, { CreateProps, FindQtdeProps, FindByIdProps, UpdateProps, DeleteProps } from '@modules/crud/repositories/interfaces/ICrud.interface'

export default class FakeCrudRepository implements ICrud {
  private repository: CrudProps[] = []

  async create ({ content }: CreateProps): Promise<CrudProps> {
    const crud = new Crud()

    Object.assign(crud, {
      ...crud,
      content,
      read: false
    })

    this.repository.push(crud)

    return crud
  }

  async find ({ quantity }: FindQtdeProps): Promise<CrudProps[]> {
    const n = quantity > 0 ? quantity : 10

    const response = []

    for (let index = 0; index < this.repository.length; index++) {
      if (n > index + 1) break
      response.push(this.repository[index])
    }

    return response
  }

  async findAll (): Promise<CrudProps[]> {
    return this.repository
  }

  async findById ({ id }: FindByIdProps): Promise<CrudProps> {
    return this.repository.find(data => data._id === id)
  }

  async update ({ content }: UpdateProps): Promise<CrudProps> {
    const getIndex = this.repository.findIndex(data => data._id === content._id)

    this.repository[getIndex] = content

    return content
  }

  async delete ({ id }: DeleteProps): Promise<CrudProps> {
    const data = this.repository.find(data => data._id === id)

    this.repository = this.repository.filter(data => data._id !== id)

    return data
  }
}
