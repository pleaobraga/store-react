import React from 'react'
import { storiesOf } from '@storybook/react'
import { Filter } from './Filter'

export default storiesOf('Components | Filter', module).add(
  'default',
  () => <Filter value={'Test'} onChange={() => {}} />,
  {
    info: {
      inline: true,
      header: false,
      propTables: [Filter]
    }
  }
)
