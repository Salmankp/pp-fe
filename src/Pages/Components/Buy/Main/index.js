import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import LeftBar from "../../Common/LeftBar";
import BuyBitcoin from "../BuyBitcoin";
import PaystoShare from "../../Common/PaystoShare";
import WorldWideOffers from "../../Common/WorldWideOffers";
import { addMarginToOffer } from "../../../../utils/helper";
import { listBuys, listBuysWorldWide } from "../../../../actions/buy-actions";

import { useDispatch, useSelector } from "react-redux";

const Main = () => {
  const dispatch = useDispatch();
  const [offers, setOffers] = useState([]);
  const [worldWideOffers, setworldWideOffers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageWW, setCurrentPageWW] = useState(1);
  const [filters, setFilters] = useState({
    cryptoCurrencyType: "bitcoin",
    isVerified: false
  });
  const { userInfo } = useSelector(state => state.loggedInUser);
  let buyList = useSelector(state => state.buyList);
  const loading = buyList.loading;

  useEffect(() => {
    const { token } = userInfo;
    if (!token) {
      location.reload();
    }
  }, []);
  useEffect(() => {
    (async () => {
      setOffers(await addMarginToOffer(buyList?.buyFiltered?.offers || []));
    })();
  }, [buyList?.buyFiltered?.offers]);
  useEffect(() => {
    (async () => {
      setworldWideOffers(
        await addMarginToOffer(buyList?.buyFiltered?.worldWideOffers || [])
      );
    })();
  }, [buyList?.buyFiltered?.worldWideOffers]);

  useEffect(() => {
    dispatch(listBuys(currentPage, filters));
  }, [currentPage, filters]);

  useEffect(() => {
    dispatch(listBuysWorldWide(currentPageWW, filters));
  }, [currentPageWW, filters]);
  return (
    <div className={styles.wrap}>
      <LeftBar
        comp="buy"
        setFilters={setFilters}
        cryptoType={filters.cryptoCurrencyType}
      />
      <div className={styles.content}>
        <BuyBitcoin
          offers={offers}
          offersCount={buyList?.buyFiltered?.offersCount}
          type={"Buy"}
          setFilters={setFilters}
          // reRender={reRender}
          loading={loading}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          filter={filters}
          cryptoType={filters.cryptoCurrencyType}
        />
        <PaystoShare />
        <WorldWideOffers
          offers={worldWideOffers}
          offersCount={buyList?.buyFiltered?.worldWideOfferscount}
          type={"Buy"}
          // reRender={reRender}
          loading={buyList?.loadingWorldWide}
          currentPage={currentPageWW}
          setCurrentPage={setCurrentPageWW}
          cryptoType={filters.cryptoCurrencyType}
        />
      </div>
    </div>
  );
};

export default Main;
