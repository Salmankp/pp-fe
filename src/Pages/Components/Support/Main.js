import React, { useState } from 'react'
import Banner from './Components/Banner'
import styles from './style.module.scss'
import { Container, Row, Col } from 'react-bootstrap'
import General from './Components/General'
import BuySellCryptocurrency from './Components/BuySellCryptocurrency'
import AccountVerification from './Components/AccountVerification'

const Main = () => {
  const [tab, setTab] = useState('general')
  return (
    <>
      <Banner />
      <Container>
        <Row>
          <Col md={12}>
            <div className={styles.wrap}>
              <div className={`${styles.userContainer} row`}>
                <div className={`${styles.wrap} col-lg-4`}>
                  <button
                    className={`${styles.tabContainer} ${
                      tab === 'general' && styles.active
                    }`}
                    onClick={() => setTab('general')}
                  >
                    <span>General</span>
                  </button>
                  <button
                    className={`${styles.tabContainer} ${
                      tab === 'buySellCryptocurrency' && styles.active
                    }`}
                    onClick={() => setTab('buySellCryptocurrency')}
                  >
                    <span>Buy and Sell Cryptocurrency</span>
                  </button>
                  <button
                    className={`${styles.tabContainer} ${
                      tab === 'accountVerification' && styles.active
                    }`}
                    onClick={() => setTab('accountVerification')}
                  >
                    <span>Account Verification</span>
                  </button>
                  <button
                    className={`${styles.tabContainer} ${
                      tab === 'account' && styles.active
                    }`}
                    onClick={() => setTab('account')}
                  >
                    <span>Account</span>
                  </button>
                  <button
                    className={`${styles.tabContainer} ${
                      tab === 'wallet' && styles.active
                    }`}
                    onClick={() => setTab('wallet')}
                  >
                    <span>Wallet</span>
                  </button>
                  <button
                    className={`${styles.tabContainer} ${
                      tab === 'convertingCryptocurrency' && styles.active
                    }`}
                    onClick={() => setTab('convertingCryptocurrency')}
                  >
                    <span>Converting Cryptocurrency</span>
                  </button>
                  <button
                    className={`${styles.tabContainer} ${
                      tab === 'rewardsProgram' && styles.active
                    }`}
                    onClick={() => setTab('rewardsProgram')}
                  >
                    <span>Rewards Program</span>
                  </button>
                  <button
                    className={`${styles.tabContainer} ${
                      tab === 'partnership' && styles.active
                    }`}
                    onClick={() => setTab('partnership')}
                  >
                    <span>Partnership</span>
                  </button>
                  <button
                    className={`${styles.tabContainer} ${
                      tab === 'paxfulBitcoinKiosk' && styles.active
                    }`}
                    onClick={() => setTab('paxfulBitcoinKiosk')}
                  >
                    <span>Paxful Bitcoin Kiosk</span>
                  </button>
                  <button
                    className={`${styles.tabContainer} ${
                      tab === 'businessServices' && styles.active
                    }`}
                    onClick={() => setTab('businessServices')}
                  >
                    <span>Business Services</span>
                  </button>
                  <button
                    className={`${styles.tabContainer} ${
                      tab === 'glossary' && styles.active
                    }`}
                    onClick={() => setTab('glossary')}
                  >
                    <span>Glossary</span>
                  </button>
                  <button
                    className={`${styles.tabContainer} ${
                      tab === 'technicalIssues' && styles.active
                    }`}
                    onClick={() => setTab('technicalIssues')}
                  >
                    <span>Technical Issues</span>
                  </button>
                  <button
                    className={`${styles.tabContainer} ${
                      tab === 'api' && styles.active
                    }`}
                    onClick={() => setTab('api')}
                  >
                    <span>API</span>
                  </button>
                  <button
                    className={`${styles.tabContainer} ${
                      tab === 'contact' && styles.active
                    }`}
                    onClick={() => setTab('contact')}
                  >
                    <span>Contact</span>
                  </button>
                </div>
                <div className='col-lg-8'>
                  {tab === 'general' && <General />}
                  {tab === 'buySellCryptocurrency' && <BuySellCryptocurrency />}
                  {tab === 'accountVerification' && <AccountVerification />}
                  {tab === 'account' && 'account'}
                  {tab === 'wallet' && 'wallet'}
                  {tab === 'convertingCryptocurrency' &&
                    'convertingCryptocurrency'}
                  {tab === 'rewardsProgram' && 'rewardsProgram'}
                  {tab === 'partnership' && 'partnership'}
                  {tab === 'partnership' && 'partnership'}
                  {tab === 'paxfulBitcoinKiosk' && 'paxfulBitcoinKiosk'}
                  {tab === 'businessServices' && 'businessServices'}
                  {tab === 'businessServices' && 'businessServices'}
                  {tab === 'glossary' && 'glossary'}
                  {tab === 'technicalIssues' && 'technicalIssues'}
                  {tab === 'api' && 'api'}
                  {tab === 'contact' && 'contact'}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Main
