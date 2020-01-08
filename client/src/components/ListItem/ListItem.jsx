import React from 'react'
import PropTypes from 'prop-types'

import './ListItem.scss'

export const ListItem = ({ details, className }) => {
  return (
    <div className={`list-item ${className ? className : ''}`}>
      <div className="list-item__details">{details}</div>
      {/* {actions && <div className="list-item__actions">{actions}</div>} */}
    </div>
  )
}

ListItem.defaultProps = {
  className: '',
  details: {},
  actions: {}
}

ListItem.propTypes = {
  className: PropTypes.string,
  details: PropTypes.node,
  actions: PropTypes.node
}

export default React.memo(ListItem)
