import React from 'react'
import { storiesOf } from '@storybook/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ProductList } from './ProductList'
import { listItems } from '../../reducers/__mocks__/reduxMock'

export default storiesOf('Components | ProductList', module)
  .add(
    'default',
    () => (
      <Router>
        <ProductList listItems={listItems} />
      </Router>
    ),
    { info: { inline: true, header: false, propTables: [ProductList] } }
  )
  .add(
    'empty List',
    () => (
      <Router>
        <ProductList listItems={[]} />
      </Router>
    ),
    { info: { inline: true, header: false, propTables: [ProductList] } }
  )
