import React, { useState } from 'react'
import styles from './styles.module.scss'
import AffiliatesCards from '../AffiliatesCards'
import Network from '../Network'
import Transaction from '../Transaction'
import AffiliateTable from '../AffiliateTable'

const Main = () => {
  const [tab, setTab] = useState('dashboard')
  return (
    <div className='container'>
      <div className={styles.wrap}>
        <h1 className={`${styles.heading} text-center`}>Affiliate Dashboard</h1>
        <div className={`${styles.tabs} justify-content-center`}>
          <div
            className={`${styles.tab} ${tab === 'dashboard' && styles.active}`}
            onClick={() => setTab('dashboard')}
          >
            Dashboard
          </div>
          <div
            className={`${styles.tab} ${tab === 'affiliate' && styles.active}`}
            onClick={() => setTab('affiliate')}
          >
            Affiliate
          </div>
        </div>
        {tab === 'dashboard' ? (
          <>
            <AffiliatesCards />
            <Network />
            <Transaction />
          </>
        ) : (
          <AffiliateTable />
        )}
      </div>
    </div>
  )
}

export default Main
