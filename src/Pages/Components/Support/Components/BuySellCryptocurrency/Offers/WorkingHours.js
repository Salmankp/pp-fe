import React from 'react'
import { Alert, Card } from 'react-bootstrap'

const WorkingHours = () => {
  return (
    <div>
      <p>
        As an offer owner, you have the option to set a timeframe for your
        offers to be active on the public list. This way, you don't need to
        deactivate each of your offers every time you go offline. This guide
        will show you how to manage working hours for your offers and how to
        find them on an offer of your trade partner.
      </p>
      <Card>
        <Card.Body>
          <ol>
            <li className='mb-2'>
              <a href='#'>Managing working hours for your offers</a>
            </li>
            <li>
              <a href='#'>Working hours of your trade partners</a>
            </li>
          </ol>
        </Card.Body>
      </Card>
      <div className='my-4'>
        <h3>Managing working hours for your offers</h3>
        <p>
          To <b>set or edit working hours</b> for your offer, do the following:
        </p>
        <ol className='my-2'>
          <li className='mb-2'>
            Begin creating or editing your offer as usual, according to{' '}
            <a href='#'>standard flow.</a>
          </li>
          <li className='mb-2'>
            On <b>Step 3</b> of the offer creation flow in{' '}
            <b>Advanced options</b>, locate the <b>Working hours</b> section.
            Choose <b>your time zone</b> from the Your Time Zone drop-down list.
          </li>
          <li className='mb-2'>
            Click the days of the week you want to select or deselect.
          </li>
          <li className='mb-2'>
            <p>
              Click a time box and select a time from the drop-down list that
              appears. Choose the timeframe for your offer to be active on the
              public listing.
            </p>
            <Alert>
              <b>Note</b>
              <ul className='mt-3' style={{ paddingLeft: '2rem' }}>
                <li className='mb-2'>
                  On the unselected days of the week, your offer will be
                  inactive.
                </li>
                <li className='mb-2'>
                  To set a different time for each day of the week, activate the
                  <b>Custom schedule</b> toggle, and make the necessary
                  adjustments.
                </li>
                <li className='mb-2'>
                  To apply the selected schedule for all existing offers,
                  activate the <b>Apply to all offers</b> toggle.
                </li>
                <li className='mb-2'>
                  To reset a selected schedule, click <b>Reset Schedule</b>.
                </li>
              </ul>
            </Alert>
          </li>
          <li className='mb-2'>
            <p>
              Continue the offer creation or editing flow as usual and click
              <b>Create offer</b> or <b>Update offer</b> to save your offer
              working hours.
            </p>
            <h3>Working hours of your trade partners</h3>
            <p>To see the working hours of an offer, do the following:</p>
            <ul className='my-2' style={{ paddingLeft: '2rem' }}>
              <li className='mb-2'>
                On the offers list page, locate an offer of your interest and
                click Buy or Sell, depending on the offer type.
              </li>
              <li>
                On the offer page, scroll down to see the{' '}
                <b>Offer working hours</b>
                section.
              </li>
            </ul>
            <Alert variant='success'>
              <b>TIP:</b>
              <ul style={{ paddingLeft: '2rem' }}>
                <li className='mb-2'>
                  To see the timezone of an offer, hover over the clock icon.
                </li>
                <li className='mb-2'>
                  To see the exact schedule, hover over a day of the week.
                </li>
              </ul>
            </Alert>
            <p>
              For more information on how to improve your offer creation flow,
              check our guides on how to write good <a href='#'>offer terms</a>{' '}
              and <a href='#'>trade instructions.</a>
            </p>
          </li>
        </ol>
        <span role='button' className='text-primary'>
          See all 17 articles
        </span>
      </div>
    </div>
  )
}

export default WorkingHours
