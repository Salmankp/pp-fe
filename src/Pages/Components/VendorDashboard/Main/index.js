import React, { useState } from "react";
import styles from "./styles.module.scss";
import down from "../../../../assets/images/down.svg";
import ActiveTrade from "../ActiveTrade";
import Offers from "../Offers";
import DetailBar from "../DetailBar";
import Affiliate from "../Affiliates";
import VendorBalance from "../VendorBalance";
import Trades from "../Trades";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DetailStatistics from "../DetailStatistics";
const Main = () => {
  const [tab, setTab] = useState("overview");
  return (
    <div className={`${"container"} ${"layout"}`}>
      <h1 className={styles.vendorHeading}>Vendor Dashboard</h1>
      <div className={styles.wrapTab}>
        <button
          className={`${styles.tabContainer} ${tab === "overview" && styles.active}`}
          onClick={() => setTab("overview")}
        >
          <span>Overview</span>
        </button>
        <button
          className={`${styles.tabContainer} ${tab === "detail" && styles.active}`}
          onClick={() => setTab("detail")}
        >
          <span>Detailed Statistics</span>
        </button>
      </div>
      {tab === "overview" && (
        <>
          <div className={styles.wrap}>
            <ToastContainer />
            {/* <h1 className={styles.heading}>Vendor Dasboard</h1> */}
            <p className={`${styles.txt} ${styles.mgBottom_md}`}>Track and improve your business</p>
            <p className={`${styles.txt} ${styles.mgBottom_sm}`}>
              <b>0BTC</b> total Trade
            </p>
            <div className={styles.mgBottom_sm}>
              <span className={styles.txt}>
                This week <b>0</b>
              </span>
              <img className={styles.downImg} src={down} alt="icon" />
              <span className={styles.txt}>(+0.00) BTC</span>
            </div>
            <div className={styles.mgBottom_sm}>
              <span className={styles.txt}>
                7 DAYS <b>0</b>
              </span>
              <img className={styles.downImg} src={down} alt="icon" />
              <span className={styles.txt}>(+0.00) BTC</span>
            </div>
          </div>
          <ActiveTrade />
          <Offers />
          <DetailBar />
          <Affiliate />
        </>
      )}
      {tab === "detail" && (
        <>
          <VendorBalance />
          <Trades />
          <DetailStatistics />
        </>
      )}
    </div>
  );
};
export default Main;
