import React, { useState } from "react";
import styles from "./styles.module.scss";
import thumbsUp from "../../../../assets/images/noun-thumbs-up.svg";
import PaymentInfo from "../../Common/PaymentInfo";
import DisputeModal from "../../Common/DisputeModal";
import ReportModal from "../../Common/ReportModal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DisputeActions = ({ show, setShow, transaction, offerData }) => {
  const [showModal, setShowModal] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className={styles.wrap}>
      <ToastContainer />
      <DisputeModal
        setShow={setShow}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <ReportModal openModal={openModal} setOpenModal={setOpenModal} />
      <div className={styles.paymentBlock}>
        <div className={styles.paymentHeadingBlock}>
          <div className={styles.timerIconContainer}>
            <img src={thumbsUp} alt="icon" />
          </div>
          <div>
            <div>
              <h3 className={styles.title}>
                You paid 15 usd with Faster Payments.
              </h3>
              <p className={styles.description}>
                13.4 USD will be loaded to your account
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.outerSpace}>
        <div>
          <button className={styles.btn} type="button">
            Cancel
          </button>
          <p className={styles.infoTxt}>
            You can always cancel the trade if it was mistakenly started or do
            not meet the requirement stated in the trade instructions
          </p>
        </div>
        <div>
          <button
            className={styles.btn}
            type="button"
            onClick={() => setShowModal(true)}
          >
            Dispute
          </button>
          <p className={styles.infoTxt}>
            No worries your bitcoin are safe in escrow Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </p>
        </div>
      </div>
      <PaymentInfo
        offerData={offerData}
        transactionData={transcation?.data?.doc}
      />
      <div className={styles.btngroup}>
        <button
          onClick={() => setOpenModal(true)}
          type="button"
          className={`${styles.actionBtn}`}
        >
          Report
        </button>
        <button type="button" className={styles.actionBtn}>
          View Offer
        </button>
      </div>
    </div>
  );
};
export default DisputeActions;
