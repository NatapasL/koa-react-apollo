import BaseRepository from './BaseRepository'
import Product from '~/models/Product'

class ProductRepository extends BaseRepository {
  constructor() {
    super(Product)
  }
}

export default ProductRepository
