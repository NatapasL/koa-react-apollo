import React from 'react'
import PropTypes from 'prop-types'
import ProductForm from '../../components/Product/Form'

const PagesPostsFrom = ({ match: { params: { id } } }) => (
  <ProductForm id={id} />
)

PagesPostsFrom.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
}

export default PagesPostsFrom
