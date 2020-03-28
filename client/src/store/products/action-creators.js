import * as actionTypes from './action-types'

export const fetchProduct = (payload) => (
  { type: actionTypes.FETCH_ONE, payload }
)

export const fetchProductSuccess = (payload) => (
  { type: actionTypes.FETCH_ONE_SUCCESS, payload }
)

export const fetchProducts = (payload) => (
  { type: actionTypes.FETCH_LIST, payload }
)

export const fetchProductsSuccess = (payload) => (
  { type: actionTypes.FETCH_LIST_SUCCESS, payload }
)

export const createProductSuccess = (payload) => (
  { type: actionTypes.CREATE_SUCCESS, payload }
)
