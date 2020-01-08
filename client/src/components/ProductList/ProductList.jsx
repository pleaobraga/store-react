import React from 'react'
import PropTypes from 'prop-types'
import List from '../List'
import Product from '../Product'

import './ProductList.scss'

export const ProductList = ({ listItems }) => {
  return (
    <List
      className="product-list"
      header={
        <>
          <p key="Name" className="header__name">
            Name
          </p>
          <p key="Name" className="header__quantity">
            Quantity
          </p>
          <p key="Name" className="header__quantity abbr">
            Qty
          </p>
          <p key="Name" className="header__price">
            Price
          </p>
        </>
      }
      listItems={
        <>
          {listItems.map(item => (
            <Product
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              price={item.price}
              currency={item.currency}
            />
          ))}
        </>
      }
    />
  )
}

ProductList.defaultProps = {
  listItems: []
}

ProductList.propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.shape(Product.propTypes))
}

export default React.memo(ProductList)
