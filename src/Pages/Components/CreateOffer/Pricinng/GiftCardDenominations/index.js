import React from 'react'
import { Alert } from 'react-bootstrap'

const GiftCardDenominations = () => {
  return (
    <div className='pt-4'>
      <h3 className='mb-4'>Gift card denominations</h3>
      <div className='mb-3'>
        <b>2216 PKR</b>
      </div>
      <Alert variant='info'>
        <p>
          if the minimum you set in your currency drops below 10.00 USD in
          value, we'll prompt the buyers to pick and amount worth at least 10.00
          USD to proceed with the trade.
        </p>
      </Alert>
      <Alert variant='info'>
        <p>
          Please provide <b>ID</b> and <b>proof of address</b> to increase your
          trade limit to 11077770 PKR
        </p>
      </Alert>
      <Alert variant='warning'>
        <p>
          To make this offer visible, be sure to have the minimum amount you've
          set within your wallet.
        </p>
      </Alert>
    </div>
  )
}

export default GiftCardDenominations
