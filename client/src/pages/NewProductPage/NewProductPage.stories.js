import React from 'react'
import { storiesOf } from '@storybook/react'
import NewProductPage from './NewProductPage'

export default storiesOf('Pages | WelcomePage', module).add(
  'default',
  () => <NewProductPage />,
  { info: { inline: true, header: false } }
)
