import React from 'react'
import PropTypes from 'prop-types'
import './Product.scss'

export const Product = ({ name, quantity, price, currency }) => {
  return (
    <div className="product">
      <div className="product-details">
        <p className="product__name">{name}</p>
        <p className="product__quantity">{quantity}</p>
        <p className="product__price">
          <span>{currency}</span> {price}
        </p>
      </div>
      <div className="product-actions">
        <i className="material-icons ">delete</i>
        <i className="material-icons ">edit</i>
      </div>
    </div>
  )
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired
}

export default React.memo(Product)
