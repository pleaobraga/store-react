import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk]

export const mockStore = configureStore(middlewares)

export const initialStateReducer = {
  productsList: null,
  product: null,
  loadingContent: false,
  errorContent: false,
  registeredError: false,
  updateProduct: false,
  loadingActions: false
}

export const initialStateRootReducer = {
  product: {
    productsList: null,
    product: null,
    loadingContent: false,
    errorContent: false,
    registeredError: false,
    updateProduct: false,
    loadingActions: false
  }
}

export const product = {
  name: 'Name',
  quantity: 2,
  price: '20,10',
  currency: 'R$'
}

export const listItems = [
  {
    id: '0',
    name: 'Product 1',
    quantity: 1,
    price: '10,00',
    currency: 'R$'
  },
  {
    id: '1',
    name: 'Product 2',
    quantity: 2,
    price: '20,00',
    currency: 'R$'
  },
  {
    id: '2',
    name: 'Product 3',
    quantity: 3,
    price: '30,00',
    currency: 'R$'
  },
  {
    id: '3',
    name: 'Product 4',
    quantity: 4,
    price: '40,00',
    currency: 'R$'
  }
]
