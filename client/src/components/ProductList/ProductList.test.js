import React from 'react'
import { shallow } from 'enzyme'
import ProductList from './ProductList'

describe('ProductList', () => {
  const listItem = shallow(<ProductList />)

  it('render proprely', () => {
    expect(listItem).toMatchSnapshot()
  })
})
