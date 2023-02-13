import React from 'react'
import Classes from './style.module.scss'
import { FaEllipsisH } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Action = ({ offerId }) => {
  return (
    <div className={`position-relative ${Classes.listWrapper}`}>
      <span className={Classes.actionWrapper}>
        <FaEllipsisH />
        <div className={Classes.infoWrapper}>
          <ul>
            <li>
              <Link to={`/edit-create-offer/${offerId}`}>Edit</Link>
            </li>
            <li>
              <Link to='/buy-form'>View</Link>
            </li>
          </ul>
        </div>
      </span>
    </div>
  )
}

export default Action
