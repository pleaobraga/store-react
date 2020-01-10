import React from 'react'
import { mount } from 'enzyme'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import EditProduct from './EditProduct'
import {
  mockStore,
  initialStateRootReducer,
  product
} from '../../reducers/__mocks__/reduxMock'

const setup = ({ isEditing }) => {
  const store = mockStore(initialStateRootReducer)

  const contentPage = mount(
    <Provider store={store}>
      <Router>
        <EditProduct
          currentProduct={product}
          storeName="0"
          isEditing={isEditing}
        />
      </Router>
    </Provider>
  )

  return contentPage
}

describe('Product', () => {
  describe('Edit', () => {
    const product = setup({ isEditing: true })
    it('Should render proprely', () => {
      expect(product).toMatchSnapshot()
    })
  })

  describe('New Product', () => {
    const product = setup({ isEditing: false })
    it('should render proprely', () => {
      expect(product).toMatchSnapshot()
    })
  })
})
