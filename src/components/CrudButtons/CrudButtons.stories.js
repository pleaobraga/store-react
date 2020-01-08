import React from 'react'
import { storiesOf } from '@storybook/react'
import { CrudButtons } from './CrudButtons'

export default storiesOf('Components | CrudButtons', module).add(
  'default',
  () => (
    <CrudButtons
      create={{ onClick: () => {} }}
      edit={{ onClick: () => {} }}
      del={{ onClick: () => {} }}
    />
  ),
  {
    info: {
      inline: true,
      header: false,
      propTables: [CrudButtons]
    }
  }
)
