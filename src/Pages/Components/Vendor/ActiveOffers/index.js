import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import Card from '../../Common/Card';
import axios from 'axios';
import store from '../../../../store';

const ActiveOffers = ({ offerData }) => {
  const [offer, setOffer] = useState('buy');
  const [buyOffer, setBuyOffer] = useState();
  const [offers, setOffers] = useState([]);
  const [sellOffer, setSellOffer] = useState();
  let id = offerData?.user?._id;
  
  const fetchBuyOffer = async () => {
    const token = store?.getState()?.loggedInUser?.userInfo?.token;

    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    };
    let  { data }  = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/offer/getUserAllofferBuy/${id}`,
      config
    );
    setBuyOffer(data?.data?.doc);
  };
  const fetchSellOffer = async () => {
    const token = store?.getState()?.loggedInUser?.userInfo?.token;

    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    };
    let  { data }  = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/offer/getUserAllofferSell/${id}`,
      config
    );
    setSellOffer(data?.data?.doc);
  };
  
  useEffect(() => {
    fetchBuyOffer();
    fetchSellOffer();
  }, []);
const setTab = offer => {
  setOffer(offer);
  if (offer === "buy") {
    setOffers(buyOffer);
  } else {
    setOffers(sellOffer);
  }
};
  useEffect(() => {
    setOffers(buyOffer)
  })
  return (
    <div className={styles.wrap}>
      <div className={styles.heading}>Active Offers</div>
      <div className={styles.offers}>
        <div
          className={`${styles.offer} ${offer === 'buy' && styles.active}`}
          onClick={() => setTab('buy')}
        >
          Buy Crypto
        </div>
        <div
          className={`${styles.offer} ${offer === 'sell' && styles.active}`}
          onClick={() => setTab('sell')}
        >
          Sell Crypto
        </div>
      </div>
      <div className={styles.cardsWrap}>
       <Card offers={offers} type={offer} />
      </div>
    </div>
  );
};

export default ActiveOffers;
