import React from 'react'
import { shallow } from 'enzyme'
import CrudButtons from './CrudButtons'

describe('CrudButtons', () => {
  const crudButtons = shallow(
    <CrudButtons
      create={{ onClick: () => {} }}
      edit={{ onClick: () => {} }}
      del={{ onClick: () => {} }}
    />
  )

  it('render proprely', () => {
    expect(crudButtons).toMatchSnapshot()
  })
})
