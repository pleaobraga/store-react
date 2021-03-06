import React from 'react'
import PropTypes from 'prop-types'
import List from '../List'
import Product from '../Product'

import './ProductList.scss'

export const ProductList = ({ listItems, onChange }) => {
  const renderItemList = () => {
    if (listItems.length > 0) {
      return (
        <>
          {listItems.map(item => (
            <Product
              id={item.id}
              onChange={onChange}
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              price={item.price}
              currency={item.currency}
            />
          ))}
        </>
      )
    }

    return <p className="empty-message">Empty Product List</p>
  }

  return (
    <List
      className="product-list"
      title="Products"
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
      listItems={renderItemList()}
    />
  )
}

ProductList.defaultProps = {
  listItems: []
}

ProductList.propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.shape(Product.propTypes)),
  onChange: PropTypes.func
}

export default React.memo(ProductList)
