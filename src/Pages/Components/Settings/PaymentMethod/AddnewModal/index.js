import React, { useState } from 'react';
import styles from './styles.module.scss';
import Modal from 'react-bootstrap/Modal';
import ReactSelect from '../../../Common/ReactSelect';
import crossIcon from '../../../../../assets/images/crossIcon.svg';
import SecurityImg from '../../../../../assets/images/securityQuestion.svg';

const options = [
    {
        value: 'WechatPay',
        label: (
            <span className={styles.selectTitle}>Wechat Pay</span>
        ),
    },
    {
        value: 'OnlineWallets',
        label: (
            <span className={styles.selectTitle}>Online Wallets</span>
        ),
    },
];
const SecurityModal = ({ showModal, setShowModal }) => {
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
                        <h1 className={styles.heading}>Add Online Wallet</h1>
                        <div className={styles.outer}>
                            <span className={styles.title}>Wallet name</span>
                            <ReactSelect minWidth="200px" backgroundColor={'#EDEDED'} border={'none'} height="48px" minHeight={'48px'} options={options} />
                        </div>
                        <div className={styles.outer}>
                            <span className={styles.title}>URL</span>
                            <input className={styles.input} type="text" placeholder='Type or Paste your online wallet URL' />
                        </div>
                        <div className={styles.outer}>
                            <span className={styles.title}>Caption</span>
                            <input className={styles.input} type="text" placeholder='Give it a name for your Reference' />
                        </div>
                        <div className={styles.btnContainer}>
                            <button type='button' className={styles.cancelBtn}>Cancel</button>
                            <button type='button' className={styles.continueBtn}>Add</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default SecurityModal;
