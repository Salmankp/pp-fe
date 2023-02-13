import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Card from "../../Common/Card";
import HowToBuy from "../HowToBuy";
import Pagination from "../../Common/Pagination";
import arrowsicon from "../../../../assets/images/arrowsIcon.svg";
import info from "../../../../assets/images/infoIcon.svg";
import filterIcon from "../../../../assets/images/filterIcon.svg";
import { useSelector } from "react-redux";
import TopFilters from "../../Common/TopFilters/index";
const BuyBitcoin = ({
  offers,
  type,
  reRender,
  loading,
  offersCount,
  currentPage,
  setCurrentPage,
  setFilters,
  cryptoType
}) => {
  const [showModal, setShowModal] = useState(false);
  const limit = 10;
  const [values, setValues] = useState({
    activeFilter: false,
    popularFilter: "",
    userType: "",
    offerTags: [],
    priceSort: false
  });
  const { tags } = useSelector(state => state.offerTags);
  useEffect(() => {
    setFilters(callback => ({ ...callback, ...values }));
  }, [values]);
  return (
    <div className={styles.wrap}>
      <HowToBuy showModal={showModal} setShowModal={setShowModal} />
      <TopFilters setFilters={setFilters} type={type} cryptoType={cryptoType} />
      <>
        <div className={styles.cardsWrap}>
          <Card
            offers={offers}
            type={type}
            reRender={reRender}
            loading={loading}
            cryptoType={cryptoType}
          />
        </div>
        {/* <div className={styles.more}>See More</div> */}
        {offersCount !== 0 && offers.length > 0 && (
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

export default BuyBitcoin;
