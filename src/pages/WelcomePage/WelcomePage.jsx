import React from 'react'
import Product from '../../components/Product'
import './WelcomePage.scss'

const WelcomePage = () => {
  return (
    <div className="page page-welcome">
      <Product name="Name" quantity={2} price="20,10" currency="R$" />
    </div>
  )
}

export default WelcomePage
