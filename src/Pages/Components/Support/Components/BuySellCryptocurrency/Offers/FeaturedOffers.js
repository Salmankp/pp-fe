import React from 'react'

const FeaturedOffers = () => {
  return (
    <div>
      <h5>What are featured offers?</h5>
      <p>
        Featured offers are highlighted in the “buy” and “sell” sections of the
        Paxful marketplace. Our team selects a handful of offers to be featured
        in the marketplace for a period of time.
      </p>
      <p>If you see a featured offer in the marketplace, it could be from:</p>

      <ul className='mb-2' style={{ paddingLeft: '2rem' }}>
        <li className='mb-2'>A power trader</li>
        <li className='mb-2'>
          A trader that we trust (has received good feedback from trade
          partners)
        </li>
        <li className='mb-2'>
          A trader that you’ve marked as “trusted” in the past
        </li>
      </ul>
      <h5>How can I get my offer to be featured?</h5>
      <p>
        We’re not taking requests to feature offers right now. Keep trading
        safely and fairly in the marketplace and maybe your offer will be
        featured someday!
      </p>
    </div>
  )
}

export default FeaturedOffers
