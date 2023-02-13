import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import Modal from 'react-bootstrap/Modal';
import ReactSelect from '../ReactSelect';
import crossIcon from '../../../../assets/images/crossIcon.svg';

const options = [
    { value: 'UnresponsiveVendor', label: 'Unresponsive vendor' },
    { value: 'UnresponsiveVendor', label: 'Unresponsive vendor' },
    { value: 'UnresponsiveVendor', label: 'Unresponsive vendor' },
    { value: 'UnresponsiveVendor', label: 'Unresponsive vendor' },
    { value: 'UnresponsiveVendor', label: 'Unresponsive vendor' }
];

const ReportModal = ({ openModal, setOpenModal }) => {
    return (
        <Modal
            className={styles.report_modal}
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
                    <div>
                        <h3 className={styles.heading}>Report</h3>
                    </div>
                    <div>
                        <h4 className={styles.subHeading}>Reason</h4>
                        <div className={styles.outerSpance}>
                            <ReactSelect
                                options={options}
                            />
                        </div>
                        <textarea className={`${styles.txtArea} ${styles.outerSpance}`} placeholder="Describe your problem "></textarea>
                    </div>
                    <div className={styles.btnContainer}>
                        <button type='button' className={styles.btn_close}>close</button>
                        <button type='button' className={styles.btn_start}>Report</button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default ReportModal;
