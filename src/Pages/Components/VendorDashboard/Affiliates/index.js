import React, { useState } from "react";
import styles from "./styles.module.scss";
import copyIcon from "../../../../assets/images/copy.svg";
import { useNavigate } from "react-router-dom";

const Affiliate = () => {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  return (
    <div className={styles.wrap}>
      <h3 className={styles.title}>My Affiliates</h3>
      <p className={styles.description}>
        Share this link with peope, bring them on paxful and earn every time
        they buy crypto
      </p>
      <div className={styles.copyTab}>
        <span className={styles.link}>
          https://paxful.com/register?r=GMYyqL2AqYW
        </span>
        <div className={styles.alignment}>
          <h3 className={styles.copyTxt}>Copy</h3>
          <img src={copyIcon} alt="icon" />
        </div>
      </div>
      <div className={styles.tabs}>
        <div className={`${styles.tab} ${styles.mgRight}`}>
          <span className={styles.txt}>Affiliates</span>
          <span className={styles.txt}>0</span>
        </div>
        <div className={styles.tab}>
          <span className={styles.txt}>Current Balance</span>
          <span className={styles.txt}>0 USD</span>
        </div>
      </div>
      <div className={styles.tabs}>
        <div className={`${styles.tab} ${styles.mgRight}`}>
          <span className={styles.txt}>Total Earnings</span>
          <span className={styles.txt}>0 USD</span>
        </div>
        <div className={styles.btnContainer}>
          <button onClick={() => navigate("/affiliate")} className={styles.btn}>
            View More Details
          </button>
        </div>
      </div>
      <div>
        <h3 className={styles.title}>Have any Idea?</h3>
        <textarea className={styles.textArea} placeholder="Write us"></textarea>
        <span className={styles.subTxt}>characters left 500</span>
      </div>
    </div>
  );
};
export default Affiliate;
