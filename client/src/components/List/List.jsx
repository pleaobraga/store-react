import React from 'react'
import PropTypes from 'prop-types'

import './List.scss'

export const List = ({ header, title, listItems, className }) => {
  return (
    <div className={`list ${className ? className : ''}`}>
      {title && <h1 className="list__title">{title}</h1>}
      <div className="list__header">{header}</div>
      {listItems}
    </div>
  )
}

List.defaultProps = {
  className: '',
  listItems: {}
}

List.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  header: PropTypes.node,
  listItems: PropTypes.node
}

export default React.memo(List)
