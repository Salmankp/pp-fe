import React from 'react'
import BuyingCryptocurrencyContent from './BuyingCryptocurrency'
import SellingCryptocurrency from './SellingCryptocurrency'
import Offers from './Offers'
import Trades from './Trades'
import Disputes from './Disputes'

const BuySellCryptocurrency = () => {
  return (
    <div>
      <div className='mb-3'>
        <h2 className='mb-4'>Buying Cryptocurrency</h2>
        <BuyingCryptocurrencyContent />
      </div>
      <div className='mb-3'>
        <h2 className='mb-4'>Selling Cryptocurrency</h2>
        <SellingCryptocurrency />
      </div>
      <div className='mb-3'>
        <h2 className='mb-4'>Offers</h2>
        <Offers />
      </div>
      <div className='mb-3'>
        <h2 className='mb-4'>Trades</h2>
        <Trades />
      </div>
      <div className='mb-3'>
        <h2 className='mb-4'>Disputes</h2>
        <Disputes />
      </div>
    </div>
  )
}

export default BuySellCryptocurrency
