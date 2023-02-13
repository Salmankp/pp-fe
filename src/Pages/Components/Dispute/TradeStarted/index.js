import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import TimerIcon from "../../../../assets/images/timerIcon.svg";
import InfoIcon from "../../../../assets/images/greyInfoIcon.svg";
import PaymentInfo from "../../Common/PaymentInfo";
import { Link, useNavigate } from "react-router-dom";
import ReportModal from "../../Common/ReportModal";
import {
  paidEtherTx,
  transferEscrow
} from "../../../../actions/transaction-actions.js";
// import { transferEscrow } from "../../../../actions/usd-escrow-actions";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { computeTime } from "../../../../utils/helper";
import Countdown from "react-countdown";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store from "../../../../store";

const TradeStarted = ({ show, setShow, transaction }) => {
  console.log('wall',transaction);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [allow, setAllow] = useState(true);
  const { userInfo } = useSelector(state => state.loggedInUser);
  const offerData = transaction?.data?.transaction?.offerId;
  const time = useMemo(
    () => computeTime(offerData, transaction?.data?.transaction?.created),
    [offerData, transaction?.data?.transaction?.created]
  );
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state

      setAllow(false);
    } else {
      // Render a countdown
      return (
        <span>
          {hours}:{minutes}:{seconds}
        </span>
      );
    }
  };
  // const payUsdtTransaction = async () => {
  //   const user = JSON.parse(localStorage.getItem("userInfo"));
  //   const _id = user?.data?.user?._id;
  //   const { data } = await axios.get(
  //     `${process.env.REACT_APP_API_URL}/api/v1/wallet/${_id}`
  //   );
  //   if (data?.data?.doc.length === 0) {
  //     setErrorMsg("Error: Seller Need to create Wallet");
  //     return;
  //   }
  // };
  useEffect(() => {
    setErrorMsg("");
  }, []);

  useEffect(() => {
    if (transaction?.data?.transaction && transaction?.data?.transaction?.paid === true) {
      console.log("here", transaction?.data?.transaction);
      setShow("dispute");
    } else {
      setErrorMsg("Error");
    }
  }, [transaction]);

  const payUsdtTransaction = async () => {
    const user = userInfo;
    const _id = user?.data?.user?._id;

    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/wallet/${_id}`
    );
    if (data?.data?.doc.length === 0) {
      setErrorMsg("Error: Seller Need to create Wallet");
      return;
    }

    const payload = {
      from_address: data?.data?.doc[0]?.wallet?.public,
      from_private_key: process.env.REACT_APP_ADMIN_PRIVATE_KEY,
      to_address: process.env.REACT_APP_ADMIN_TO_ADDRESS,
      trading_id: transaction?.data?.transaction?.transactionId,
      value: transaction?.data?.transaction?.cryptoAmount
        ?.toFixed(16)
        ?.toString(),
      _id: transaction?.data?.transaction?._id,
      receiver: userInfo?.data?.user?._id,
      description: `${transactionData?.data?.transaction?.cryptoAmount} USDT pendig for release 
                    Recipient ${transactionData?.data?.transaction?.buyerWallet}  `
    };
    dispatch(transferEscrow(payload));
  };

  const paidEthTx = () => {
    const data = {
      trading_id: transaction?.data?.transaction?.transactionId,
      value: transaction?.data?.transaction?.cryptoAmount
        ?.toFixed(16)
        ?.toString(),
      _id: transaction?.data?.transaction?._id,
      receiver: userInfo?.data?.user?._id,
      description: `${transactionData?.data?.transaction?.cryptoAmount} Eth pendig for release 
                    Recipient ${transactionData?.data?.transaction?.buyerWallet}  `
    };

    dispatch(paidEtherTx(data));
  };

  const onSubmit = () => {
    if (!allow) return;
    if (offerData?.cryptoCurrencyType === "ETH") {
      paidEthTx();
    } else if (offerData?.cryptoCurrencyType === "USDT") {
      payUsdtTransaction();
    }
  };
  const backToBuy = async () => {
    const token = store?.getState()?.loggedInUser?.userInfo?.token;
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    };
    await axios.put(
      `${process.env.REACT_APP_API_URL}/api/v1/offer/update-cancel`,
      { _id: offerData._id, receiver: offerData.user?._id, 
        description: transaction?.data?.transaction?.transactionId },
      config
    );
    navigate("/buy");
  };
  return (
    <div className={styles.wrap}>
      <ToastContainer />
      {/* <ReportModal openModal={openModal} setOpenModal={setOpenModal} /> */}
      <div className={styles.paymentBlock}>
        <div className={styles.paymentHeadingBlock}>
          <div className={styles.timerIconContainer}>
            <img src={TimerIcon} alt="icon" />
          </div>
          <div>
            <h3 className={styles.title}>
              Please make a payment of{" "}
              {transaction?.data?.transaction?.fiatAmount
                ?.toFixed(2)
                ?.toString()}{" "}
              PKR using Hello Paisa
            </h3>
            <p className={styles.description}>
              Please make a payment of{" "}
              {transaction?.data?.transaction?.fiatAmount
                ?.toFixed(2)
                ?.toString()}{" "}
              PKR using Hello Paisa
            </p>
          </div>
        </div>
        <p className={styles.paymentInfo}>
          Once you’ve made the payment, be sure to click Paid within the given
          time limit. Otherwise the trade will be automatically canceled and the
          Bitcoin will be returned to the seller’s wallet.
        </p>

        <button
          onClick={() => onSubmit(allow)}
          className={`${styles.releaseTradeBtn} ${
            allow ? `${styles.releaseAllowed}` : `${styles.releaseDisabled}`
          }`}
          type="button"
        >
          Paid{" "}
          {allow && (
            <span>
              {/* Time Left:{" "} */}
              {/* <Countdown date={Date.now() + time} renderer={renderer} /> */}
            </span>
          )}
        </button>
        <br />
        <br />
        <p>{errorMsg}</p>
      </div>

      <div className={styles.tradeInfoContainer}>
        <div className={styles.tradeInfo}>
          <button
            type="button"
            className={styles.cancelBtn}
            onClick={backToBuy}
          >
            Cancel Trade
          </button>
          <div>
            <img className={styles.InfoIcon} src={InfoIcon} alt="icon" />
            <span className={styles.txt}>You haven't paid yet</span>
          </div>
        </div>
      </div>
      <PaymentInfo
        offerData={offerData}
        transactionData={transaction?.data?.transaction}
      />
    </div>
  );
};
export default TradeStarted;
