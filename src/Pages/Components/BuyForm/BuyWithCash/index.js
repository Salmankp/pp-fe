import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import greyInfoIcon from "../../../../assets/images/greyInfoIcon.svg";
import TermsModal from "../../Common/TermsModal";
import KycModal from "../../Common/KycModal";
import ReactSelect from "../../Common/ReactSelect";
import bitcoin from "../../../../assets/images/bitcoin.svg";
import tether from "../../../../assets/images/tether.svg";
import ethereum from "../../../../assets/images/ethereum.svg";
import { useSelector } from "react-redux";
const BuyWithCash = ({ offer, com }) => {
  const limitValue = localStorage.getItem("price_limit");
  const [openModal, setOpenModal] = useState(false);
  const [fiatValue, setFiatValue] = useState(0);
  const [commission, setCommission] = useState(com); //value in percentage of commission 10%
  const [openKycModal, setOpenKycModal] = useState(false);
  const [cryptoValue, setCryptoValue] = useState(0);
  const loggedInUser = useSelector(state => state.loggedInUser);

  const commissionFunc = () => {
    setCommission((commission / 100) * fiatValue);
  };
  const validationBuy = () => {
    commissionFunc();
    if (fiatValue <= offer?.tradeMax && fiatValue >= offer?.tradeMin) {
      if (
        parseFloat(fiatValue) >= parseFloat(limitValue) &&
        !loggedInUser?.userInfo?.data?.user?.verified
      ) {
        setOpenKycModal(true);
      } else setOpenModal(true);
    }
  };
  return (
    <div className={styles.wrap}>
      <TermsModal
        openValue="buy"
        openModal={openModal}
        setOpenModal={setOpenModal}
        offer={offer}
        cryptoValue={cryptoValue}
        commission={commission}
        fiatValue={fiatValue}
      />
      <KycModal
        openKycModal={openKycModal}
        setOpenKycModal={setOpenKycModal}
        offer={offer}
      />
      <h1 className={styles.heading}>
        Buy {offer.cryptoCurrencyType} with GCash ({offer.preferredCurrency}) —
        Instant trade
      </h1>
      <div className={styles.formWrap}>
        <div className={styles.fieldWrap}>
          <label>Pay</label>
          <div className={styles.field}>
            <input
              type="number"
              placeholder="Enter Amount"
              onChange={e => {
                setFiatValue(e.target.value);
                setCryptoValue(e.target.value / offer.cryptoValue);
              }}
              min={offer.tradeMin}
              max={offer.tradeMax}
              value={fiatValue}
            />
            <button>PKR</button>
          </div>
          <div className={styles.info}>
            <img src={greyInfoIcon} alt="info" />
            {`Enter Amount between ${offer.tradeMin} and ${offer.tradeMax} to get started`}
          </div>
        </div>
        <div className={styles.fieldWrap}>
          <label>Receive</label>
          <div className={styles.field2}>
            <input type="number" value={cryptoValue} readOnly={true} />
          </div>
        </div>
      </div>
      <div className={styles.btnWrap}>
        <button onClick={validationBuy} className={styles.buyNow}>
          Buy Now
        </button>

        <div className={styles.text}>
          Reserve {offer?.cryptoCurrencyType} for this trade and start live chat
          with <span className={styles.link}>{offer?.user?.name}</span>
        </div>
      </div>
    </div>
  );
};
export default BuyWithCash;
