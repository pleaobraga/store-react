import React from 'react'
import { shallow } from 'enzyme'
import EditProductPage from './EditProductPage'
import { BrowserRouter as Router } from 'react-router-dom'

describe('welcomePage', () => {
  const editProductPage = shallow(
    <Router>
      <EditProductPage />
    </Router>
  )

  it('render proprely', () => {
    expect(editProductPage).toMatchSnapshot()
  })
})
