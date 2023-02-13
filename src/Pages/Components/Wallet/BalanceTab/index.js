import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import BalanceCard from "./BalanceCard";
import TransactionTable from "../TransactionTable";
import icon from "../../../../assets/images/icon.svg";
import tildaIcon from "../../../../assets/images/tilda.svg";
import questionMark from "../../../../assets/images/questionMark.svg";
import bitcoin from "../../../../assets/images/bitcoin.svg";
import tether from "../../../../assets/images/tether.svg";
import ethereum from "../../../../assets/images/ethereum.svg";
import { useDispatch, useSelector } from "react-redux";
import { getAllWalletOfUser } from "../../../../actions/wallet-actions";
import { getCoinMarketPrices } from "../../../../utils/helper";
const BalanceTab = ({ data }) => {
  const dispatch = useDispatch();
  const loggedUserId = useSelector((state) => state?.loggedInUser);
  useEffect(() => {
    dispatch(getAllWalletOfUser(loggedUserId?.data?.user?._id));
  }, []);
  const singleUserWallet = useSelector((state) => state?.walletSingleUser);
  return (
    <div className={styles.wrap}>
      <div className={styles.holdingCard}>
        <div className={styles.topRow}>
          <div className={styles.directionColumn}>
            <img className={styles.icon} src={icon} alt="icon" />
            <span className={styles.txt}>Total Holdings</span>
          </div>
          <div>
            <button>
              <img src={questionMark} />
            </button>
          </div>
        </div>
        <div className={styles.bottmRow}>
          <h4 className={styles.amount}>0 BTC</h4>
          <div>
            <img src={tildaIcon} />
            <span className={styles.price}>0 PKR</span>
          </div>
        </div>
      </div>

      <div className={styles.cardContainer}>
        <BalanceCard
          title="Bitcoin"
          type="bitcoin"
          data={data}
          logo={bitcoin}
        />
        <BalanceCard title="Tether" type="tether" data={data} logo={tether} />
        <BalanceCard
          title="Ethereum"
          type="ethereum"
          data={data}
          logo={ethereum}
        />
      </div>
      <TransactionTable title="Latest Transaction" />
    </div>
  );
};
export default BalanceTab;
