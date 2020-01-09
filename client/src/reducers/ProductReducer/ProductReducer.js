import * as constant from '../../utils/constants'

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

    case constant.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.product,
        loadingContent: false,
        errorContent: false
      }

    case constant.PUT_PRODUCT_SUCCESS:
    case constant.POST_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.product,
        loadingContent: false,
        errorContent: false
      }

    case constant.DELETE_PRODUCT_SUCCESS: {
      const newProductList = state.productsList.Products.filter(
        item => item.id !== action.id
      )

      return {
        ...state,
        productsList: { ...state.productsList, Products: newProductList },
        loadingContent: false,
        errorContent: false
      }
    }

    case constant.GET_PRODUCT_ERROR:
    case constant.PUT_PRODUCT_ERROR:
    case constant.POST_PRODUCT_ERROR:
      return {
        ...state,
        product: action.error,
        loadingContent: false,
        errorContent: true
      }

    case constant.GET_ALL_PRODUCTS_ERROR:
      return {
        ...state,
        loadingContent: false,
        errorContent: true
      }

    default:
      return state
  }
}

export default content
