import React from 'react'
import EditProduct from '../../components/EditProduct'
import { useParams } from 'react-router'
import './EditProductPage.scss'

const WelcomePage = () => {
  const { id } = useParams()

  debugger

  return (
    <div className="page page-edit-product">
      <h1 className="page-edit-product__title">{`${
        id === 'new' ? 'Create new' : 'Edit'
      } Product`}</h1>
      <EditProduct name="Name" quantity={2} price="20,10" currency="R$" />
    </div>
  )
}

export default WelcomePage
