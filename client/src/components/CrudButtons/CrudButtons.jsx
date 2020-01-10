import React from 'react'
import PropTypes from 'prop-types'

import Loading from '../Loading'

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
          disabled={edit.disabled}
          className={`edit ${edit.className ? edit.className : ''} ${
            edit.disabled ? 'disabled' : ''
          } `}
          onClick={edit.onClick}
        >
          <i className="material-icons edit__icon">create</i>
          <span>{edit.title ? edit.title : 'Edit'}</span>
        </button>
      )}
      {del && (
        <button
          key="delete"
          disabled={del.disabled}
          className={`delete ${del.className ? del.className : ''}`}
          onClick={del.onClick}
        >
          {del.loader ? (
            <div className="loader">
              <Loading color="#fff" />
            </div>
          ) : (
            <>
              <i className="material-icons delete__icon">delete</i>
              <span>{del.title ? del.title : 'Delete'}</span>
            </>
          )}
        </button>
      )}
    </div>
  )
}

CrudButtons.propTypes = {
  create: PropTypes.shape({
    className: PropTypes.string,
    title: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
  }),
  edit: PropTypes.shape({
    className: PropTypes.string,
    title: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
  }),
  del: PropTypes.shape({
    className: PropTypes.string,
    title: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    loader: PropTypes.bool
  })
}

export default React.memo(CrudButtons)
