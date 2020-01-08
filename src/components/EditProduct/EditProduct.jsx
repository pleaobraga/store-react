import React from 'react'
import PropTypes from 'prop-types'
import './EditProduct.scss'

export const Product = ({
  currentName,
  currentQuantity,
  currentPrice,
  currentCurrency
}) => {
  const [name, setName] = React.useState(currentName || '')
  const [quantity, setQuantity] = React.useState(currentQuantity || 0)
  const [currency, setCurrency] = React.useState(currentCurrency || 'R$')
  const [price, setPrice] = React.useState(currentPrice || '0,00')

  return (
    <div
      className="edit-product"
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
    >
      <input
        name="name"
        value={name}
        onChange={() => setName(event.target.value)}
      />

      <input
        name="quantity"
        value={quantity}
        onChange={() => setQuantity(event.target.value)}
      />

      <input
        name="currency"
        value={currency}
        onChange={() => setCurrency(event.target.value)}
      />

      <input
        name="price"
        value={price}
        onChange={() => setPrice(event.target.value)}
      />
    </div>
  )
}

Product.propTypes = {
  currentName: PropTypes.string,
  currentQuantity: PropTypes.number,
  currentPrice: PropTypes.string,
  currentCurrency: PropTypes.string
}

export default React.memo(Product)
