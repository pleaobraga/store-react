import React from 'react'
import Loading from '../../components/Loading'
import ErrorPage from '../ErrorPage'
import Filter from '../../components/Filter'
import CrudButtons from '../../components/CrudButtons'
import ProductList from '../../components/ProductList'
import './SearchProductPage.scss'

const SearchProductPage = () => {
  const [search, setSearch] = React.useState('')

  const listItems = [
    {
      id: '0',
      name: 'Product 1',
      quantity: '1',
      price: '10,00',
      currency: 'R$'
    },
    {
      id: '1',
      name: 'Product 2',
      quantity: '2',
      price: '20,00',
      currency: 'R$'
    },
    {
      id: '2',
      name: 'Product 3',
      quantity: '3',
      price: '30,00',
      currency: 'R$'
    },
    {
      id: '3',
      name: 'Product 4',
      quantity: '4',
      price: '40,00',
      currency: 'R$'
    }
  ]

  return (
    <div className="page page-search-product">
      <h1 className="title" >Products</h1>

      <div className="page-search-product__actions">
        <Filter value={search} />
        <CrudButtons
          create={{ onClick: () => {} }}
          edit={{ onClick: () => {} }}
          del={{ onClick: () => {} }}
        />
      </div>

      <ProductList listItems={listItems} />
    </div>
  )

  // return pageContent.errorContent ? (
  //   <ErrorPage />
  // ) : pageContent.content ? (
  //   <div className="page page-content"></div>
  // ) : (
  //   <Loading />
  // )
}

export default SearchProductPage
