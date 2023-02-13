import React from 'react';
import styles from './styles.module.scss';
import Modal from 'react-bootstrap/Modal';
import crossIcon from '../../../../assets/images/crossIcon.svg';
import { Link } from 'react-router-dom'

const TermsAndConditions = ({ showModal, setShowModal }) => {
  return (
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
          <div className={styles.heading}>Vendor terms & Conditions </div>
          <div className={styles.content}>
            <ul>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </li>
            </ul>
            <div className={styles.btnWrap}>
              <button className={styles.btn}>I don’t want to be a vendor</button>
              <Link className={`${styles.btn} ${styles.active}`} to="/dashboard">I agree</Link>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default TermsAndConditions;
