import React from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { PRODUCT_LIST } from '../../../graphql/queries/product'
import { DELETE_PRODUCT } from '../../../graphql/mutations/product'
import List from './List'

const ProductList = () => {
  const { data } = useQuery(PRODUCT_LIST)
  const [deleteProduct] = useMutation(
    DELETE_PRODUCT,
    {
      refetchQueries: [
        { query: PRODUCT_LIST },
      ],
      update: (cache, { data: { deleteProduct } }) => {
        const data = cache.readQuery({ query: PRODUCT_LIST })
        data.products.push(deleteProduct)
        cache.writeQuery({ query: PRODUCT_LIST, data })
      },
    }
  )
  const products = data ? data.products : []

  const handleDelete = (id) => {
    deleteProduct({ variables: { id } })
  }

  return <List products={products} handleDelete={handleDelete} />
}

export default ProductList
