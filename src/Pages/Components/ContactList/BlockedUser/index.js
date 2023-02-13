import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import displayPic from '../../../../assets/images/displayPic.svg'
import noRecord from '../../../../assets/images/noRecord.png'
import moment from 'moment'
import axios from 'axios'
import store from '../../../../store'
import TableActionDropdown from '../TableActionDropdown'
import { success, error } from "../../../../utils/toastr";
import { Bars } from 'react-loader-spinner'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BlockedUser = () => {
  const [blockedUser, setBlockedUser] = useState()
  const id = store?.getState()?.loggedInUser?.userInfo?.data?.user?._id
  const fetchBlockedUser = async () => {
    const token = store?.getState()?.loggedInUser?.userInfo?.token
    
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
    let { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/users/findBlockedUsers`,
      config
    )
    if(data.data[0].hasBlocked){
      data.data[0].hasBlocked = data.data[0].hasBlocked.map((item) => {
        if(item.blockedTime){
          const time = moment(item.blockedTime).format('LLL');
          return {...item, blockedTime: time}
        }else{
          return item;
        }
      })
    } 
    setBlockedUser(data?.data[0]?.hasBlocked)
  }
  const callUnBlockApi =async (blockId) => {
    const token = store?.getState()?.loggedInUser?.userInfo?.token;

    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
      const { data } =await axios.put(
      `${process.env.REACT_APP_API_URL}/api/v1/users/unBlocked`,
      { _id:  blockId },
      config
    );
    if (data.status === "success"){
      success("User UnBlock Successfully");
      await axios.put(
        `${process.env.REACT_APP_API_URL}/api/v1/users/removeBlockedBy/${blockId}`,
        { _id :id },
        config
      );
      fetchBlockedUser()
      fetchBlockedUser()
    } 
  }
  useEffect(() => {
    fetchBlockedUser()
  }, [])
  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Blocked Users</h1>
      <div className={styles.outer}>
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
        {blockedUser && blockedUser.length ? (
          <table className={styles.table}>
            <tbody>
              <tr>
                <th>User Name</th>
                <th>Added on</th>
                <th>Action</th>
              </tr>
              {blockedUser &&
                blockedUser.length &&
                blockedUser.map((item, index) => {
                  return (
                    <tr key={index} className={styles.data}>
                      <td>
                        <div className={styles.userInfo}>
                          <div className={styles.imgContainer}>
                          {item?.profilePic ? (
                                <img
                                  className={styles.img}
                                  src={`data:image/jpeg;base64,${item?.profilePic}`}
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
                          <span>{item?.name}</span>
                        </div>
                      </td>
                      <td>
                        <span>{item?.blockedTime}</span>
                      </td>
                      <td>
                        <TableActionDropdown listItems={[<button onClick={() => callUnBlockApi(item?._id)}>Unblock</button>]} />
                      </td>
                    </tr>
                  )
                })}
            </tbody>
          </table>
        ) : blockedUser && blockedUser.length === 0 ? (
          <div className={styles.alignment}>
            <img src={noRecord} alt='no record' />
            <span className={styles.txt}>No Blocked Users Found</span>
          </div>
        ) : (
          <div className={styles.loader}>
            <Bars color='#1FC28F' height={40} width={40} />
          </div>
        )}
      </div>
    </div>
  )
}

export default BlockedUser
