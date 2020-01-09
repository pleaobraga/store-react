import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../components/Loading'
import { getContent as actionGetContent } from '../../reducers/ContentReducer'
import ErrorPage from '../ErrorPage'
import './ContentPage.scss'

const ContentPage = () => {
  const dispatch = useDispatch()
  const pageContent = useSelector(state => state.content)

  const getContent = React.useCallback(() => dispatch(actionGetContent()), [
    dispatch
  ])

  React.useEffect(() => {
    getContent()
  }, [])

  return pageContent.errorContent ? (
    <ErrorPage />
  ) : pageContent.content ? (
    <div className="page page-content"></div>
  ) : (
    <Loading />
  )
}

export default ContentPage