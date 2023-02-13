import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import Card from '../../Common/Card'
import Pagination from '../../Common/Pagination'
import bankTransferIcon from '../../../../assets/images/bankTransferIcon.svg'
import payment from '../../../../assets/images/digitalCurrencyIcon.svg'
import { addMarginToOffer } from '../../../../utils/helper'
import { listSells } from '../../../../actions/sell-actions'
import { listBuys } from '../../../../actions/buy-actions'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import store from '../../../../store'
import { useLocation, useNavigate } from 'react-router-dom'

const UserDetail = () => {
  const id = store?.getState()?.loggedInUser?.userInfo?.data?.user?._id
  const giftCard = useSelector((state) => state?.giftCard?.giftCardsList)
  const { userInfo } = useSelector((state) => state.loggedInUser)
  const { token } = userInfo
  const navigate = useNavigate()
  const location = useLocation()
  const [path, setPath] = useState('')
  const dispatch = useDispatch()
  const [offers, setOffers] = useState([])
  const [offersData, setOffersData] = useState([])
  const [tab, setTab] = useState('buy')
  const [buyOffer, setBuyOffer] = useState()
  const [userOffers, setUserOffers] = useState([])
  const [sellOffer, setSellOffer] = useState()
  const [offerLength, setOfferLength] = useState()
  const sellList = useSelector((state) => state.sellList)
  const buyList = useSelector((state) => state.buyList)

  useEffect(() => {
    setPath(location.pathname)
  }, [])

  useEffect(() => {
    ;(async () => {
      setOffers(await addMarginToOffer(buyList?.buy?.offers || []))
    })()
  }, [buyList])

  useEffect(() => {
    dispatch(listSells('', ''))
    dispatch(listBuys('', ''))
  }, [])

  const getOffersAgainstId = async (id) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/v1/offer/getByPymentId/${id}`,
        config
      )
      if (data?.data?.doc?.length !== 0) {
        setOffers(data.data.doc)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const fetchOffer = async () => {
    const token = store?.getState()?.loggedInUser?.userInfo?.token

    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
    let { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/offer/getUserAlloffer/${id}`,
      config
    )
    setOfferLength(data?.data?.doc.length)
  }

  const fetchBuyOffer = async () => {
    const token = store?.getState()?.loggedInUser?.userInfo?.token

    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
    let { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/offer/getUserAllofferBuy/${id}`,
      config
    )
    setBuyOffer(data?.data?.doc);
    setUserOffers(data?.data?.doc)
  }
  const fetchSellOffer = async () => {
    const token = store?.getState()?.loggedInUser?.userInfo?.token

    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
    let { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/offer/getUserAllofferSell/${id}`,
      config
    )
    setSellOffer(data?.data?.doc)
  }

  useEffect(() => {
    fetchOffer()
    fetchBuyOffer()
    fetchSellOffer()
  }, [])
  const setTabs = (tab) => {
    setTab(tab)
    if (tab === 'buy') {
      setUserOffers(buyOffer)
    } else {
      setUserOffers(sellOffer)
    }
  }
 

  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Buy Bitcoin with 350+ payment options</h1>
      <span className={styles.description}>
        Popular payment methods in pakistan
      </span>
      <div className={styles.payments}>
        {giftCard &&
          giftCard.map((item) => {
            return (
              <div
                className={styles.payment}
                onClick={() => getOffersAgainstId(item._id)}
              >
                <img src={bankTransferIcon} alt='payment' />
                <div className={styles.title}>{item.name}</div>
                <div className={styles.subtitle}>
                  Offers: {item?.subPayment.length}
                </div>
              </div>
            )
          })}
      </div>
      <div>
        <h1 className={styles.title}>Account level</h1>
        <div className={styles.accountContainer}>
          <h3 className={styles.title}>Level 1</h3>
          <span className={styles.description}>
            Account limit: 197781.4 PKR
          </span>
        </div>
      </div>
      <div className={styles.offerContainer}>
        <div className={styles.offers}>
          <h1 className={`${styles.title} ${styles.mgRight}`}>My Offers</h1>
          <div className={styles.countContainer}>
            <span className={styles.counter}>{offerLength}</span>
          </div>
        </div>
        <div className={styles.tabs}>
          <div
            className={`${styles.tab} ${tab === 'buy' && styles.active}`}
            onClick={() => setTabs('buy')}
          >
            Offers to Buy
          </div>
          <div
            className={`${styles.tab} ${tab === 'sell' && styles.active}`}
            onClick={() => setTabs('sell')}
          >
            Offers to Sell
          </div>
        </div>
        <div className={styles.cardContainer}>
          <Card
            offers={userOffers}
            type={tab}
            showActionDropdown={true}
            hideActionButton={true}
          />
        </div>
        {/* <Pagination /> */}
      </div>
    </div>
  )
}

export default UserDetail
