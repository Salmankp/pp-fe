import React from 'react'
import { Alert, Card } from 'react-bootstrap'

const BuyingWithGold = () => {
  return (
    <div>
      <p>
        Gold is one of the oldest known payment methods in the world, and we are
        happy to offer you an opportunity to use gold to buy cryptocurrency.
        Here’s everything you need to know about trading with gold.{' '}
      </p>
      <Card className='my-4'>
        <Card.Body>
          <ul style={{ paddingLeft: '2rem' }}>
            <li>
              <a href='#'>Before trading</a>
            </li>
            <li>
              <a href='#'>Trading</a>
            </li>
            <li>
              <a href='#'>Searching for an offer</a>
            </li>
            <li>
              <a href='#'>Creating an offer</a>
            </li>
            <li>
              <a href='#'>Completing a trade</a>
            </li>
            <li>
              <a href='#'>After a trade</a>
            </li>
            <li>
              <a href='#'>ID and address verification</a>
            </li>
          </ul>
        </Card.Body>
      </Card>
      <div className='mb-4'>
        <h3>Before trading</h3>
        <p>
          Before you start buying cryptocurrency with gold, make sure you have a
          trustworthy source for the gold. One of the ways to obtain gold is to
          order it on a website and have it shipped to a specific address. If
          you decide to use your own private source or to deliver the gold in
          person yourself, you still must ensure minimal risk.
        </p>
        <p>
          When you try to pay with gold to buy cryptocurrency, your potential
          trade partners may request the following as proof to validate the
          transaction:
        </p>
        <ul style={{ paddingLeft: '2rem' }}>
          <li>Proof of purchase (a receipt).</li>
          <li>Certificate of authenticity for the gold item.</li>
          <li>Photo of your ID.</li>
          <li>Photo of the actual gold item you are offering.</li>
          <li>
            The tracking number issued by the parcel service (in case the gold
            is being shipped to them directly).
          </li>
        </ul>
        <div className='my-4'>
          <h3>Trading </h3>
          <h4>Searching for an offer</h4>
          <p>
            The first step to buying cryptocurrency with gold is to look for an
            offer that accepts this <a href='#'>type of payment</a>. You’ll also
            need to enter the amount you wish to purchase and the currency you
            prefer.
          </p>
          <p>
            Choose the best rate of cryptocurrency to have the highest profit
            possible. Also, pay attention to the reputation of your potential
            trade partner and choose the location carefully, to ensure that you
            can deliver the gold to your trade partner. And finally, read
            through the offer terms and trade instructions carefully. Note that
            cryptocurrency sellers may request additional verification and have
            other specific requirements for verifying proof of payment.
          </p>
          <p>
            Talk to your trade partner in the trade chat. Clarify how you will
            deliver the gold and whether your trade partner is okay with what
            you are offering.{' '}
          </p>
          <Alert variant='success'>
            <b>Tip:</b>
            <ul style={{ paddingLeft: '2rem' }}>
              <li>Prefer public places for trades in person.</li>
              <li>Use trackable shipping methods for delivery by mail.</li>
            </ul>
          </Alert>
        </div>
        <div className='mb-4'>
          <h4>Creating an offer</h4>
          <p>
            To buy cryptocurrency with gold, you can also{' '}
            <a href='#'>create your own offer</a>.
          </p>
          <p>Here are a few things to keep in mind:</p>
          <ul style={{ paddingLeft: '2rem' }}>
            <li>
              Set a margin you find profitable and agreeable as no negotiations
              are allowed during the trade.
            </li>
            <li>
              Write clear <a href='#'>offer terms and instructions</a>
            </li>
            <li>
              Be clear about what proofs of payment you are willing to present
              for the gold you possess.
            </li>
            <li>
              For in-person trades, be very clear about the meeting location and
              exchange procedure
            </li>
          </ul>
          <p className='my-4'>
            Once you’ve created and published your personalized offer, wait for
            a seller to start a trade with you. Once a trade has started, you
            will receive a notification. Feel free to discuss all the necessary
            details with your trade partner on the trade chat, and proceed with
            the trade accordingly.
          </p>
        </div>
        <div className='mb-4'>
          <h3>Completing a trade</h3>
          <p>
            Once you have provided all the documents requested by the
            cryptocurrency seller, click Paid. From this point, you will have 21
            days to deliver the gold to the trade partner whether by post or in
            person. If the seller does not confirm receiving the gold within
            this timeframe a dispute will start automatically and our moderators
            will step in for assistance.
          </p>
          <Alert variant='info'>
            <p>
              <b>Note:</b> Calculation of 21 days starts from the moment the
              trade is marked as Paid.
            </p>
          </Alert>
          <p className='mt-2'>
            The last step will be for the cryptocurrency seller to confirm
            receiving the payment. Please be patient because this may take some
            time. Once the seller has confirmed the payment, they should release
            the crypto to you and the trade will be comple
          </p>
        </div>
        <div className='mb-4'>
          <h3>After a trade</h3>
          <p>
            Once the trade is completed, you can leave appropriate feedback for
            your trade partner. Also, if you like trading with the user, you can
            <a href='#'>add them to your trusted list</a>.{' '}
          </p>
        </div>
        <div className='mb-4'>
          <h3>ID and address verification</h3>
          <p>
            Another important aspect to consider is your ID and address
            verification. You must complete your <a href='#'>ID verification</a>{' '}
            and <a href='#'>address verification</a> to trade with gold. This
            verification is important to protect our cryptocurrency sellers from
            any fraudulent activity. Therefore, it is not possible to trade
            crypto for gold or vice versa without being fully verified on
            Paxful.
          </p>
          <Alert variant='info'>
            <p>
              <b>Note:</b> Full verification is mandatory for offers and trades
              that start from 50 USD.
            </p>
          </Alert>
          <p className='my-4'>
            See our step-by-step guide on{' '}
            <a href='#'>how to buy cryptocurrency</a> and{' '}
            <a href='#'>tips on how to buy cryptocurrency.</a>
          </p>
          <div className='mt-3'>
            <a href='#'>See all 15 articles</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuyingWithGold
