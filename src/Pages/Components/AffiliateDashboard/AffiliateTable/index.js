import React, { useEffect, useState } from "react";
import Classes from './style.module.scss'
import { BsChevronUp, BsChevronDown, BsSearch } from 'react-icons/bs'
import OutsideAlerter from '../../OutsideClickListener/OutsideClickListener'
import { Badge, Table } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import noRecord from '../../../../assets/images/noRecord.png'
import { Bars } from 'react-loader-spinner'
import { BsArrowDown, BsArrowUp } from 'react-icons/bs'
import store from '../../../../store'
import axios from 'axios'
import displayPic from "../../../../assets/images/displayPic.svg"
import moment from "moment"

const AffiliateTable = () => {
  const [setShowDropdown, showDropdown] = React.useState(false)
  const [referencedUserData, setReferencedUserData] = useState();
  const [filteredResults, setFilteredResults] = useState([]);
 
  const getUserData =async () => {
    const token = store?.getState()?.loggedInUser?.userInfo?.token;

    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
      const { data } =await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/users/findReferencedUsers`,
      config
    );
    if(data.data && data.data.length){
      data.data = data.data.map((item) => {
        item.user.createdAt = moment(item.user.createdAt).fromNow()
        return {...item}
      })
    }
    if(data.data && data.data.length){
      data.data = data.data.map((item) => {
        if(item.lastTrade && item.lastTrade.length){
        item.lastTrade[0].created = moment(item.lastTrade[0].created).fromNow()
        return {...item}}else{
          return{...item}
        }
      })
    }
    setReferencedUserData(data?.data)
  }

const searchItems = (searchValue) => {
   if(searchValue !== ''){
    if(referencedUserData && referencedUserData.length){
    const filteredData = referencedUserData.filter((item) => {
      const val = item.user._id;
      return val.toLowerCase().includes(searchValue)
  })
  setFilteredResults(filteredData)
}}
}
  const clearAll = () => {
    showDropdown(false)
    setFilteredResults(referencedUserData)
  }
  useEffect(() => {
   getUserData() 
  },[])
  return (
    <div className={Classes.tableWrapper}>
      <div className='d-flex justify-content-between align-items-center mb-3'>
        <div className={`${Classes.title} d-flex`}>
          <h3>My Affiliates</h3>{' '}
          {referencedUserData && referencedUserData.length && (
             <span>
             <Badge bg='secondary'>{referencedUserData.length}</Badge>
           </span>
          )} 
        </div>
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
              <input type='text' placeholder='search' 
              onChange={(e) => searchItems(e.target.value)}/>
            </div>
            <div className='p-3'>
              <ul className={Classes.listItem}>
                <li><button onClick={clearAll}>Without Track Id</button></li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </OutsideAlerter>
      </div>
      {filteredResults && filteredResults.length > 0 ? (
         <Table striped bordered hover>
         <thead className={Classes.tableHead}>
           <tr>
             <th>TIER 1</th>
             <th>
               Joined <BsArrowDown />
             </th>
             <th>
               Country <BsArrowUp />
             </th>
             <th>Last Trade</th>
             <th>Track Id</th>
             <th>Tier Referrals</th>
             <th>Earnings (BTC)</th>
           </tr>
         </thead>
         <tbody>
           {filteredResults.map((item,index)=> {
            return (
              <tr className={Classes.bodyRow} key={index}>
              <td>
                <div className='d-flex align-items-center gap-3'>
                  <div>
                    {item?.user?.profilePic ? (
                      <img
                      className={Classes.userImg}
                      src={`data:image/jpeg;base64,${item?.user?.profilePic}`}
                      alt='user img'
                    />
                    ) : (
                       <img
                       className={Classes.userImg}
                       src={displayPic}
                       alt='user img'
                     />
                    )}       
                  </div>
                  <div>
                    <div className='text-info mb-1'>{item?.user?.name}</div>
                    {item?.user?.verified === 'true' ? (
                       <div className={`text-danger ${Classes.notVerified}`}>
                       Verified
                     </div>
                    ) : (
                       <div className={`text-danger ${Classes.notVerified}`}>
                       Not Verified
                     </div>
                    ) }
                  </div>
                </div>
              </td>
              <td>{item?.user?.createdAt}</td>
              <td>{item?.user?.loginCountry}</td>
              {item?.lastTrade[0]?.created ? (
              <td>{item?.lastTrade[0]?.created}</td>
              ) : <td>No Trades Yet</td>}
              <td>{item?.user?._id}</td>
              <td>{item?.user?.referenceUser.length}</td>
              <td>
                <div>0.00</div>
                <div className='d-flex mt-1 gap-2'>
                  <span>Last 30 Days:</span>
                  <span className='text-danger'>0%</span>
                </div>
              </td>
            </tr>
            )
           })}
         </tbody>
       </Table>
      ) :
      filteredResults && filteredResults.length === 0 
      && referencedUserData && referencedUserData.length
      ? (
         <Table striped bordered hover>
         <thead className={Classes.tableHead}>
           <tr>
             <th>TIER 1</th>
             <th>
               Joined <BsArrowDown />
             </th>
             <th>
               Country <BsArrowUp />
             </th>
             <th>Last Trade</th>
             <th>Track Id</th>
             <th>Tier Referrals</th>
             <th>Earnings (BTC)</th>
           </tr>
         </thead>
         <tbody>
           {referencedUserData && referencedUserData.length && referencedUserData.map((item,index)=> {
            return (
              <tr className={Classes.bodyRow} key={index}>
              <td>
                <div className='d-flex align-items-center gap-3'>
                  <div>
                    {item?.user?.profilePic ? (
                      <img
                      className={Classes.userImg}
                      src={`data:image/jpeg;base64,${item?.user?.profilePic}`}
                      alt='user img'
                    />
                    ) : (
                       <img
                       className={Classes.userImg}
                       src={displayPic}
                       alt='user img'
                     />
                    )}       
                  </div>
                  <div>
                    <div className='text-info mb-1'>{item?.user?.name}</div>
                    {item?.user?.verified === 'true' ? (
                       <div className={`text-danger ${Classes.notVerified}`}>
                       Verified
                     </div>
                    ) : (
                       <div className={`text-danger ${Classes.notVerified}`}>
                       Not Verified
                     </div>
                    ) }
                  </div>
                </div>
              </td>
              <td>{item?.user?.createdAt}</td>
              <td>{item?.user?.loginCountry}</td>
              {item?.lastTrade[0]?.created ? (
              <td>{item?.lastTrade[0]?.created}</td>
              ) : <td>No Trades Yet</td>}
              <td>{item?.user?._id}</td>
              <td>{item?.user?.referenceUser.length}</td>
              <td>
                <div>0.00</div>
                <div className='d-flex mt-1 gap-2'>
                  <span>Last 30 Days:</span>
                  <span className='text-danger'>0%</span>
                </div>
              </td>
            </tr>
            )
           })}
         </tbody>
       </Table>
      ) : referencedUserData && referencedUserData.length === 0 ? (
        <div className={Classes.alignment}>
        <img src={noRecord} alt='no record' />
        <span className={Classes.txt}>No Affiliate Users yet</span>
      </div>
      ) : (
        <div className={Classes.loader}>
        <Bars color='#1FC28F' height={40} width={40} />
      </div>
      )
      }
    </div>
  )
}

export default AffiliateTable
