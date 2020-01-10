import React from 'react'
import { mount } from 'enzyme'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import {
  mockStore,
  initialStateReducer
} from '../../reducers/__mocks__/reduxMock'
import NewProductPage from './NewProductPage'

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
        <NewProductPage />
      </Router>
    </Provider>
  )

  return contentPage
}

describe('NewProductPage', () => {
  it('should render content page', () => {
    const editProductPage = setup({})
    expect(editProductPage).toMatchSnapshot()
  })

  it('should render error page', () => {
    const editProductPage = setup({ errorContent: true })
    expect(editProductPage).toMatchSnapshot()
  })
})
