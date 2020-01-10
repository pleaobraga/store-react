import React from 'react'
import { mount } from 'enzyme'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import {
  mockStore,
  initialStateReducer,
  product
} from '../../reducers/__mocks__/reduxMock'
import EditProductPage from './EditProductPage'

const setup = ({ state }) => {
  const newState = {
    product: {
      ...initialStateReducer,
      ...state
    }
  }

  const store = mockStore(newState)

  const contentPage = mount(
    <Provider store={store}>
      <Router>
        <EditProductPage />
      </Router>
    </Provider>
  )

  return contentPage
}

describe('EditProductPage', () => {
  it('should render content page', () => {
    const editProductPage = setup({ product })
    expect(editProductPage).toMatchSnapshot()
  })

  it('should render error page', () => {
    const editProductPage = setup({ errorContent: true })
    expect(editProductPage).toMatchSnapshot()
  })

  it('should render loader ', () => {
    const editProductPage = setup({ loadingContent: true })
    expect(editProductPage).toMatchSnapshot()
  })
})
