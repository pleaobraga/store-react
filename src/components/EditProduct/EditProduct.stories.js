import React from 'react'
import { storiesOf } from '@storybook/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { EditProduct } from './EditProduct'

const currentProduct = {
  name: 'Name',
  quantity: 2,
  price: '20,10',
  currency: 'R$'
}

export default storiesOf('Components | EditProduct', module).add(
  'default',
  () => (
    <Router>
      <EditProduct currentProduct={currentProduct} />
    </Router>
  ),
  {
    info: {
      inline: true,
      header: false,
      propTables: [EditProduct]
    }
  }
)
