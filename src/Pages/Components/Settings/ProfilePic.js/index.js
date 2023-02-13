import React from "react";
import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";

const ProfilePic = () => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.loggedInUser);
  let Pic = userData?.userInfo?.data?.user?.profilePic;
  
  return (
    <div className={styles.wrap}>
     
    </div>
  );
};
export default ProfilePic;
