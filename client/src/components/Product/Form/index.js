import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { graphql } from '@apollo/react-hoc'
import { compose } from 'recompose'
import { PRODUCT_DETAIL, PRODUCT_LIST } from '../../../graphql/queries/product'
import { CREATE_PRODUCT, UPDATE_PRODUCT } from '../../../graphql/mutations/product'
import Form from './Form'

class ProductForm extends React.Component {
  constructor() {
    super()
    this.state = { product: { name: '', price: '' } }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    const { product } = this.props

    if (product) {
      this.setState({ product })
    }
  }

  // eslint-disable-next-line react/no-deprecated
  componentWillReceiveProps(nextProps) {
    const { product } = this.props
    const { product: newProduct } = nextProps
    if (!newProduct || product === newProduct) return

    this.setState({ product: newProduct })
  }

  handleChange(event) {
    const { product } = this.state
    const { name, value } = event.target
    this.setState({
      product: {
        ...product,
        [name]: value,
      },
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    const { product: { name, price } } = this.state
    const { id, createProduct, updateProduct } = this.props

    const variables = {
      name,
      price: Number(price),
    }

    if (id) {
      variables.id = id
      updateProduct({ variables })
    } else {
      createProduct({ variables })
    }
  }

  render() {
    const { id } = this.props
    const { product: { name, price } } = this.state
    return (
      <Form
        id={id}
        name={name}
        price={price}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

ProductForm.propTypes = {
  id: PropTypes.string,
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
  }),
  createProduct: PropTypes.func.isRequired,
  updateProduct: PropTypes.func.isRequired,
}

ProductForm.defaultProps = {
  id: undefined,
  product: {},
}

export default compose(
  withRouter,
  graphql(PRODUCT_DETAIL, {
    options: ({ id }) => ({
      variables: {
        id,
      },
    }),
    props: ({ data: { productById } }) => ({
      product: productById,
    }),
    skip: ({ id }) => !id,
  }),
  graphql(CREATE_PRODUCT, {
    name: 'createProduct',
    options: ({ history }) => ({
      onCompleted: () => history.push('/'),
      update: (cache, { data: { createProduct } }) => {
        const data = cache.readQuery({ query: PRODUCT_LIST })
        data.products.push(createProduct)
        cache.writeQuery({ query: PRODUCT_LIST, data })
      },
    }),
  }),
  graphql(UPDATE_PRODUCT, {
    name: 'updateProduct',
    options: ({ history }) => ({
      onCompleted: () => history.push('/'),
    }),
  })
)(ProductForm)
