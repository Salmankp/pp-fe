import React from 'react'
import Classes from './styles.module.scss'
import { FaEllipsisH } from 'react-icons/fa'
import OutsideAlerter from '../../OutsideClickListener/OutsideClickListener'

const TableActionDropdown = (props) => {
  const [showDropdown, setShowDropdown] = React.useState(false)
  const { listItems, children } = props
  return (
    <OutsideAlerter setFunction={() => setShowDropdown(false)}>
      <div className={`${Classes.dropdownWrapper} position-relative`}>
        <button onClick={() => setShowDropdown(!showDropdown)}>
          <FaEllipsisH />
        </button>
        {showDropdown && (
          <div className={Classes.dropdownBody}>
            <ul className={Classes.dropdownList}>
              {listItems?.map((item, index) => (
                <li onClick={() => setShowDropdown(false)} key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </OutsideAlerter>
  )
}

export default TableActionDropdown
