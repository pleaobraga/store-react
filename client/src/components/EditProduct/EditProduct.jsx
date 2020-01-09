import React from 'react'
import PropTypes from 'prop-types'
import { formatReal } from '../../utils/utils'
import Product from '../Product'
import './EditProduct.scss'

export const EditProduct = ({ currentProduct }) => {
  const [product, setProduct] = React.useState({})

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

  const save = event => {
    event.preventDefault()
  }

  const cancel = event => {
    event.preventDefault()
  }

  return (
    <form className="edit-product">
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
        <button className="save" onClick={save}>
          Save
        </button>
        <button className="cancel" onClick={cancel}>
          Cancel
        </button>
      </div>
    </form>
  )
}

EditProduct.defaultProps = {
  currentProduct: {
    name: '',
    quantity: 1,
    price: '0,00',
    currency: 'R$'
  }
}

EditProduct.propTypes = {
  currentProduct: PropTypes.shape(Product.Prototype)
}

export default React.memo(EditProduct)