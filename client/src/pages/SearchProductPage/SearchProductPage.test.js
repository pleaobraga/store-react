import React from 'react'
import { mount } from 'enzyme'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import {
  mockStore,
  initialStateReducer,
  listItems
} from '../../reducers/__mocks__/reduxMock'
import SearchProductPage from './SearchProductPage'

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
        <SearchProductPage />
      </Router>
    </Provider>
  )

  return contentPage
}

describe('SearchProductPage', () => {
  it('should render content page', () => {
    const editProductPage = setup({ productsList: listItems })
    expect(editProductPage).toMatchSnapshot()
  })

  it('should render error page', () => {
    const editProductPage = setup({ errorContent: true })
    expect(editProductPage).toMatchSnapshot()
  })
})
