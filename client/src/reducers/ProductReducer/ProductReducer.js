import * as constant from '../../utils/constants'

const initialState = {
  productsList: null,
  product: null,
  loadingContent: false,
  errorContent: false,
  registeredError: false,
  updateProduct: false,
  loadingActions: false
}

const content = (state = initialState, action) => {
  switch (action.type) {
    case constant.GET_ALL_PRODUCTS:
    case constant.GET_PRODUCT:
      return { ...state, loadingContent: true }

    case constant.PUT_PRODUCT:
    case constant.POST_PRODUCT:
    case constant.DELETE_PRODUCT:
      return { ...state, loadingActions: true, updateProduct: false }

    case constant.GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        productsList: action.productsList,
        loadingContent: false,
        errorContent: false,
        registeredError: false
      }

    case constant.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.product,
        loadingContent: false,
        errorContent: false,
        registeredError: false
      }

    case constant.PUT_PRODUCT_SUCCESS:
    case constant.POST_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.product,
        loadingActions: false,
        errorContent: false,
        updateProduct: true
      }

    case constant.DELETE_PRODUCT_SUCCESS: {
      const newProductList = state.productsList.Products.filter(
        item => item.id !== action.id
      )

      return {
        ...state,
        productsList: { ...state.productsList, Products: newProductList },
        loadingActions: false,
        errorContent: false
      }
    }

    case constant.GET_PRODUCT_ERROR:
    case constant.PUT_PRODUCT_ERROR:
    case constant.DELETE_PRODUCT_ERROR:
      return {
        ...state,
        product: action.error,
        loadingContent: false,
        errorContent: true,
        updateProduct: false,
        loadingActions: false
      }

    case constant.GET_ALL_PRODUCTS_ERROR:
      return {
        ...state,
        loadingContent: false,
        errorContent: true
      }

    case constant.POST_PRODUCT_ERROR: {
      let errorContent = false
      let registeredError = false

      if (action.error.response.status === 409) {
        registeredError = true
      } else {
        errorContent = true
      }

      return {
        ...state,
        loadingContent: false,
        errorContent,
        registeredError,
        updateProduct: false,
        loadingActions: false
      }
    }

    default:
      return state
  }
}

export default content
