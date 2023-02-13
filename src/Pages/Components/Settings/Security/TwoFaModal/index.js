import React from "react";
import styles from "./styles.module.scss";
import Modal from "react-bootstrap/Modal";
import crossIcon from "../../../../../assets/images/crossIcon.svg";
import { Link } from "react-router-dom";
import { FiMail, FiMessageSquare } from "react-icons/fi";

const TwoFaModal = ({ showModal, setShowModal, isEmailVerified }) => {
  return (
    <>
      <Modal
        className={styles.modal}
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
      >
        <Modal.Body>
          <div className={styles.wrap}>
            <img
              className={styles.cross}
              src={crossIcon}
              onClick={() => setShowModal(false)}
              alt="crossIcon"
            />
            <h1 className={styles.heading}>Enable 2FA</h1>
            <span className={styles.description}>
              To enable 2FA, you first need to do:
            </span>
            <div className={`${styles.outer} justify-content-between`}>
              {isEmailVerified ? (
                <div className="d-flex align-items-center gap-3">
                  <FiMessageSquare
                    style={{ color: "#1fc28f" }}
                    className="display-4"
                  />
                  <div className={styles.txtBlock}>
                    <h3>SMS Verification</h3>
                    <span>We'll need your phone number.</span>
                  </div>
                </div>
              ) : (
                <div className="d-flex align-items-center gap-3">
                  <FiMail style={{ color: "#1fc28f" }} className="display-4" />
                  <div className={styles.txtBlock}>
                    <h3>Email Verification</h3>
                    <span>We'll need your email.</span>
                  </div>
                </div>
              )}

              <div>
                <Link className="btn btn-success" to={isEmailVerified ? "/verification/sms" : "/verification/email"}>
                  Verify
                </Link>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TwoFaModal;
