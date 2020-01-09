/* eslint-disable react/prop-types */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../reducers/ProductReducer'
import { useParams } from 'react-router'

import Loading from '../../components/Loading'
import ErrorPage from '../ErrorPage'
import EditProduct from '../../components/EditProduct'

import './EditProductPage.scss'

const EditProductPage = () => {
  const dispatch = useDispatch()
  const pageContent = useSelector(state => state.product)
  const { id } = useParams()

  React.useEffect(() => {
    if (id !== 'new') dispatch(getProduct(id))
  }, [])

  const contentPage = ({ product, title }) => {
    return (
      <div className="page page-edit-product">
        <h1 className="page-edit-product__title">{title}</h1>
        <EditProduct {...product} />
      </div>
    )
  }

  if (id === 'new') {
    return contentPage({ product: {}, title: 'Create new Product' })
  }

  const { errorContent, product } = pageContent

  return errorContent ? (
    <ErrorPage />
  ) : product ? (
    contentPage({ product, title: 'Edit Product' })
  ) : (
    <Loading />
  )
}

export default EditProductPage
