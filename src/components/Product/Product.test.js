import React from 'react'
import { shallow } from 'enzyme'
import Product from './Product'

describe('Product', () => {
  const product = shallow(<Product title="Test" text="test" />)

  it('render proprely', () => {
    expect(product).toMatchSnapshot()
  })
})
