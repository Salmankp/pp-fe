import React from 'react'
import styles from './styles.module.scss'
import { capitalize } from '../../../../utils/helper'
import { useSelector, useDispatch } from 'react-redux'

const AboutStep = ({
  step,
  setStep,
  moveNext,
  previousStetp,
  handleSubmit,
  offerId,
}) => {
  const formValues = useSelector((state) => state?.createOffer?.formValues)
  return (
    <div className={`${styles.wrap} mt-5 pt-5`}>
      <div className='container'>
        <div className={`${styles.active} ${styles.steps}`}>
          <div className={styles.stepstext}>
            <h3 className={`${styles.heading}`}>About This Step</h3>
            <div className={styles.text}>
              Start creating your offer by selecting the cryptocurrency you want
              to trade, whether or not you want to buy or sell, and the payment
              method you want to use.
            </div>
            <div className='mt-2 mb-2'>
              <ul>
                {formValues?.step1?.tradingMethod && (
                  <li>
                    You want to{' '}
                    <b>
                      {capitalize(
                        formValues?.step1?.tradingMethod
                      )}
                    </b>{' '}
                    <b>
                      {capitalize(
                        formValues?.step1?.cryptoCurrencyType
                      )}
                    </b>
                  </li>
                )}
                {formValues?.step1?.onlineWallet &&
                  formValues?.step1?.preferredCurrency && (
                    <li>
                      And get paid via{' '}
                      <b>
                        {capitalize(
                          formValues?.step1?.onlineWallet?.label
                        )}
                      </b>{' '}
                      in{' '}
                      <b>
                        {capitalize(
                          formValues?.step1?.preferredCurrency?.label
                        )}
                      </b>
                    </li>
                  )}

                {formValues?.step1?.tradingMethod === 'buy' &&
                  formValues?.step2?.tradingType ===
                    'marketPrice' && (
                    <li>
                      You will <b>pay 5% above</b> market price on every
                      purchase
                    </li>
                  )}

                {formValues?.step1?.tradingMethod === 'buy' &&
                  formValues?.step2?.tradingType ===
                    'fixedPrice' && (
                    <li>
                      You will pay <b>1.00%</b> below market price on every
                      purchase
                    </li>
                  )}

                {formValues?.step1?.tradingMethod === 'sell' &&
                  formValues?.step2?.tradingType ===
                    'marketPrice' && (
                    <li>
                      You’ll make a{' '}
                      <b>
                        profit of {formValues?.step2?.offerMargin?.margin}%
                      </b>{' '}
                      on every trade
                    </li>
                  )}
                {formValues?.step1?.tradingMethod === 'sell' &&
                  formValues?.step2?.tradingType ===
                    'fixedPrice' && (
                    <li>
                      You will lose <b>1.00%</b> on every sale
                    </li>
                  )}

                {formValues?.step1?.tradingMethod === 'sell' && (
                  <li>
                    You will pay a <b>1%</b> fee for each trade
                  </li>
                )}

                {formValues?.step2?.tradeMin > 0 &&
                  formValues?.step2?.tradeMax > 0 && (
                    <li>
                      People can trade between{' '}
                      <b className='text-primary'>
                        {formValues?.step2?.tradeMin}
                      </b>{' '}
                      and{' '}
                      <b className='text-primary'>
                        {formValues?.step2?.tradeMax}
                      </b>
                    </li>
                  )}
                {formValues?.step2?.fixedPriceAmount > 0 && (
                  <li>
                    People can trade between{' '}
                    <b className='text-primary'>
                      {formValues?.step2?.fixedPriceAmount}
                    </b>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div className={styles.btnWrap}>
            <button
              disabled={step === 1}
              onClick={() => {
                step === 1 ? previousStetp(1) : previousStetp(step - 1)
              }}
              className={step > 1 ? styles.active : ''}
            >
              Previous
            </button>
            {step === 3 ? (
              <button
                disabled={!moveNext}
                onClick={() => handleSubmit()}
                className={moveNext ? styles.active : ''}
              >
                {offerId ? 'Update Offer' : 'Create an offer'}
              </button>
            ) : (
              <button
                disabled={!moveNext}
                onClick={() => {
                  step === 4 ? setStep(4) : setStep(step + 1)
                }}
                className={moveNext ? styles.active : ''}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutStep
