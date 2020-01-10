import React from 'react'
import { shallow } from 'enzyme'
import ListItem from './ListItem'

describe('ListItem', () => {
  const listItem = shallow(
    <ListItem
      id="test"
      onChange={() => {}}
      disabled={false}
      selected={false}
      className="test"
      details={<div>details</div>}
      actions={<div>actions</div>}
    />
  )

  it('render proprely', () => {
    expect(listItem).toMatchSnapshot()
  })
})
