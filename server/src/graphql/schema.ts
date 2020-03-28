import { GraphQLSchema } from 'graphql'
import queryType from './types/query'
import mutationType from './types/mutation'

export default new GraphQLSchema({ query: queryType, mutation: mutationType })
