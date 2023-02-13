import React from 'react'
import { Alert, Card } from 'react-bootstrap'

const ForGold = () => {
  return (
    <div>
      <p>
        Gold is one of the oldest known valuables in the world, and one that has
        consistently increased in value over time, despite the changes in the
        economy. We are happy to offer you an opportunity to sell cryptocurrency
        for gold. Here’s everything you need to know about trading with gold.
      </p>
      <Card>
        <Card.Body>
          <ol>
            <li className='mb-2'>
              <a href='#'>Before trading</a>
            </li>
            <li className='mb-2'>
              <a href='#'>Trading</a>
            </li>
            <li className='mb-2'>
              <a href='#'>Searching for an offer</a>
            </li>
            <li className='mb-2'>
              <a href='#'>Creating an offer</a>
            </li>
            <li className='mb-2'>
              <a href='#'>Completing a trade</a>
            </li>
            <li className='mb-2'>
              <a href='#'>After a trade</a>
            </li>
            <li className='mb-2'>
              <a href='#'>ID and address verification</a>
            </li>
          </ol>
        </Card.Body>
      </Card>
      <div className='my-3'>
        <h3 className='mb-2'>Before trading</h3>
        <p>
          Before you start selling cryptocurrency for gold, make sure you have
          the means to check the quality of the gold before you make the
          payment. Whether you choose the gold to be sent to you by mail or
          delivered in person, you still must ensure minimal risk.
        </p>
        <p>
          Don’t hesitate to request any additional documentation or proofs such
          as:
        </p>
        <ul style={{ paddingLeft: '2rem' }}>
          <li className='mb-2'>Proof of purchase (a receipt).</li>
          <li className='mb-2'>
            Certificate of authenticity for the gold item.
          </li>
          <li className='mb-2'>Photo of your trade partner's ID.</li>
          <li className='mb-2'>Photo of the actual gold item.</li>
          <li className='mb-2'>
            The tracking number issued by the parcel service (in case the gold
            is being shipped to you directly).
          </li>
        </ul>
      </div>
      <div className='mb-3'>
        <h3 className='mb-2'>Trading </h3>
        <h4 className='mb-2'>Searching for an offer </h4>
        <p>
          The first step to selling cryptocurrency for gold is to look for an
          offer that accepts this <a href='#'>type of payment</a>. You’ll also
          need to enter the amount of gold you wish to sell and the currency you
          prefer.
        </p>
        <p>
          Choose the best rate of cryptocurrency to have the highest profit
          possible. Also, pay attention to the reputation of your potential
          trade partner and choose the location carefully, to ensure that your
          trade partner will be able to deliver the gold to you. And finally,
          read through the <b>offer terms</b> and trade instructions carefully.
        </p>
        <p>
          Talk to your trade partner in the trade chat. Clarify how the gold
          will be delivered to you and yourself decide whether you are okay with
          the product before proceeding.{' '}
        </p>
        <Alert variant='success'>
          <b>Tip:</b>
          <ul className='mt-2' style={{ paddingLeft: '2rem' }}>
            <li>Prefer public places for trades in person.</li>
            <li>Use trackable shipping methods for delivery by mail. </li>
          </ul>
        </Alert>
      </div>
      <div className='mb-3'>
        <h3 className='mb-3'>Creating an offer</h3>
        <p>
          To sell cryptocurrency for gold, you can also{' '}
          <a href='#'>create your own offer.</a>
        </p>
        <p>Here are a few things to keep in mind:</p>
        <ul className='my-2' style={{ paddingLeft: '2rem' }}>
          <li className='mb-2'>
            Set a margin you find profitable as no negotiations are allowed
            during the trade
          </li>
          <li className='mb-2'>
            Write clear <a href='#'>offer terms and instructions</a>.
          </li>
          <li className='mb-2'>
            Be clear about what proofs of payment you expect for the gold you
            are accepting.
          </li>
          <li>
            For in-person trades, be very clear about the meeting location and
            exchange procedure.
          </li>
        </ul>
        <p>
          Once you’ve created and published your personalized offer, wait for a
          buyer to start a trade with you. Once a trade has started, you will
          receive a notification. Feel free to discuss all the necessary details
          with your trade partner on the trade chat, and proceed with the trade
          accordingly.
        </p>
      </div>
      <div className='mb-3'>
        <h3 className='mb-3'>Completing a trade</h3>
        <p>
          Once the buyer has paid you and marked the trade as <b>Paid</b>, they
          will have <b>21 days</b> to deliver the gold to you either by post or
          in person. If you do not confirm receiving goods within this timeframe
          a <b>dispute</b> will start automatically and our moderators will step
          in for assistance.
        </p>
        <Alert variant='info'>
          <p>
            <b>Note:</b> Calculation of 21 days starts from the moment the trade
            is marked as Paid.
          </p>
        </Alert>
        <p>
          Once you’ve received the gold, you can release the cryptocurrency from
          the trade escrow. Click the <b>Release</b> button only if you are
          absolutely sure about receiving the payment. Remember that
          cryptocurrency transactions are final and irreversible.
        </p>
      </div>
      <div className='mb-3'>
        <h3 className='mb-3'>After a trade</h3>
        <p>
          Once the trade is completed, you can leave appropriate feedback for
          your trade partner. Also, if you like trading with the user, you can
          <a href='#'>add them to your trusted list</a>.{' '}
        </p>
      </div>
      <div className='mb-3'>
        <h3 className='mb-3'>ID and address verification</h3>
        <p>
          Another important aspect to consider is your{' '}
          <b> ID and address verification</b>. You must complete your{' '}
          <a href='#'>ID verification</a> and{' '}
          <a href='#'>address verification</a> to trade with gold. This
          verification is important to protect our cryptocurrency sellers from
          any fraudulent activity. Therefore, it is not possible to trade
          cryptocurrency for gold or vice versa without being fully verified on
          Paxful.
        </p>
        <Alert variant='info'>
          <p>
            <b>Note:</b> Full verification is mandatory for offers and trades
            that start from 50 USD.
          </p>
        </Alert>
        <p>
          See our step-by-step guide on{' '}
          <a href='#'>how to sell cryptocurrency</a> and our{' '}
          <a href='#'>rules for selling cryptocurrency.</a>
        </p>
      </div>
    </div>
  )
}

export default ForGold
