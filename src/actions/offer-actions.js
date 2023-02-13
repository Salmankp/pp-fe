import axios from 'axios'
import { toast } from 'react-toastify'
import { offerTags } from '../common/countries_and_time'
import {
  OFFER_FORM_VALUES_STEP1,
  OFFER_FORM_VALUES_STEP2,
  OFFER_FORM_VALUES_STEP3,
  OFFER_CREATE_REQUEST,
  OFFER_CREATE_FAIL,
  CLEAR_OFFER_CREATE,
  OFFER_CREATE_SUCCESS,
  OFFER_FOR_TRADE,
  FEED_BACK_CREATE_REQUEST,
  FEED_BACK_CREATE_SUCCESS,
  FEED_BACK_CREATE_FAIL,
  OFFER_EDIT_REQUEST,
  OFFER_EDIT_SUCCESS,
  OFFER_EDIT_FAIL,
  OFFER_DETAILS_REQUEST,
  OFFER_DETAILS_SUCCESS,
  OFFER_DETAILS_FAIL,
  CLEAR_OFFER_DETAILS,
} from '../constants/offer-constants'
import { error, success } from '../utils/toastr'
import store from './../store'

export const setFormStep1 =
  (values = {}) =>
    async (dispatch) => {
      dispatch({
        type: OFFER_FORM_VALUES_STEP1,
        payload: values,
      })
    }
export const setFormStep2 =
  (values = {}) =>
    async (dispatch) => {
      dispatch({
        type: OFFER_FORM_VALUES_STEP2,
        payload: values,
      })
    }

export const setFormStep3 =
  (values = {}) =>
    async (dispatch) => {
      dispatch({
        type: OFFER_FORM_VALUES_STEP3,
        payload: values,
      })
    }
export const createOfferActionGiftCard =
  (allStepsData = {}) =>
    async (dispatch) => {
      dispatch({
        type: OFFER_CREATE_REQUEST,
      })
      const token = store?.getState()?.loggedInUser?.userInfo?.token

      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/api/v1/offer/create-offer`,
          allStepsData,
          config
        )
        .then((res) => {
          dispatch({
            type: OFFER_CREATE_SUCCESS,
            payload: res.data,
          })
        })

        .catch((er) => {
          error(er.response.data.message, 'Message')
          dispatch({
            type: OFFER_CREATE_FAIL,
            payload:
              er.response && er.response.data.message
                ? er.response.data.message
                : er.message,
          })
        })
    }
export const createOfferAction =
  (allStepsData = {}) =>
    async (dispatch) => {
      try {
        dispatch({
          type: OFFER_CREATE_REQUEST,
        })
        const token = store?.getState()?.loggedInUser?.userInfo?.token

        let config = {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
        const res = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/v1/offer/create-offer`,
          allStepsData,
          config)
        success('Offer created successfully.')
        dispatch({
          type: OFFER_CREATE_SUCCESS,
          payload: res.data,
        })
        return res;
      } catch (err) {
        error(err.response.data.message, 'Message')
        dispatch({
          type: OFFER_CREATE_FAIL,
          payload:
            err.response && err.response.data.message
              ? err.response.data.message
              : err.message,
        })
      }
    }

export const editOfferAction =
  (allStepsData = {}) =>
    async (dispatch) => {
      try {
        dispatch({
          type: OFFER_EDIT_REQUEST,
        })
        const token = store?.getState()?.loggedInUser?.userInfo?.token

        let config = {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
        const res = await axios.put(
          `${process.env.REACT_APP_API_URL}/api/v1/offer/update-offer`,
          allStepsData,
          config)
        success('Offer updated successfully.')
        dispatch({
          type: OFFER_EDIT_SUCCESS,
          payload: res.data,
        })
        return res;


      } catch (err) {
        error(err.response.data.message, 'Error Message Updating offer')
        dispatch({
          type: OFFER_EDIT_FAIL,
          payload:
            err.response && err.response.data.message
              ? err.response.data.message
              : err.message,
        })
      }
    }

export const offerDetailsAction = (id) => async (dispatch) => {
  dispatch({
    type: OFFER_DETAILS_REQUEST,
  })
  const token = store?.getState()?.loggedInUser?.userInfo?.token

  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  }
  axios
    .get(`${process.env.REACT_APP_API_URL}/api/v1/offer/${id}`, config)
    .then((res) => {
      const { doc } = res?.data?.data
      console.log('update Offer Response: =>> ', res.data)

      const format_data = {
        step1: {
          cryptoCurrencyType: doc?.cryptoCurrencyType,
          tradingMethod: doc?.tradingMethod,
          onlineWallet: {
            label: doc?.subPaymentMethodId?.name,
            value: doc?.subPaymentMethodId?._id,
            type: "onlineWallet"
          },
          paymentMethod: {
            label: doc?.paymentMethodId?.name,
            value: doc?.paymentMethodId?._id,
            subPayment: doc?.subPayment,
            type: "paymentMethod"
          },
          preferredCurrency: { value: doc?.preferredCurrency, label: doc?.preferredCurrency },
          cardType: doc?.cardType,
          tradExperience: doc?.tradExperience,
          paymentCards: doc?.paymentCards
        },
        step2: {
          tradingType: doc?.tradingType,
          tradeMin: doc?.tradeMin,
          tradeMax: doc?.tradeMax,
          offerMargin: {
              ...doc?.offerMargin,
              source: doc?.offerMargin?.marginType === 'advance'  ? {label: doc?.offerMargin?.source, value: doc?.offerMargin?.source}  : '',
              pricePoint: doc?.offerMargin?.marginType === 'advance'  ? {value: doc?.offerMargin?.pricePoint, label: doc?.offerMargin?.pricePoint}  : '',
          },
          offerTimeLimit: doc?.offerTimeLimit,
        },
        step3: {
          offerTags: doc?.offerTags?.map(el => ({
            label: el?.name,
            value: el?._id,
            type: 'offerTags'
          })),
          fixedPriceAmount:doc?.fixedPriceAmount,
          fixedPriceMarketRate:doc?.fixedPriceMarketRate,
          offerLabel: doc?.offerLabel,
          offerTerms: doc?.offerTerms,
          tradeInstructions: doc?.tradeInstructions,
          verifiedID: doc.isVerified,
          verifiedName: doc?.verifiedName,
         
          advanceOptions:{
            offerLocation: { label: doc?.advanceOptions?.offerLocation, value: doc?.advanceOptions?.offerLocation, type: 'country' },
            pastTradeValue: doc?.advanceOptions?.pastTradeValue,
            limitForNewUser: doc?.advanceOptions?.limitForNewUser,
            timeZone: doc?.advanceOptions?.timeZone,
            blockedNone: doc?.advanceOptions?.blockedNone,
            blockedCountries: doc?.advanceOptions?.blockedCountries,
            allowedCountries: doc?.advanceOptions?.allowedCountries,
            vpnAllowed: doc?.advanceOptions?.vpnAllowed,
            vpnNotAllowed: doc?.advanceOptions?.vpnAllowed ? false : true,
            selectedCountriesToBlockOrAllow: doc?.advanceOptions?.selectedCountriesToBlockOrAllow?.map(el => ({ label: el, value: el, type: 'country' })),
          }
        },
      }


      dispatch({
        type: OFFER_DETAILS_SUCCESS,
        payload: format_data,
      })
    })

    .catch((err) => {
      error(err.response.data.message, 'Error Message details offer')
      dispatch({
        type: OFFER_DETAILS_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      })
    })
}

export const clearOfferDetails = () => (dispatch) => {
  dispatch({
    type: CLEAR_OFFER_DETAILS,
  })
}
export const clearOfferCreateForm = () => (dispatch) => {
  dispatch({
    type: CLEAR_OFFER_CREATE,
  })
}

export const setOfferForTrade =
  (values = {}) =>
    async (dispatch) => {
      dispatch({
        type: OFFER_FOR_TRADE,
        payload: values,
      })
    }

export const createFeedBack =
  (data = {}) =>
    async (dispatch) => {
      dispatch({
        type: FEED_BACK_CREATE_REQUEST,
      })
      const token = store?.getState()?.loggedInUser?.userInfo?.token

      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/api/v1/feedback/create`,
          data,
          config
        )
        .then((res) => {
          //

          dispatch({
            type: FEED_BACK_CREATE_SUCCESS,
            payload: res.data.data,
          })
          toast.success('Feedback Added Successfully!')
        })

        .catch((error) => {
          dispatch({
            type: FEED_BACK_CREATE_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          })
          toast.error('Feedback Cannot Be Added!')
        })
    }

export const uploadPaymentCardImage =
  ({ file }) =>
    async (dispatch) => {
      try {
        const token = store?.getState()?.loggedInUser?.userInfo?.token

        let config = {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }

        var body = new FormData();
        body.append('image', file);
        const { data } = await axios
          .post(
            `${process.env.REACT_APP_API_URL}/api/v1/offer/offer_gift_card_image`,
            body,
            config
          )

        return data

      } catch (err) {
        console.log(err);
        // toast.error('Uploading failed')
      }

    }
