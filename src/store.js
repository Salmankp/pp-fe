import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { sellListReducer } from './reducers/sell-reducers'
import { buyListReducer } from './reducers/buy-reducers'
import {
  createOfferReducer,
  editOfferReducer,
  offerDetailsReducer,
} from './reducers/offer-reducers'
import { filterTradeReducer, pageCountReducer } from './reducers/trade-reducers'
import { giftCardListReducer } from './reducers/giftCard-reducers'
import {
  transferEscrowReducers,
  transferBuyerwReducers,
} from './reducers/usd-escrow-reducers'
import { chatReducer } from './reducers/chat-reducers'
import {
  userRegisterReducer,
  userLoginReducer,
  userGetReducer,
} from './reducers/user-reducers'
import { createTxReducer } from './reducers/transaction-reducer'
import {
  walletReducer,
  walletSingleUserReducer,
} from './reducers/wallet-reducers'
import { persistStore, persistReducer } from 'redux-persist'
import { createFeedbacReducers } from './reducers/offer-reducers'
import { getComission } from './reducers/comission-reducers'
import { tagsReducer } from './reducers/tags-reducers'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import {
  securityQuestionsReducer,
  securityAnswersReducer,
} from './reducers/security-questions-reducers'

import {notificationReducer} from './reducers/notifications'

const reducer = combineReducers({
  sellList: sellListReducer,
  buyList: buyListReducer,
  createOffer: createOfferReducer,
  editOffer: editOfferReducer,
  offerDetails: offerDetailsReducer,
  userRegister: userRegisterReducer,
  loggedInUser: userLoginReducer,
  giftCard: giftCardListReducer,
  transferEscrow: transferEscrowReducers,
  transferBuyer: transferBuyerwReducers,
  chatData: chatReducer,
  walletData: walletReducer,
  walletSingleUser: walletSingleUserReducer,
  transactionData: createTxReducer,
  userData: userGetReducer,
  feedback: createFeedbacReducers,
  comission: getComission,
  offerTags: tagsReducer,
  filterTrade: filterTradeReducer,
  pageCount: pageCountReducer,
  securityQuestions: securityQuestionsReducer,
  securityAnswers: securityAnswersReducer,
  notifications: notificationReducer,
})
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['sellList', 'buyList'],
}
const persistedReducer = persistReducer(persistConfig, reducer)
const middleware = [thunk]

// function createInitialState() {
//   let loggedInUser = {};
//   let transactionData = {};
//   try {
//     loggedInUser = JSON.parse(localStorage.getItem("userInfo") || " {}");
//     transactionData = JSON.parse(localStorage.getItem("txInfo") || "{}");
//   } catch (e) {}

//   return {
//     loggedInUser,
//     transactionData
//   };
// }

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleware))
)
export const persistor = persistStore(store)
export default store
