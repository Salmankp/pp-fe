import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import bitcoin from "../../../../assets/images/bitcoin-sm.svg";
import ethereum from "../../../../assets/images/ethereum.svg";
import tether from "../../../../assets/images/tether.svg";
import axios from 'axios';
import store from "../../../../store";
import moment from "moment"; 

const VendorBalance = () => {
  const [btc, setBtc] = useState();
  const [eth, setEth] = useState();
  const [usdt, setUsdt] = useState();
  const month = moment().subtract(1, "month").format('MMMM');
  const fetchBtc = async () => {
    const token = store?.getState()?.loggedInUser?.userInfo?.token;

    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    };
    let  { data }  = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/transection/vendorData/bitcoin`,
      config
    );
    console.log('data in bit', data?.data?.doc?.cryptoAmount);
    setBtc(data?.data?.doc?.cryptoAmount);
  };
  const fetchEth = async () => {
    const token = store?.getState()?.loggedInUser?.userInfo?.token;

    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    };
    let  { data }  = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/transection/vendorData/ethereum`,
      config
    );
    console.log('data in eth', data?.data?.doc?.cryptoAmount);
    setEth(data?.data?.doc?.cryptoAmount);
  };
  const fetchUsdt = async () => {
    const token = store?.getState()?.loggedInUser?.userInfo?.token;

    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    };
    let  { data }  = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/transection/vendorData/USDT`,
      config
    );
    console.log('data in ust', data?.data?.doc?.cryptoAmount);
    setUsdt(data?.data?.doc?.cryptoAmount);
  };
  useEffect(() => {
    fetchBtc();
    fetchEth();
    fetchUsdt();
  }, []);
  return (
    <div className={styles.wrap}>
      <h3 className={styles.title}>Balance</h3>
      <div className={styles.flexWrap}>
        <div className={styles.boxWrap}>
          <div className={styles.boxHead}>Monthly traded Bitcoin in total</div>
          <div className={styles.iconToken}>
            <img className={styles.bitcoinImg} src={bitcoin} alt="bitcoin" />
            <span>{btc ? btc : "0"} BTC</span>
          </div>
          <div className={styles.sold}>{btc ? btc : "0"} BTC were sold and bought</div>
          <div className={styles.stats}>in the previous month ({month})</div>
        </div>
        <div className={styles.boxWrap}>
          <div className={styles.boxHead}>Monthly traded Tether in total</div>
          <div className={styles.iconToken}>
            <img className={styles.bitcoinImg} src={tether} alt="bitcoin" />
            <span>{usdt ? usdt : "0"} USDT</span>
          </div>
          <div className={styles.sold}>{usdt ? usdt : "0"} USDT were sold and bought</div>
          <div className={styles.stats}>in the previous month ({month})</div>
        </div>
        <div className={styles.boxWrap}>
          <div className={styles.boxHead}>Monthly traded Ethereum in total</div>
          <div className={styles.iconToken}>
            <img className={styles.bitcoinImg} src={ethereum} alt="bitcoin" />
            <span>{eth ? eth : "0"} ETH</span>
          </div>
          <div className={styles.sold}>{eth ? eth : "0"} Eth were sold and bought</div>
          <div className={styles.stats}>in the previous month ({month})</div>
        </div>
      </div>
    </div>
  );
};
export default VendorBalance;
