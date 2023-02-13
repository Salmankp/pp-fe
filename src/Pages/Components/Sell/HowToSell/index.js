import React from 'react';
import styles from './styles.module.scss';
import Modal from 'react-bootstrap/Modal';
import backArrow from '../../../../assets/images/backArrow.svg';
import crossIcon from '../../../../assets/images/crossIcon.svg';

const HowToSell = ({ showModal, setShowModal }) => {
  return (
    <Modal
      className={styles.buy_modal}
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
          <div className={styles.heading}>How to Sell Bitcoin</div>
          <div className={styles.content}>
            <p>
              Buy Bitcoin (BTC) at the lowest possible price no matter where you
              are. Paxful works on the principle of peer-to-peer finance that
              enables you to buy BTC with as little as 10 USD. You can buy
              directly from people just like you—without banks or corporations.
            </p>
            <p>
              The best part? No fees when you purchase Bitcoin on Paxful. That
              means you get more crypto for your money. Thanks to nearly 400
              payment methods available on the platform, you can turn your cash
              into Bitcoin with online wallets or bank transfers. You can also
              trade other cryptocurrencies like Ethereum for Bitcoin, or even
              sell gift cards to get fractions of BTC in return.
            </p>
            <p>
              Paxful is protected with vault-level security and regulated in the
              United States as a Money Services Business. The marketplace is
              strictly monitored by our army of analysts and users are verified
              to ensure a safe trading environment. With all these safety
              measures in place, you can rest easy knowing that your information
              and crypto are safe with us.
            </p>
            <p>Here’s how you can start buying Bitcoin on Paxful:</p>

            <ul>
              <li>
                <div className={styles.number}>1.</div>
                <div>
                  <b>Sign up for a xyz account</b> - Create and verify your
                  account to get your{' '}
                  <span className={styles.link}>
                    free Bitcoin wallet with 2FA
                  </span>{' '}
                  security. Setting your account up is easy and can be done in
                  minutes. All you need is a valid email address, phone number,
                  and ID to get started.
                </div>
              </li>
              <li>
                <div className={styles.number}>2.</div>
                <div>
                  <b>Find a vendor</b> - Click <b>Buy</b> from the main menu and
                  select Buy Bitcoin. Set the amount you want to spend, your
                  preferred currency, and your payment method of choice in the
                  sidebar widget to find local and international sellers that
                  match your requirements. We recommend filtering for all the
                  User Types (Ambassador, Associate, etc.) to show the most
                  trustworthy vendors who have undergone an additional layer of
                  security checks from Paxful.
                </div>
              </li>
              <li>
                <div className={styles.number}>3.</div>
                <div>
                  <b>Start the trade</b> - If you can comply with the seller’s
                  terms, set the amount of Bitcoin you want to buy in the widget
                  then click
                  <b> Buy now</b> to start the trade. This will open a live chat
                  with the seller where you will receive further instructions on
                  how to complete the trade. The live chat records all messages
                  and will protect you if you encounter any problems, so please
                  don’t communicate outside of Paxful.
                </div>
              </li>
              <li>
                <div className={styles.number}>4.</div>
                <div>
                  <b>Send payment and receive your BTC</b> - Once all
                  requirements have been fulfilled and the vendor gives the go
                  signal, transfer the payment and click <b>Paid</b>{' '}
                  immediately. At this point, the vendor’s BTC is locked in
                  escrow to prevent your trade partner from accepting your
                  payment and not releasing the crypto. As soon as the seller
                  confirms your payment, the Bitcoin will be released from
                  escrow and transferred to your Paxful Wallet.
                  <p>
                    All that’s left is to give the seller a review of your
                    experience and that’s it! For more information, you can also
                    watch our detailed{' '}
                    <span className={styles.link}>
                      video walkthrough on how to buy Bitcoin on Paxful.
                    </span>
                  </p>
                  <p>
                    If you have any questions, please click on the chat icon at
                    the bottom right corner of the page to get in touch with our
                    support team. We’re here for you 24/7—even on holidays!
                  </p>
                  <p>
                    Buying Bitcoin on Paxful is safe and easy, but don’t take
                    our word for it—
                    <span className={styles.link}>
                      read reviews from countless Paxful users around the world.
                    </span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default HowToSell;
