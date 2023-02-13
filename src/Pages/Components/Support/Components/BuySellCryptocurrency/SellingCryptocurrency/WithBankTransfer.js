import React from 'react'
import { Card } from 'react-bootstrap'

const WithBankTransfer = () => {
  return (
    <div>
      <p>
        Bank Transfers are a popular payment method on Paxful. This article will
        show how to sell cryptocurrency with our automated Bank Transfers.
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
          </ol>
        </Card.Body>
      </Card>
      <div className='my-3'>
        <h3 className='mb-3'>Before trading</h3>
        <p>
          Before you start selling cryptocurrency with Bank Transfers,{' '}
          <a href='#'>add your bank account details</a> to your Paxful profile.
        </p>
        <p>
          Make sure your bank account is ready to make transactions and check if
          the account has any transaction limits or geographical restrictions in
          place. Also, consider using a bank that can easily provide proof of
          payment, with all of the details visible on one page or pdf file.
        </p>
        <p>The required details for proof of payment on Paxful are: </p>
        <ul className='my-3' style={{ paddingLeft: '2rem' }}>
          <li>Account holder’s first and last name.</li>
          <li>Bank’s name and logo.</li>
          <li>Transaction date, time and status.</li>
          <li>Sender’s account number and full name.</li>
        </ul>
      </div>
      <div className='mb-3'>
        <h3 className='mb-3'>Trading</h3>
        <h4>Searching for an offer</h4>
        <p>
          The first step to selling cryptocurrency via Bank Transfer is to look
          for an offer that accepts <a href='#'>Bank Transfers as payment</a>.
          You’ll also need to enter the amount you wish to sell and the currency
          you prefer.
        </p>
        <p>
          After you find a suitable offer, you’ll need to read and accept the
          new offer terms before the trade begins. These offer terms are set by
          Paxful and outline how the trade should be carried out.
        </p>
        <p>
          Once the trade starts, the trade chat will be disabled. We now
          automatically send the buyer and seller’s bank account details to each
          other, making Bank Transfers even safer and easier.{' '}
        </p>
      </div>
      <div className='mb-3'>
        <h3 className='mb-3'>Creating an offer</h3>
        <p>
          To sell cryptocurrency via Bank Transfer, you can also{' '}
          <a href='#'>create your own offer</a>.
        </p>
        <p>Here are a couple of tips for your Bank Transfer offer:</p>
        <ul className='my-2' style={{ paddingLeft: '2rem' }}>
          <li className='mb-2'>
            Set a margin you find profitable as no negotiations during the trade
            are allowed.
          </li>
          <li className='mb-2'>
            If you’d like to use the old Bank Transfer process and set your own
            offer terms, choose “Other Bank Transfer” as your payment method.
          </li>
        </ul>
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
          Once the buyer has paid you, marked the trade as Paid and uploaded
          proof of payment, double-check if you’ve received the payment on your
          end.
        </p>
        <p>
          The last step for you is to release cryptocurrency from the trade
          escrow. Only click the “Release” button if you are absolutely sure you
          have received the payment.
        </p>
      </div>
      <div className='mb-3'>
        <h3 className='mb-3'>After a trade</h3>
        <p>
          Once the trade is completed, you can leave appropriate feedback for
          your trade partner. Also, if you like trading with the user, you can
          <a href='#'>add them to your trusted list</a>.
        </p>
        <p>
          Here is some <a href='#'>more information</a> on how to sell
          cryptocurrency on Paxful.
        </p>
      </div>
    </div>
  )
}

export default WithBankTransfer
