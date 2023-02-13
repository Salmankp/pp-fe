import React, { useState } from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import Details from '../Details'

const Main = () => {
    const [tab, setTab] = useState('transactions');
    return (
        <div className="container" style={{ flex: 1 }}>
            <div className={styles.wrap}>
                <h1 className={styles.heading}>Transaction</h1>
                <div className={styles.tabs}>
                    <Link
                        to="/dashboard"
                        className={`${styles.tab} ${tab === 'active' && styles.active}`}
                        onClick={() => setTab('active')}
                    >
                        Active Trades
                    </Link>
                    <div
                        className={`${styles.tab} ${tab === 'transactions' && styles.active
                            }`}
                        onClick={() => setTab('transactions')}
                    >
                        Transactions
                    </div>
                    <Link
                        to="/dashboard"
                        className={`${styles.tab} ${tab == 'offers' && styles.active}`}
                        onClick={() => setTab('offers')}
                    >
                        Offers
                    </Link>
                </div>
                {tab === 'transactions' && <Details />}
            </div>
        </div>
    );
};
export default Main;
