import React from 'react'
import { shallow } from 'enzyme'
import EditProduct from './EditProduct'

describe('Product', () => {
  const product = shallow(
    <EditProduct name="Name" quantity={2} price="20,10" currency="R$" />
  )

  it('render proprely', () => {
    expect(product).toMatchSnapshot()
  })
})
