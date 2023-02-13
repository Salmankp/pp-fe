import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Modal from "react-bootstrap/Modal";
import crossIcon from "../../../../assets/images/crossIcon.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import store from "../../../../store";
import { updateUser } from "../../../../actions/user-actions";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VendorModal = ({ openModal, setOpenModal }) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const id = store?.getState()?.loggedInUser?.userInfo?.data?.user?._id;
  const goToLogin = async () => {
    let Role = "vendor";
    let option = {
      role:Role
    }   
    dispatch(updateUser(option, id));
    setOpenModal(false);
  };
 
  return (
    <Modal
      className={styles.modal}
      show={openModal}
      onHide={() => setOpenModal(false)}
      centered
    >
      <Modal.Body>
      <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
        <div className={styles.wrap}>
          <img
            className={styles.cross}
            src={crossIcon}
            onClick={() => setOpenModal(false)}
            alt="crossIcon"
          />
          <div className={styles.heading}> Agreement</div>
          <div className={styles.content}>
            <ul>
              <ol type=".">
                <li>loreum</li>
                <li>loreum</li>
                <li>loreum</li>
                <li>loreum</li>
                <li>loreum</li>
                <li>loreum</li>
                <li>loreum</li>
                <li>loreum</li>
              </ol>
            </ul>
            <div className={styles.btnWrap}>
              <button
                className={styles.btn}
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                Cancel
              </button>
              <button
                className={`${styles.btn} ${styles.active}`}
                onClick={goToLogin}
              >
                Proceed As Vendor
              </button>
            </div>
            <br></br>
            {/* <p style={{ color: "red" }}>{errorMsg}</p> */}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default VendorModal;
