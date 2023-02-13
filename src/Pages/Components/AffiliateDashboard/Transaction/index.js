import React, { useEffect, useState } from "react";
import styles from './styles.module.scss';
import noRecord from '../../../../assets/images/noRecord.png';
import store from '../../../../store'
import { Bars } from 'react-loader-spinner'
import axios from 'axios'
import moment from "moment"

const Transaction = () => {
    const [referencedUserTrades, setReferencedUserTrades] = useState();
    const getUserTrades =async () => {
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
      if(data?.data[0].lastTrade && data?.data[0].lastTrade){
       data.data[0].lastTrade = data.data[0].lastTrade.map((item) => {
          item.created = moment(item.created).fromNow()
          return {...item}
        })
      }
      setReferencedUserTrades(data?.data[0].lastTrade)
    }
    useEffect(() => {
     getUserTrades() 
    },[])
   
    return (
        <div className={styles.wrap}>
            <h2 className={styles.title}>Recent Transactions</h2>
            <div className={styles.transactionContainer}>
                {referencedUserTrades && referencedUserTrades.length ? (
                   <table className={styles.table}>
                   <tbody>
                     <tr>
                       <th className={styles.userName}>User Name</th>
                       <th className={styles.result}>Result</th>
                       <th>Trade Id</th>
                       <th>Trade Date</th>
                     </tr>
                     {referencedUserTrades &&
                       referencedUserTrades.map((item, index) => {
                         return (
                           <tr key={index} className={styles.data}>
                             <td>
                               <div className='d-flex align-items-center gap-2'>
                                 <div className={styles.userInfo}>
                                   <div className={styles.imgContainer}>
                                     {item?.offerId?.user?.profilePic ? (
                                       <img
                                         className={styles.img}
                                         src={`data:image/jpeg;base64,${item?.offerId?.user?.profilePic}`}
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
                                   <span>{item?.offerId?.user?.name}</span>
                                 </div>
                               </div>
                             </td>
                             <td>
                               <div className={styles.subInfo}>
                                 {/* <img className={styles.errImg} src={error} alt="icon" /> */}
                                 <span>{item?.status}</span>
                               </div>
                             </td>
                             <td>{item?.transactionId}</td>
                             <td>
                               <span>{item?.created}</span>
                             </td>
                           </tr>
                         )
                       })}
                   </tbody>
                 </table>
                ) : referencedUserTrades && referencedUserTrades.length === 0 ? (
                    <div className={styles.noRecord}>
                    <img className={styles.noRecordImg} src={noRecord} />
                    <p className={styles.txt}>No Trades yet</p>
                </div>
                ) : (
                    <div className={styles.loader}>
                    <Bars color='#1FC28F' height={40} width={40} />
                  </div>
                )}
            </div>
            <div className={styles.programs}>
                <h2 className={styles.title2}>Affiliate Program terms of services</h2>
                <span className={styles.description}>Learn more about using Paxful's Affiliate Program on our Terms of Service page.</span>
                <button className={styles.moreBtn}>Learn more</button>
            </div>
        </div>
    );
};
export default Transaction;