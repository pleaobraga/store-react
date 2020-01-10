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

export const getProductStart = () => ({
  type: constant.GET_PRODUCT
})

export const getProductSuccess = product => ({
  type: constant.GET_PRODUCT_SUCCESS,
  product
})

export const getProductError = error => ({
  type: constant.GET_PRODUCT_ERROR,
  error
})

export const putProductStart = () => ({
  type: constant.PUT_PRODUCT
})

export const putProductSuccess = product => ({
  type: constant.PUT_PRODUCT_SUCCESS,
  product
})

export const putProductError = error => ({
  type: constant.PUT_PRODUCT_ERROR,
  error
})

export const postProductStart = () => ({
  type: constant.POST_PRODUCT
})

export const postProductSuccess = product => ({
  type: constant.POST_PRODUCT_SUCCESS,
  product
})

export const postProductError = error => ({
  type: constant.POST_PRODUCT_ERROR,
  error
})

export const deleteProductStart = () => ({
  type: constant.DELETE_PRODUCT
})

export const deleteProductSuccess = id => ({
  type: constant.DELETE_PRODUCT_SUCCESS,
  id
})

export const deleteProductError = error => ({
  type: constant.DELETE_PRODUCT_ERROR,
  error
})

export const getAllProducts = (storeName = 'store') => dispatch => {
  dispatch(getAllProductsStart())

  return axios
    .get(`${constant.API_PRODUCT_URL}/productList/${storeName}`)
    .then(response => dispatch(getAllProductsSuccess(response.data)))
    .catch(error => dispatch(getAllProductsError(error)))
}

export const getProduct = id => dispatch => {
  dispatch(getProductStart())

  return axios
    .get(`${constant.API_PRODUCT_URL}/product/${id}`)
    .then(response => dispatch(getProductSuccess(response.data)))
    .catch(error => dispatch(getProductError(error)))
}

export const putProduct = product => dispatch => {
  dispatch(putProductStart())

  return axios
    .put(`${constant.API_PRODUCT_URL}/product`, product)
    .then(response => dispatch(putProductSuccess(response.data)))
    .catch(error => dispatch(putProductError(error)))
}

export const postProduct = ({ product, storeName }) => dispatch => {
  dispatch(postProductStart())

  return axios
    .post(`${constant.API_PRODUCT_URL}/product`, { ...product, storeName })
    .then(response => dispatch(postProductSuccess(response.data)))
    .catch(error => {
      dispatch(postProductError(error))
    })
}

export const deleteProduct = id => dispatch => {
  dispatch(deleteProductStart())

  return axios
    .delete(`${constant.API_PRODUCT_URL}/product/${id}`)
    .then(() => dispatch(deleteProductSuccess(id)))
    .catch(error => dispatch(deleteProductError(error)))
}
