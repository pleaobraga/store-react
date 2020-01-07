import React from 'react'
import { shallow } from 'enzyme'
import List from './List'

describe('List', () => {
  const listItem = shallow(<List />)

  it('render proprely', () => {
    expect(listItem).toMatchSnapshot()
  })
})
