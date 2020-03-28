import { Model } from 'sequelize-typescript'
import RepositoryException from '~/exceptions/RepositoryException'

abstract class BaseRepository {
  protected readonly model: any

  constructor(model: any) {
    this.model = model
  }

  async list(): Promise<Model[]> {
    return this.model.findAll()
  }

  async find(id: number): Promise<Model> {
    const item = await this.model.findOne({ where: { id } })
    if (item) return item

    const error = new RepositoryException(`${this.model.name} not found`)
    error.name = 'NotFoundRepositoryException'
    throw error
  }

  async create(params: object): Promise<Model> {
    return this.model.create(params)
  }

  async update(id: number, params: JSON): Promise<Model> {
    const item = await this.find(id)
    return item.update(params)
  }

  async destroy(id: number): Promise<Model> {
    const item = await this.find(id)
    await item.destroy()
    return item
  }
}

export default BaseRepository
