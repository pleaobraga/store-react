import React from 'react'
import PropTypes from 'prop-types'
import './CrudButtons.scss'

export const CrudButtons = ({ create, edit, del }) => {
  return (
    <div className="crud-buttons">
      {create && (
        <button
          key="create"
          className={`create ${create.className ? create.className : ''} `}
          onClick={create.onClick}
        >
          <i className="material-icons create__icon">add_circle</i>
          <span>{create.title ? create.title : 'Add'}</span>
        </button>
      )}
      {edit && (
        <button
          key="edit"
          className={`edit ${edit.className ? edit.className : ''} `}
        >
          <i className="material-icons edit__icon">create</i>
          <span>{edit.title ? edit.title : 'Edit'}</span>
        </button>
      )}
      {del && (
        <button
          key="delete"
          className={`delete ${del.className ? del.className : ''} `}
        >
          <i className="material-icons delete__icon">delete</i>
          <span>{del.title ? del.title : 'Delete'}</span>
        </button>
      )}
    </div>
  )
}

CrudButtons.propTypes = {
  create: PropTypes.shape({
    className: PropTypes.string,
    title: PropTypes.string,
    onClick: PropTypes.func
  }),
  edit: PropTypes.shape({
    className: PropTypes.string,
    title: PropTypes.string,
    onClick: PropTypes.func
  }),
  del: PropTypes.shape({
    className: PropTypes.string,
    title: PropTypes.string,
    onClick: PropTypes.func
  })
}

export default React.memo(CrudButtons)
