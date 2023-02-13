import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styles from './styles.module.scss';
import { capitalize } from '../../../../utils/helper'
import PaymentMethod from '../PaymentMethod';
import Pricing from '../Pricinng';
import AboutStep from '../AboutStep';
import Settings from '../Settings';
import { listPaymentMethods } from "../../../../actions/giftCard-actions";
import { createOfferAction, editOfferAction, offerDetailsAction } from "../../../../actions/offer-actions";

const Main = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState()
  const [moveNext, setMoveNext] = useState(false);
  const formValues = useSelector(state => state?.createOffer?.formValues);



  useEffect(() => {
    dispatch(listPaymentMethods());
    if (id) {
      (async () => {
        setLoading(true)
        await dispatch(offerDetailsAction(id));
        setLoading(false)
      })()
    }
    return () => {
      dispatch({
        type: 'OFFER_CREATE_REQUEST',
        payload: ''
      })
    }
  }, []);

  const proceedButton = useCallback(
    (_step) => {
      const { step1, step2, step3 } = formValues
      switch (_step) {
        case 1:
          break
        case 2:
          Object.keys(step1).length > 0 && setStep(_step)
          break
        case 3:
          Object.keys(step2).length > 0 && setStep(_step)
          break
        case 4:
          break
        default:
      }
    },
    [formValues]
  )

  useEffect(() => {
    const { step1, step2, step3 } = formValues
    setMoveNext(false)
    switch (step) {
      case 1:
        if (
          Object.keys(step1).length > 0 &&
          //&&
          //step1.paymentMethod
          step1?.preferredCurrency &&
          step1?.cryptoCurrencyType &&
          step1?.onlineWallet &&
          step1?.tradingMethod &&
          ((step1?.paymentMethod?.label === 'Gift Card' && step1?.paymentCards?.length > 0 && step1?.tradExperience && step1?.cardType && step1?.tradingMethod === 'buy') || (step1?.paymentMethod?.label === 'Gift Card' && step1?.tradingMethod === 'sell') || (step1?.paymentMethod?.label === 'Gift Card' && step1?.tradingMethod === 'buy' && step1?.tradExperience === 'classic') || step1?.paymentMethod?.label !== 'Gift Card')
        )
          setMoveNext(true)
        break
      case 2:
        if (
          Object.keys(step2).length > 0 &&
          step2?.tradingType &&
          step2?.tradeMin >= 1 &&
          step2?.tradeMax < 80000 &&
          step2?.tradeMin <= step2.tradeMax &&
          step2?.offerTimeLimit <= 30 &&
          (step2?.offerMargin && step2?.offerMargin?.margin > 4 && ((step2?.offerMargin?.marginType === 'advance' && step2?.offerMargin?.source && step2?.offerMargin?.pricePoint) || (step2?.offerMargin?.marginType === 'basic')))
        ) {
          setMoveNext(true)
        }
        break
      case 3:
        if (
          step3?.offerTags &&
          step3?.offerLabel &&
          step3?.offerTerms &&
          step3?.tradeInstructions
        ) {
          setMoveNext(true)
        }
        // Object.keys(step3).length > 0 ? setMoveNext(true) : setMoveNext(false);
        break
      case 4:
        Object.keys(step3).length > 0 ? setMoveNext(false) : setMoveNext(false)
        break
      default:
    }
  }, [formValues, step])

  const handleSubmit = async () => {
    const { step1, step2, step3 } = formValues
    const data = {
      ...step1,
      ...step2,
      ...step3,
      subPaymentMethodId: step1?.onlineWallet?.value,
      paymentMethodId: step1?.paymentMethod?.value,
      preferredCurrency: step1?.preferredCurrency?.value,
      offerMargin: {
        ...step2?.offerMargin,
        source: step2?.offerMargin?.marginType === 'advance' ? step2?.offerMargin?.source?.value : '',
        pricePoint: step2?.offerMargin?.marginType === 'advance' ? step2?.offerMargin?.pricePoint?.value : '',
      },
      offerTags: step3?.offerTags?.map(el => el?.value),
      advanceOptions: {
        ...step3?.advanceOptions,
        offerLocation: step3?.advanceOptions?.offerLocation?.value,
        selectedCountriesToBlockOrAllow: step3?.advanceOptions?.selectedCountriesToBlockOrAllow?.map(el => el?.value),
      },
      _id: id ? id : undefined


    }
    if (!id) {
      const res = await dispatch(createOfferAction({ ...data }));
      if (res?.data?.status === 'success') {
        return navigate('/classic')
      }
    }
    if (id) {
      const res = await dispatch(editOfferAction({ ...data }));
      if (res?.data?.status === 'success') {
        return navigate('/classic')
      }
    }

  }

  return (
    <div className={styles.outerWrap}>
      {
        loading ? (
          <h1>Loading...</h1>
        ) : <>
          <div className='container'>
            <div className={styles.wrap}>
              <h1 className={styles.heading}>{`${id ? 'Update' : 'Create'} an Offer to ${capitalize(
                formValues?.step1?.tradingMethod
              )} ${capitalize(
                formValues?.step1?.cryptoCurrencyType
              )}`}</h1>
              <div className={styles.stepsWrap}>
                <div
                  className={`${step === 1 && styles.active} ${step > 1 && styles.complete
                    } ${styles.step}`}
                >
                  <div className={styles.circle}></div>
                  Payment method
                </div>
                <div className={styles.bar}></div>
                <div
                  className={`${step === 2 && styles.active} ${step > 2 && styles.complete
                    } ${styles.step}`}
                >
                  <div className={styles.circle}></div>
                  Pricing
                </div>
                <div className={styles.bar}></div>
                <div
                  className={`${step === 3 && styles.active} ${step > 3 && styles.complete
                    } ${styles.step}`}
                >
                  <div className={styles.circle}></div>
                  Other Settings
                </div>
              </div>
              <div className='row mt-5 pt-5'>
                <div className='col-12'>
                  {step === 1 && <PaymentMethod offerId={id} />}
                  {step === 2 && <Pricing />}
                  {step === 3 && <Settings />}
                </div>
              </div>
            </div>
          </div>
          <div className='col-12'>
            <AboutStep
              offerId={id}
              setStep={proceedButton}
              step={step}
              moveNext={moveNext}
              previousStetp={setStep}
              handleSubmit={handleSubmit}
            />
          </div></>}
    </div>
  )
}

export default Main;