import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Card from "../../Common/Card";
import { addMarginToOffer } from "../../../../utils/helper";
import { listSells } from "../../../../actions/sell-actions";
import { listBuys } from "../../../../actions/buy-actions";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../Common/Pagination";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Offers = () => {
  const [tab, setTab] = useState("sell");
  const dispatch = useDispatch();
  const [offers, setOffers] = useState([]);
  const [worldWideOffers, setworldWideOffers] = useState([]);

  const sellList = useSelector(state => state.sellList);
  const buyList = useSelector(state => state.buyList);
  useEffect(() => {
    (async () => {
      setOffers(await addMarginToOffer(buyList?.buy?.offers || []));
      setworldWideOffers(
        await addMarginToOffer(buyList?.buy?.worldWideOffers || [])
      );
    })();
  }, [buyList]);

  useEffect(() => {
    dispatch(listSells("", ""));
    dispatch(listBuys("", ""));
  }, []);

  const setSellTab = type => {
    setTab(type);
    handleSubmit(type);
  };
  const setBuyTab = type => {
    setTab(type);
    handleSubmit(type);
  };

  const handleSubmit = async type => {
    if (type === "buy") {
      setOffers(await addMarginToOffer(sellList?.sell?.offers || []));
      setworldWideOffers(
        await addMarginToOffer(sellList?.sell?.worldWideOffers || [])
      );
    } else {
      setOffers(await addMarginToOffer(buyList?.buy?.offers || []));
      setworldWideOffers(
        await addMarginToOffer(buyList?.buy?.worldWideOffers || [])
      );
    }
  };

  return (
    <div className={styles.wrap}>
      <ToastContainer />
      <div className={styles.topRow}>
        <h3 className={styles.title}>My Offers</h3>
        <div className={styles.tabs}>
          <div
            className={`${styles.tab} ${tab === "sell" && styles.active}`}
            onClick={() => setSellTab("sell")}
          >
            Offers to sell
          </div>
          <div
            className={`${styles.tab} ${tab === "buy" && styles.active}`}
            onClick={() => setBuyTab("buy")}
          >
            Offers to buy
          </div>
        </div>
      </div>
      <div className={styles.cardContainer}>
        <Card offers={offers} type={tab} />
      </div>
      {/* <Pagination /> */}
    </div>
  );
};
export default Offers;
