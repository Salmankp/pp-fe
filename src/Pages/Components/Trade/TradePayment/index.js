import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import TimerIcon from "../../../../assets/images/timerIcon.svg";
import InfoIcon from "../../../../assets/images/greyInfoIcon.svg";
import Icon from "../../../../assets/images/vector.png";
import { Link, Navigate, useLocation, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { transferBuyer } from "../../../../actions/usd-escrow-actions";
import axios from "axios";
import PaymentInfo from "../../Common/PaymentInfo";
import SuccessModal from "../../Common/SuccessModal";
import { useNavigate } from "react-router-dom";
const TradePayment = ({ transactionData }) => {
  const [pageType, setPageType] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const { tx } = useSelector(state => state.transactionData);
  const txData = useSelector(state => state.transactionData);
  // const transactionData = useSelector(state => state.transactionData);
  const buyerTrx = useSelector(state => state?.transferBuyer);
  const [openModal, setOpenModal] = useState(false);
  const offerData = transactionData?.data?.transaction?.offerId;
  const dispatch = useDispatch();
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const { userInfo } = useSelector(state => state.loggedInUser);
  const { token } = userInfo;
  const navigate = useNavigate();

  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  };
  useEffect(() => {
    setPageType(searchParams.get("status"));
  }, [searchParams]);
  const onSubmit = () => {
    if (offerData?.cryptoCurrencyType?.toLowerCase() === "ETHEREUM")
      releaseEther();
    else if (offerData?.cryptoCurrencyType?.toLowerCase() === "USDT")
      buyUsdtTransaction();
  };
  const releaseEther = () => {
    const ethPostdata = {
      trading_id: transactionData?.data?.transaction?.transactionId,
      _id: transactionData?.data?.transaction?._id,
      receiverBuyer: userInfo?.data?.user?._id,
      receiverSeller:offerData?.user?._id,
      description: `${transactionData?.data?.transaction?.cryptoAmount} Eth sent 
                    Recipient ${transactionData?.data?.transaction?.sellerWallet}  `
    };

    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/v1/transection/release`,
        ethPostdata,
        config
      )
      .then(res => {
        setSuccessMsg("Sucessfully released");
        if (pageType === "sell") navigate(`/tradeSummary=${transactionData?.data?.transaction?.transactionId}`);
        setErrorMsg("");
        // //
      })
      .catch(err => {
        setErrorMsg(err.message);
      });
  };

  useEffect(() => {
    if (buyerTrx?.transferBuyer?.doc?.paid === true) {
      setOpenModal(true);
    }
  }, [buyerTrx]);

  const buyUsdtTransaction = async () => {
    const _id = userInfo.data.user._id;

    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/wallet/${_id}`,
      config
    );

    if (data?.data?.doc.length === 0) {
      setErrorMsg("Error: Seller Need to create Wallet");
      return;
    }

    const payload = {
      from_address: data?.data?.doc[0]?.wallet?.public,
      from_private_key: process.env.REACT_APP_ADMIN_PRIVATE_KEY,
      to_address: process.env.REACT_APP_ADMIN_TO_ADDRESS,
      trading_id: transactionData?.data?.transaction?.transactionId,
      buyerId: transactionData?.data?.transaction?.buyerId,
      value: transactionData?.data?.transaction?.value.toFixed(18).toString(),
      _id: transactionData?.data?.transaction?._id,
      receiverBuyer: userInfo?.data?.user?._id,
      receiverSeller:offerData?.user?._id,
      description: `${transactionData?.data?.transaction?.cryptoAmount} USDT sent 
                    Recipient ${transactionData?.data?.transaction?.sellerWallet}  `
    };

    dispatch(transferBuyer(payload));
  };

  const onSubmitToken = () => {
    buyUsdtTransaction();
  };
  const backToSell = async () => {
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
    navigate("/sell");
  };
  return (
    <div className={styles.wrap}>
      <SuccessModal openModal={openModal} setOpenModal={setOpenModal} />
      <div className={styles.paymentBlock}>
        <div className={styles.paymentHeadingBlock}>
          <div className={styles.timerIconContainer}>
            <img src={TimerIcon} alt="icon" />
          </div>
          <div>
            <h3 className={styles.title}>
              Please make a payment of PKR using Hello Paisa
            </h3>
            <p className={styles.description}>
              Please make a payment of PKR using Hello Paisa
            </p>
          </div>
        </div>
        <p className={styles.paymentInfo}>
          Once you’ve made the payment, be sure to click Paid within the given
          time limit. Otherwise the trade will be automatically canceled and the
          Bitcoin will be returned to the seller’s wallet.
        </p>
        {pageType && pageType === "buy" ? (
          // <Link to="/dispute" className={styles.releaseTradeBtn} type="button">
          <>
            <button onClick={onSubmit} className={styles.releaseTradeBtn}>
              Release Token
            </button>
            <br></br>
            <p style={{ color: "red" }}>
              {errorMsg !== " " ? errorMsg : successMsg}
            </p>
          </>
        ) : (
          // </Link>
          <button
            onClick={onSubmit}
            style={{ marginTop: "20px" }}
            className={styles.releaseTradeBtn}
            type="button"
          >
            Release Trade
          </button>
        )}
      </div>
      <div className={styles.tradeInfoContainer}>
        <div className={styles.tradeInfo}>
          <button type="button" className={styles.cancelBtn} onClick={backToSell}>
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
        transactionData={transactionData?.data?.transaction}
      />
    </div>
  );
};
export default TradePayment;
