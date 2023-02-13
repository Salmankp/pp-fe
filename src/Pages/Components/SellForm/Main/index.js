import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import SellWithCash from "../SellWithCash";
import AboutOffer from "../../Common/AboutOffer";
import OfferTerms from "../../Common/OfferTerms";
import Feedback from "../../Common/Feedback";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Main = () => {
  let navigate = useNavigate();
  const selectedOffer = useSelector(state => state.createOffer);
  const { sellComission } = useSelector(state => state.comission);
  const { selectedTradeOffer } = selectedOffer;
  const [com, setCom] = useState(0);
  const selectComission = () => {
    if (selectedTradeOffer?.paymentMethodId !== undefined) {
      setCom(
        sellComission?.data[`${selectedTradeOffer?.paymentMethodId[0]?.slug}`]
      );
    }
  };
  useEffect(() => {
    selectComission();
  }, [selectedTradeOffer, sellComission]);
  return (
    <div className={styles.wrap}>
      <div className="container">
        <SellWithCash offer={selectedTradeOffer} type="sell" com={com} />
        <AboutOffer offer={selectedTradeOffer} com={com} />
        <OfferTerms offer={selectedTradeOffer} />
        <Feedback
          heading="Feedback on this Seller"
          offer={selectedTradeOffer}
        />
        <div className={styles.btnWrap}>
          <button className={styles.reportBtn}>Report a problem</button>
        </div>
      </div>
    </div>
  );
};
export default Main;
