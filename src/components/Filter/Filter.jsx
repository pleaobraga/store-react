import React from 'react'
import PropTypes from 'prop-types'
import './Filter.scss'

export const Filter = ({ value, onChange, placeholder }) => {
  return (
    <div className="filter">
      <i key="search" className="material-icons filter__icon">
        search
      </i>
      <input
        className="filter__input"
        placeholder={placeholder ? placeholder : 'Search'}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string
}

export default React.memo(Filter)
