import React, { useState, useEffect } from 'react'
import './App.css'
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useNavigate,
  useLocation,
} from 'react-router-dom'
import LoginSignup from './Pages/LoginSignup'
import Buy from './Pages/Buy'
import CreateOffer from './Pages/CreateOffer'
import AboutUs from './Pages/AboutUs'
import Sell from './Pages/Sell'
import BuyForm from './Pages/BuyForm'
import Vendor from './Pages/Vendor'
import Trade from './Pages/Trade'
import Wallet from './Pages/Wallet'
import SellForm from './Pages/SellForm'
import Dispute from './Pages/Dispute'
import TransactionDetail from './Pages/TransactionDetail'
import VendorDashboard from './Pages/VendorDashboard'
import Notification from './Pages/Notification'
import GiftCard from './Pages/GiftCard'
import ClassicDashboard from './Pages/ClassicDashboard'
import AffiliateDashboard from './Pages/AffiliateDashboard'
import Settings from './Pages/Settings'
import Receipt from './Pages/Receipt'
import TradeHistory from './Pages/TradeHistory'
import ContactList from './Pages/ContactList'
import BecomeVendor from './Pages/BecomeVendor'
import TradeSummary from './Pages/TradeSummary'
import { PrivateRoute } from './PrivateRoute'
import { useSelector } from 'react-redux'
import EmailVerification from './Pages/Components/EmailVerification'
import ResetForm from './Pages/Components/LoginSignup/ResetForm/index'
import TermsOfServices from './Pages/TermsOfServices'
import Support from './Pages/Support'
import VerifyEmail from './Pages/VerifyEmail'
import VerifySmsPage from './Pages/VerifyEmail'
import PrivacyNotice from './Pages/PrivacyNotice'
import StableCoinTermsService from './Pages/StableCoinTermsService'
import BugBountyPolicy from './Pages/BugBountyPolicy'
import AMLPolicy from './Pages/AMLPolicy'
import Careers from './Pages/Careers'
import Openpositions from './Pages/Openpositions'
import JoinP2P from './Pages/JoinP2P'
function App() {
  // init custom history object to allow navigation from
  // anywhere in the react app (inside or outside components)
  // history.navigate = useNavigate();
  // const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.loggedInUser)
  // const { data } = userInfo || undefined;
  // useEffect(() => {
  //   if (data) return;
  //  navigate("/buy" );

  // }, [loggedIn, history]);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/buy'
          element={
            <PrivateRoute>
              <Buy />
            </PrivateRoute>
          }
        />

        <Route
          path='/'
          element={userInfo !== undefined ? <Buy /> : <LoginSignup />}
        />
        <Route path='/login' element={<LoginSignup />} />

        <Route path='*' element={<Navigate to='/' />} />
        <Route
          exact
          path='/sell'
          element={
            <PrivateRoute>
              <Sell />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/create-offer'
          element={
            <PrivateRoute>
              <CreateOffer />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/edit-create-offer/:id'
          element={
            <PrivateRoute>
              <CreateOffer />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/buy-form'
          element={
            <PrivateRoute>
              <BuyForm />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/sell-form'
          element={
            <PrivateRoute>
              <SellForm />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/grant-access/:_id/accepted'
          element={<EmailVerification />}
        />
        <Route
          exact
          path='/reset-password/:token/accepted'
          element={<LoginSignup resetComp={true} />}
        />
        <Route
          exact
          path='/vendor'
          element={
            <PrivateRoute>
              <Vendor />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/trade=:id'
          element={
            <PrivateRoute>
              <Trade />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/wallet'
          element={
            <PrivateRoute>
              <Wallet />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/dispute=:id'
          element={
            <PrivateRoute>
              <Dispute />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/transactionDetail'
          element={
            <PrivateRoute>
              <TransactionDetail />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/dashboard'
          element={
            <PrivateRoute>
              <VendorDashboard />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/notification'
          element={
            <PrivateRoute>
              <Notification />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/giftCard'
          element={
            <PrivateRoute>
              <GiftCard />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/classic'
          element={
            <PrivateRoute>
              <ClassicDashboard />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/affiliate'
          element={
            <PrivateRoute>
              <AffiliateDashboard />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/settings'
          element={
            <PrivateRoute>
              <Settings />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/receipt'
          element={
            <PrivateRoute>
              <Receipt />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/tradeHistory'
          element={
            <PrivateRoute>
              <TradeHistory />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/contact'
          element={
            <PrivateRoute>
              <ContactList />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/contact/trustedUser'
          element={
            <PrivateRoute>
              <ContactList />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/becomeVendor'
          element={
            <PrivateRoute>
              <BecomeVendor />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/aboutus'
          element={
            <PrivateRoute>
              <AboutUs />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/termsServices'
          element={
            <PrivateRoute>
              <TermsOfServices />
            </PrivateRoute>
          }
        />

        <Route
          exact
          path='/support'
          element={
            <PrivateRoute>
              <Support />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/verification/:type'
          element={
            <PrivateRoute>
              <VerifyEmail />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/privacy-notice'
          element={
            <PrivateRoute>
              <PrivacyNotice />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/stablecoin-terms-of-service'
          element={
            <PrivateRoute>
              <StableCoinTermsService />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/bug-bounty-policy'
          element={
            <PrivateRoute>
              <BugBountyPolicy />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/aml-policy'
          element={
            <PrivateRoute>
              <AMLPolicy />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/careers'
          element={
            <PrivateRoute>
              <Careers />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/open-positions'
          element={
            <PrivateRoute>
              <Openpositions />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/how-to-join'
          element={
            <PrivateRoute>
              <JoinP2P />
            </PrivateRoute>
          }
        />

        <Route
          exactx
          path='/tradeSummary=:id'
          element={
            <PrivateRoute>
              <TradeSummary />
            </PrivateRoute>
          }
        />

        {/* <Route exact path="/" element={<LoginSignup />} /> */}
        {/* <Route exact path="/buy" element={<Buy />} /> */}
        {/*    <Route exact path="/sell" element={<Sell />} />
        <Route exact path="/create-offer" element={<CreateOffer />} />
        <Route exact path="/buy-form" element={<BuyForm />} />
        <Route exact path="/sell-form" element={<SellForm />} />
        <Route exact path="/vendor" element={<Vendor />} />
        <Route exact path="/trade" element={<Trade />} />
        <Route exact path="/wallet" element={<Wallet />} />
        <Route exact path="/dispute" element={<Dispute />} />
        <Route exact path="/transactionDetail" element={<TransactionDetail />} />
        <Route exact path="/dashboard" element={<VendorDashboard />} />
        <Route exact path="/notification" element={<Notification />} />
        <Route exact path="/giftCard" element={<GiftCard />} />
        <Route exact path="/classic" element={<ClassicDashboard />} />
        <Route exact path="/affiliate" element={<AffiliateDashboard />} />
        <Route exact path="/settings" element={<Settings />} />
        <Route exact path="/receipt" element={<Receipt />} />
        <Route exact path="/tradeHistory" element={<TradeHistory />} />
        <Route exact path="/contact" element={<ContactList />} />
        <Route exact path="/becomeVendor" element={<BecomeVendor />} />
        <Route exact path="/tradeSummary" element={<TradeSummary />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
