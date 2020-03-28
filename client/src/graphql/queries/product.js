import { gql } from 'apollo-boost'

export const PRODUCT_LIST = gql`
  {
    products {
      id
      name
    }
  }
`

export const PRODUCT_DETAIL = gql`
  query($id: ID!) {
    productById(id: $id) {
      id
      name
      price
    }
  }
`
