import React from 'react'
import PropTypes from 'prop-types'
import './Filter.scss'

export const Filter = ({ value, onChange }) => {
  return (
    <div className="filter">
      <i key="search" className="material-icons filter__icon">
        search
      </i>
      <input className="filter__input" value={value} onChange={onChange} />
    </div>
  )
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func
}

export default React.memo(Filter)
