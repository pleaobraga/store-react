import * as constant from '../../utils/constants'
import axios from 'axios'

export const getAllProductsStart = () => ({
  type: constant.GET_ALL_PRODUCTS
})

export const getAllProductsSuccess = productsList => ({
  type: constant.GET_ALL_PRODUCTS_SUCCESS,
  productsList
})

export const getAllProductsError = error => ({
  type: constant.GET_ALL_PRODUCTS_ERROR,
  error
})

export const getAllProducts = (storeName = 'store') => dispatch => {
  dispatch(getAllProductsStart())

  return axios
    .get(`${constant.API_PRODUCT_URL}/productList/${storeName}`)
    .then(response => dispatch(getAllProductsSuccess(response.data)))
    .catch(error => getAllProductsError(error))
}

const initialState = {
  productsList: null,
  product: null,
  loadingContent: false,
  errorContent: false
}

const content = (state = initialState, action) => {
  switch (action.type) {
    case constant.GET_ALL_PRODUCTS:
    case constant.GET_PRODUCT:
      return { ...state, loadingContent: true }

    case constant.GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        productsList: action.productsList,
        loadingContent: false,
        errorContent: false
      }

    case constant.GET_PRODUCT_ERROR:
      return {
        ...state,
        product: action.error,
        loadingContent: false,
        errorContent: true
      }

    case constant.GET_ALL_PRODUCTS_ERROR:
      return {
        ...state,
        productsList: action.error,
        loadingContent: false,
        errorContent: true
      }

    default:
      return state
  }
}

export default content
