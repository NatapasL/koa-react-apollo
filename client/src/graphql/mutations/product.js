import { gql } from 'apollo-boost'

export const CREATE_PRODUCT = gql`
  mutation(
    $name: String!
    $price: Float!
  ) {
    createProduct(
      name: $name
      price: $price
    ) {
      id
      name
      price
    }
  }
`

export const UPDATE_PRODUCT = gql`
  mutation(
    $id: ID!
    $name: String!
    $price: Float!
  ) {
    updateProduct(
      id: $id
      name: $name
      price: $price
    ) {
      id
      name
    }
  }
`

export const DELETE_PRODUCT = gql`
  mutation($id: ID!) {
    deleteProduct(id: $id) {
      id
    }
  }
`
