import React, {useState,useEffect} from "react";
import styles from "./styles.module.scss";
import ChatBox from "../../Common/ChatBox";
import Summary from "../Summary";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import axios from "axios";
import store from "../../../../store";

const Main = () => {
    // const transactionData = useSelector(state=>state.transactionData)
    const [transactionData, setTransactionData] = useState();
    const location = useLocation();
    const tradingId = location.pathname.split("=")[1];
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
                <h1 className={styles.heading}>Trade Summary</h1>
                <div className={styles.directionRow}>
                    <Summary transactionData={transactionData}/>
                    <ChatBox title="Buyer" transactionData = {transactionData?.data?.transaction}/>
                </div>
            </div>
        </div>
    );
};
export default Main;
