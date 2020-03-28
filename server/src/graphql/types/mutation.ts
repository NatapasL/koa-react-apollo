import { GraphQLObjectType } from 'graphql'
import createProductResolver from '~/graphql/mutations/product/create'
import updateProductResolver from '~/graphql/mutations/product/update'
import deleteProductResolver from '~/graphql/mutations/product/delete'

export default new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createProduct: createProductResolver,
    updateProduct: updateProductResolver,
    deleteProduct: deleteProductResolver,
  },
})
