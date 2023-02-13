import React from 'react'
import { Alert, Card } from 'react-bootstrap'

const WithCashPayment = () => {
  return (
    <div>
      <p>
        There are a variety of cash payments that you can use to sell
        cryptocurrency on Paxful. This article gives you an overview of selling
        cryptocurrency using any of the supported cash payments.{' '}
      </p>
      <Card>
        <Card.Body>
          <ol>
            <li className='mb-2'>
              <a href=''>Before trading</a>
            </li>
            <li className='mb-2'>
              <a href=''>Trading</a>
            </li>
            <li className='mb-2'>
              <a href=''>Searching for an offer</a>
            </li>
            <li className='mb-2'>
              <a href=''>Creating an offer</a>
            </li>
            <li className='mb-2'>
              <a href=''>Completing a trade</a>
            </li>
            <li className='mb-2'>
              <a href=''>After a trade</a>
            </li>
          </ol>
        </Card.Body>
      </Card>
      <div className='my-3'>
        <h3 className='mb-3'>Before trading</h3>
        <p>
          Before selling cryptocurrency with cash payments, here are a few
          things to consider:
        </p>
        <ul style={{ paddingLeft: '2rem' }}>
          <li className='mb-2'>
            Some payment methods such as Cash By Mail or Cash In Person, require
            full ID and address verification (for amounts higher than 50 USD per
            trade).
          </li>
          <li className='mb-2'>
            In case of some disputes, it is very difficult for Paxful to provide
            assistance — be ready to file a Police report in such cases.
          </li>
        </ul>
      </div>
      <div className='mb-3'>
        <h3 className='mb-2'>Trading</h3>
        <h4>Searching for an offer</h4>
        <p>
          The first step to selling cryptocurrency with cash is to look for an
          offer that <a href='#'>accepts cash as payment</a>. You’ll also need
          to enter the amount you wish to sell and your preferred currency.
        </p>
        <p>
          When you find the offer that suits you, be sure to read the offer
          terms before starting the trade. This will show you a brief summary of
          what the buyer requires from you regarding the payment. In the case of
          Cash In Person, the offer terms should provide a brief list of meeting
          preferences.
        </p>
        <p>
          After reading through the offer terms and confirming that you agree
          with the conditions, it’s time to start the trade. Once the trade has
          begun, a more specific set of instructions should appear for the
          meetup. Usually, for cash trades, buyers should promise to provide a
          teller receipt. If at any point during the trade you feel confused
          about the instructions, feel free to send a message to the buyer via
          trade chat. They should be able to help you with any questions that
          you may have.{' '}
        </p>
      </div>
      <div className='mb-3'>
        <h3 className='mb-3'>Creating an offer</h3>
        <p>
          To sell cryptocurrency with a cash payment, you can also{' '}
          <a href='#'>create your own offer</a>. Here are some things to
          consider:
        </p>
        <ul className='my-3' style={{ paddingLeft: '2rem' }}>
          <li>
            Set a margin you find profitable as no negotiations during the trade
            are allowed.
          </li>
          <li>
            Write clear <a href='#'>offer terms and instructions</a>.
          </li>
          <li>
            Make it clear which proof of payment you require and how much time
            you need to confirm the payment.
          </li>
          <li>
            In the case of Cash In Person, state clearly, where you want to
            meet.
          </li>
        </ul>
        <Alert variant='success'>
          <p>
            <b>Tip:</b> Prefer public places for <b>Cash In Person</b> trades.
          </p>
        </Alert>
        <p>
          After creating and publishing your personalized offer, wait for a
          buyer to start a trade with you. Once a trade has started, you will
          receive a notification. Feel free to discuss all the necessary details
          with your trade partner.
        </p>
      </div>
      <div className='mb-3'>
        <h3 className='mb-3'>Completing a trade</h3>
        <p>
          For a Cash In Person trade, once all the details have been settled,
          it’s time to meet up with your buyer. Go to the specified location and
          collect the cash from the buyer. Once this is done, wait for the buyer
          to mark the trade as Paid. Now click the Release button.{' '}
        </p>
        <p>
          Note that in the case of Cash By Mail, the trade may require a lot of
          patience from both sides.
        </p>
        <p>
          With other cash payment methods, the payment process itself is usually
          quite simple. In any case, always make sure you have provided correct
          details to the buyer and collected all possible proof of receiving or
          not receiving the payment.{' '}
        </p>
        <p>
          The last step for you is to release cryptocurrency from the trade
          escrow. Click the Release button only if you are absolutely sure about
          receiving the payment.
        </p>
      </div>
      <div className='mb-5'>
        <h3>After a trade </h3>
        <p>
          Once the trade is completed, you can leave appropriate feedback for
          your trade partner. Also, if you like trading with the user, you can
          <a href='#'>add them to your trusted list</a>.{' '}
        </p>
        <p>
          Here is some <a href='#'>more information</a> on how to sell
          cryptocurrency on Paxful.
        </p>
      </div>
      <span role='button' className='text-primary'>
        See all 12 articles
      </span>
    </div>
  )
}

export default WithCashPayment
