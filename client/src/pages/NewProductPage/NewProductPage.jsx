/* eslint-disable react/prop-types */
import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

import ErrorPage from '../ErrorPage'
import EditProduct from '../../components/EditProduct'

import './NewProductPage.scss'

const NewProductPage = () => {
  const pageContent = useSelector(state => state.product)
  const { dbId } = useParams()

  const contentPage = () => {
    return (
      <div className="page page-edit-product">
        <h1 className="page-edit-product__title">Create new Product</h1>
        <EditProduct
          currentProduct={{ ProductListId: dbId }}
          isEditing={false}
        />
      </div>
    )
  }

  const { errorContent } = pageContent

  return errorContent ? <ErrorPage /> : contentPage()
}

export default NewProductPage
