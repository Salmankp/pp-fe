import React from 'react';
import styles from './styles.module.scss';
import Modal from 'react-bootstrap/Modal';
import crossIcon from '../../../../../assets/images/crossIcon.svg';
import copyIcon from '../../../../../assets/images/vector.png';

const AddressDetail = ({ showModal, setShowModal }) => {
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
                        <h1 className={styles.heading}>Crypto Address Detail</h1>
                        <div className={styles.priceinfo}>
                            <h4 className={styles.subtitle}>+0BTC</h4>
                            <span className={styles.subTxt}>+0PKR</span>
                        </div>
                        <div className={styles.outer}>
                            <div className={styles.detail}>
                                <span className={styles.title}>Network</span>
                                <span className={styles.description}>Bitcoin</span>
                            </div>
                        </div>
                        <div className={styles.outer}>
                            <div className={styles.detail}>
                                <span className={styles.title}>Created</span>
                                <span className={styles.description}>May 31, 2:01 PM</span>
                            </div>
                        </div>
                        <div className={styles.outer}>
                            <div className={styles.detail}>
                                <span className={styles.title}>Address</span>
                                <div className={styles.link}>
                                    <span className={styles.linktxt}>kjhueyrgfhdbbcvydidhygbdv387ru</span>
                                    <img src={copyIcon} alt="icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default AddressDetail;
