import React from 'react'
import { shallow } from 'enzyme'
import Filter from './Filter'

describe('Filter', () => {
  const filter = shallow(<Filter value="test" onChange={() => {}} />)

  it('render proprely', () => {
    expect(filter).toMatchSnapshot()
  })
})
