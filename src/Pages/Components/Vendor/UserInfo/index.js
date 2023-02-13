import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import bitCoinIcon from "../../../../assets/images/bitCoinIcon.png";
import userImg from "../../../../assets/images/userImg.svg";
import phoneIcon from "../../../../assets/images/phoneIcon.svg";
import phoneIconRed from "../../../../assets/images/phoneIconred.svg";
import emailIcon from "../../../../assets/images/emailIcon.svg";
import emailIconRed from "../../../../assets/images/emailIconred.svg";
import idIcon from "../../../../assets/images/idIcon.svg";
import idIconRed from "../../../../assets/images/idIconred.svg";
import addressIcon from "../../../../assets/images/addressIcon.svg";
import addressIconRed from "../../../../assets/images/addressIconred.svg";
import moment from 'moment';
import axios from 'axios';
import store from "../../../../store";

const UserInfo = ({ offerData }) => {
  const [btc, setBtc] = useState();
  const [eth, setEth] = useState();
  const [usdt, setUsdt] = useState();
  const [noOfTrades, setNoOfTrades ] = useState();
  const [hasBlocked, setHasBlocked ] = useState();
  const [blockedBy, setBlockedBy ] = useState();
  let joiningTime = moment(offerData?.user?.createdAt).fromNow();
  let id = offerData?.user?._id;

  const fetchBtc = async () => {
    const token = store?.getState()?.loggedInUser?.userInfo?.token;

    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    };
    let  { data }  = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/transection/vendorTradeData/${id}/bitcoin`,
      config
    );
    setBtc(data?.data?.docs?.cryptoAmount);
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
      `${process.env.REACT_APP_API_URL}/api/v1/transection/vendorTradeData/${id}/ethereum`,
      config
    );
    setEth(data?.data?.docs?.cryptoAmount);
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
      `${process.env.REACT_APP_API_URL}/api/v1/transection/vendorTradeData/${id}/USDT`,
      config
    );
    setUsdt(data?.data?.docs?.cryptoAmount);
  };
  
  const fetchTotalTrades = async () => {
    const token = store?.getState()?.loggedInUser?.userInfo?.token;

    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    };
    let  { data }  = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/transection/totalTrades/${id}`,
      config
    );
    setNoOfTrades(data?.data?.doc.length);
  };
  const fetchBlockList = async () => {
    const token = store?.getState()?.loggedInUser?.userInfo?.token;

    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    };
    let  { data }  = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/users/${id}`,
      config
    );
    setBlockedBy(data?.data?.blockedBy?.length) 
    setHasBlocked(data?.data?.hasBlocked?.length);
  };

  useEffect(() => {
    fetchBtc();
    fetchEth();
    fetchUsdt();
    fetchTotalTrades();
    fetchBlockList();
  
  }, []);

  return (
    <div className={styles.wrap}>
      <div className={styles.img}>
        {offerData?.user?.profilePic ? (<img src={`data:image/jpeg;base64,${offerData?.user?.profilePic}`} alt="user" />) : (<img src={userImg} alt="user" />)}
      </div>
      <div className={styles.btnWrap}>
        <button>
          <img src={bitCoinIcon} alt="bitCoin" />
          Send Bitcoin
        </button>
      </div>
      <div className={styles.verifyWrap}>
        <div className={styles.heading}>Verification</div>
        <ul>
          <li>
            {offerData && offerData?.user?.isPhoneVerified ? (
              <img src={phoneIcon} alt="icon" />
            ) : (
              <img src={phoneIconRed} alt="icon" />
            )}
            <span> Phone Verified </span>
          </li>
          <li>
            {offerData && offerData?.user?.isEmailVerified ? (
              <img src={emailIcon} alt="icon" />
            ) : (
              <img src={emailIconRed} alt="icon" />
            )}
            <span> Email Verified </span>
          </li>
          <li>
            {offerData && offerData?.user?.isIdVerified ? (
              <img src={idIcon} alt="icon" />
            ) : (
              <img src={idIconRed} alt="icon" />
            )}
            <span> ID Verified</span>
          </li>
          <li>
            {offerData && offerData?.user?.isAddressVerified ? (
              <img src={addressIcon} alt="icon" />
            ) : (
              <img src={addressIconRed} alt="icon" />
            )}
            <span> Address Verified</span>
          </li>
        </ul>
      </div>
      <div className={styles.infoWrap}>
        <div className={styles.heading}>Informaion</div>
        <ul>
          <li>
            <b>Language:</b>
            <br /> {offerData?.user?.language}
          </li>
          <li>
            <b>34</b> Trade Partners
          </li>
          <li>
            <b>{noOfTrades}</b> {noOfTrades <= 1 ? 'Trade' : 'Trades'}
          </li>
          <li>
            <b>Trade volume: </b>
            <br />
            {btc < 10 ? 'less than 10 BTC' : btc }
            less than 10 BTC
          </li>
          <li>
            <b>Trade volume:</b> <br />{usdt ? usdt : 0} USDT
          </li>
          <li>
            <b>Trade volume:</b>
            <br /> {eth ? eth : 0} ETH
          </li>
          <li>
            <b>Blocked by</b>
            <br /> {blockedBy ? blockedBy : 0} person
          </li>
          <li>
            Has blocked <br /> 
            <b>{hasBlocked ? hasBlocked : 0} people</b>
          </li>
          <li>
            Joined <b>{joiningTime}</b>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserInfo;
