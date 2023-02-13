import React, { useState, useEffect } from 'react'
import { Alert } from 'react-bootstrap'
import styles from './styles.module.scss'
import { setFormStep2 } from '../../../../actions/offer-actions'
import { useDispatch, useSelector } from 'react-redux'
import AdvanceModal from './AdvanceModal'
import ReactSelect from '../../Common/ReactSelect'
import FixedPriceMarket from './FixedPriceMarket/FixedPriceMarket'
import GiftCardDenominations from './GiftCardDenominations'
const Pricing = () => {
  const dispatch = useDispatch()

  const createOffer = useSelector((state) => state.createOffer)
  const { step2 } = createOffer.formValues
  const [advanceModal, setAdvanceModal] = useState()
  const [showFixedPrice, setShowFixedPrice] = useState(false)
  const [marginError, setMarginError] = useState(false)
  const [timeError, setTimeError] = useState(false)
  const [step2formValues, setStep2formValues] = useState(step2)

  const offerDetails = useSelector((state) => state.offerDetails)

  useEffect(() => {
    dispatch(setFormStep2(step2formValues))
  }, [step2formValues])

  const validateValueMax = (e) => {
    setStep2formValues({
      ...step2formValues,
      fixedAmountTrade: 0,
      isFixedAmountTrade: false,
      tradeMax: Number(e.target.value),
    })
  }

  const validateValueMin = (event) => {
    setStep2formValues({
      ...step2formValues,
      isFixedAmountTrade: false,
      fixedAmountTrade: 0,
      tradeMin: Number(event.target.value),
    })
  }

  const validateOfferMarginMax = () => {
    setMarginError(false)
    setStep2formValues({
      ...step2formValues,
      offerMargin: { ...step2formValues?.offerMargin, margin: step2formValues?.offerMargin?.margin + 1 },
    })
  }

  const validateOfferMarginMin = () => {
    if (step2formValues?.offerMargin?.margin > 0) {
      if (step2formValues?.offerMargin?.margin <= 5) {
        setMarginError(true)
      } else {
        setStep2formValues({
          ...step2formValues,
          offerMargin: { ...step2formValues?.offerMargin, margin: step2formValues?.offerMargin?.margin - 1 },
        })
      }
    }
  }

  const validateOfferTimeLimitMax = () => {
    setTimeError(false)
    setStep2formValues({
      ...step2formValues,
      offerTimeLimit: step2formValues?.offerTimeLimit + 1,
    })
  }

  const validateOfferTimeLimitMin = () => {
    if (step2formValues?.offerTimeLimit > 0) {
      if (step2formValues?.offerTimeLimit <= 30) {
        setTimeError(true)
      } else {
        setStep2formValues({
          ...step2formValues,
          offerTimeLimit: step2formValues?.offerTimeLimit - 1,
        })
      }
    }
  }

  const fixedAmoutHandler = (type) => {
    setShowFixedPrice(!showFixedPrice)
    if (type === 'fixedAmount') {
      setStep2formValues({
        ...step2formValues,
        tradeMin: 0,
      })
    }
    if (type === 'useRange') {
      setStep2formValues({
        ...step2formValues,
        fixedPriceAmount: 0,
      })
    }
  }
  const fixedPriceChangeHandler = (e) => {
    setStep2formValues({
      ...step2formValues,
      fixedPriceAmount: Number(e.value),
    })
  }

  const marginAdvanceHandler = () => {

    setStep2formValues({
      ...step2formValues,
      offerMargin: step2formValues?.offerMargin?.marginType === 'basic' ? { ...step2formValues?.offerMargin, marginType:  'advance' } : { ...step2formValues?.offerMargin, marginType: 'basic', source: '', pricePoint: '' } ,
    })
  }

  return (
    <div className={styles.wrap}>
      <AdvanceModal showModal={advanceModal} setShowModal={setAdvanceModal} />

      <div className={styles.trade_pricing}>
        <div className={styles.heading}>Trade Pricing</div>
        <div className={styles.mainWrap}>
          <div className={styles.sbwrap}>
            <input
              type='radio'
              name='toggler'
              onChange={() => {
                setStep2formValues({
                  ...step2formValues,
                  tradingType: 'marketPrice',
                })
              }}
              id='MarketPlace'
              checked={step2formValues?.tradingType === 'marketPrice'}
            />

            <label htmlFor='MarketPlace'>
              <div className={styles.circle}></div>
              <div>
                <span>Market Place</span>Your offer’s selling price will change
                according to the market price of Bitcoin.
              </div>
            </label>
          </div>
          <div className={styles.sbwrap}>
            <input
              type='radio'
              name='toggler'
              id='FixedPrice'
              onChange={() => {
                setStep2formValues({
                  ...step2formValues,
                  tradingType: 'fixedPrice',
                })
              }}
              checked={step2formValues?.tradingType === 'fixedPrice'}
            />
            <label htmlFor='FixedPrice'>
              <div className={styles.circle}></div>
              <div>
                <span>Fixed Price</span>Your offer’s selling price is locked
                when you create it, and won’t change with the market price.
              </div>
            </label>
          </div>
        </div>
      </div>

      <div className={styles.trade_limits}>
        <div className={styles.heading}>Offer Trade Limits</div>
        <div className={styles.limit_btn}>
          {showFixedPrice ? (
            <div>
              <label className={`${styles.title} mb-3`}>Fixed Price</label>
              <div className='mb-1'>
                <ReactSelect
                  parentCallback={fixedPriceChangeHandler}
                  options={[
                    { value: '2500', label: '2500' },
                    { value: '5000', label: '5000' },
                    { value: '7500', label: '7500' },
                    { value: '10000', label: '10000' },
                  ]}
                  value={step2formValues?.fixedPriceAmount}
                />
              </div>
              <div className={styles.headDesc}>
                Trade partners can start a trade with the following fixed
                amounts: PKR.
              </div>
            </div>
          ) : (
            <div>
              <div className={styles.limitsWrap}>
                <div className={styles.limit}>
                  <p className={styles.title}>
                    Minimum <span className={styles.required}> *</span>
                  </p>
                  <input
                    type='number'
                    placeholder='0'
                    defaultValue={step2formValues?.tradeMin}
                    value={step2formValues?.tradeMin}
                    onChange={(event) => {
                      validateValueMin(event)
                    }}
                  />
                  <span className={styles.comment}>
                    {' '}
                    Minimum value should be 10 or more than 10
                  </span>
                </div>
                <div className={styles.limit}>
                  <p className={styles.title}>
                    Maximum <span className={styles.required}> * </span>
                  </p>

                  <input
                    type='number'
                    placeholder='0'
                    value={step2formValues?.tradeMax}
                    onChange={(e) => {
                      validateValueMax(e)
                    }}
                  />
                  <span className={styles.comment}>
                    {' '}
                    Maximum value should be 80,000 or less than 80,000
                  </span>
                </div>
              </div>
            </div>
          )}

          <div className={styles.seprator}></div>

          <div className={styles.btnWrap}>
            {!showFixedPrice && (
              <button onClick={() => fixedAmoutHandler('fixedAmount')}>
                Use fixed amount
              </button>
            )}
            {showFixedPrice && (
              <button onClick={() => fixedAmoutHandler('useRange')}>
                Use range
              </button>
            )}
          </div>
        </div>
        <div className='mt-3'>
          <Alert variant='info'>
            If the minimum you set in your currency drops below 10.00 USD in
            value, we’ll prompt the buyers to pick an amount worth at least
            10.00 USD to proceed with the trade.
          </Alert>
          <Alert variant='info'>
            Please provide ID and proof of address to increase your trade limit
            to 11307575 PKR
          </Alert>
          <Alert variant='warning'>
            To list this offer on the Marketplace, you'll need at least 2,262
            PKR worth of cryptocurrency in your Paxful Wallet.
          </Alert>
        </div>
      </div>
      <GiftCardDenominations />
      {createOffer?.formValues?.step2?.tradingType === 'marketPrice' && (
        <div className={styles.offer_margin_limit}>
          <p className={styles.heading}>
            Offer Margin <span className={styles.required}> *</span>
          </p>

          <div className={styles.field_btn}>
            <div className={styles.fieldWrap}>
              <div className={styles.field}>
                <button
                  onClick={() => {
                    validateOfferMarginMax()
                  }}
                >
                  +
                </button>
                <input
                  type='number'
                  value={step2formValues?.offerMargin?.margin}
                  min={0}
                  onChange={(e) => {
                    setStep2formValues({
                      ...step2formValues,
                      offerMargin: { ...step2formValues.offerMargin, margin: Number(e.target.value) },
                    })
                  }}
                />
                <button
                  onClick={() => {
                    validateOfferMarginMin()
                  }}
                >
                  -
                </button>
              </div>
              <button>$</button>
            </div>
            <div className={styles.seprator}></div>
            <div className={styles.btnWrap}>
              <button onClick={marginAdvanceHandler}>{step2formValues?.offerMargin?.marginType === 'basic' ? 'Advanced' : 'Basic'}</button>
            </div>
          </div>

          {step2formValues?.offerMargin?.marginType === 'advance' && <div>
            <p className={`${styles.heading} mt-4`}>
              Source <span className={styles.required}> *</span>
            </p>
            <div className='mb-1'>
              <ReactSelect
                parentCallback={(e) => {
                  setStep2formValues({
                    ...step2formValues,
                    offerMargin: { ...step2formValues?.offerMargin, source: e },
                  })
                }}
                options={[
                  { value: 'Paxful', label: 'Paxful' },
                  { value: 'Binance', label: 'Binance' },
                  { value: 'Bitfinex', label: 'Bitfinex' },
                  { value: 'Coinbase Pro', label: 'Coinbase Pro' },
                  { value: 'Bitstamp', label: 'Bitstamp' },
                  { value: 'Gemini', label: 'Gemini' },
                  { value: 'Kraken', label: 'Kraken' },
                ]}
                value={step2formValues?.offerMargin?.source}
              />
            </div>
          </div>}
          {step2formValues?.offerMargin?.marginType === 'advance' && <div>
            <p className={`${styles.heading} mt-4`}>
              Price point <span className={styles.required}> *</span>
            </p>
            <div className='mb-1'>
              <ReactSelect
                parentCallback={(e) => {
                  setStep2formValues({
                    ...step2formValues,
                    offerMargin: { ...step2formValues?.offerMargin, pricePoint: e },
                  })
                }}
                options={[
                  { value: 'Last', label: 'Last' }
                ]}
                value={step2formValues?.offerMargin?.pricePoint}
              />
            </div>
          </div>}


          {marginError === true && (
            <span className={styles.error}>
              {' '}
              Offer margin should be greater or equal to <b>5</b>
            </span>
          )}
          <div className={styles.subtext}>On each Trade</div>
          <div className={styles.text}>
            Current Bitcoin market price: <b>5,380,706.55 PKR</b>
            <br />
            <br />
            {step2formValues?.offerMargin?.marginType === 'advance' ?
              <div className={styles.bottomDesc}>
                I will get <strong>{step2formValues?.offerMargin?.margin}%</strong> of ApplePay value through <strong>Paxful</strong> on
                <strong>Last</strong> price point.
                <br /> So for every <strong>10.00 USD</strong> worth of <strong>Bitcoin</strong> you
                sell (your minimum trade limit), you will recieve an
                <strong>10.60 USD</strong> in return.
              </div> :
              <div className={styles.bottomDesc}>So for every <b>1,899.00 PKR</b> worth of Bitcoin you sell (your
                minimum trade limit), you will receive an <b>1,993.95 PKR</b> in
                return.</div>}
          </div>
        </div>
      )
      }

      {
        createOffer?.formValues?.step2?.tradingType === 'fixedPrice' && (
          <FixedPriceMarket
            value={step2formValues?.fixedPriceMarketRate}
            onChange={(e) => {
              setStep2formValues({
                ...step2formValues,
                fixedPriceMarketRate: Number(e),
              })
            }} />
        )
      }

      <div className={styles.offer_margin_limit}>
        <p className={styles.heading}>
          Offer Time Limit <span className={styles.required}> *</span>
        </p>

        <div className={styles.field_btn}>
          <div className={styles.fieldWrap}>
            <div className={styles.field}>
              <button
                onClick={() => {
                  validateOfferTimeLimitMax()
                }}
              >
                +
              </button>
              <input
                type='number'
                value={step2formValues?.offerTimeLimit}
                min={0}
                onChange={(e) => {
                  setStep2formValues({
                    ...step2formValues,
                    offerTimeLimit: Number(e.target.value),
                  })
                }}
              />
              <button
                onClick={() => {
                  validateOfferTimeLimitMin()
                }}
              >
                -
              </button>
            </div>
            <button>Minutes</button>
          </div>
        </div>
        {timeError === true && (
          <span className={styles.error}>
            {' '}
            You can allow anywhere between 30 and 90 min for making payments
          </span>
        )}
        <div className={styles.text}>
          This is how much time your trade partner has to make the payment and
          click <b>Paid</b> before the trade is automatically canceled.
        </div>
      </div>
    </div >
  )
}

export default Pricing
