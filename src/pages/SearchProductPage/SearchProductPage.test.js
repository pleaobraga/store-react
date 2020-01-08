jest.mock('../../utils/utils')
import 'babel-polyfill'
import React from 'react'
import { mount } from 'enzyme'
import SearchProductPage from './SearchProductPage'

const setup = () => {
  const contentPage = mount(<SearchProductPage />)

  return contentPage
}

describe('Content Page', () => {
  // it('should render loading correctly', () => {
  //   const contentPage = setup()

  //   expect(contentPage).toMatchSnapshot()
  // })

  it('should render content correctly', () => {
    const newState = {
      content: { text: 'text', title: 'title' }
    }

    const contentPage = setup(newState)

    expect(contentPage).toMatchSnapshot()
  })

  // it('should render error correctly', () => {
  //   const newState = {
  //     errorContent: true
  //   }

  //   const contentPage = setup(newState)

  //   expect(contentPage).toMatchSnapshot()
  // })
})
