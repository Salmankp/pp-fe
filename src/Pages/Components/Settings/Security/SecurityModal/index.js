import React, { useState } from 'react';
import styles from './styles.module.scss';
import Modal from 'react-bootstrap/Modal';
import crossIcon from '../../../../../assets/images/crossIcon.svg';
import SecurityImg from '../../../../../assets/images/securityQuestion.svg';


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
                        <h1 className={styles.heading}>Improve Security </h1>
                        <span className={styles.description}>To setup 2FA for additional actions on your account, complete</span>
                        <div className={styles.outer}>
                            <img src={SecurityImg} alt="icon" />
                            <div className={styles.txtBlock}>
                                <h3>Security Questions</h3>
                                <span>Set them up in a few minutes</span>
                            </div>
                        </div>
                        <div className={styles.btnContainer}>
                            <button type='button' className={styles.cancelBtn}>Cancel</button>
                            <button type='button' className={styles.continueBtn}>Continue</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default SecurityModal;
