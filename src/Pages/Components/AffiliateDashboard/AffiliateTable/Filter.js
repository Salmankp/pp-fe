import React from 'react'
import Classes from './style.module.scss'
import { BsChevronUp, BsChevronDown, BsSearch } from 'react-icons/bs'
import { Form } from 'react-bootstrap'
import OutsideAlerter from '../../OutsideClickListener/OutsideClickListener'

const Filter = () => {
  const [setShowDropdown, showDropdown] = React.useState(false)
  return (
    <OutsideAlerter setFunction={() => showDropdown(false)}>
      <div className={Classes.filterWrapper}>
        <div
          className={`${Classes.filterHead} d-flex gap-3 justify-content-between align-items-center`}
          onClick={() => showDropdown(!setShowDropdown)}
        >
          <span>All Tracks IDs</span>
          <span>{setShowDropdown ? <BsChevronUp /> : <BsChevronDown />}</span>
        </div>
        {setShowDropdown && (
          <div className={Classes.listWrapper}>
            <div className='d-flex gap-3 align-items-center px-4 py-2 border-bottom border-1 mb-2'>
              <span>
                <BsSearch />
              </span>
              <Form.Control type='password' placeholder='search' />
            </div>
            <div className='p-3'>
              <ul className={Classes.listItem}>
                <li>Without trach Id</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </OutsideAlerter>
  )
}

export default Filter
