import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import Modal from 'react-bootstrap/Modal';
import crossIcon from '../../../../assets/images/crossIcon.svg';

const CreateOfferModal = ({ show, setModal }) => {
    return (
        <Modal
            className={styles.dispute_modal}
            show={show}
            onHide={() => setModal(false)}
            centered
        >
            <Modal.Body>
                <div className={styles.wrap}>
                    <img
                        className={styles.cross}
                        src={crossIcon}
                        onClick={() => setModal(false)}
                        alt="crossIcon"
                    />
                    <div>
                        <h3 className={styles.heading}>Tags</h3>
                        <div className={styles.tagsContainer}>
                            <div className={`${styles.alignment} ${styles.mgBottom}`}>
                                <h3 className={`${styles.subHeading} ${styles.setWidth}`}>Name</h3>
                                <h3 className={styles.subHeading}>Discription</h3>
                            </div>
                            <div className={styles.alignment}>
                                <div className={`${styles.title} ${styles.setWidth}`}>
                                    <span className={styles.txt}>no verification needed</span>
                                </div>
                                <p className={styles.description}>you don't need to be a varified user to complete this trade</p>
                            </div>
                            <div className={styles.alignment}>
                                <div className={`${styles.title} ${styles.setWidth}`}>
                                    <span className={styles.txt}>verified paypal only</span>
                                </div>
                                <p className={styles.description}>only varified paypal accounts are accepted</p>
                            </div>
                            <div className={styles.alignment}>
                                <div className={`${styles.title} ${styles.setWidth}`}>
                                    <span className={styles.txt}>photo id required</span>
                                </div>
                                <p className={styles.description}>valid government-issued photo ID required</p>
                            </div>
                            <div className={styles.alignment}>
                                <div className={`${styles.title} ${styles.setWidth}`}>
                                    <span className={styles.txt}>invoices are accepted</span>
                                </div>
                                <p className={styles.description}>get your invoice paid.</p>
                            </div>
                            <div className={styles.alignment}>
                                <div className={`${styles.title} ${styles.setWidth}`}>
                                    <span className={styles.txt}>friends and family</span>
                                </div>
                                <p className={styles.description}>payment will be made by friends and family paypal payment</p>
                            </div>
                            <div className={styles.alignment}>
                                <div className={`${styles.title} ${styles.setWidth}`}>
                                    <span className={styles.txt}>no receipt needed</span>
                                </div>
                                <p className={styles.description}>receipt not required for this trade</p>
                            </div>
                            <div className={styles.alignment}>
                                <div className={`${styles.title} ${styles.setWidth}`}>
                                    <span className={styles.txt}>receipt required</span>
                                </div>
                                <p className={styles.description}>you must provide transaction receipt to complete the trade</p>
                            </div>
                            <div className={styles.alignment}>
                                <div className={`${styles.title} ${styles.setWidth}`}>
                                    <span className={styles.txt}>no third parties</span>
                                </div>
                                <p className={styles.description}>payments must be made from your own account</p>
                            </div>
                            <div className={styles.btnContainer}>
                                <button className={styles.btn_start} type="button">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default CreateOfferModal;
