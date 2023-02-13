import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Modal from "react-bootstrap/Modal";
import crossIcon from "../../../../assets/images/crossIcon.svg";
import { useNavigate } from "react-router-dom";
import success from "../../../../assets/images/success.svg";

const SuccessModal = ({ openModal, setOpenModal }) => {
  let navigate = useNavigate();

  return (
    <Modal
      className={styles.modal}
      show={openModal}
      onHide={() => setOpenModal(false)}
      centered
    >
      <Modal.Body>
        <div className={styles.wrap}>
          <img
            className={styles.cross}
            src={crossIcon}
            onClick={() => setOpenModal(false)}
            alt="crossIcon"
          />
          <div className={styles.heading}> Congratulations !</div>
          <div className={styles.content}>
            <div className={styles.success}>
              {" "}
              <img height="58px" src={success} />{" "}
            </div>
            <ul>Your transaction has been completed successfully</ul>
            <div className={styles.btnWrap}>
              {/* <button
                  className={styles.btn}
                  onClick={() => {
                    navigate("/sell");
                  }}
                >
                  Cancel
                </button> */}
              {/* <button className={`${styles.btn} ${styles.active}`}>
                Proceed to KYC
              </button> */}
            </div>
            <br></br>
            {/* <p style={{ color: "red" }}>{errorMsg}</p> */}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SuccessModal;
