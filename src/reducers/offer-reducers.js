import {
  OFFER_CREATE_REQUEST,
  OFFER_CREATE_SUCCESS,
  CLEAR_OFFER_CREATE,
  OFFER_FORM_VALUES_STEP1,
  OFFER_FORM_VALUES_STEP2,
  OFFER_FORM_VALUES_STEP3,
  OFFER_FOR_TRADE,
  GET_OFFERS_ID,
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

const initialState = {
  formValues: {
    step1: {
      cryptoCurrencyType: 'bitcoin',
      tradingMethod: 'sell',
      onlineWallet: '',
      paymentMethod: '',
      preferredCurrency: '',
      tradExperience: '',
      cardType: '',
      paymentCards:[]
    },
    step2: {
      tradingType: 'marketPrice',
      tradeMin: 10,
      tradeMax: 0,
      fixedPriceAmount:'',
      fixedPriceMarketRate:'',
      // offerMargin: 5,
      offerMargin: {
        marginType: 'basic',
        margin: 5,
        source: '',
        pricePoint: '',
      },
      offerTimeLimit: 5,
    },
    step3: {
      offerTags: [],
      offerLabel: '',
      offerTerms: '',
      tradeInstructions: '',
      verifiedID: false,
      verifiedName: false,
      advanceOptions: {
        timeZone: ''
      }
    },
  },
  selectedTradeOffer: '',
  tadeID: '',
}

export const createOfferReducer = (state = initialState, action) => {
  switch (action.type) {
    case OFFER_DETAILS_SUCCESS:
      return {
        ...state,
        formValues: action.payload,
      }
    case OFFER_FORM_VALUES_STEP1:
      console.log(action.payload, 'Step 1')
      return {
        ...state,
        formValues: {
          ...state.formValues,
          step1: action.payload,
        },
      }
    case OFFER_FORM_VALUES_STEP2:
      console.log(action.payload, 'Step 2')
      return {
        ...state,
        formValues: {
          ...state.formValues,
          step2: action.payload,
        },
      }

    case OFFER_FORM_VALUES_STEP3:
      console.log(action.payload, 'Step 3')
      return {
        ...state,
        formValues: {
          ...state.formValues,
          step3: action.payload,
        },
      }
    case OFFER_CREATE_REQUEST: // Reset Form data
      return {
        ...state,
        formValues: initialState.formValues,
      }
    case OFFER_FOR_TRADE:
      return {
        ...state,
        selectedTradeOffer: action.payload,
      }
    case CLEAR_OFFER_CREATE:
      return {
        ...state,
        formValues: {},
      }
    default:
      return state
  }
}

export const editOfferReducer = (state = { offerUpdateInfo: {} }, action) => {
  switch (action.type) {
    case OFFER_EDIT_REQUEST:
      return { loading: true }
    case OFFER_EDIT_SUCCESS:
      return { loading: false, offerUpdateInfo: action.payload, error: '' }

    case OFFER_EDIT_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export const offerDetailsReducer = (
  state = { offerDetailsInfo: {} },
  action
) => {
  switch (action.type) {
    case OFFER_DETAILS_REQUEST:
      return { loading: true }
    // case OFFER_DETAILS_SUCCESS:
    //   return { loading: false, offerDetailsInfo: action.payload, error: '' }

    case OFFER_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    case CLEAR_OFFER_DETAILS:
      return {
        loading: false,
        error: '',
        offerDetailsInfo: {},
      }
    default:
      return state
  }
}

export const createFeedbacReducers = (state = {}, action) => {
  switch (action.type) {
    case FEED_BACK_CREATE_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        feedbackData: [],
      }
    case FEED_BACK_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        feedbackData: action.payload,
      }
    case FEED_BACK_CREATE_FAIL:
      return {
        ...state,
        loading: true,
        success: false,
        error: action.payload,
      }
    default:
      return state
  }
}
