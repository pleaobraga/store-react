import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, number } from '@storybook/addon-knobs'
import { List } from './List'

export default storiesOf('Components | List', module).add(
  'default',
  () => (
    <List
      name={text('Name', 'Name')}
      quantity={number('Quantity', 2)}
      price={text('Price', '20,10')}
      currency={text('Currency', 'R$')}
    />
  ),
  { info: { inline: true, header: false } }
)
