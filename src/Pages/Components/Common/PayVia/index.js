import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Modal from "react-bootstrap/Modal";
import GiftCard from "./GiftCardModal";
import searchIcon from "../../../../assets/images/searchIcon.svg";
import bankTransferIcon from "../../../../assets/images/bankTransferIcon.svg";
import onlineWalletIcon from "../../../../assets/images/onlineWalletIcon.svg";
import giftCardIcon from "../../../../assets/images/giftCardIcon.svg";
import digitalCurrencyIcon from "../../../../assets/images/digitalCurrencyIcon.svg";
import cashIcon from "../../../../assets/images/cashIcon.svg";
import goodsServicesIcon from "../../../../assets/images/goodsServicesIcon.svg";
import debitCardIcon from "../../../../assets/images/debitCardIcon.svg";
import allPaymentIcon from "../../../../assets/images/allPaymentIcon.svg";
import backArrow from "../../../../assets/images/backArrow.svg";
import crossIcon from "../../../../assets/images/crossIcon.svg";

const PayVia = ({ showModal, setShowModal, register }) => {
  const [openModal, setOpenModal] = useState(false); // skip current pop window
  // useEffect(() => {
  //   setOpenModal(showModal);
  // }, [showModal]);

  return (
    <div>
      <GiftCard openModal={openModal} setOpenModal={setOpenModal} />
      <Modal
        className={styles.pay_modal}
        show={false}
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
            <div className={styles.heading}>Pay</div>
            <div className={styles.field}>
              <input type="text" placeholder="Search" />
              <button>
                <img src={searchIcon} alt="searchIcon" />
              </button>
            </div>
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
              <div
                onClick={() => setOpenModal(true) || setShowModal(false)}
                className={styles.payment}
              >
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
            <div className={styles.popular_payments}>
              <div className={styles.heading}>Popular in Pakistan</div>
              <div className={styles.paymentWrap}>
                <div className={styles.popular_payment}>
                  <img src={bankTransferIcon} alt="popularPaymentIcom" />
                  Bank Tranfer
                </div>
                <div className={styles.popular_payment}>
                  <img src={cashIcon} alt="popularPaymentIcom" />
                  EaisyPaisa
                </div>
                <div className={styles.popular_payment}>
                  <img src={cashIcon} alt="popularPaymentIcom" />
                  Skrill
                </div>
                <div className={styles.popular_payment}>
                  <img src={cashIcon} alt="popularPaymentIcom" />
                  Payoneer
                </div>
                <div className={styles.popular_payment}>
                  <img src={cashIcon} alt="popularPaymentIcom" />
                  Paypal
                </div>
                <div className={styles.popular_payment}>
                  <img src={cashIcon} alt="popularPaymentIcom" />
                  JazzCash
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PayVia;
