import React from 'react'
import Classes from './styles.module.scss'
import { FaEllipsisH } from 'react-icons/fa'
import OutsideAlerter from '../../OutsideClickListener/OutsideClickListener'

const DropDown = (props) => {
  const [showDropdown, setShowDropdown] = React.useState(false)
  return (
    <OutsideAlerter setFunction={() => setShowDropdown(false)}>
      <div className={`${Classes.dropdownWrapper} position-relative`}>
        <button
          className='text-secondary'
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <FaEllipsisH />
        </button>
        {showDropdown && (
          <div
            className={Classes.dropdownBody}
            onClick={() => setShowDropdown(!showDropdown)}
          >
            {props.children}
          </div>
        )}
      </div>
    </OutsideAlerter>
  )
}

export default DropDown
