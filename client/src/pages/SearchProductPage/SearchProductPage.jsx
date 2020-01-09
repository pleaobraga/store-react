import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../reducers/ProductReducer'
import { useHistory } from 'react-router-dom'

import Loading from '../../components/Loading'
import ErrorPage from '../ErrorPage'
import Filter from '../../components/Filter'
import CrudButtons from '../../components/CrudButtons'
import ProductList from '../../components/ProductList'

import './SearchProductPage.scss'

const SearchProductPage = () => {
  const dispatch = useDispatch()
  const pageContent = useSelector(state => state.product)
  const [search, setSearch] = React.useState('')
  const [filteredItems, setFilteredItems] = React.useState([])
  const [productSelectedId, setProductSelectedId] = React.useState(null)
  const history = useHistory()

  React.useEffect(() => {
    dispatch(getAllProducts(0))
  }, [])

  React.useEffect(() => {
    if (pageContent.productsList && pageContent.productsList.Products)
      setFilteredItems(pageContent.productsList.Products)
  }, [pageContent])

  const filterProducts = event => {
    setSearch(event.target.value)

    const { productsList } = pageContent

    if (event.target.value !== '') {
      const reg = new RegExp(event.target.value, 'i')

      let filtered = productsList.Products.filter(item => reg.test(item.name))

      setFilteredItems(filtered)
    } else {
      setFilteredItems(productsList.Products)
    }
  }

  const onSelectItem = event => {
    const allProducts = document.querySelectorAll('input')
    if (event.target.checked === true) {
      setProductSelectedId(event.target.id)

      allProducts.forEach(product => {
        if (product.id !== event.target.id) {
          product.disabled = true
        }
      })
    } else {
      setProductSelectedId(null)
      allProducts.forEach(product => {
        product.disabled = false
      })
    }
  }

  const contentPage = () => {
    const { productsList } = pageContent

    return (
      <div className="page page-search-product">
        <h1 className="title">Products</h1>

        <div className="page-search-product__actions">
          <Filter
            value={search}
            onChange={filterProducts}
            placeholder="search for product by name"
          />
          <CrudButtons
            create={{
              onClick: () => {
                history.push(`/${productsList.id}/new`)
              }
            }}
            edit={{
              onClick: () => {
                history.push(`/${productsList.id}/${productSelectedId}`)
              },
              disabled: productSelectedId ? false : true
            }}
            del={{
              onClick: () => {},
              disabled: productSelectedId ? false : true
            }}
          />
        </div>

        <ProductList listItems={filteredItems} onChange={onSelectItem} />
      </div>
    )
  }

  const { errorContent, productsList } = pageContent

  return errorContent ? (
    <ErrorPage />
  ) : productsList ? (
    contentPage()
  ) : (
    <Loading />
  )
}

export default SearchProductPage
