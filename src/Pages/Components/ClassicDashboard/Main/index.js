import React from "react";
import styles from "./styles.module.scss";
import UserInfo from "../UserInfo";
import UserDetail from "../UserDetail";
import DetailBar from "../../VendorDashboard/DetailBar";
import Affiliates from "../../VendorDashboard/Affiliates";
import Badges from "../Badges";
import AccountActivity from "../AccountActivity";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className={styles.wrap}>
        <h1 className={styles.heading}>Classic Dashboard</h1>
        <div className={styles.userContainer}>
          <UserInfo />
          <UserDetail />
        </div>
        <div>
          {/* <DetailBar /> */}
          <div className={styles.offerContainer}>
            <button
              onClick={() => navigate("/create-offer")}
              className={styles.offerBtn}
            >
              Create New Offer
            </button>
          </div>
        </div>
        <Badges />
        <Affiliates />
        <AccountActivity />
      </div>
    </div>
  );
};

export default Main;
