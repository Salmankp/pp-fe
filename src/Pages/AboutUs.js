import React from 'react'
import Header from './Components/Common/Header'
import Footer from './Components/Common/Footer'
import Main from './Components/AboutUs/Main'

const AboutUs = () => {
  return (
    <div className='d-flex flex-column justify-content-between min-vh-100'>
      <div>
        <Header />
        <Main />
      </div>
      <Footer />
    </div>
  )
}

export default AboutUs
