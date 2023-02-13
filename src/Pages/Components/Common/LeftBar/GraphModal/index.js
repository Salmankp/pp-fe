import React, { useState } from 'react';
import styles from './styles.module.scss';
import Modal from 'react-bootstrap/Modal';
import Graph from '../../../Common/Graph';
import crossIcon from '../../../../../assets/images/crossIcon.svg';

const GraphModal = ({ opneModal, setOpenModal }) => {
    const [tab, setTab] = useState('week');
    return (
        <div>
            <Modal
                className={styles.pay_modal}
                show={opneModal}
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
                        <h1 className={styles.heading}>1BTC= 39,862.9 USD</h1>
                        <div className={styles.tabs}>
                            <div
                                className={`${styles.tab} ${tab === 'hrs' && styles.active}`}
                                onClick={() => setTab('hrs')}
                            >
                                24 hrs
                            </div>
                            <div
                                className={`${styles.tab} ${tab === 'week' && styles.active
                                    }`}
                                onClick={() => setTab('week')}
                            >
                                1 week
                            </div>
                            <div
                                className={`${styles.tab} ${tab === 'month' && styles.active}`}
                                onClick={() => setTab('month')}
                            >
                                1 month
                            </div>
                        </div>
                        <Graph />
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default GraphModal;
