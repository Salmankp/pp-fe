import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import axios from 'axios';
import store from "../../../../store";
import { useNavigate } from "react-router-dom";
import moment from 'moment';


const DetailStatistics = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState();
  const [successfullTrades, setSuccessfullTrades] = useState();
  const [trustedUser, setTrustedUser] = useState();
  const [topOffers, setTopOffers] = useState();
  const [expiredOffers, setExpiredOffers] = useState();
  const [cancelledOffers, setCancelledOffers] = useState();

  const fetchTopOffers = async () => {
    const token = store?.getState()?.loggedInUser?.userInfo?.token;

    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    };
    let  { data }  = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/transection/topOffers`,
      config
    );
    setTopOffers(data?.data?.Array);
  };
  const fetchExpiredOffers = async () => {
    const token = store?.getState()?.loggedInUser?.userInfo?.token;

    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    };
    let  { data }  = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/transection/getExpiredOffer`,
      config
    );
    setExpiredOffers(data?.data?.Array);
  };
  const fetchCancelledOffers = async () => {
    const token = store?.getState()?.loggedInUser?.userInfo?.token;

    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    };
    let  { data }  = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/transection/getCancelledOffer`,
      config
    );
    setCancelledOffers(data?.data?.Array);
  };
  const fetchPaymentMethod = async () => {
    const token = store?.getState()?.loggedInUser?.userInfo?.token;

    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    };
    let  { data }  = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/transection/transPaymentMethods`,
      config
    );
    setPaymentMethod(data?.data?.doc);
  };
  const fetchSuccessfullTrades = async () => {
    const token = store?.getState()?.loggedInUser?.userInfo?.token;

    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    };
    let  { data }  = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/transection/successfullTrades`,
      config
    );
    setSuccessfullTrades(data?.data?.docs);
  };
  const fetchRecentTrustedUser = async () => {
    const token = store?.getState()?.loggedInUser?.userInfo?.token;

    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    };
    let  { data }  = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/users/findRecentTrustedUsers`,
      config
    );
    if(data.data[0].hasTrusted){
      data.data[0].hasTrusted = data.data[0].hasTrusted.map((item) => {
        if(item.trustedTime){
          const time = moment(item.trustedTime).format('LLL');
          return {...item, trustedTime: time}
        }else{
          return item;
        }
      })
    } 
    setTrustedUser(data?.data[0]?.hasTrusted);
  };
  useEffect(() => {
    fetchTopOffers();
    fetchExpiredOffers();
    fetchCancelledOffers();
    fetchPaymentMethod();
    fetchSuccessfullTrades();
    fetchRecentTrustedUser();
  }, []);
  const goToTrade =async () => {
    navigate("/tradeHistory");
  };
  const goToTrusted =async () => {
    navigate("/contact/trustedUser");
  };
  return (
    <div className={styles.wrap}>
      <div className={styles.detailStatistics}>
        <div className={styles.topOffer}>
          <div className={styles.coloredWrap}>
            <div className={styles.head}>Top successful offers</div>
            <div className={styles.desc}>Best offers by closing ratio</div>
          </div>
          {topOffers ? (
                <>
                {topOffers.topOne?.offerId?.subPaymentMethodId?.name ? (
                 <div className={styles.nonColored}>
                 <span>{topOffers.topOne?.offerId?.subPaymentMethodId?.name}</span>
                </div>
                ): ''}
                {topOffers.topTwo?.offerId?.subPaymentMethodId?.name ? (
                 <div className={styles.nonColored}>
                 <span>{topOffers.topTwo?.offerId?.subPaymentMethodId?.name}</span>
                </div>
                ): ''}
                 {topOffers.topThree?.offerId?.subPaymentMethodId?.name ? (
                 <div className={styles.nonColored}>
                 <span>{topOffers.topThree?.offerId?.subPaymentMethodId?.name}</span>
              </div>
                ): ''}
            </>
           ) : (
             <div className={styles.nonColored}>No successful sell trades yet.</div>
          )}
        </div>
        <div className={styles.topOffer}>
          <div className={styles.coloredWrap}>
            <div className={styles.head}>Expired</div>
            <div className={styles.desc}>Most expired offers</div>
          </div>
          {expiredOffers ? (
                <>
                {expiredOffers.topOne?.offerId?.subPaymentMethodId?.name ? (
                 <div className={styles.nonColored}>
                 <span>{expiredOffers.topOne?.offerId?.subPaymentMethodId?.name}</span>
                </div>
                ): ''}
                {expiredOffers.topTwo?.offerId?.subPaymentMethodId?.name ? (
                 <div className={styles.nonColored}>
                 <span>{expiredOffers.topTwo?.offerId?.subPaymentMethodId?.name}</span>
                </div>
                ): ''}
                 {expiredOffers.topThree?.offerId?.subPaymentMethodId?.name ? (
                 <div className={styles.nonColored}>
                 <span>{expiredOffers.topThree?.offerId?.subPaymentMethodId?.name}</span>
              </div>
                ): ''}
            </>
          ) : (
             <div className={styles.nonColored}>No expired offers yet.</div>
          )}
        </div>
      </div>

      <div className={styles.detailStatistics}>
        <div className={styles.topOffer}>
          <div className={styles.coloredWrap}>
            <div className={styles.head}>Cancelled</div>
            <div className={styles.desc}>Most cancelled offers by buyers</div>
          </div>
          {cancelledOffers ? (
                <>
                {cancelledOffers.topOne?.offerId?.subPaymentMethodId?.name ? (
                 <div className={styles.nonColored}>
                 <span>{cancelledOffers.topOne?.offerId?.subPaymentMethodId?.name}</span>
                </div>
                ): ''}
                {cancelledOffers.topTwo?.offerId?.subPaymentMethodId?.name ? (
                 <div className={styles.nonColored}>
                 <span>{cancelledOffers.topTwo?.offerId?.subPaymentMethodId?.name}</span>
                </div>
                ): ''}
                 {cancelledOffers.topThree?.offerId?.subPaymentMethodId?.name ? (
                 <div className={styles.nonColored}>
                 <span>{cancelledOffers.topThree?.offerId?.subPaymentMethodId?.name}</span>
              </div>
                ): ''}
            </>
          ) : (
             <div className={styles.nonColored}>No Cancelled Offers yet.</div>
          )}
        </div>
        <div className={styles.topOffer}>
          <div className={styles.coloredWrap}>
            <div className={styles.head}>Payment methods</div>
            <div className={styles.desc}>Payment methods</div>
          </div>
          {paymentMethod && paymentMethod.map((item,index) => {
            return (
              <div key={index}>
              {item?.offerId?.subPaymentMethodId?.name ? (
                <div className={styles.nonColored}>{item?.offerId?.subPaymentMethodId?.name}</div>
              ) : ''}  
              
              </div>
            )
          })}
        </div>
      </div>

      <div className={styles.detailStatistics}>
        <div className={styles.topOffer}>
          <div className={styles.coloredWrap}>
            <div className={styles.head}>Last 5 successful trades</div>
            <div className={styles.desc}></div>
          </div>
          {successfullTrades && successfullTrades.map((index) => {
            return (
              <div className={styles.nonColored}>
                 <span>{index?.offerId?.subPaymentMethodId?.name}</span>
                 <span>  </span>
                 <span>({index?.cryptoAmount} {index?.cryptoCurrencyType} )</span>
                <br />
                Partner: <span>{index?.transactionId}</span>
              </div>
            )
          })}
          <div className={styles.btn} onClick={goToTrade}>SHOW ALL</div>
        </div>
        <div className={styles.topOffer}>
          <div className={styles.coloredWrap}>
            <div className={styles.head}>Recently trusted users</div>
            <div className={styles.desc}></div>
          </div>
          {trustedUser && trustedUser.map((element, index) => {
        return (  
                <div className={styles.nonColored}>
                  <span>{element.name}</span>
                  <br />
                  <span>Added on: {element.trustedTime}</span>
                </div>
        );
      })}
         <div className={styles.btn} onClick={goToTrusted}>SHOW ALL</div>
        </div>
      </div>
    </div>
  );
};
export default DetailStatistics;
