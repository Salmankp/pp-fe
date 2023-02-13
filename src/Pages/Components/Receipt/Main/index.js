import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import bitcoin from '../../../../assets/images/bitCoinIcon.png';
import copyIcon from '../../../../assets/images/vector.png';
import profile from '../../../../assets/images/userprofileIcon.svg';
import bank from '../../../../assets/images/bankTransferIcon.svg';
import payment from '../../../../assets/images/payment.svg';
import trade from '../../../../assets/images/tradeHistory.svg';


const Main = () => {
    return (
        <>
            <div className='container'>
                <div className={styles.wrap}>
                    <h1 className={styles.heading}>Receipt</h1>
                    <div className={styles.topRow}>
                        <div>
                            <img className={styles.img} src={bitcoin} alt="icon" />
                        </div>
                        <div>
                            <h3 className={styles.title}>1040.163178 Tether Purchase Completed</h3>
                            <p className={styles.description}>Trade ID: <span className={styles.userId}>zDbjGstSa</span><img className={styles.copyIcon} src={copyIcon} alt="copy Icon" /></p>
                        </div>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.outer}>
                            <div className={`${styles.box} ${styles.mgRight}`}>
                                <div className={styles.imgContainer}>
                                    <img className={styles.img} src={profile} alt="profile" />
                                    <div className={styles.active}></div>
                                </div>
                                <div>
                                    <span className={styles.title}>Seller</span>
                                    <p className={styles.description}>SacredTurbot201</p>
                                </div>
                            </div>
                            <div className={styles.box}>
                                <div className={styles.imgContainer}>
                                    <img className={styles.img} src={profile} alt="profile" />
                                    <div className={styles.active}></div>
                                </div>
                                <div>
                                    <span className={styles.title}>Buyer</span>
                                    <p className={styles.description}>SacredTurbot201</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.outer}>
                            <div className={`${styles.box} ${styles.mgRight}`}>
                                <img className={styles.icon} src={payment} alt="icon" />
                                <div>
                                    <span className={styles.title}>Amount Paid</span>
                                    <p className={styles.description2}>123.800.00 KES</p>
                                </div>
                            </div>
                            <div className={styles.box}>
                                <img className={styles.icon} src={bank} alt="icon" />
                                <div>
                                    <span className={styles.title}>Payment Method</span>
                                    <p className={styles.description2}>Bank Transfer</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.outer}>
                            <div className={`${styles.box} ${styles.mgRightsm}`}>
                                <img className={styles.icon} src={payment} alt="icon" />
                                <div>
                                    <span className={styles.title}>Started</span>
                                    <p className={styles.description2}>june 5, 2020, 5:43 PM</p>
                                </div>
                            </div>
                            <div className={styles.box}>
                                <img className={styles.icon} src={payment} alt="icon" />
                                <div>
                                    <span className={styles.title}>Completed</span>
                                    <p className={styles.description2}>june 5, 2020, 5:43 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className={styles.subInfo}>Time is in UTC</p>
                    <div className={styles.outerSpace}>
                        <h3 className={styles.title}>Cryptographic proof of payment</h3>
                        <span className={styles.subtitle}>---BEGIN PGP MESSAGE---</span>
                        <span className={styles.subtitle}>Version: 1.0.0</span>
                        <p className={styles.msg}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;
