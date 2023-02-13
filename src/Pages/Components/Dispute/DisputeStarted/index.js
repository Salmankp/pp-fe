import React, { useState, useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import thumbsUp from "../../../../assets/images/noun-thumbs-up.svg";
import InfoIcon from "../../../../assets/images/greyInfoIcon.svg";
import PaymentInfo from "../../Common/PaymentInfo";
import ReportModal from "../../Common/ReportModal";
import {
  disputeEtherTx,
  tradeComplete
} from "../../../../actions/transaction-actions.js";
import { useDispatch, useSelector } from "react-redux";
import Countdown from "react-countdown";
import { useMemo } from "react";
import { computeTime } from "../../../../utils/helper";
import { useNavigate } from "react-router-dom";
import { socket } from "../../../Components/Common/ChatBox/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store from "../../../../store";

const DisputeStarted = ({ show, setShow, transaction  }) => {
  const [errorMsg, setErrorMsg] = useState("");
  const [allow, setAllow] = useState(true);
  const dispatch = useDispatch();
  const isFirstRender = useRef(true);
  let navigate = useNavigate();
  let { userInfo } = useSelector(state => state.loggedInUser);
  const offerData = transaction?.data?.transaction?.offerId
  useEffect(() => {
    if (!isFirstRender?.current) {
      socket.on("transaction-released", data => {
        if (data?.data?.doc?._id === transaction?.data?.transaction?._id)
          dispatch(tradeComplete(data));
      });
    }
    return () => {
      isFirstRender.current = false;
    };
  }, [socket]);

  const time = useMemo(
    () => computeTime(offerData, transaction?.data?.transaction?.started),
    [offerData, transaction?.data?.transaction?.started]
  );

  useEffect(() => {
    if (transaction?.data?.transaction?.status === "dispute") {
      setShow("actions");
    }
    if (transaction?.data?.transactionCompleted) {
      if (transaction?.data?.transaction?.buyerId === userInfo?.data?.user?._id)
        navigate(`/tradeSummary=${transaction?.data?.transaction?.transactionId}`);
      else navigate("/receipt");
    }

    if (!transaction) {
      setErrorMsg("Error");
    }
  }, [transaction]);
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      setAllow(true);
    } else {
      // Render a countdown
      return (
        <span>
          {hours}:{minutes}:{seconds}
        </span>
      );
    }
  };

  const disputeEthTx = () => {
    const data = {
      trading_id: transaction?.data?.transaction?.transactionId?.toString(),
      buyerId: transaction?.data?.transaction?.buyerId,
      _id: transaction?.data?.transaction?._id
    };

    dispatch(disputeEtherTx(data));
  };
  const onSubmit = permit => {
    if (!permit) return;
    // if (offerData?.cryptoCurrencyType?.toLowerCase() === "ethereum")
    disputeEthTx();
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
      { _id: offerData._id },
      config
    );
    navigate("/buy");
  };
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className={styles.wrap}>
      <ToastContainer />
      <ReportModal openModal={openModal} setOpenModal={setOpenModal} />
      <div className={styles.paymentBlock}>
        <div className={styles.paymentHeadingBlock}>
          <div className={styles.timerIconContainer}>
            <img src={thumbsUp} alt="icon" />
          </div>
          <div>
            <div>
              <h3 className={styles.title}>
                You paid{` `}
                {transaction?.data?.transaction?.fiatAmount
                  ?.toFixed(2)
                  ?.toString()}{" "}
                PKR with Faster Payments.
              </h3>
              <p className={styles.description}>
                Once the vendor has confirmed your payment, they will release{" "}
                {transaction?.data?.transaction?.cryptoCurrencyType}{" "}
                {transaction?.data?.transaction?.cryptoAmount?.toFixed(16)?.toString()}{" "}
                {transaction?.data?.transaction?.cryptoCurrencyType?.toLowerCase() ===
                  "ethereum" && `ETH`}{" "}
                {transaction?.data?.transaction?.cryptoCurrencyType?.toLowerCase() ===
                  "bitcon" && `BTC`}{" "}
                {transaction?.data?.transaction?.cryptoCurrencyType?.toLowerCase() ===
                  "usdt" && `TEHTER`}{" "}
                to your Wallet.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.mgRight}>
          <button
            onClick={() => onSubmit(allow)}
            className={`${styles.releaseTradeBtn} ${
              allow ? `${styles.releaseAllowed}` : `${styles.releaseDisabled}`
            }`}
            type="button"
          >
            Start Dispute{" "}
            {!allow && (
              <span>
                Available in{" "}
                <Countdown date={Date.now() + time} renderer={renderer} />
              </span>
            )}
          </button>
          <p className={styles.infoMsg} styles={{ color: "red" }}>
            {errorMsg}
          </p>
          <span className={styles.infoMsg}>
            Click Dispute to report an unresponsive trade partner or any other
            issue you may have.
          </span>
        </div>
        <div className={styles.tradeInfoContainer}>
          <div className={styles.tradeInfo}>
            <button type="button" className={styles.cancelBtn}  onClick={backToBuy}>
              Cancel Trade
            </button>
            <div>
              <img className={styles.InfoIcon} src={InfoIcon} alt="icon" />
              <span className={styles.txt}>You have Paid already</span>
            </div>
          </div>
        </div>
      </div>
      <PaymentInfo
        offerData={offerData}
        transactionData={transaction?.data?.transaction}
      />
      <div className={styles.btngroup}>
        <button
          onClick={() => setOpenModal(true)}
          type="button"
          className={`${styles.actionBtn}`}
        >
          Report
        </button>
        <button type="button" className={styles.actionBtn}>
          View Offer
        </button>
      </div>
    </div>
  );
};
export default DisputeStarted;
