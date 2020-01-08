import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import DynamicImport from './components/DynamicImport'
import ErrorPage from './pages/ErrorPage'
import Loading from './components/Loading'

const SearchProductPage = () => (
  <DynamicImport
    loadComponent={() =>
      import(
        /*  webpackChunkName: "searchProductPage" */ './pages/SearchProductPage'
      )
    }
    ErrorComponent={() => ErrorPage}
    LoadingComponent={() => <Loading />}
  />
)

const EditProductPage = () => (
  <DynamicImport
    loadComponent={() =>
      import(
        /*  webpackChunkName: "editProductPage" */ './pages/EditProductPage'
      )
    }
    ErrorComponent={() => ErrorPage}
    LoadingComponent={() => <Loading />}
  />
)

const Routes = () => {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<ErrorPage />}>
        <Switch>
          <Route path="/:id" component={EditProductPage} />
          <Route exact path="/" component={SearchProductPage} />
          <Route component={ErrorPage} />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  )
}

export default Routes
