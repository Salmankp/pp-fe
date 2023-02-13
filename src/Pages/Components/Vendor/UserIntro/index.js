import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import likeIcon from "../../../../assets/images/likeIcon.svg";
import dislikeIcon from "../../../../assets/images/dislikeIcon.svg";
import twitterIcon2 from "../../../../assets/images/twitterIcon2.svg";
import fbIcon2 from "../../../../assets/images/fbIcon2.svg";
import mailIcon2 from "../../../../assets/images/mailIcon2.svg";
import axios from 'axios';
import { success, error } from "../../../../utils/toastr";
import { useDispatch, useSelector } from "react-redux";
import store from "../../../../store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const UserIntro = ({ offerData }) => {
  const dispatch = useDispatch();  
  const [unBlocked, setUnBlocked ] = useState(false);
  const [unTrusted, setUnTrusted ] = useState(false);
  const id = offerData?.user?._id;
  const userData = useSelector(state => state.loggedInUser);
  const userId = userData?.userInfo?.data?.user?._id;
  
  const findBlock =async () => {
    const token = store?.getState()?.loggedInUser?.userInfo?.token;

    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
      const { data } =await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/users/findBlock/${userId}/${id}`,
      config
    );
    
    if (data.data.length === 1){
      setUnBlocked(true);
    }else{
      setUnBlocked(false);
    } 
  }
  const findTrust =async () => {
    const token = store?.getState()?.loggedInUser?.userInfo?.token;

    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
      const { data } =await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/users/findTrust/${userId}/${id}`,
      config
    );
    if (data.data.length === 1){
      setUnTrusted(true);
    }else{
      setUnTrusted(false);
    } 
  }
  const callBlockApi =async () => {
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
      findBlock();
    } 
  }
  const callUnBlockApi =async () => {
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
      findBlock();
    } 
  }
  const callTrustApi =async () => {
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
      findTrust();
    } 
  }
  const callUnTrustApi =async () => {
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
      findTrust();
    } 
  }
  useEffect(() => {
    findBlock()
    findTrust()
  }, [offerData]);
 
  return (
    <div className={styles.wrap}>
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
      <h1 className={styles.name}>{offerData?.user?.name}</h1>
      <div className={styles.subtext}>
      {unBlocked ? (<button style={{color:'grey'}}>Trust</button>) : unTrusted ? 
      (<button className={styles.subtext} onClick={callUnTrustApi}>Untrust</button>) :
      (<button className={styles.subtext} onClick={callTrustApi}>Trust</button>)}
      <span> </span>
      {unTrusted ? (<button style={{color:'grey'}}>Block</button>) : unBlocked ? 
      (<button className={styles.subtext} onClick={callUnBlockApi}>Unblock</button>) : 
      (<button className={styles.subtext} onClick={callBlockApi}>Block</button>)}
      </div>
      <div className={styles.intro}>
        {offerData?.user?.bio}
      </div>
      <div className={`${styles.seen} ${styles.active}`}>{offerData?.user?.isActive
                      ? "online"
                      : `seen ${offerData?.user?.lastSeen}` }</div>

      <div className={styles.like_socialLinks}>
        <div className={styles.like_dislike}>
          <button className={styles.like}>
            <img src={likeIcon} alt="like" /> {offerData?.likeCount} 
          </button>
          <button className={styles.dislike}>
            <img src={dislikeIcon} alt="dislike" /> {offerData?.disLikeCount}
          </button>
        </div>
        <div className={styles.socialLinks}>
          <a href="/">
            <img src={twitterIcon2} alt="twitter" />
          </a>
          <a href="/">
            <img src={fbIcon2} alt="fb" />
          </a>
          <a href="/">
            <img src={mailIcon2} alt="mail" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserIntro;
