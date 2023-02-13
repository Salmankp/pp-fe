import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import BalanceTab from "../BalanceTab";
import TransactionTab from "../TransactionTab";
import AddressesTab from "../AddressesTab";
import ConvertTab from "../ConvertTab";
import { getCoinMarketPrices } from "../../../../utils/helper";
import axios from "axios";
const Main = () => {
  const [price, setPrice] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      setPrice(await getCoinMarketPrices("PKR"));
    })();
  }, []);

 
  const [tab, setTab] = useState("balance");
  return (
    <div className="container" style={{ flex: 1 }}>
      <div className={styles.wrap}>
        <h1 className={styles.heading}>Wallet</h1>
        <div className={styles.tabs}>
          <div
            className={`${styles.tab} ${tab === "balance" && styles.active}`}
            onClick={() => setTab("balance")}
          >
            Balance
          </div>
          <div
            className={`${styles.tab} ${
              tab === "transaction" && styles.active
            }`}
            onClick={() => setTab("transaction")}
          >
            Transactions
          </div>
          <div
            className={`${styles.tab} ${tab === "convert" && styles.active}`}
            onClick={() => setTab("convert")}
          >
            Convert
          </div>
          <div
            className={`${styles.tab} ${tab === "address" && styles.active}`}
            onClick={() => setTab("address")}
          >
            Address
          </div>
        </div>
        {tab === "balance" && <BalanceTab data={price}  />}
        {tab === "transaction" && (
          <TransactionTab data={price}  />
        )}
        {tab === "address" && <AddressesTab data={price} />}
        {tab === "convert" && <ConvertTab data={price} />}
      </div>
    </div>
  );
};
export default Main;
