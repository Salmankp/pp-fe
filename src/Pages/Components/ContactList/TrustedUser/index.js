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

const TrustedUser = () => {
  const [trustedUser, setTrustedUser] = useState()
  const id = store?.getState()?.loggedInUser?.userInfo?.data?.user?._id
  const fetchTrustedUser = async () => {
    const token = store?.getState()?.loggedInUser?.userInfo?.token
    
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/users/findTrustedUsers`,
      config
    )
    if(data.data){
      data.data = data.data.map((item) => {
        if(item.hasTrusted.trustedTime){
          const time = moment(item.hasTrusted.trustedTime).format('LLL');
          return {...item, trustedTime: time}
        }else{
          return item;
        }
      })
    } 
    setTrustedUser(data?.data)
   
  }
  const callUnTrustApi =async (trustId) => {
    const token = store?.getState()?.loggedInUser?.userInfo?.token;

    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
      const { data } =await axios.put(
      `${process.env.REACT_APP_API_URL}/api/v1/users/unTrust`,
      { _id:  trustId },
      config
    );
    if (data.status === "success"){
      success("User UnTrust Successfully");
      await axios.put(
        `${process.env.REACT_APP_API_URL}/api/v1/users/removeTrustedBy/${trustId}`,
        { _id :id },
        config
      );
      fetchTrustedUser()
      fetchTrustedUser()
    } 
  }
 
  useEffect(() => {
    fetchTrustedUser()
  }, [])
 
  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Trusted User</h1>
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
        {trustedUser && trustedUser.length ? (
          <table className={styles.table}>
            <tbody>
              <tr>
                <th>User Name</th>
                <th>Trades with me</th>
                <th>Active Offer</th>
                <th>Added on</th>
                <th>Action</th>
              </tr>
              {trustedUser &&
                trustedUser.length &&
                trustedUser.map((item, index) => {
                  return (
                    <tr key={index} className={styles.data}>
                      <td>
                        <div className={styles.userInfo}>
                          <div className={styles.imgContainer}>
                          {item?.hasTrusted?.profilePic ? (
                                <img
                                  className={styles.img}
                                  src={`data:image/jpeg;base64,${item?.hasTrusted?.profilePic}`}
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
                          <span>{item?.hasTrusted?.name}</span>
                        </div>
                      </td>
                      <td>
                        <span>{item?.tradesCount}</span>
                      </td>
                      <td>
                        <span>0</span>
                      </td>
                      <td>
                        <span>{item?.trustedTime}</span>
                      </td>
                      <td>
                        <TableActionDropdown
                          listItems={[
                            <button>View Active Offers</button>,
                            <button>Send From Wallet</button>,
                            <button onClick={() => callUnTrustApi(item?.hasTrusted?._id)}>Remove from trusted list</button>,
                          ]}
                        />
                      </td>
                    </tr>
                  )
                })}
            </tbody>
          </table>
        ) : trustedUser && trustedUser.length === 0 ? (
          <div className={styles.alignment}>
            <img src={noRecord} alt='no record' />
            <span className={styles.txt}>No Trusted Users Found</span>
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

export default TrustedUser
