import { GraphQLObjectType } from 'graphql'
import productListResolver from '~/graphql/queries/product/list'
import productDetailResolver from '~/graphql/queries/product/detail'

export default new GraphQLObjectType({
  name: 'Query',
  fields: {
    products: productListResolver,
    productById: productDetailResolver,
  },
})
