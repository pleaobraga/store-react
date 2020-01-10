import React from 'react'
import { storiesOf } from '@storybook/react'
import { BrowserRouter as Router } from 'react-router-dom'
import ProviderWrapper from '../../../.storybook/provider'
import store from '../../../.storybook/configureStore'

import {
  initialStateRootReducer,
  product
} from '../../reducers/__mocks__/reduxMock'
import { EditProduct } from './EditProduct'

const newStore = store(initialStateRootReducer)

const withProvider = story => (
  <ProviderWrapper store={newStore}>{story()}</ProviderWrapper>
)

export default storiesOf('Components | EditProduct', module)
  .addDecorator(withProvider)
  .add(
    'default',
    () => (
      <Router>
        <EditProduct currentProduct={product} storeName="0" isEditing={true} />
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
