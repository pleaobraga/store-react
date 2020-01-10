import React from 'react'
import { shallow } from 'enzyme'

import ProductList from './ProductList'
import { listItems } from '../../reducers/__mocks__/reduxMock'

describe('ProductList', () => {
  it('render properly', () => {
    const listItem = shallow(<ProductList listItems={listItems} />)
    expect(listItem).toMatchSnapshot()
  })

  it('render empty List', () => {
    const listItem = shallow(<ProductList listItems={[]} />)
    expect(listItem).toMatchSnapshot()
  })
})
