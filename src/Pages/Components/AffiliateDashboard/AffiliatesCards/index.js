import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import icon from '../../../../assets/images/tilda.svg'
import store from '../../../../store'
import axios from 'axios'
import moment from "moment"

const AffiliateCards = () => {
  const [tab, setTab] = useState('dashboard')
  const [referencedUserData, setReferencedUserData] = useState();
   
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
  
    setReferencedUserData(data?.data)
  }
  useEffect(() => {
    getUserData() 
   },[])
  return (
    <div className={styles.wrap}>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <div className={styles.topRow}>
            <span className={styles.title}>Affiliate Balance</span>
          </div>
          <div className={styles.bottomRow}>
            <div className={styles.content}>
              <h1 className={styles.title}>0 BTC</h1>
              <div>
                <img src={icon} alt='icon' />
                <span className={styles.counter}>0 USD</span>
              </div>
            </div>
            <button className={styles.btn}>Transfer to Wallet</button>
            <span className={styles.metaInfo}>Minimum transfer: 10.00 USD</span>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.topRow}>
            <span className={styles.title}>My Affiliates </span>
          </div>
          <div className={styles.bottomRow}>
          {referencedUserData && referencedUserData.length ? (
             referencedUserData && referencedUserData.length && referencedUserData.map((item,index)=> {
              return (
                   <div className={styles.list} key={index}>
                   <span className={styles.txt}>Tier {index + 1} Affiliates</span>
                   <div className={styles.counterContainer}>
                     <span className={styles.count}>{item?.user?.referenceUser.length}</span>
                   </div>
                 </div>
               )})
          ) : (
            <div className={styles.list}>
            <span className={styles.txt}>Tier Affiliates</span>
            <div className={styles.counterContainer}>
              <span className={styles.count}>0</span>
            </div>
          </div>
          )}  
         
           </div>
        </div>
        <div className={styles.card}>
          <div className={styles.topRow}>
            <span className={styles.title}>Peer Program</span>
          </div>
          <div className={styles.bottomRow}>
            <p className={styles.description}>
              Join the Peer Program to not only increase your Affiliate Program
              benefits but to also help elevate your community through crypto.
              Find out how.
            </p>
            <button className={styles.btn}>Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AffiliateCards
