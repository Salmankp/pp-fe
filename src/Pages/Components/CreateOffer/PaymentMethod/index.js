import { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import { cryptoTypes } from '../../../../constants/cryptoTypes'
import tether from '../../../../assets/images/tether.svg'
import bitcoin from '../../../../assets/images/bitcoin.svg'
import ethereum from '../../../../assets/images/ethereum.svg'
import ReactSelect from '../../Common/ReactSelect'
import { useDispatch, useSelector } from 'react-redux'
import { setFormStep1 } from '../../../../actions/offer-actions'
import GiftCard from '../GiftCard'

const PaymentMethod = ({ offerId }) => {
  const dispatch = useDispatch()
  const step1 = useSelector((state) => state?.createOffer?.formValues?.step1)
  const paymentMethodList = useSelector(
    (state) => state?.giftCard?.paymentMethodList
  )
  const [formValues, setFormValues] = useState(step1)

  useEffect(() => {
    setFormValues(step1)
  }, [step1])

  useEffect(() => {
    (async () => {
      await dispatch(setFormStep1(formValues))
    })()
  }, [formValues])

  const selectHandleCallback = (_data) => {
    if (_data.type === 'paymentMethod') {
      setFormValues({ ...formValues, paymentMethod: _data })
    }
    if (_data.type === 'preferredCurrency') {
      setFormValues({ ...formValues, preferredCurrency: _data })
    }
    if (_data.type === 'onlineWallet') {
      setFormValues({ ...formValues, onlineWallet: _data })
    }
  }

  const handleChange = (_name, _val) => {
    if(_name === 'paymentCards'){
      console.log(_name, _val);
      setFormValues({...formValues ,[_name]: _val});
    }else{
      setFormValues({...formValues ,[_name]: _val});
    }
  }

  return (
    <div className={styles.wrap}>
      <div className={`${styles.paymentWrap}`}>
        <div className='row'>
          <div className='col-md-6'>
            <div className={styles.currency}>
              <div className={styles.chooseCurrency}>
                <div className={styles.cheading}>
                  Choose your cryptocurrency
                </div>
                <div className={styles.currencyWrap}>
                  {cryptoTypes.map((data, index) => (
                    <button
                      key={index}
                      type='button'
                      disabled={offerId || formValues?.paymentCards?.length > 0}
                      className={`${
                        formValues?.cryptoCurrencyType === data.key &&
                        styles.active
                      } ${styles.currency}`}
                      onClick={() =>
                        setFormValues({
                          ...formValues,
                          cryptoCurrencyType: data.key,
                        })
                      }
                    >
                      <img
                        src={
                          data?.currency === 'USDT'
                            ? bitcoin
                            : data?.currency === 'ETH'
                            ? ethereum
                            : tether
                        }
                        alt='bitcoin'
                      />
                      {data.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.sale_buy}>
                <div className={styles.sheading}>
                  What would you like to do?
                </div>
                <div className={styles.mainWrap}>
                  <div className={styles.sbwrap}>
                    <input
                      disabled={offerId || formValues?.paymentCards?.length > 0}
                      type='radio'
                      name='sell'
                      onChange={() =>
                        setFormValues({
                          ...formValues,
                          tradingMethod: 'sell',
                        })
                      }
                      checked={formValues?.tradingMethod === 'sell'}
                      id='sell'
                    />
                    <label htmlFor='sell'>
                      <div className={styles.circle}></div>
                      <div>
                        <span>
                          Sell {formValues?.cryptoCurrencyType?.toUpperCase()}
                        </span>
                        Your offer will be listed on the Buy Bitcoin page.
                      </div>
                    </label>
                  </div>
                  <div className={styles.sbwrap}>
                    <input
                      disabled={offerId || formValues?.paymentCards?.length > 0}
                      type='radio'
                      name='buy'
                      id='buy'
                      onChange={() =>
                        setFormValues({ ...formValues, tradingMethod: 'buy' })
                      }
                      checked={formValues?.tradingMethod === 'buy'}
                    />
                    <label htmlFor='buy'>
                      <div className={styles.circle}></div>
                      <div>
                        <span>
                          Buy {formValues?.cryptoCurrencyType?.toUpperCase()}
                        </span>
                        Your offer will be listed on the Buy Bitcoin page.
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className={styles.payment}>
              <p className={styles.title}>
                Payment Method <span className={styles.required}>*</span>
              </p>

              <ReactSelect
                disabled={offerId || formValues?.paymentCards?.length > 0}
                options={paymentMethodList?.map((el) => ({
                  label: el?.name,
                  value: el?._id,
                  type: 'paymentMethod',
                  subPayment: el?.subPayment,
                }))}
                parentCallback={selectHandleCallback}
                value={formValues?.paymentMethod}
              />

              {formValues && formValues?.paymentMethod && (
                <div className={styles.curr_wallet}>
                  <div className='row'>
                    <div className='col-lg-6'>
                      <div className={styles.preferred_cur}>
                        <p className={styles.title}>
                          Preferred Currency{' '}
                          <span className={styles.required}>*</span>
                        </p>

                        <ReactSelect
                          disabled={offerId || formValues?.paymentCards?.length > 0}
                          options={[
                            {
                              value: 'PKR',
                              label: 'Pakistani Rupee(PKR)',
                              type: 'preferredCurrency',
                            },
                          ]}
                          parentCallback={selectHandleCallback}
                          value={formValues?.preferredCurrency}
                        />
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <p className={styles.title}>
                        SubPayment Method{' '}
                        <span className={styles.required}>*</span>
                      </p>
                      <div className={styles.wallet}>
                        <ReactSelect
                          disabled={offerId || formValues?.paymentCards?.length > 0}
                          options={
                            formValues && formValues?.paymentMethod
                              ? formValues?.paymentMethod?.subPayment?.map(
                                  (el) => ({
                                    label: el?.name,
                                    value: el?._id,
                                    type: 'onlineWallet',
                                  })
                                )
                              : []
                          }
                          parentCallback={selectHandleCallback}
                          value={formValues?.onlineWallet}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {formValues?.tradingMethod === 'buy' && (formValues?.paymentMethod?.label)?.toLowerCase() === 'gift card'  && <GiftCard formValues={formValues} handleChange={handleChange}  offerId={offerId} />}
    </div>
  )
}

export default PaymentMethod
