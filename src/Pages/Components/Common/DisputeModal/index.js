import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import Modal from 'react-bootstrap/Modal';
import ReactSelect from '../../Common/ReactSelect';
import crossIcon from '../../../../assets/images/crossIcon.svg';

const options = [
    { value: 'UnresponsiveVendor', label: 'Unresponsive vendor' },
    { value: 'UnresponsiveVendor', label: 'Unresponsive vendor' },
    { value: 'UnresponsiveVendor', label: 'Unresponsive vendor' },
    { value: 'UnresponsiveVendor', label: 'Unresponsive vendor' },
    { value: 'UnresponsiveVendor', label: 'Unresponsive vendor' }
];

const DisputeModal = ({ showModal, setShowModal, setShow }) => {
    return (
        <Modal
            className={styles.dispute_modal}
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
                    <div>
                        <h3 className={styles.heading}>Dispute</h3>
                        <p className={styles.txt} >If seller unresponsive and you haven’t made a payment, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                    <div>
                        <h4 className={styles.subHeading}>Reason</h4>
                        <div className={styles.outerSpance}>
                            <ReactSelect
                                options={options}
                            />
                        </div>
                        <textarea className={`${styles.txtArea} ${styles.outerSpance}`} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"></textarea>
                        <span className={styles.subInfo}>199 characters left</span>
                    </div>
                    <div className={styles.btnContainer}>
                        <button type='button' className={styles.btn_close}>close</button>
                        <button onClick={() => setShow('win')} type='button' className={styles.btn_start}>Start Dispute</button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default DisputeModal;
