import React from 'react'
import { Alert } from 'react-bootstrap'

const EditOffers = () => {
  return (
    <div>
      <p>
        Once you make your buy or sell offer, you can easily edit the offer by
        following these quick steps:
      </p>
      <ol>
        <li className='mb-2'>
          Go to your <a href='#'>Classic Dashboard</a>. Under the{' '}
          <b>My Offers</b> section, you can see a snapshot of all your current
          offers. Here you can view your offers in more detail and edit your
          offers.
        </li>
        <li className='mb-2'>
          {' '}
          For your Buy Offers, click on Offers to Buy. For your Sell Offers,
          click on Offers to Sell
        </li>
        <li className='mb-2'>
          <p>Next, click on the Edit button, next to the View button.</p>
          <Alert variant='info'>
            <b>Note:</b>
            <p className='mt-2'>
              You can also <b>Turn Off</b> your offers with the blue toggle
              button
            </p>
          </Alert>
        </li>
        <li className='mb-2'>
          <p>
            You will be taken to the first <b>Edit Offer</b> page. On this page,
            you can make changes to your payment method and other trade details.
            Once all your info is updated, click Next Step in the right-hand
            column.
          </p>
          <Alert variant='info'>
            <b>Note:</b>
            <p className='mt-2'>
              You can always delete the offer by clicking on the delete offer
              button.
            </p>
          </Alert>
        </li>
        <li className='mb-2'>
          After hitting <b>Next Step</b>, you will be taken to the second{' '}
          <b>Edit Offer</b>
          page. Here you can change trade pricing, offer margins, and other
          details. Once all the info is updated click <b>Next Step</b> in the
          right-hand column.
        </li>
        <li>
          After hitting <b>Next Step</b>, you will be taken to the third Edit
          Offer page. Here you can change trade instructions, offer tags, offer
          terms, and other details. Once all the info is updated click Update
          Offer in the right-hand column.
        </li>
        <li>
          <p>
            Once you update your offer, you will see a pop-up message confirming
            your updates.
          </p>
          <Alert variant='info'>
            <b>Note:</b>
            <p className='mt-2'>
              You can also share your updated offer on your social media
              accounts and via email.
            </p>
          </Alert>
          <p>That’s it! You have now successfully edited your offer.</p>
        </li>
      </ol>
    </div>
  )
}

export default EditOffers
