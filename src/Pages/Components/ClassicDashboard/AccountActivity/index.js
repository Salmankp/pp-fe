import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./styles.module.scss";
import Transaction from "../../Wallet/TransactionTable";
import moment from "moment";
const AccountActivity = () => {
  let userPasswordTime;
  const userPassword = useSelector(
    (state) => state?.loggedInUser?.userInfo?.data?.user?.changePass
  );
  if(userPassword !== undefined){
    userPasswordTime = moment(userPassword).fromNow();
  }
  const userRegister = useSelector(
    (state) => state?.loggedInUser?.userInfo?.data?.user?.createdAt
  );
  const userRegisterTime = moment(userRegister).fromNow();
  const userLogin = useSelector(
    (state) => state?.loggedInUser?.userInfo?.data?.user?.loginTime
  );
  const userLoginTime = moment(userLogin).fromNow();
  const [tab, setTab] = useState("account");
  return (
    <div className={styles.wrap}>
      <div className={styles.tabs}>
        <div
          className={`${styles.tab} ${tab === "account" && styles.active}`}
          onClick={() => setTab("account")}
        >
          <span className={styles.center}>Account Activity</span>
        </div>
        <div
          className={`${styles.tab} ${tab === "transactions" && styles.active}`}
          onClick={() => setTab("transactions")}
        >
          <div className={styles.offers}>
            <span className={styles.txt}>Transactions</span>
            <div className={styles.countContainer}>
              <span className={styles.counter}>0</span>
            </div>
          </div>
        </div>
      </div>
      {tab === "account" ? (
        <div className={styles.records}>
          <div className={styles.list}>
            <span>User Login</span>
            <span>{userLoginTime}</span>
          </div>
          {userPasswordTime !== undefined ? ( <div className={styles.list}>
            <span>Change Password</span>
            <span>{changePassTime}</span>
          </div>) : ''}
          <div className={styles.list}>
            <span>User Register</span>
            <span>{userRegisterTime}</span>
          </div>
        </div>
      ) : (
        <div className={styles.table}>
          <Transaction />
        </div>
      )}
    </div>
  );
};

export default AccountActivity;
