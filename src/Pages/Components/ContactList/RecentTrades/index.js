import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import displayPic from '../../../../assets/images/displayPic.svg'
import error from '../../../../assets/images/error_outline.svg'
import noRecord from '../../../../assets/images/noRecord.png'
import cross from '../../../../assets/images/cross.svg'
import { useDispatch, useSelector } from "react-redux";
import { success } from "../../../../utils/toastr";
import { Link, useNavigate, useLocation } from 'react-router-dom'
import moment from 'moment'
import axios from 'axios'
import { Bars } from 'react-loader-spinner'
import store from '../../../../store'
import TableActionDropdown from '../TableActionDropdown'
import { Badge } from 'react-bootstrap'
import { setOfferForTrade } from '../../../../actions/offer-actions'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RecentTrades = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [rTrades, setRTrades] = useState()
  const userData = useSelector(state => state.loggedInUser);
  const userId = userData?.userInfo?.data?.user?._id;
  const fetchRecentTrades = async () => {
    const token = store?.getState()?.loggedInUser?.userInfo?.token

    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
    let { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/transection/recentTrades`,
      config
    )
    data.data.data = data.data.data.map((item) => {
      let new_date = moment(item.created).format('LLL')
      return { ...item, created: new_date }
    })
    setRTrades(data?.data?.data)
    
  }
  const callBlockApi =async (id) => {
    const token = store?.getState()?.loggedInUser?.userInfo?.token;

    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
      const { data } =await axios.put(
      `${process.env.REACT_APP_API_URL}/api/v1/users/hasBlocked`,
      { _id:  id },
      config
    );
    if (data.status === "success"){
      success("User Blocked Successfully");
      await axios.put(
        `${process.env.REACT_APP_API_URL}/api/v1/users/blockedBy/${id}`,
        { _id :userId,
        time: Date.now() },
        config
      );
      fetchRecentTrades();
    } 
  }
  const callUnBlockApi =async (id) => {
    const token = store?.getState()?.loggedInUser?.userInfo?.token;

    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
      const { data } =await axios.put(
      `${process.env.REACT_APP_API_URL}/api/v1/users/unBlocked`,
      { _id:  id },
      config
    );
    if (data.status === "success"){
      success("User UnBlock Successfully");
      await axios.put(
        `${process.env.REACT_APP_API_URL}/api/v1/users/removeBlockedBy/${id}`,
        { _id :userId },
        config
      );
      fetchRecentTrades();
    } 
  }
  const callTrustApi =async (id) => {
    const token = store?.getState()?.loggedInUser?.userInfo?.token;

    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
      const { data } =await axios.put(
      `${process.env.REACT_APP_API_URL}/api/v1/users/hasTrusted`,
      { _id:  id },
      config
    );
    if (data.status === "success"){
      success("User Trusted Successfully");
      await axios.put(
        `${process.env.REACT_APP_API_URL}/api/v1/users/trustedBy/${id}`,
        { _id :userId,
         time: Date.now() },
        config
      );
      fetchRecentTrades();
    } 
  }
  const callUnTrustApi =async (id) => {
    const token = store?.getState()?.loggedInUser?.userInfo?.token;

    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
      const { data } =await axios.put(
      `${process.env.REACT_APP_API_URL}/api/v1/users/unTrust`,
      { _id:  id },
      config
    );
    if (data.status === "success"){
      success("User UnTrust Successfully");
      await axios.put(
        `${process.env.REACT_APP_API_URL}/api/v1/users/removeTrustedBy/${id}`,
        { _id :userId },
        config
      );
      fetchRecentTrades();
    } 
  }
  const goToTrades = (offer) => {
   
   rTrades.map((item) => {
    if(item.status === 'completed'){
      dispatch(setOfferForTrade(offer)) 
     navigate(`/tradeSummary=${item?.transactionId}`)
    }else{
      dispatch(setOfferForTrade(offer))  
     navigate(`/dispute=${item?.transactionId}`)
    }
   })
  }
  useEffect(() => {
    fetchRecentTrades()
  }, [])

  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Recent Trades</h1>
      <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
      {rTrades && rTrades.length ? (
        <div className={styles.outer}>
          <table className={styles.table}>
            <tbody>
              <tr>
                <th className={styles.userName}>User Name</th>
                <th className={styles.result}>Result</th>
                <th>Trade Date</th>
                <th>Action</th>
              </tr>
              {rTrades &&
                rTrades.map((item, index) => {
                  return (
                    <tr key={index} className={styles.data}>
                      <td>
                        <div className='d-flex align-items-center gap-2'>
                          <div className={styles.userInfo}>
                            <div className={styles.imgContainer}>
                              {item?.user?.profilePic ? (
                                <img
                                  className={styles.img}
                                  src={`data:image/jpeg;base64,${item?.user?.profilePic}`}
                                  alt='img'
                                />
                              ) : (
                                <img
                                  className={styles.img}
                                  src={displayPic}
                                  alt='img'
                                />
                              )}

                              {/* <div className={styles.active}></div> */}
                            </div>
                            <span>{item?.user?.name}</span>
                          </div>
                          {item.blockCount === 1 ? ( <span>
                            <Badge bg='danger'>Blocked</Badge>
                          </span>) : item.trustCount === 1 ? (
                             <span>
                             <Badge bg='success'>Trusted</Badge>
                           </span>
                          ): ''}
                        </div>
                      </td>
                      <td>
                        <div className={styles.subInfo}>
                          {/* <img className={styles.errImg} src={error} alt="icon" /> */}
                          <span>{item?.status}</span>
                        </div>
                      </td>
                      <td>
                        <span>{item?.created}</span>
                      </td>
                      <td>
                        {item.blockCount === 1 ? (
                         <TableActionDropdown
                         listItems={[
                          <button onClick={() => callUnBlockApi(item?.user?._id)}>Remove from Blocked user</button>,
                          <button className={'text-muted'}>Add to trusted list</button>,
                          <button onClick={() => goToTrades(item?.offerId)}>view this trade</button>
                         ]}
                       />
                        ) : item.trustCount === 1 ? (
                          <TableActionDropdown
                          listItems={[
                            <button onClick={() => callUnTrustApi(item?.user?._id)}>Remove from trusted user</button>,
                            <button className={'text-muted'}>Add to blocked list</button>,
                            <button onClick={() => goToTrades(item?.offerId)}>view this trade</button>
                          ]}
                        />
                        ) : (
                          <TableActionDropdown
                          listItems={[
                            <button onClick={() => callTrustApi(item?.user?._id)}>Add to trusted list</button>,
                            <button onClick={() => callBlockApi(item?.user?._id)}>Add to blocked list</button>,
                            <button onClick={() => goToTrades(item?.offerId)}>view this trade</button>
                          ]}
                        />
                        )}
                        
                      </td>
                    </tr>
                  )
                })}
            </tbody>
          </table>
        </div>
      ) : rTrades && rTrades.length === 0 ? (
        <div className={styles.alignment}>
          <img src={noRecord} alt='no record' />
          <span className={styles.txt}>No Recent Trades Found</span>
        </div>
      ) : (
        <div className={styles.loader}>
          <Bars color='#1FC28F' height={40} width={40} />
        </div>
      )}
    </div>
  )
}

export default RecentTrades
