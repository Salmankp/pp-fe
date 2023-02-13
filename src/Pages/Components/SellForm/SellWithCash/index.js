import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import greyInfoIcon from "../../../../assets/images/greyInfoIcon.svg";
import Dropdown from "react-bootstrap/Dropdown";
import AddAccount from "../AddAccount";
import TermsModal from "../../Common/TermsModal";
import { capitalize } from "../../../../utils/helper";
import { getCurrentCurrencyPrice } from "../../../../utils/helper";
import { useDispatch, useSelector } from "react-redux";

import { getBank } from "../../../../actions/bankAccount-actions";

const SellWithCash = ({ offer, com }) => {
  const [showModal, setShowModal] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [receiveAmount, setReceiveAmount] = useState(0);
  const [commission, setCommission] = useState(com); //value in percentage of commission 10%
  const [sendAmount, setSendAmount] = useState(0);
  const [bankId, setBankId] = useState({});
  const [bankData, setBankData] = useState([]);
  let dispatch = useDispatch();
  const [currentTokenPrice, setCurrentTokenPrice] = useState(0);
  const loggedInUser = useSelector(state => state.loggedInUser);

  useEffect(() => {
    (async () => {
      setCurrentTokenPrice(await getCurrentCurrencyPrice("PKR"));
    })();
  }, []);

  useEffect(() => {
    const getData = async () => {
      setBankData(await dispatch(getBank()));
    };
    getData();
  }, []);
  const onChangeSelect = e => {
    setBankId(e?.value);
  };
  const commissionFunc = () => {
    setCommission((commission / 100) * sendAmount);
  };
  const currencyConverter = (value, field) => {
    if (field === "token") {
      // convert selected coin (BTC, USDT, ETH) to preferred currency (PKR.. etc)
      const tokenPrice = currentTokenPrice; // Unit price
      setSendAmount(value);
      let convertedPrice = tokenPrice * value; // Token to currency
      // ((value / tokenPrice) * value).toFixed(2);
      setReceiveAmount(convertedPrice);
    } else if (field === "currency") {
      // const tokenPrice = currentTokenPrice; // Unit price
      // let convertedPrice = value * tokenPrice; // Currency to Token
      //
      // setCurrentTokenPrice(convertedPrice);
    }
  };
  const callFunc = () => {
    setOpenModal(true);
    commissionFunc();
  };
  return (
    <div className={styles.wrap}>
      <AddAccount
        showModal={showModal}
        setShowModal={setShowModal}
        setBankData={setBankData}
      />
      <TermsModal
        openValue="sell"
        openModal={openModal}
        setOpenModal={setOpenModal}
        offer={offer}
        cryptoValue={sendAmount}
        commission={commission}
        fiatValue={receiveAmount}
        bankId={bankId.value}
      />

      <h1 className={styles.heading}>
        Buy {offer.paymentMethod} with {capitalize(offer.cryptoCurrencyType)} (
        {offer.preferredCurrency})
        {/* Sell Bitcoin with GCash (PKR) — Instant trade */}
      </h1>
      <div className={styles.formWrap}>
        <div className={styles.fieldWrap}>
          <label>Recieve</label>
          <div className={styles.field}>
            <input
              type="number"
              min={0}
              value={receiveAmount}
              onChange={e =>
                currencyConverter(Number(e.target.value), "currency")
              }
              placeholder="Enter Amount"
            />
            <button>{offer.preferredCurrency}</button>
          </div>
          <div className={styles.info}>
            <img src={greyInfoIcon} alt="info" />
            Enter Amount and get started
          </div>
        </div>
        <div className={styles.fieldWrap}>
          <label>Pay in {capitalize(offer.cryptoCurrencyType)}</label>
          <div className={styles.field}>
            <input
              type="number"
              min={0}
              // value={currentTokenPrice}
              onChange={e => currencyConverter(Number(e.target.value), "token")}
            />
            <button>ETH</button>
          </div>
        </div>

        <div className={styles.fieldWrap}>
          <label>My bank account</label>
          <div className={styles.field}>
            <Dropdown className="dropdown-container">
              <Dropdown.Toggle
                placeholder="Select bank account: Pakistan PKR"
                variant="success"
                id="dropdown-basic"
              >
                {bankId?.label === undefined
                  ? "Select bank account: Pakistan PKR"
                  : bankId?.label}
              </Dropdown.Toggle>

              <Dropdown.Menu className="drop-menu">
                <Dropdown.Item>
                  <div className="bank-btn" onClick={() => setShowModal(true)}>
                    + Add Bank Information
                  </div>
                </Dropdown.Item>
                {bankData.length ? (
                  <>
                    {bankData.map(data => (
                      <Dropdown.Item
                        key={data.value}
                        onClick={() => setBankId(data)}
                      >
                        {data.label}
                      </Dropdown.Item>
                    ))}
                  </>
                ) : (
                  <Dropdown.Item>No Data</Dropdown.Item>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className={styles.info}>
            <img src={greyInfoIcon} alt="info" />
            Bank is required
          </div>
        </div>
        <div className={styles.btnWrap}>
          <button disabled={false} onClick={callFunc} className={styles.buyNow}>
            {" "}
            Sell Now{" "}
          </button>
          <div className={styles.text}>
            Reserve {capitalize(offer?.cryptoCurrencyType)} for this trade and
            start live chat with{" "}
            <span className={styles.link}>{offer?.user?.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SellWithCash;
