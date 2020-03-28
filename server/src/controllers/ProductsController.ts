import { Context } from 'koa'
import BaseController from '~/controllers/BaseController'
import ProductRepository from '~/repositories/ProductRepository'

class ProductsController extends BaseController<ProductsController> {
  constructor() {
    const repository = new ProductRepository()
    super(repository)
  }

  async index(ctx: Context): Promise<void> {
    const products = await this.repository.list()
    ctx.body = { products }
  }

  async show(ctx: Context): Promise<void> {
    let product
    try {
      product = await this.repository.find(ctx.params.id)
    } catch (error) {
      BaseController.handleError(error)
    }
    ctx.body = { product }
  }

  async create(ctx: Context): Promise<void> {
    const productData = JSON.parse(ctx.request.body.product)
    let product
    try {
      product = await this.repository.create(productData)
    } catch (error) {
      BaseController.handleError(error)
    }
    ctx.body = { product }
  }

  async update(ctx: Context): Promise<void> {
    const { id } = ctx.params
    const productData = JSON.parse(ctx.request.body.product)
    let product
    try {
      product = await this.repository.update(id, productData)
    } catch (error) {
      BaseController.handleError(error)
    }
    ctx.body = { product }
  }

  async destroy(ctx: Context): Promise<void> {
    const { id } = ctx.params
    let product
    try {
      product = await this.repository.destroy(id)
    } catch (error) {
      BaseController.handleError(error)
    }
    ctx.body = { product }
  }
}

export default ProductsController
