import React, { useState, useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import { Table } from "react-bootstrap";
import noRecord from "../../../../assets/images/noRecord.png";
import axios from "axios";
import { useSelector } from "react-redux";
import moment from "moment";

const Transaction = (props) => {
  const [data, setData] = useState();
  const isFirstRender = useRef(true);
  const wallet = useSelector((state) => state?.loggedInUser?.userInfo?.data?.wallet);

  const getWalletTransactions = async () => {
    const tokenIs = localStorage.getItem("userInfo");
    const parseToken = JSON.parse(tokenIs || "{}");
    let token = parseToken?.token;

    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/v1/eth/track/0x2d05da52adF1D3cCC772a94aDB3929645bEF3DC8`,
        config
      );
      setData(response?.data?.data?.transaction);
      console.log(response?.data?.data?.transaction, "wallet api main");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!isFirstRender?.current) {
      getWalletTransactions();
    }
    return () => {
      isFirstRender.current = false;
    };
  }, []);

  const ConvertDate = (date) => {
    const dateIs = date?.date?.date;
    const formatted = moment(dateIs).format("MM/DD/YYYY");
    return formatted;
  };

  const [show, setShow] = useState(false);
  return (
    <div className={styles.wrap}>
      <div className={styles.transactionContainer}>
        <h2 className={styles.title}>{props.title}</h2>
        {show ? (
          <div className={styles.noRecord}>
            <img className={styles.noRecordImg} src={noRecord} />
            <p className={styles.txt}>No Records, Your latest ten transactions will appear here</p>
          </div>
        ) : (
          <Table responsive className={styles.table}>
            <thead>
              <tr>
                <th className={styles.title}> Buyer ID</th>
                <th className={styles.title}>Date & Time</th>
                <th className={styles.title}>Amount</th>
                <th className={styles.title}>Description</th>
              </tr>
            </thead>
            {data &&
              data.map((item) => {
                return (
                  <tbody className={styles.tbodyScroll} key={item.blockNumber}>
                    <tr className={styles.data}>
                      <td>{item.from}</td>
                      <td>
                        {" "}
                        <ConvertDate date={item.timeStamp} />
                      </td>
                      <td>{item.value} </td>
                      {wallet?.ethWallet === item.from ? <td> Sent</td> : <td> Recieved </td>}
                    </tr>
                  </tbody>
                );
              })}
          </Table>
        )}
      </div>
    </div>
  );
};
export default Transaction;
