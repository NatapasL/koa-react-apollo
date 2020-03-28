import { GraphQLString, GraphQLFloat, GraphQLNonNull } from 'graphql'
import ProductRepository from '~/repositories/ProductRepository'
import productType from '~/graphql/types/product'

const productRepository = new ProductRepository()

export default {
  type: productType,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    price: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
  },
  resolve: async (parent, args) => productRepository.create(args),
}
