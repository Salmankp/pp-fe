import React, { useState } from 'react';
import styles from './styles.module.scss';
import Modal from 'react-bootstrap/Modal';
import crossIcon from '../../../../assets/images/crossIcon.svg';
import QRImg from '../../../../assets/images/qrImg.png';
import caret from '../../../../assets/images/blueIcon.svg';

const ReceivedModal = ({ openModal, setOpenModal }) => {
  const [tab, setTab] = useState('bitcoin');
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
          <div className={styles.heading}>Received from XYZ Wallet</div>
          <div className={styles.tabs}>
            <div
              className={`${styles.tab} ${tab === 'bitcoin' && styles.active}`}
              onClick={() => setTab('bitcoin')}
            >
              Bitcoin network
            </div>
            {/* <div
              className={`${styles.tab} ${tab === 'lightning' && styles.active
                }`}
              onClick={() => setTab('lightning')}
            >
              Lightning
            </div> */}
          </div>
          <div className={styles.outer}>
            <img src={QRImg} alt="QR Img" />
            <div className={styles.content}>
              <p>Use this address to deposit Bitcoin (BTC): <br></br>
                <span className={styles.txtBold}>3No7we8uD1pGgePwnULaUwxwJL3tHCPEQQ</span></p>
              <button className={styles.btn}>Copy</button>
            </div>
          </div>
          <div>
            <p className={styles.infoTxt}>Deposit to this address at least once to be able to generate a new one</p>
            <button className={styles.bottomBtn}>
              <span className={styles.text}>Private Tip</span>
              <img src={caret} alt="icon" />
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ReceivedModal;
