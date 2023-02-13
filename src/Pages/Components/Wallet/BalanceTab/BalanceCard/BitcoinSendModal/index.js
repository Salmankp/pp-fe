import React, { useState } from 'react';
import styles from './styles.module.scss';
import Modal from 'react-bootstrap/Modal';
import ReactSelect from '../../../../Common/ReactSelect';
import crossIcon from '../../../../../../assets/images/crossIcon.svg';
import icon from '../../../../../../assets/images/tilda.svg';
import tilda from '../../../../../../assets/images/tilda.svg';
import check from '../../../../../../assets/images/success.svg';
import caret from '../../../../../../assets/images/right.svg';

const options = [
  {
    value: 'BTC',
    label: (
      <div className={styles.dropDown}>
        <span className={styles.selectTitle}>Bitcoin</span>
        <span className={styles.selectTxt}>BTC </span>
      </div>
    ),
  },
  {
    value: 'PKR',
    label: (
      <div className={styles.dropDown}>
        <span className={styles.selectTitle}>Pakistan Rupees</span>
        <span className={styles.selectTxt}>PKR </span>{' '}
      </div>
    ),
  },
  {
    value: 'SATS',
    label: (
      <div className={styles.dropDown}>
        <span className={styles.selectTitle}>Satoshi</span>
        <span className={styles.selectTxt}>SATS </span>{' '}
      </div>
    ),
  },
  {
    value: 'mBTC',
    label: (
      <div className={styles.dropDown}>
        <span className={styles.selectTitle}>Millibits</span>
        <span className={styles.selectTxt}>mBTC </span>{' '}
      </div>
    ),
  },
];
const BitcoinSend = ({ showModal, setShowModal }) => {
  const [popup, setPopup] = useState(1)
  return (
    <>
      <Modal
        className={styles.modal}
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
      >
        <Modal.Body>
          {
            popup == 1 &&
            <div className={styles.firstwrap}>
              <img
                className={styles.cross}
                src={crossIcon}
                onClick={() => setShowModal(false)}
                alt="crossIcon"
              />
              <div className={styles.heading}>Send from XYZ Wallet</div>
              <div className={styles.content}>
                <span className={styles.title}>Available  0 BTC  </span>
                <div className={styles.alignment}>
                  <div className={styles.field2}>
                    <input type="number" placeholder='BTC Amount' />
                    <ReactSelect backgroundColor={'#fff'} border={'none'} height="35px" minHeight={'35px'} options={options} />
                  </div>
                  <div className={styles.mgLeft}>
                    <img src={icon} alt="icon" />
                    <span>0 PKR</span>
                  </div>
                </div>
                <textarea className={styles.address} type="text" placeholder='To Bitcoin Address'></textarea>
                <p className={styles.infoTxt}>A Bitcoin address looks like this: <b>kjhueyrgfhdbbcvydidhygbdv387ru</b> (this one is example-only)</p>
                <a className={styles.link} href="#">Send to XYZ Username instead</a>
                <button onClick={() => setPopup(2)} className={styles.btn}>Continue</button>
              </div>
            </div>
          }
          {
            popup == 2 &&
            <div className={styles.secondwrap}>
              <div className={styles.outer}>
                <button className={styles.backBtn} onClick={() => setPopup(1)}><img src={caret} alt="icon" /></button>
                <img
                  className={styles.cross}
                  src={crossIcon}
                  onClick={() => setShowModal(false)}
                  alt="crossIcon"
                />
              </div>
              <h1 className={styles.heading}>Confirmation</h1>
              <p className={styles.subheading}>Total Amount</p>
              <h1 className={styles.amount}>0.0043417 BTC</h1>
              <div className={styles.alignment}>
                <div className={styles.mgRight}>
                  <p className={styles.title}>Send From</p>
                  <p className={styles.description}>To Bitcoin Address</p>
                </div>
                <div>
                  <p className={styles.title}>To Recipent</p>
                  <p className={styles.description}>kjhueyrgfhdbbcvydidhygbdv387ru</p>
                </div>
              </div>
              <div className={styles.alignment}>
                <div className={styles.mgRight}>
                  <p className={styles.title}>Amount to send</p>
                  <p className={styles.description}>0.00043417 BTC</p>
                  <div>
                    <img src={icon} alt="icon" />
                    <span className={styles.subInfo}>1800.2 PKR</span>
                  </div>
                </div>
                <div>
                  <p className={styles.title}>XYZ Fee</p>
                  <p className={styles.description}>0 BTC</p>
                  <span className={styles.subInfo}>0 KES</span>
                </div>
              </div>
              <div className={styles.bottomContent}>
                <p className={styles.title}>Network fee</p>
                <p className={styles.description}>0 BTC</p>
                <span className={styles.subInfo}>0 KES</span>
              </div>
              <button onClick={() => setPopup(3)} className={styles.btn}>Continue</button>
            </div>
          }
          {
            popup == 3 &&
            <div className={styles.thirdwrap}>
              <img
                className={styles.cross}
                src={crossIcon}
                onClick={() => setShowModal(false)}
                alt="crossIcon"
              />
              <div className={styles.alignment}>
                <button onClick={() => setPopup(2)}><img src={caret} alt="icon" /></button>
                <h1 className={styles.heading}>Enter 2FA</h1>
              </div>
              <p className={styles.description}>Enter the code sent to you via SMS to confirm this transaction.</p>
              <div className={styles.otpContainer}>
                <input className={styles.otp} type="text" />
                <input className={styles.otp} type="text" />
                <input className={styles.otp} type="text" />
                <input className={styles.otp} type="text" />
                <input className={styles.otp} type="text" />
                <input className={styles.otp} type="text" />
              </div>
              <div className={styles.btnContainer}>
                <button className={styles.btn}>Resend</button>
                <button onClick={() => setPopup(4)} className={styles.btnActive}>Paste Code</button>
              </div>
            </div>
          }
          {
            popup == 4 &&
            <div className={styles.forthwrap}>
              <div className={styles.alignment}>
                <img
                  className={styles.cross}
                  src={crossIcon}
                  onClick={() => setShowModal(false)}
                  alt="crossIcon"
                />
                <button onClick={() => setPopup(3)}><img src={caret} alt="icon" /></button>
              </div>
              <div className={styles.outer}>
                <img src={check} alt="icon" />
                <h1 className={styles.heading}>0.00043417 BTC</h1>
                <div>
                  <img src={tilda} alt="icon" />
                  <span>1800.2 PKR</span>
                </div>
                <p className={styles.description}>Has been successfully sent to your recipent’s Wallet</p>
              </div>
              <div className={styles.btnContainer}>
                <button className={styles.btn}>Send more BTC</button>
                <button onClick={() => setShowModal(false) || setPopup(1)} className={styles.btnActive}>Back to wallet</button>
              </div>
            </div>
          }
        </Modal.Body>
      </Modal>
    </>
  );
};

export default BitcoinSend;
