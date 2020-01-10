import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { putProduct, postProduct } from '../../reducers/ProductReducer'

import { formatReal } from '../../utils/utils'
import Product from '../Product'
import Loading from '../Loading'

import './EditProduct.scss'

export const EditProduct = ({ currentProduct, isEditing, storeName }) => {
  const dispatch = useDispatch()
  const pageContent = useSelector(state => state.product)
  const [product, setProduct] = React.useState({})
  const history = useHistory()

  React.useEffect(() => {
    setProduct({ ...currentProduct })
  }, [])

  const onChange = event => {
    if (event.target.name === 'price') {
      const price = formatReal(event.target.value)

      setProduct({ ...product, price })
    } else {
      setProduct({ ...product, [event.target.name]: event.target.value })
    }
  }

  const addErrorClass = className => {
    document
      .getElementsByClassName(className)[0]
      .parentElement.classList.add('error')
  }

  const removeErrorClass = () => {
    const allErrorsElements = document.querySelectorAll('.error')

    allErrorsElements.forEach(element => {
      element.classList.remove('error')
    })
  }

  const isFormValid = () => {
    let formValid = true

    if (!product.name || product.name.length <= 0) {
      addErrorClass('name')
      formValid = false
    }

    if (
      !product.quantity ||
      product.quantity.length <= 0 ||
      product.quantity < 0
    ) {
      addErrorClass('quantity')
      formValid = false
    }

    if (!product.currency || product.currency.length <= 0) {
      addErrorClass('currency')
      formValid = false
    }

    if (!product.price || product.price.length <= 0) {
      addErrorClass('price')
      formValid = false
    }

    return formValid
  }

  const save = event => {
    event.preventDefault()

    if (isFormValid()) {
      removeErrorClass()

      if (isEditing) {
        dispatch(putProduct(product))
      } else {
        dispatch(postProduct({ product, storeName }))
      }
    }
  }

  const cancel = event => {
    event.preventDefault()

    history.push(`/${storeName}`)
  }

  return (
    <form className="edit-product">
      <div className="edit-product__message">
        {pageContent.registeredError && (
          <p className="edit-product__message--error">
            This Product is already registered
          </p>
        )}
        {pageContent.updateProduct && (
          <p className="edit-product__message--saved">
            This Product was updated successfully
          </p>
        )}
      </div>

      <div className="edit-product__values">
        <div className="input-group">
          <label>Name</label>
          <input
            className="name"
            name="name"
            value={product.name}
            onChange={onChange}
            placeholder="Type the product name"
            required
          />
        </div>
        <div className="input-group">
          <label>Quantity</label>
          <input
            className="quantity"
            name="quantity"
            value={product.quantity}
            onChange={onChange}
            type="number"
            placeholder="qty"
            required
          />
        </div>
        <div className="input-group">
          <label>Currency</label>
          <input
            className="currency"
            name="currency"
            value={product.currency}
            onChange={onChange}
            placeholder="$"
            required
          />
        </div>

        <div className="input-group">
          <label>Price</label>
          <input
            className="price"
            name="price"
            value={product.price}
            onChange={onChange}
            required
          />
        </div>
      </div>
      <div className="edit-product__actions">
        <button className="save" type="submit" onClick={save}>
          {pageContent.loadingActions ? <Loading color="#fff" /> : 'Save'}
        </button>
        <button className="cancel" onClick={cancel}>
          Cancel
        </button>
      </div>
    </form>
  )
}

EditProduct.propTypes = {
  currentProduct: PropTypes.shape(Product.Prototype),
  isEditing: PropTypes.bool.isRequired,
  storeName: PropTypes.string
}

export default EditProduct
