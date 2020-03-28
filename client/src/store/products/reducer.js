import * as actionTypes from './action-types'

export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_LIST:
      return state
    case actionTypes.CREATE_SUCCESS:
      return state.concat([action.payload])
    default:
      return state
  }
}
