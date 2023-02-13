import React from 'react'
import Accordion from 'react-bootstrap/Accordion'

const Buy = () => {
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
              Choose the cryptocurrency you’d like to buy, then ensure “Buy
              Bitcoin/Tether/Ethereum” is selected.
            </li>
            <li className='mb-2'>
              Select “Bank Transfer” as your payment method, then choose the
              currency you’d like to transfer and select the country where your
              bank account is based.{' '}
            </li>
            <li className='mb-2'>
              You’ll also need to accept Paxful’s new terms for Bank Transfers
              to continue with an automated trade.
            </li>
            <li className='mb-2'>
              Select which banks you’re willing to send payment to (or select
              “All Banks”), then choose which bank account you’ll use to send
              payment. If you’ve not added a bank account yet, you can do so
              here. Click “Next Step” when you’re done.
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
              Make sure to read Paxful’s new Offer Terms carefully, then you can
              adjust additional instructions and limitations on your offer.
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
              When a seller starts an active trade with your offer, their
              cryptocurrency will be securely held in escrow. They’ll release it
              once they receive your payment.
            </li>
            <li className='mb-2'>
              You’ll be shown how much you’re buying and what you need to pay,
              as well as the seller’s bank account details.{' '}
            </li>
            <li className='mb-2'>
              Select which bank account you’ll make the payment from and click
              "Confirm". We’ll then send your account details to the seller.{' '}
            </li>
            <li className='mb-2'>
              Transfer the payment to the seller’s specified bank account. Make
              sure you receive a receipt or take a photo or screenshot of the
              confirmation to use as proof of payment.
            </li>
            <li className='mb-2'>
              Mark the trade as “Paid”, then confirm on the Self Declaration
              pop-up.{' '}
            </li>
            <li className='mb-2'>
              Select your proof of payment on the next pop-up, then click
              "Upload".
            </li>
            <li className='mb-2'>
              Click "Upload" to send your proof of payment to the seller.{' '}
            </li>
            <li className='mb-2'>
              Once the seller receives the payment, they’ll release the
              cryptocurrency to your wallet to complete the transaction. Don’t
              forget to leave feedback!
            </li>
          </ol>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default Buy
