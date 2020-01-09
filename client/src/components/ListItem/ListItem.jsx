import React from 'react'
import PropTypes from 'prop-types'

import './ListItem.scss'

export const ListItem = ({
  id,
  selected,
  disabled,
  details,
  className,
  actions,
  onChange
}) => {
  return (
    <div className={`list-item ${className ? className : ''}`}>
      <input
        id={id}
        value={selected}
        type="checkbox"
        disabled={disabled}
        onChange={onChange}
      />
      <div className="list-item__details">{details}</div>
      {actions && <div className="list-item__actions">{actions}</div>}
    </div>
  )
}

ListItem.defaultProps = {
  disabled: false,
  selected: false,
  className: '',
  details: {},
  actions: null
}

ListItem.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  selected: PropTypes.bool,
  className: PropTypes.string,
  details: PropTypes.node,
  actions: PropTypes.node
}

export default React.memo(ListItem)
