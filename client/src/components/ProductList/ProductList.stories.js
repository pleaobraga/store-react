import React from 'react'
import { storiesOf } from '@storybook/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ProductList } from './ProductList'

const listItems = [
  {
    id: '0',
    name: 'Product 1',
    quantity: 1,
    price: '10,00',
    currency: 'R$'
  },
  {
    id: '1',
    name: 'Product 2',
    quantity: 2,
    price: '20,00',
    currency: 'R$'
  },
  {
    id: '2',
    name: 'Product 3',
    quantity: 3,
    price: '30,00',
    currency: 'R$'
  },
  {
    id: '3',
    name: 'Product 4',
    quantity: 4,
    price: '40,00',
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
  { info: { inline: true, header: false, propTables: [ProductList] } }
)
