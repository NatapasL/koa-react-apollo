import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLFloat,
  GraphQLNonNull,
} from 'graphql'

export default new GraphQLObjectType({
  name: 'Product',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    price: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
    createdAt: {
      type: GraphQLString,
    },
    updatedAt: {
      type: GraphQLString,
    },
  },
})
