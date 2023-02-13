import React from 'react';
import styles from './styles.module.scss';
import bankTransferIcon from '../../../../assets/images/bankTransferIcon.svg';
import onlineWalletIcon from '../../../../assets/images/onlineWalletIcon.svg';
import giftCardIcon from '../../../../assets/images/giftCardIcon.svg';
import digitalCurrencyIcon from '../../../../assets/images/digitalCurrencyIcon.svg';
import cashIcon from '../../../../assets/images/cashIcon.svg';
import goodsServicesIcon from '../../../../assets/images/goodsServicesIcon.svg';
import debitCardIcon from '../../../../assets/images/debitCardIcon.svg';
import allPaymentIcon from '../../../../assets/images/allPaymentIcon.svg';

const Payment = () => {
    return (
        <div className={styles.payments}>
            <div className={styles.payment}>
                <img src={bankTransferIcon} alt="payment" />
                <div className={styles.title}>Bank Tranfer</div>
                <div className={styles.subtitle}>Choices: 60</div>
            </div>
            <div className={styles.payment}>
                <img src={onlineWalletIcon} alt="payment" />
                <div className={styles.title}>Online wallet</div>
                <div className={styles.subtitle}>Choices: 60</div>
            </div>
            <div className={styles.payment}>
                <img src={giftCardIcon} alt="payment" />
                <div className={styles.title}>Gift cards</div>
                <div className={styles.subtitle}>Choices: 60</div>
            </div>
            <div className={styles.payment}>
                <img src={digitalCurrencyIcon} alt="payment" />
                <div className={styles.title}>Digital Currency</div>
                <div className={styles.subtitle}>Choices: 60</div>
            </div>
            <div className={styles.payment}>
                <img src={cashIcon} alt="payment" />
                <div className={styles.title}>Cash Payment</div>
                <div className={styles.subtitle}>Choices: 60</div>
            </div>
            <div className={styles.payment}>
                <img src={goodsServicesIcon} alt="payment" />
                <div className={styles.title}>Goods & Services</div>
                <div className={styles.subtitle}>Choices: 60</div>
            </div>
            <div className={styles.payment}>
                <img src={debitCardIcon} alt="payment" />
                <div className={styles.title}>Debit/credit cards</div>
                <div className={styles.subtitle}>Choices: 60</div>
            </div>
            <div className={styles.payment}>
                <img src={allPaymentIcon} alt="payment" />
                <div className={styles.title}>All Payment Methods</div>
                <div className={styles.subtitle}>Choices: 60</div>
            </div>
        </div>
    );
};

export default Payment;
