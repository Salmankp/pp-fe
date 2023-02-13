import React from 'react'
import Header from './Components/Common/Header'
import Footer from './Components/Common/Footer'
import Main from './Components/BugBountyPolicy/Main'
import VerifyEmail from './Components/VerifyEmail'

const BugBountyPolicy = () => {
  return (
    <div className='d-flex flex-column justify-content-between min-vh-100'>
      <div>
        <Header />
        <VerifyEmail />
        <Main />
      </div>
      <Footer />
    </div>
  )
}

export default BugBountyPolicy
