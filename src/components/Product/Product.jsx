import React from 'react'
import PropTypes from 'prop-types'
import ListItem from '../ListItem'
import './Product.scss'

export const Product = ({ name, quantity, price, currency }) => {
  return (
    <ListItem
      className="product"
      details={[
        <p key={name} className="product__name">
          {name}
        </p>,
        <p key={name} className="product__quantity">
          {quantity}
        </p>,
        <p key={price} className="product__price">
          <span>{currency}</span> {price}
        </p>
      ]}
      actions={['delete', 'edit']}
    />
  )
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired
}

export default React.memo(Product)
