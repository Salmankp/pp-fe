import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import moment from "moment";
import axios from 'axios';
import store from "../../../../store";

const Trades = () => {
  const [btc, setBtc] = useState();
  const [eth, setEth] = useState();
  const [usdt, setUsdt] = useState();
  const [usd, setUsd ] = useState();
  const [noOfTrades, setNoOfTrades ] = useState();
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
    setUsdt(data?.data?.doc?.cryptoAmount);
  };
  const fetchUsdTotal = async () => {
    const token = store?.getState()?.loggedInUser?.userInfo?.token;

    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    };
    let  { data }  = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/transection/monthlyTotal`,
      config
    );
    setUsd(data?.data?.doc?.cryptoAmount);
  };
  const fetchClosingRatio = async () => {
    const token = store?.getState()?.loggedInUser?.userInfo?.token;

    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    };
    let  { data }  = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/transection/closingRatio`,
      config
    );
    setNoOfTrades(data?.data?.d.length);
  };
  useEffect(() => {
    fetchBtc();
    fetchEth();
    fetchUsdt();
    fetchUsdTotal();
    fetchClosingRatio();
  }, []);
  return (
    <div className={styles.wrap}>
      <h3 className={styles.title}>Trades</h3>
      <div className={styles.flexWrap}>
        <div className={styles.boxWrapTrade}>
          <div className={styles.boxHead}>Monthly successful trades</div>
          <div className={styles.token}>
            <span>{btc ? btc : "0"} BTC trades</span>
            <span>{usdt ? usdt : "0"} USDT trades</span>
            <span>{eth ? eth : "0"} ETH trades</span>
          </div>
          <div className={styles.sold}>{btc ? btc : "0"} successful BTC trades</div>
          <div className={styles.sold}>{usdt ? usdt : "0"} successful USDT trades</div>
          <div className={styles.sold}>{eth ? eth : "0"} successful ETH trades</div>
          <div className={styles.stats}>in the previous month ({month})</div>
        </div>
        <div className={styles.boxWrapTrade}>
          <div className={styles.boxHead}>Monthly total</div>
          <div className={styles.token}>
            <span>{usd ? usd : "0"} USD</span>
          </div>
          <div className={styles.sold}>{usd ? usd : "0"} USD were sold and bought</div>
          <div className={styles.stats}>in the previous month ({month})</div>
        </div>
        <div className={styles.boxWrapTrade}>
          <div className={styles.boxHead}>Monthly closing ratio</div>
          <div className={styles.token}>
            <span>{noOfTrades ? noOfTrades : "No"} {noOfTrades === 1 ? "trade" : "trades"}</span>
          </div>
          <div className={styles.sold}>{noOfTrades ? noOfTrades : "No"} {noOfTrades === 1 ? "trade" : "trades"}</div>
          <div className={styles.stats}>in the previous month ({month})</div>
        </div>
      </div>
    </div>
  );
};
export default Trades;
