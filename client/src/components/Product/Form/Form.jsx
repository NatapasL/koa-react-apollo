import React from 'react'
import PropTypes from 'prop-types'

const ProductForm = ({
  id,
  name,
  price,
  handleChange,
  handleSubmit,
}) => (
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      name="name"
      value={name}
      onChange={handleChange}
    />
    <input
      type="text"
      name="price"
      value={price}
      onChange={handleChange}
    />
    <button type="submit">
      {id ? 'Update' : 'Create'}
    </button>
  </form>
)

ProductForm.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

ProductForm.defaultProps = {
  id: undefined,
  name: '',
  price: '',
}

export default ProductForm
