import React from 'react'
import { storiesOf } from '@storybook/react'
import { BrowserRouter as Router } from 'react-router-dom'
import ProductList from './ProductList'

const listItems = [
  {
    id: '0',
    name: 'Name',
    quantity: '1',
    price: '10,00',
    currency: 'R$'
  }
]

export default storiesOf('Components | ProductList', module).add(
  'default',
  () => (
    <Router>
      <ProductList listItems={listItems} />
    </Router>
  ),
  { info: { inline: true, header: false } }
)
