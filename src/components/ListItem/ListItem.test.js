import React from 'react'
import { shallow } from 'enzyme'
import ListItem from './ListItem'

describe('ListItem', () => {
  const listItem = shallow(<ListItem />)

  it('render proprely', () => {
    expect(listItem).toMatchSnapshot()
  })
})
