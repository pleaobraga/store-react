import React from 'react'
import PropTypes from 'prop-types'
import './ListItem.scss'

export const ListItem = ({ details, actions, className }) => {
  return (
    <div className={`list-item ${className ? className : ''}`}>
      <div className="list-item__details">{details.map(detail => detail)}</div>
      {actions && (
        <div className="list-item__actions">
          {actions.map(action => (
            <i key={action} className="material-icons">
              {action}
            </i>
          ))}
        </div>
      )}
    </div>
  )
}

ListItem.defaultProps = {
  details: []
}

ListItem.propTypes = {
  className: PropTypes.string,
  details: PropTypes.arrayOf(PropTypes.element),
  actions: PropTypes.arrayOf(PropTypes.string)
}

export default React.memo(ListItem)
