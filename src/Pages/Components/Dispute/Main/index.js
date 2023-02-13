import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import ChatBox from "../../Common/ChatBox";
import DisputeStarted from "../DisputeStarted";
import DisputeWin from "../DisputeWins";
import TradeStarted from "../TradeStarted";
import DisputeActions from "../DisputeActions";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import axios from "axios";
import store from "../../../../store";

const Main = () => {
  // const transactionData = useSelector(state => state.transactionData);
  const [transactionData, setTransactionData] = useState();
  const location = useLocation();
  const tradingId = location.pathname.split("=")[1];
  const [show, setShow] = useState("started");

  useEffect(() => {
    const fetchTransaction = async () => {
      const token = store?.getState()?.loggedInUser?.userInfo?.token;

      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/v1/transection/getWithTradingId/${tradingId}`,
        config
      );
      setTransactionData(data);
    };
    fetchTransaction().catch(console.error);
  //   const fetchOffer = async () => {
  //     const offerId =
  //       transactionData?.data?.doc?.offerId ||
  //       transactionData?.data?.transaction?.offerId;

  //     const config = {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`
  //       }
  //     };
  //     const { data } = await axios.get(
  //       `${process.env.REACT_APP_API_URL}/api/v1/offer/${offerId}`,
  //       config
  //     );
  //     if (data?.data?.doc?.length !== 0) {
  //       setOfferData(data.data.doc);
  //     }
  //   };
  //   fetchOffer().catch(console.error);
  }, []);
  return (
    <div className="container">
      <div className={styles.wrap}>
        <h1 className={styles.heading}>
          {show === "win" ? "Trade Dispute Wins Buyer" : "Trade Started"}
        </h1>
        <div className={styles.directionRow}>
          {show === "started" && (
            <TradeStarted
              show={show}
              setShow={setShow}
              transaction={transactionData}
              
              // txData={txData}
            />
          )}
          {show === "dispute" && (
            <DisputeStarted
              show={show}
              setShow={setShow}
              transaction={transactionData}
              
              // txData={txData}
            />
          )}
          {show === "actions" && (
            <DisputeActions show={show} setShow={setShow} />
          )}
          {show === "win" && <DisputeWin show={show} setShow={setShow} />}

          <ChatBox title="Seller" transactionData = {transactionData?.data?.transaction}/>
        </div>
      </div>
    </div>
  );
};
export default Main;
