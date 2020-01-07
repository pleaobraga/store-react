import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, number } from '@storybook/addon-knobs'
import { Product } from './ListItem'

export default storiesOf('Components | Product', module).add(
  'default',
  () => (
    <Product
      name={text('Name', 'Name')}
      quantity={number('Quantity', 2)}
      price={text('Price', '20,10')}
      currency={text('Currency', 'R$')}
    />
  ),
  { info: { inline: true, header: false } }
)
