import React from 'react'
import Accordion from 'react-bootstrap/Accordion'

const Sell = () => {
  return (
    <Accordion defaultActiveKey=''>
      <Accordion.Item eventKey='0'>
        <Accordion.Header>Creating an Offer</Accordion.Header>
        <Accordion.Body>
          <ol>
            <li className='mb-2'>
              Click “Create an Offer” on the Paxful homepage.
            </li>
            <li className='mb-2'>
              Choose the cryptocurrency you’d like to sell, then ensure “Sell
              Bitcoin/Tether/Ethereum” is selected.
            </li>
            <li className='mb-2'>
              Select “Bank Transfer” as your payment method, then choose the
              currency you’d like to receive and select the country where your
              bank account is based.{' '}
            </li>
            <li className='mb-2'>
              You’ll need to accept Paxful’s new terms for Bank Transfers to
              continue with an automated trade.{' '}
            </li>
            <li className='mb-2'>
              Select the bank account(s) that you’d like to use for this offer
              and enter your bank’s name(s). If you’ve not added a bank account
              yet, you can do so here. Click “Next Step” when you’re done.{' '}
            </li>
            <li className='mb-2'>
              Set the rate, offer trade limits and offer margin before
              continuing to “Next Step”.
            </li>
            <li className='mb-2'>
              You’ll now see “guided trade”, “no third parties” and “receipt
              required” set as the Offer Tags by default. The “guided trade” tag
              is mandatory. You can remove or change the latter two tags to suit
              your needs.{' '}
            </li>
            <li className='mb-2'>
              Make sure to read Paxful’s new Offer Terms carefully, then select
              whether you’d like your trade partner to be verified, the
              visibility of your offer and you can enter a reason for the Bank
              Transfer (optional).
            </li>
            <li className='mb-2'>
              Click “Create Offer” and your offer will be live!
            </li>
          </ol>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='1'>
        <Accordion.Header>Making a trade</Accordion.Header>
        <Accordion.Body>
          <ol>
            <li className='mb-2'>
              When a buyer starts an active trade with your offer, your
              cryptocurrency will be securely held in escrow until you release
              it.
            </li>
            <li className='mb-2'>
              You’ll be shown how much cryptocurrency you’re selling and what
              you’ll receive in return, as well as the buyer’s and your own
              account details.
            </li>
            <li className='mb-2'>
              Once the buyer has marked the trade as Paid and attached proof of
              payment, check your own account to confirm you’ve received the
              funds.
            </li>
            <li className='mb-2'>
              When the funds have arrived, click “Send Bitcoin”.
            </li>
            <li className='mb-2'>
              Enter your 2FA code to release the crypto from escrow and complete
              the transaction. Don’t forget to leave feedback!
            </li>
          </ol>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default Sell
