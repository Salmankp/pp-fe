import React from 'react'

const OfferRemoved = () => {
  return (
    <div>
      <p>
        Sometimes, an offer on Paxful will be removed from the marketplace
        because it harms the buying and selling experience for the Paxful
        community.{' '}
      </p>
      <h4>
        Here’s a short list explaining why offers are removed from the Paxful
        marketplace:
      </h4>
      <ul className='mb-2' style={{ paddingLeft: '2rem' }}>
        <li className='mb-2'>
          <b>Changing the terms and instructions</b> - Do not change the terms
          and instructions you agreed to with your trade partner after the trade
          has started.{' '}
        </li>
        <li className='mb-2'>
          <b>Sharing contact information</b> - Do not attempt to communicate
          outside of Paxful’s trade chat with your trade partner. Giving out
          personal information is how fraud and identity theft start. This
          includes WhatsApp, Telegram, phone numbers, email, etc.
        </li>
        <li className='mb-2'>
          <b>Being unresponsive with your trade partners</b> - Do not create an
          offer and then become unresponsive with your trade partner once the
          trade is initiated.
        </li>
        <li className='mb-2'>
          <b>Being disrespectful</b> - Do not use any profanity, hate speech,
          and other offensive or vulgar messaging in your offer. Paxful has a
          zero tolerance policy for this type of behavior.
        </li>
        <li className='mb-2'>
          <b>Payment method was restricted</b> - Offers can be removed from the
          marketplace because the payment method selected has been restricted in
          your location. For more information, take a look at{' '}
          <a href='#'>this article</a>.
        </li>
        <li className='mb-2'>
          <b>Violation of Paxful’s Terms of Service</b> - If there’s a violation
          of Paxful’s <a href='#'>Terms of Service</a>, your offer may be
          removed.
        </li>
      </ul>
      <p>
        If our system detects that your offer has a very low chance of success
        (e.g. extremely high margins), your offer may not be visible to other
        users. We recommend looking at the best offers and model your offers
        after them. Because the algorithm takes current market conditions into
        account, this is something you may have to calibrate regularly to
        increase or maintain the visibility of your offer.
      </p>
      <div className='my-3'>
        <h4>I understand why my offer was removed, what are my next steps?</h4>
        <p>
          In most cases, you’ll receive a gentle warning about your offer and
          why it was removed. You’ll be expected to turn your offer on again and
          update the terms and instructions so it doesn’t fit the criteria
          mentioned above. Additional actions may be taken for severe or repeat
          offenses, such as being banned from Paxful or restricting the payment
          method.
        </p>
      </div>
      <div className='mb-3'>
        <h4>
          I understand why my offer was removed and now I can’t create a new
          offer using the same payment method, what are my next steps now?
        </h4>
        <p>
          Please contact our support team so we can help get this payment method
          reinstated for you. Our Marketplace investigations team will verify
          the request and ensure your account is in good standing before
          granting access.
        </p>
      </div>
    </div>
  )
}

export default OfferRemoved
