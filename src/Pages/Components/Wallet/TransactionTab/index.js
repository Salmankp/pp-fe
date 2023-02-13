import React, { useState } from 'react';
import styles from './styles.module.scss';
import Transaction from '../TransactionTable'
import bitcoin from '../../../../assets/images/bitcoin.svg';
import tether from '../../../../assets/images/tether.svg';
import ethereum from '../../../../assets/images/ethereum.svg';
import ReactSelect from '../../Common/ReactSelect';
import { Link } from 'react-router-dom';

const options = [
    { value: 'bitcoin', label: <div><img className={styles.icon} src={bitcoin} /><span className={styles.selectTxt}>Bitcoin </span></div> },
    { value: 'tether', label: <div><img className={styles.icon} src={tether} /><span className={styles.selectTxt}>Tether </span> </div> },
    { value: 'ethereum', label: <div><img className={styles.icon} src={ethereum} /><span className={styles.selectTxt}>Ethereum </span> </div> }
];
const TransactionTab = () => {
    return (
        <>
            <div className={styles.outer}>
                <ReactSelect options={options} />
            </div>
            <Transaction title="Finished Transactions" />
            <div className={styles.btnContainer}>
                <Link to="/transactionDetail" className={styles.viewBtn} >Vielw all Transactions</Link>
            </div>
        </>
    );
};
export default TransactionTab;