import React, { useState } from "react";
import styles from "./styles.module.scss";
import Modal from "react-bootstrap/Modal";
import crossIcon from "../../../../../assets/images/crossIcon.svg";
import ReactSelect from "../../../Common/ReactSelect";

const AdvanceModal = ({ showModal, setShowModal }) => {
  return (
    <Modal className={styles.modal} show={showModal} onHide={() => setShowModal(false)} centered>
      <Modal.Body>
        <div className={styles.wrap}>
          <img
            className={styles.cross}
            src={crossIcon}
            onClick={() => setShowModal(false)}
            alt="crossIcon"
          />
          <div className={styles.headDesc}>
            Our advanced option allows you to use the market price of Bitcoin from a source other
            than Paxful. Select the source and price point you'd like to use below.
          </div>
          <label className={styles.label}>Source</label>
          <div>
            <ReactSelect />
          </div>
          <label className={styles.label}>Price Point</label>
          <div>
            <ReactSelect />
          </div>
          <label className={styles.label}>How much you would like to earn</label>
          <div className={styles.fieldWrap}>
            <div className={styles.field}>
              <button
                onClick={() => {
                  //   validateOfferMarginMax();
                }}
              >
                +
              </button>
              <input
                type="number"
                // value={step2formValues.offerMargin}
                min={0}
                // onChange={(e) => {
                //   setStep2formValues({
                //     ...step2formValues,
                //     offerMargin: Number(e.target.value),
                //   });
                // }}
              />
              <button
                onClick={() => {
                  //   validateOfferMarginMin();
                }}
              >
                -
              </button>
            </div>
            <button>%</button>
            <span className={styles.trade}>on each trade</span>
          </div>
          <div className={styles.findText}>
            You can find out more about our margin limits <span>here</span>
          </div>
          <div className={styles.currPrice}>
            Current Bitcoin market price: <strong>21,373.74 USD</strong>
          </div>
          <div className={styles.bottomDesc}>
            I will get <strong>106%</strong> of ApplePay value through <strong>Paxful</strong> on
            <strong>Last</strong> price point.
            <br /> So for every <strong>10.00 USD</strong> worth of <strong>Bitcoin</strong> you
            sell (your minimum trade limit), you will recieve an
            <strong>10.60 USD</strong> in return.
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AdvanceModal;
