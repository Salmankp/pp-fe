import React, { useState } from "react";
import styles from "./styles.module.scss";
import Icon from "../../../../assets/images/vector.png";
import ReactSelect from "../ReactSelect";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TimeAgo from "react-timeago";
import frenchStrings from "react-timeago/lib/language-strings/fr";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";
const PaymentInfo = ({ offerData, transactionData }) => {
  const formatter = buildFormatter(frenchStrings);

  return (
    <div className={styles.tradePaymentInfo}>
      <ToastContainer />
      <p className={styles.txt}>
        Please follow {offerData?.user?.name}'s instructions
      </p>
      <div className={styles.paymentBtnWrap}>
        <button className={styles.paymentBtn}>Cash Only</button>
        <button className={styles.paymentBtn}>Cash in person</button>
      </div>
      <p className={styles.metaInfo}>{offerData?.tradeInstructions}</p>
      <div className={styles.tradeInformation}>
        <h3 className={styles.tradeTitle}>Trade Information</h3>
        <div className={`${styles.alignment} ${styles.mgbottom}`}>
          <div className={styles.lgWidth}>
            <h4 className={styles.title}>Rate</h4>
            <p className={`${styles.description} ${styles.mdWidth}`}>
              6,480,428.97 {offerData?.preferredCurrency}/
              {offerData?.cryptoCurrencyType}
            </p>
          </div>
          <div className={styles.mdWidth}>
            <h4 className={styles.title}>TRADE ID</h4>
            <span className={styles?.description}>
              {transactionData?.transactionId}
            </span>
            <img className={styles.icon} src={Icon} alt="icon" />
          </div>
        </div>
        <div className={styles.alignment}>
          <div className={styles.lgWidth}>
            <h4 className={styles.title}>Started</h4>
            <p className={styles.description}>
              <TimeAgo date={transactionData?.started} />
            </p>
          </div>
          <div className={styles.mdWidth}>
            <h4 className={styles.title}>CANCELLED</h4>
            <p className={styles.description}>4 hours ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PaymentInfo;
