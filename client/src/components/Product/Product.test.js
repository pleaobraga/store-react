import React from 'react'
import { shallow } from 'enzyme'

import Product from './Product'

describe('Product', () => {
  const product = shallow(
    <Product name="Name" quantity={2} price="20,10" currency="R$" />
  )

  it('render proprely', () => {
    expect(product).toMatchSnapshot()
  })
})
