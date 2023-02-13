import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import { addMarginToOffer } from "../../../../utils/helper";
import { listBuys } from "../../../../actions/buy-actions";
import arrowsicon from "../../../../assets/images/arrowsIcon.svg";
import info from "../../../../assets/images/infoIcon.svg";
import Card from "../../Common/Card";
import HowToSell from "../../Sell/HowToSell";
import Pagination from "../../Common/Pagination";
import Payments from "../Payments";
import LeftBar from "../../Common/LeftBar";
import GiftModal from "./GiftModal";

const Bitcoin = () => {
  let navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  //   const [openModal, setOpenModal] = useState(true);

  const dispatch = useDispatch();
  const [offers, setOffers] = useState([]);
  const [newOffers, setNewOffers] = useState([]);
  const [worldWideOffers, setworldWideOffers] = useState([]);

  const buyList = useSelector((state) => state.buyList);
  const offerData = useSelector((state) => state?.giftCard?.filterOfferData);

  useEffect(() => {
    (async () => {
      setNewOffers(await addMarginToOffer(offerData));
      setOffers(await addMarginToOffer(buyList?.buy?.offers || []));
      setworldWideOffers(
        await addMarginToOffer(buyList?.buy?.worldWideOffers || [])
      );
    })();
  }, [buyList]);

  useEffect(() => {
    dispatch(listBuys("", ""));
  }, []);
  return (
    <>
      <div className={styles.wrap}>
        {/* <GiftModal
          openModal={openModal}
          setOpenModal={setOpenModal}
        /> */}
        <HowToSell showModal={showModal} setShowModal={setShowModal} />
        {/* .... */}
        <div className={styles.headerWrap}>
          <div className={styles.text1Wrap}>
            <div>
              <h1 className={styles.heading}>Sell Bitcoin (BTC)</h1>
              <div className={styles.text}>
                Get paid via bank transfers, online wallets, gift cards, and
                over 350 other payment methods.
              </div>
            </div>
            <div>
              <button
                className={styles.howToBtn}
                onClick={() => {
                  setShowModal(true);
                }}
              >
                How to
              </button>
            </div>
          </div>
          {/* top cards */}
          <Payments />
          <div className={styles.text2Wrap}>
            <div className={styles.btnWrap}>
              <div className={styles.checkboxWrap}>
                <input type="checkbox" />
                <label>Vendors active in last 10 min</label>
              </div>
              <button className={styles.IconsBtn}>
                <img src={arrowsicon} alt="arrows" />
              </button>
              <button className={styles.IconsBtn}>
                <img src={info} alt="info" />
              </button>
            </div>
          </div>
        </div>
        <>
          <div className={styles.cardsWrap}>
            <Card offers={newOffers} type="sell" />
          </div>
          <div className={styles.btmWrap}>
            <div className={styles.more}>See More</div>
            <div className={styles.createOffer}>
              <div className={styles.text}>Didn’t Find any suitable offer?</div>
              <button onClick={() => navigate("/create-offer")}>
                Create Offer
              </button>
            </div>
          </div>
          {/* <Pagination /> */}
        </>
      </div>
    </>
  );
};

export default Bitcoin;
