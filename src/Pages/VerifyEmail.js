import React from 'react'
import Header from './Components/Common/Header'
import Main from './Components/AboutUs/Main'
import VerifyEmailPage from './Components/VerifyEmailPage'
import VerifySmsPage from './Components/VerifySmsPage'

const VerifyEmail = () => {
  const type = window.location.pathname.split("/").pop();
  return (
    <div>
      <Header />
      {
        type === "email" ?
        <VerifyEmailPage /> :
        type === "sms" &&
        <VerifySmsPage />
      }

    </div>
  )
}

export default VerifyEmail
