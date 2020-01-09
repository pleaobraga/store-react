import React from 'react'
import { shallow } from 'enzyme'
import NewProductPage from './NewProductPage'
import { BrowserRouter as Router } from 'react-router-dom'

describe('NewProductPage', () => {
  const editProductPage = shallow(
    <Router>
      <NewProductPage />
    </Router>
  )

  it('render proprely', () => {
    expect(editProductPage).toMatchSnapshot()
  })
})
