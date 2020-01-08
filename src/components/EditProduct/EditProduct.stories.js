import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, number } from '@storybook/addon-knobs'
import { BrowserRouter as Router } from 'react-router-dom'
import { Product } from './EditProduct'

export default storiesOf('Components | Product', module).add(
  'default',
  () => (
    <Router>
      <Product
        name={text('Name', 'Name')}
        quantity={number('Quantity', 2)}
        price={text('Price', '20,10')}
        currency={text('Currency', 'R$')}
      />
    </Router>
  ),
  {
    info: {
      inline: true,
      header: false,
      propTables: [Product]
    }
  }
)
