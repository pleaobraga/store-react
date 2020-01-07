import React from 'react'
import PropTypes from 'prop-types'
import ListItem from '../ListItem'
import { Link } from 'react-router-dom'
import './Product.scss'

export const Product = ({ id, name, quantity, price, currency }) => {
  return (
    <ListItem
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
      actions={
        <>
          <i key="delete" className="material-icons">
            delete
          </i>
          <Link key="edit" to={`/${id}`}>
            <i className="material-icons">edit</i>
          </Link>
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
  currency: PropTypes.string.isRequired
}

export default React.memo(Product)
