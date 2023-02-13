import React from 'react';
import styles from './styles.module.scss';
import down from '../../../../assets/images/down.svg';

const ActiveTrade = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.alignment}>
                <h3 className={styles.heading}>Active Trades</h3>
                <p className={styles.description}>Updating active trades in 24 sec/ <a className={styles.link} href="#">View past trades</a></p>
            </div>
            <div className={styles.bottomContainer}>
                <span className={styles.msg}>No active trades</span>
            </div>
        </div>
    );
};
export default ActiveTrade;
