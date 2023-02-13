import React from 'react'
import Classes from './style.module.scss'
import { ReactComponent as ArrowsIcon } from '../../../assets/images/arrowsIcon.svg'

const SortDropDown = ({setValues}) => {

  return (
    <div className={Classes.dropDownWrapper}>
      <div className={Classes.dropdownHeader}>
        <ArrowsIcon />
        <h3 className={Classes.title}>Sorted By</h3>
      </div>
      <ul className={Classes.list}>
        <li className={Classes.listItems} onClick = {()=>setValues((values)=>({...values, priceFilter: 1, speedFilter:0}))}>
          <span>Price:</span>
          <span>Lowest to Highest</span>
        </li>
        <li className={Classes.listItems} onClick = {()=>setValues((values)=>({...values, priceFilter: -1, speedFilter:0}))}>
          <span>Price:</span>
          <span>Highest to Lowest</span>
        </li>
        <li className={Classes.listItems} onClick = {()=>setValues((values)=>({...values, priceFilter: 0, speedFilter:1}))}>
          <span>Avg.</span>
          <span>Trade Speed</span>
          <span>Fastest to Slowest</span>
        </li>
          <li className={Classes.listItems} onClick = {()=>setValues((values)=>({...values, priceFilter: 0, speedFilter:-1}))}>
          <span>Avg.</span>
          <span>Trade Speed</span>
          <span>Slowest to Fastest</span>
        </li>
      </ul>
    </div>
  )
}

export default SortDropDown
