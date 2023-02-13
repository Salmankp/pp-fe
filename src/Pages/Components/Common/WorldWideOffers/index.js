import React, { useState } from "react";
import styles from "./styles.module.scss";
import Card from "../Card";
import { useNavigate } from "react-router-dom";
import Pagination from "../../Common/Pagination";

const WorldWideOffers = ({
  offers,
  type,
  loading,
  offersCount,
  currentPage,
  setCurrentPage,
  cryptoType
}) => {
  const limit = 10;
  let navigate = useNavigate();
  return (
    <div className={styles.wrap}>
      <div className={styles.headerWrap}>
        <h1 className={styles.heading}>Showing Offers Worldwide</h1>
      </div>
      <>
        <div className={styles.cardsWrap}>
          {type == "sell" ? (
            <Card offers={offers} type="sell" cryptoType={cryptoType} />
          ) : (
              <Card offers={offers} type="buy" cryptoType={cryptoType} />
          )}
        </div>
        <div className={styles.btmWrap}>
          {/* <div className={styles.more}>See More</div> */}
          <div className={styles.createOffer}>
            <div className={styles.text}>Didn’t Find any suitable offer?</div>
            <button onClick={() => navigate("/create-offer")}>
              Create Offer
            </button>
          </div>
        </div>
        {offersCount !== 0 && (
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

export default WorldWideOffers;
