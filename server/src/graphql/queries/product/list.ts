import { GraphQLList } from 'graphql'
import ProductRepository from '~/repositories/ProductRepository'
import productType from '~/graphql/types/product'

const productRepository = new ProductRepository()

export default {
  type: GraphQLList(productType),
  resolve: async () => (productRepository.list()),
}
