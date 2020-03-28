import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ProductList = ({ products, handleDelete }) => (
  <ul>
    {products.map(({ id, name }) => (
      <li key={id}>
        id:
        {id}
        name:
        {name}
        <Link to={`/products/${id}/edit`}>
          <button type="button">Edit</button>
        </Link>
        <button
          type="button"
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
)

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleDelete: PropTypes.func.isRequired,
}

export default ProductList
