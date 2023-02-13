import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.scss";
import LeftBar from "../../Common/LeftBar";
import SellBitcoin from "../SellBitcoin";
import PaystoShare from "../../Common/PaystoShare";
import WorldWideOffers from "../../Common/WorldWideOffers";
import { addMarginToOffer } from "../../../../utils/helper";
import {
  listSells,
  listSellsWorldWide
} from "../../../../actions/sell-actions";

const Main = () => {
  const dispatch = useDispatch();
  const [offers, setOffers] = useState([]);
  const [worldWideOffers, setworldWideOffers] = useState([]);
  const [filters, setFilters] = useState({
    cryptoCurrencyType: "bitcoin",
    isVerified: false
  });

  const sellList = useSelector(state => state.sellList);
  const loading = sellList.loading;
  useEffect(() => {
    (async () => {
      setOffers(await addMarginToOffer(sellList?.sellFiltered?.offers || []));
    })();
  }, [sellList?.sellFiltered?.offers]);
  useEffect(() => {
    (async () => {
      setworldWideOffers(
        await addMarginToOffer(sellList?.sellFiltered?.worldWideOffers || [])
      );
    })();
  }, [sellList?.sellFiltered?.worldWideOffers]);

  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageWW, setCurrentPageWW] = useState(1);

  useEffect(() => {
    dispatch(listSells(currentPage, filters));
  }, [currentPage, filters]);
  useEffect(() => {
    dispatch(listSellsWorldWide(currentPageWW, filters));
  }, [currentPageWW, filters]);

  return (
    <>
      <div className={styles.wrap}>
        <LeftBar
          comp="sell"
          setFilters={setFilters}
          cryptoType={filters.cryptoCurrencyType}
        />
        <div className={styles.content}>
          <SellBitcoin
            offers={offers}
            offersCount={sellList?.sellFiltered?.offersCount}
            type={"Sell"}
            loading={loading}
            currentPage={currentPage}
            setFilters={setFilters}
            setCurrentPage={setCurrentPage}
            cryptoType={filters.cryptoCurrencyType}
          />
          <PaystoShare />
          <WorldWideOffers
            offers={worldWideOffers}
            offersCount={sellList?.sellFiltered?.worldWideOfferscount}
            type={"Sell"}
            loading={sellList.loadingWorldWide}
            currentPage={currentPageWW}
            setCurrentPage={setCurrentPageWW}
            cryptoType={filters.cryptoCurrencyType}
          />
        </div>
      </div>
    </>
  );
};

export default Main;
