import React, {useState, useEffect} from "react";
import styles from "./styles.module.scss";
import ChatBox from "../../Common/ChatBox";
import TradePayment from "../TradePayment";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import store from "../../../../store";
import axios from 'axios';

const Main = ({ offer }) => {
  const location = useLocation();
  const tradingId = location.pathname.split("=")[1];
  const [transactionData, setTransactionData] = useState();
  // const transactionData = useSelector(state=>state.transactionData)
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
  }, []);
  return (
    <div className="container">
      <div className={styles.wrap}>
        <h1 className={styles.heading}>Trade Started</h1>
        <div className={styles.directionRow}>
          <TradePayment transactionData = {transactionData} />
          <ChatBox title="Buyer" transactionData = {transactionData?.data?.transaction}/>
        </div>
      </div>
    </div>
  );
};
export default Main;
