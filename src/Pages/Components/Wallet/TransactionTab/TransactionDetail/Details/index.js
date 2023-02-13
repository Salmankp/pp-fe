import React, { useState } from 'react';
import styles from './styles.module.scss';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Main = () => {
    const [show, setShow] = useState(true);
    return (
        <div className={styles.wrap}>
            <div className={styles.tabContainer}>
                <div className={`${styles.tabList} ${styles.mgBottom}`}>
                    <button className={`${styles.tab_sm} ${styles.active}`}>All</button>
                    <button className={styles.tab}>Trade Transactions</button>
                    <button className={styles.tab}>Non-trade transactions</button>
                    <button className={styles.tab}>Stablecoin Conversions</button>
                    <button className={styles.tab}>Received</button>
                </div>
                <div className={styles.tabList}>
                    <button className={styles.tab}>Received (<span className={styles.subHeading}>Internal</span>)</button>
                    <button className={styles.tab}>Received(<span className={styles.subHeading}>external</span>)</button>
                    <button className={styles.tab}>Sent out</button>
                    <button className={styles.tab}>Sent out(<span className={styles.subHeading}>Internal</span>)</button>
                    <button className={styles.tab}>Sent out(<span className={styles.subHeading}>external</span>)</button>
                </div>
            </div>
            {show ?
                <div className={styles.tableList}>
                    <Table responsive className={styles.table}>
                        <thead>
                            <tr>
                                <th className={styles.title}>Type</th>
                                <th className={styles.title}>Amount</th>
                                <th className={styles.title}>In crypto</th>
                                <th className={styles.title}>Balance <span className={styles.subHeading}>USD</span></th>
                                <th className={styles.title}>In crypto</th>
                                <th className={styles.title}>Sent to</th>
                                <th className={styles.title}>Transactional Id</th>
                                <th className={styles.title}>Time</th>
                                <th className={styles.title}>Sent to User</th>
                                <th className={styles.title}>Received from user</th>
                                <th className={styles.title}>Trade</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className={styles.data}>
                                <td>Lorem Ipsum</td>
                                <td>123</td>
                                <td>BTC</td>
                                <td>1000</td>
                                <td>BTC</td>
                                <td>Vendor</td>
                                <td>1</td>
                                <td>11/5/2022 11:20AM</td>
                                <td>1000</td>
                                <td>buyer</td>
                                <td>seller</td>
                            </tr>
                            <tr className={styles.data}>
                                <td>Lorem Ipsum</td>
                                <td>123</td>
                                <td>BTC</td>
                                <td>1000</td>
                                <td>BTC</td>
                                <td>Vendor</td>
                                <td>1</td>
                                <td>11/5/2022 11:20AM</td>
                                <td>1000</td>
                                <td>buyer</td>
                                <td>seller</td>
                            </tr>
                            <tr className={styles.data}>
                                <td>Lorem Ipsum</td>
                                <td>123</td>
                                <td>BTC</td>
                                <td>1000</td>
                                <td>BTC</td>
                                <td>Vendor</td>
                                <td>1</td>
                                <td>11/5/2022 11:20AM</td>
                                <td>1000</td>
                                <td>buyer</td>
                                <td>seller</td>
                            </tr>
                            <tr className={styles.data}>
                                <td>Lorem Ipsum</td>
                                <td>123</td>
                                <td>BTC</td>
                                <td>1000</td>
                                <td>BTC</td>
                                <td>Vendor</td>
                                <td>1</td>
                                <td>11/5/2022 11:20AM</td>
                                <td>1000</td>
                                <td>buyer</td>
                                <td>seller</td>
                            </tr>
                            <tr className={styles.data}>
                                <td>Lorem Ipsum</td>
                                <td>123</td>
                                <td>BTC</td>
                                <td>1000</td>
                                <td>BTC</td>
                                <td>Vendor</td>
                                <td>1</td>
                                <td>11/5/2022 11:20AM</td>
                                <td>1000</td>
                                <td>buyer</td>
                                <td>seller</td>
                            </tr>
                            <tr className={styles.data}>
                                <td>Lorem Ipsum</td>
                                <td>123</td>
                                <td>BTC</td>
                                <td>1000</td>
                                <td>BTC</td>
                                <td>Vendor</td>
                                <td>1</td>
                                <td>11/5/2022 11:20AM</td>
                                <td>1000</td>
                                <td>buyer</td>
                                <td>seller</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                :
                <div className={styles.tableList}>
                    <Table responsive className={styles.table}>
                        <thead>
                            <tr>
                                <th className={styles.title}>Type</th>
                                <th className={styles.title}>Amount</th>
                                <th className={styles.title}>In crypto</th>
                                <th className={styles.title}>Balance <span className={styles.subHeading}>USD</span></th>
                                <th className={styles.title}>In crypto</th>
                                <th className={styles.title}>Sent to</th>
                                <th className={styles.title}>Transactional Id</th>
                                <th className={styles.title}>Time</th>
                                <th className={styles.title}>Sent to User</th>
                                <th className={styles.title}>Received from user</th>
                                <th className={styles.title}>Trade</th>
                            </tr>
                        </thead>
                    </Table>
                    <div className={styles.emptyRecord}>
                        <span>No Records, Your latest 100 transactions will appear here</span>
                    </div>
                </div>
            }
        </div>
    );
};
export default Main;