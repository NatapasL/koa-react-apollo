import { GraphQLID, GraphQLNonNull } from 'graphql'
import ProductRepository from '~/repositories/ProductRepository'
import productType from '~/graphql/types/product'

const productRepository = new ProductRepository()

export default {
  type: productType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: async (parent, args) => productRepository.destroy(args.id),
}
