import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import displayPic from '../../../../assets/images/displayPic.svg'
import noRecord from '../../../../assets/images/noRecord.png'
import moment from 'moment'
import axios from 'axios'
import { Bars } from 'react-loader-spinner'
import { removeFav } from '../../../../actions/user-actions'
import store from '../../../../store'
import { useDispatch, useSelector } from 'react-redux'
import TableActionDropdown from '../TableActionDropdown'
import Tags from './Tags'

const FavoriteOffer = () => {
  const [tab, setTab] = useState('buy')
  const dispatch = useDispatch();
  const [buyFavOffer, setBuyFavOffer] = useState()
  const [sellFavOffer, setSellFavOffer] = useState()
  const fetchFavOffer = async () => {
    const token = store?.getState()?.loggedInUser?.userInfo?.token

    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
    let { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/transection/fetchFavOffer`,
      config
    )
    data.data.docs.favorites = data.data.docs.favorites.map((item) => {
      let new_date = moment(item.createdAt).format('LLL')
      return { ...item, createdAt: new_date }
    })

    let buyFavOffers = data.data.docs.favorites.filter((item) => {
      return item.tradingMethod === 'sell'
    })
    setBuyFavOffer(buyFavOffers)

    let sellFavOffers = data.data.docs.favorites.filter((item) => {
      return item.tradingMethod === 'buy'
    })
    setSellFavOffer(sellFavOffers)
  }
  const favRemove = (id) => {
    dispatch(removeFav(id))
    fetchFavOffer()
    fetchFavOffer()
  }
  useEffect(() => {
    fetchFavOffer()
  }, [])
  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Favorite Offers</h1>
      <div className={styles.outer}>
        <div className={styles.tabs}>
          <div
            className={`${styles.tab} ${tab === 'buy' && styles.active}`}
            onClick={() => setTab('buy')}
          >
            Buy Crypto
          </div>
          <div
            className={`${styles.tab} ${tab === 'sell' && styles.active}`}
            onClick={() => setTab('sell')}
          >
            Sell Crypto
          </div>
        </div>
        {tab === 'buy' && buyFavOffer && buyFavOffer.length ? (
          <table className={styles.table}>
            <tbody>
              <tr>
                <th>Offer By</th>
                <th>Get paid with</th>
                <th>Offer Label</th>
                <th>Crypto Currency Type</th>
                <th>Trading Type</th>
                <th>Offer Created</th>
                <th>Action</th>
              </tr>
              {buyFavOffer.map((item, index) => {
                return (
                  <tr key={index} className={styles.data}>
                    <td>
                      <div className={styles.userInfo}>
                        <div className={styles.imgContainer}>
                          {item?.user?.profilePic ? (
                            <img
                              className={styles.img}
                              src={`data:image/jpeg;base64,${item?.user?.profilePic}`}
                              alt='img'
                            />
                          ) : (
                            <img
                              className={styles.img}
                              src={displayPic}
                              alt='img'
                            />
                          )}

                          {/* <div className={styles.active}></div> */}
                        </div>
                        {item?.user?.name}
                      </div>
                    </td>
                    <td>
                      <Tags offerTags={item?.offerTags}/>
                    </td>
                    <td>
                      <span>{item?.offerLabel}</span>
                    </td>
                    <td>
                      <span>{item?.cryptoCurrencyType}</span>
                    </td>
                    <td>
                      <span>{item?.tradingType}</span>
                    </td>
                    <td>
                      <span>{item?.createdAt}</span>
                    </td>
                    <td>
                      <TableActionDropdown
                        listItems={[<button onClick={() => favRemove(item?._id)}>Remove from Favorite Offers</button>
                      ]}
                      />
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        ) : tab === 'sell' && sellFavOffer && sellFavOffer.length ? (
          <table className={styles.table}>
            <tbody>
              <tr>
                <th>Offer By</th>
                <th>Get paid with</th>
                <th>Offer Label</th>
                <th>Crypto Currency Type</th>
                <th>Trading Type</th>
                <th>Offer Created</th>
                <th>Action</th>
              </tr>
              {sellFavOffer &&
                sellFavOffer.length &&
                sellFavOffer.map((item, index) => {
                  return (
                    <tr key={index} className={styles.data}>
                      <td>
                        <div className={styles.userInfo}>
                          <div className={styles.imgContainer}>
                            {item?.user?.profilePic ? (
                              <img
                                className={styles.img}
                                src={`data:image/jpeg;base64,${item?.user?.profilePic}`}
                                alt='img'
                              />
                            ) : (
                              <img
                                className={styles.img}
                                src={displayPic}
                                alt='img'
                              />
                            )}
                            {/* <div className={styles.active}></div> */}
                          </div>
                          {item?.user?.name}
                        </div>
                      </td>
                      <td>
                      <Tags offerTags={item?.offerTags}/>
                     </td>
                      <td>
                        <span>{item?.offerLabel}</span>
                      </td>
                      <td>
                        <span>{item?.cryptoCurrencyType}</span>
                      </td>
                      <td>
                        <span>{item?.tradingType}</span>
                      </td>
                      <td>
                        <span>{item?.createdAt}</span>
                      </td>
                      <td>
                        <TableActionDropdown
                          listItems={[<button onClick={() => favRemove(item?._id)}>Remove from Favorite Offers</button>]}
                        />
                      </td>
                    </tr>
                  )
                })}
            </tbody>
          </table>
        ) : (tab === 'buy' && buyFavOffer && buyFavOffer.length === 0) ||
          (tab === 'sell' && sellFavOffer && sellFavOffer.length === 0) ? (
          <div className={styles.alignment}>
            <img src={noRecord} alt='no record' />
            <span className={styles.txt}>No Offers Found</span>
          </div>
        ) : (
          <div className={styles.loader}>
            <Bars color='#1FC28F' height={40} width={40} />
          </div>
        )}
      </div>
    </div>
  )
}

export default FavoriteOffer
