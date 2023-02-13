import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import UserInfo from '../UserInfo';
import UserIntro from '../UserIntro';
import ActiveOffers from '../ActiveOffers';
import Feedback from '../../Common/Feedback';
import { useSelector } from "react-redux";

const Main = () => {
  const { selectedTradeOffer } = useSelector(state => state.createOffer);
  const data = selectedTradeOffer;
 
  return (
    <div className="container">
      <div className={styles.wrap}>
        <UserInfo offerData={data} />
        <div className={styles.userProfile}>
          <UserIntro offerData={data}/>
          <ActiveOffers offerData={data}/>
          <Feedback heading="Feedback" offer={data}/>
        </div>
      </div>
    </div>
  );
};

export default Main;
