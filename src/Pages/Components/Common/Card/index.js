import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import cardArrowIcon from '../../../../assets/images/cardArrowIcon.svg'
import cardInfoIcon from '../../../../assets/images/cardInfoIcon.svg'
import flag from '../../../../assets/images/flag.svg'
import timeIcon from '../../../../assets/images/timeIcon.svg'
import impIcon from '../../../../assets/images/impIcon.svg'
import greyStar from '../../../../assets/images/greyStar.svg'
import starIcon from '../../../../assets/images/starIcon.svg'
import bitCoinIcon from '../../../../assets/images/bitCoinIcon.png'
import ethCoinIcon from '../../../../assets/images/ethereum.svg'
import CurrencyFlag from 'react-currency-flags'
import moment from 'moment'
import axios from 'axios'
import store from '../../../../store'
import { addFav, removeFav } from '../../../../actions/user-actions'
import {
  formatNumber,
  capitalize,
  getCurrentCurrencyPrice,
  currentPercentageRate,
  removeCommasAndConvertToNumber,
} from '../../../../utils/helper'
import { Bars } from 'react-loader-spinner'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { setOfferForTrade } from '../../../../actions/offer-actions'
import { useDispatch, useSelector } from 'react-redux'
import { cryptoTypes } from '../../../../constants/cryptoTypes'
import Action from './Action'

const Card = ({
  offers,
  type,
  loading,
  cryptoType,
  showActionDropdown,
  hideActionButton,
}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const [currentRate, setCurrentRate] = useState(0)
  const [conditionOffers, setConditionOffers] = useState([])
  const cointType = useSelector((state) => state?.coinType)
  const sendNotificationForIncomingTrade =async (id,name) => {
    const token = store?.getState()?.loggedInUser?.userInfo?.token;

    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    };
     await axios.post(
      `${process.env.REACT_APP_API_URL}/api/v1/notifications/userViewedNotifications`,
       {receiver: id, description: `Trade is incoming against this offer "${name}"`},
      config
    );
  }
  const tradeOffer = (offer, path) => {
    dispatch(setOfferForTrade(offer))
    sendNotificationForIncomingTrade(offer?.user?._id,offer?.offerLabel)
    navigate('/' + path)
  }
  const { userInfo } = useSelector((state) => state?.loggedInUser)

  useEffect(() => {
    ; (async () => {
      if (cryptoType !== undefined)
        setCurrentRate(
          formatNumber(await getCurrentCurrencyPrice('PKR', cryptoType))
        )
    })()
  }, [cryptoType])

  console.log(offers);
  const currentPercentage = (offer) => {
    if (
      offer &&
      (offer?.cryptoCurrencyType.toLowerCase() === 'btc' ||
        offer?.cryptoCurrencyType.toLowerCase() === 'usdt')
    ) {
      const cryptoVal = offer && offer?.cryptoValue
      const convertedNumber = removeCommasAndConvertToNumber(currentRate)
      const percentageNumber = currentPercentageRate(convertedNumber, cryptoVal)
      return percentageNumber?.toFixed(2)
    } else {
      const cryptoVal = offer?.cryptoValue
      const convertedNumber = removeCommasAndConvertToNumber(currentRate)
      const percentageNumber = currentPercentageRate(convertedNumber, cryptoVal)
      return percentageNumber?.toFixed(2)
    }
  }

  if (offers && offers.length > 0) {
    offers = offers.map((item) => {
      if(item.user.lastSeenTime){
      const time = moment(item.user.lastSeenTime).fromNow()
      item.user.lastSeen = time;
      }
      return item 
    })
  }
  const sendNotificationToVisitedUser =async (id,name) => {
    const token = store?.getState()?.loggedInUser?.userInfo?.token;

    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    };
     await axios.post(
      `${process.env.REACT_APP_API_URL}/api/v1/notifications/userViewedNotifications`,
       {receiver: id, description: `${name} Viewed Your Profile`},
      config
    );
  }
  const goToVendor = (offer, path) => {
    dispatch(setOfferForTrade(offer))
    sendNotificationToVisitedUser(offer?.user?._id,offer?.user?.name)
    navigate('/' + path)
  }

  const expFunc = async () => {
    let currentDate = moment(new Date())
    let mins = 30 * 60 * 1000 //30 mins
    let expireTime = offers && offers?.length > 0 && offers.map((item) => {
      let element = moment(item.createdAt)
      const expTime = currentDate - element > mins
      if (expTime) {
        const token = store?.getState()?.loggedInUser?.userInfo?.token
        let config = {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
        axios.put(
          `${process.env.REACT_APP_API_URL}/api/v1/offer/updateExpired`,
          { _id: item._id },
          config
        )
      }
    })
    return expireTime
  }

  const favAdd = (id) => {
    dispatch(addFav(id))
  }

  const favRemove = (id) => {
    dispatch(removeFav(id))
  }
  useEffect(() => {
    expFunc()
  }, [])


  return (
    <>
      {/* {console.log(conditionOffers, "offers are")} */}
      {offers && offers?.length > 0 ? (
        offers?.map((offer, index) => (
          <div key={index} className={styles.wrap}>
            <div className='main-test'>
              {showActionDropdown && (
                <div
                  className={`${styles.actionWrapper} d-flex justify-content-end mb-2`}
                >
                  <Action offerId={offer?._id} />
                </div>
              )}

              <div className={styles.part1}>
                <div className={styles.header}>
                  <div>{type === 'sell' ? 'Sell To' : 'Buy From'}</div>
                  <div>Rate per {capitalize(offer?.cryptoCurrencyType)}</div>
                </div>
                <div className={styles.from_rate}>
                  <button
                    onClick={() => goToVendor(offer, 'vendor')}
                    className={styles.from}
                  >
                    {offer?.user.name}
                  </button>
                  <div className={styles.rate}>
                    {' '}
                    {
                      formatNumber(offer?.cryptoValue) // 12,345.67
                    }
                    {' ' + offer?.preferredCurrency}
                  </div>
                </div>
                <div className={styles.statsWrap}>
                  <div className={styles.stats1}>
                    Get on Dollar: {currentPercentage(offer)} %
                    <div className={styles.arrowWrap}>
                      <img src={cardArrowIcon} alt='arrowup' />
                      <span>{offer?.offerMargin?.margin}%</span>
                    </div>
                    <img src={cardInfoIcon} alt='info' />
                  </div>
                  <div
                    className={styles.stats2}
                  >{`Limits: ${offer?.tradeMin} - ${offer?.tradeMax} ${offer?.preferredCurrency}`}</div>
                </div>
              </div>
              <div className={styles.part2}>
                <div className={styles.header}>
                  <div>Avg. Trade Speed</div>
                  <div>
                    Pay with{' '}
                   {offer?.preferredCurrency && <CurrencyFlag
                      currency={offer?.preferredCurrency}
                      size='sm'
                    />}
                  </div>
                </div>
                <div className={styles.avgTrade_pay}>
                  <div className={styles.avgTrade}>
                    <img src={timeIcon} alt='time' />
                    {offer?.tradeSpeed === 0 || offer?.tradeSpeed === undefined
                      ? 'No Trade Yet'
                      : offer?.tradeSpeed}
                  </div>
                  <div className={styles.pay}>{offer?.paymentMethod}</div>
                </div>
                <div className={styles.text}>{offer?.offerLabel}</div>
              </div>
              <div className={styles.part3}>
                <div className={styles.seen_imp}>
                  <div className={styles.imp}>
                    <img src={impIcon} alt='imp' /> {offer?.likeCount}
                  </div>
                  <div className={styles.seen}>
                    {location.pathname === '/buy' ? (
                      <div className={styles.active}></div>
                    ) : location.pathname === '/sell' ? (
                      <div className={styles.active}></div>
                    ) : (
                      ''
                    )}
                    {location.pathname === '/buy'
                      ? offer?.user?.isActive
                        ? 'online'
                        : `seen ${offer?.user?.lastSeen}`
                      : location.pathname === '/sell'
                        ? offer?.user?.isActive
                          ? 'online'
                          : `seen ${offer?.user?.lastSeen}`
                        : ''}
                  </div>
                </div>
                {!hideActionButton && (
                  <div className={styles.btn_wrap}>
                    {userInfo?.data?.user?.favorites?.includes(offer?._id) ? (
                      <button
                        className={styles.stared}
                        onClick={() => favRemove(offer?._id)}
                      >
                        <img src={starIcon} alt='star' />
                      </button>
                    ) : (
                      <button
                        className={styles.stared}
                        onClick={() => favAdd(offer?._id)}
                      >
                        <img src={greyStar} alt='star' />
                      </button>
                    )}

                    {type === 'sell' ? (
                      <div
                        className={styles.buy}
                        onClick={() => tradeOffer(offer, 'sell-form')}
                      >
                        SELL
                        <img src={ethCoinIcon} alt='coin' />
                      </div>
                    ) : (
                      <div
                        className={styles.buy}
                        onClick={() => tradeOffer(offer, 'buy-form')}
                      >
                        BUY
                        <img src={ethCoinIcon} alt='coin' />
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))
      ) : loading === true ? (
        <div className={styles.loader}>
          <Bars color='#1FC28F' height={40} width={40} />
        </div>
      ) : (
        <div className={styles.loader}>
          <span>No offers</span>
        </div>
      )}
    </>
  )
}

export default Card
