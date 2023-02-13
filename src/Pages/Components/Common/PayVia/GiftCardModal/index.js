import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import Modal from 'react-bootstrap/Modal'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import searchIcon from '../../../../../assets/images/searchIcon.svg'
import bankTransferIcon from '../../../../../assets/images/bankTransferIcon.svg'
import onlineWalletIcon from '../../../../../assets/images/onlineWalletIcon.svg'
import giftCardIcon from '../../../../../assets/images/giftCardIcon.svg'
import digitalCurrencyIcon from '../../../../../assets/images/digitalCurrencyIcon.svg'
import crossIcon from '../../../../../assets/images/crossIcon.svg'
import GiftCardImg from '../../../../../assets/images/giftCard.svg'
import cashIcon from '../../../../../assets/images/cashIcon.svg'
import goodsServicesIcon from '../../../../../assets/images/goodsServicesIcon.svg'
import debitCardIcon from '../../../../../assets/images/debitCardIcon.svg'
import allPaymentIcon from '../../../../../assets/images/allPaymentIcon.svg'
import { useDispatch, useSelector } from 'react-redux'
import {
  listGiftCard,
  // handleGiftCardModal,
  // getSubPaymentMethods,
} from '../../../../../actions/giftCard-actions'

const GiftCard = ({ openModal, setOpenModal, setPaymentMethod }) => {
  let slider_settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }
  const paymentMethodList = useSelector(
    (state) => state?.giftCard?.paymentMethodList
  )
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState({})
  const [paymentSubMethods, setPaymentSubMethods] = useState([])
  const [searchField, setSearchField] = useState('')
  const dispatch = useDispatch()
  const giftCard = useSelector((state) => state.giftCard)
  const { giftCardsList } = giftCard
  const selectMethod = (target) => {
    if (target.name !== 'All Payment Methods') {
      setPaymentMethod(target.name)
    } else {
      setPaymentMethod('')
    }
    setSelectedPaymentMethod(target)
    setPaymentSubMethods(target?.subPayment)
  }
  useEffect(() => {
    dispatch(listGiftCard())
  }, [])

  let totalGiftCards = 0
  giftCardsList?.map(
    (item) => (totalGiftCards += item?.subPayment?.length || 0)
  )

  const getImage = (key) => {
    switch (key) {
      case 'OnlineWallet':
        return onlineWalletIcon

      case 'BankTransfer':
        return bankTransferIcon

      case 'creditdebit-card':
        return debitCardIcon

      case 'degital-currency':
        return digitalCurrencyIcon

      case 'cash':
        return cashIcon

      case 'goods-services':
        return goodsServicesIcon

      case 'gift-card':
        return GiftCardImg

      default:
        return allPaymentIcon
    }
  }

  const popularSubPaymentMethods = (paymentMethods) => {
    const filterIsPopularSubPayment = paymentMethods?.subPayment?.filter(
      (item) => item?.isPopular === true
    )
    return filterIsPopularSubPayment
  }
  const searchHandler = (e) => {
    setSearchField(e.target.value)
    var filteredItems = selectedPaymentMethod?.subPayment?.filter((item) =>
      item.name.toLowerCase().includes(e.target.value)
    )
    setPaymentSubMethods(filteredItems)
  }

  return (
    <Modal
      className={styles.pay_modal}
      show={openModal}
      onHide={() => setOpenModal(false)}
      centered
    >
      <Modal.Body>
        <div className={styles.wrap}>
          <img
            className={styles.cross}
            src={crossIcon}
            onClick={() => setOpenModal(false)}
            alt='crossIcon'
          />
          <div className={styles.heading}>Pay Via</div>
          <div className={styles.field}>
            <input
              type='text'
              placeholder='Search'
              onChange={(e) => searchHandler(e)}
            />
            <button>
              <img src={searchIcon} alt='searchIcon' />
            </button>
          </div>

          <div className={styles.sliderOuter}>
            <Slider {...slider_settings}>
              {paymentMethodList.map((data, index) => (
                <div
                  key={index}
                  className={`${styles.payment} ${
                    selectedPaymentMethod.slug === data.slug
                      ? `${styles.paymentGreen} bg-light`
                      : styles.paymentGray
                  }`}
                  onClick={() => selectMethod(data)}
                >
                  <img
                    src={getImage(data?.slug)}
                    alt={data.name}
                    key={data.name}
                  />
                  <div className={styles.title}>{data.name}</div>
                  <div className={styles.subtitle}>
                    Choices: {data?.subPayment?.length}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className={styles.outerSpace}>
            {/* <span>Have a gift card you don't need? Trade it here for Bitcoin instantly.</span> */}
            {/* <Link className={styles.viewBtn} to="/giftCard">View Offers for Gift cards</Link> */}
            <span>
              Sell your Bitcoin for big discounts on popular{' '}
              {selectedPaymentMethod?.name} from iTunes, Amazon and more.
            </span>
            <div className={styles.viewBtn} onClick={() => setOpenModal(false)}>
              View Offers for {selectedPaymentMethod?.name}
            </div>
          </div>
          {popularSubPaymentMethods(selectedPaymentMethod)?.length > 0 && (
            <div className={styles.popular_payments}>
              <div className={styles.heading}>
                Popular {selectedPaymentMethod?.name}
              </div>
              <div className={styles.paymentWrap}>
                {popularSubPaymentMethods(selectedPaymentMethod)?.map(
                  (item, index) => (
                    <div key={index} className={styles.popular_payment}>
                      <img
                        src={getImage(selectedPaymentMethod.slug)}
                        alt='popularPaymentIcom'
                      />
                      {item?.name}
                    </div>
                  )
                )}
              </div>
            </div>
          )}

          {paymentSubMethods?.length > 0 && (
            <div className={styles.popular_payments}>
              <div className={styles.heading}>
                {selectedPaymentMethod?.name} (Choices:{' '}
                {paymentSubMethods?.length})
              </div>
              {searchField?.length > 0 && (
                <p>
                  Search result for <b>'{searchField}'</b>
                </p>
              )}

              <div className={styles.paymentWrap}>
                {paymentSubMethods?.map((item, index) => (
                  <div
                    key={index}
                    className={styles.popular_payment}
                    onClick={() => setOpenModal(false)}
                  >
                    <img
                      src={getImage(selectedPaymentMethod.slug)}
                      alt='popularPaymentIcom'
                    />
                    {item?.name}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default GiftCard
