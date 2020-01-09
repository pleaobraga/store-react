import React from 'react'
import PropTypes from 'prop-types'
import ListItem from '../ListItem'
import './Product.scss'

export const Product = ({ id, name, quantity, price, currency, onChange }) => {
  return (
    <ListItem
      id={id}
      onChange={onChange}
      className="product"
      details={
        <>
          <p key={name} className="product__name">
            {name}
          </p>
          <p key={quantity} className="product__quantity">
            {quantity}
          </p>
          <p key={price} className="product__price">
            <span>{currency}</span> {price}
          </p>
        </>
      }
    />
  )
}

Product.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  onChange: PropTypes.func
}

export default React.memo(Product)
