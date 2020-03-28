import {
  GraphQLString,
  GraphQLFloat,
  GraphQLNonNull,
  GraphQLID,
} from 'graphql'
import ProductRepository from '~/repositories/ProductRepository'
import productType from '~/graphql/types/product'

const productRepository = new ProductRepository()

export default {
  type: productType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: GraphQLString,
    },
    price: {
      type: GraphQLFloat,
    },
  },
  resolve: async (parent, args) => {
    const { id, ...productParams } = args
    return productRepository.update(id, productParams)
  },
}
