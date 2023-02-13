import React, { useState } from "react";
import styles from "./styles.module.scss";
import arrowsicon from "../../../../assets/images/arrowsIcon.svg";
import info from "../../../../assets/images/infoIcon.svg";
import Card from "../../Common/Card";
import HowToSell from "../HowToSell";
import Pagination from "../../Common/Pagination";
import TopFilters from "../../Common/TopFilters/index";
import { useSelector } from "react-redux";

const SellBitcoin = ({
  offers,
  type,
  loading,
  offersCount,
  currentPage,
  setCurrentPage,
  setFilters,
  cryptoType
}) => {
  const [showModal, setShowModal] = useState(false);
  const [values, setValues] = useState({
    activeFilter: false,
    popularFilter: "",
    userType: "",
    offerTags: [],
    priceSort: false
  });
  const { tags } = useSelector(state => state.offerTags);

  const limit = 10;

  return (
    <div className={styles.wrap}>
      <HowToSell showModal={showModal} setShowModal={setShowModal} />
      <TopFilters type={type} setFilters={setFilters} cryptoType={cryptoType} />
      <>
        <div className={styles.cardsWrap}>
          <Card offers={offers} type="sell" loading={loading} cryptoType={cryptoType} />
        </div>
        {/* <div className={styles.more}>See More</div> */}
        {offersCount && (
          <Pagination
            pages={Math.ceil(offersCount / limit)}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </>
    </div>
  );
};

export default SellBitcoin;
