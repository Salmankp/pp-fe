import React from 'react'
import VideoYoutubeEmbed from '../../../../Common/VideoYoutubeEmbed'
import { Alert } from 'react-bootstrap'

const BuyingCryptocurrency = () => {
  return (
    <div>
      <p>
        Crypto is exciting, and we are very happy that you are taking this
        journey with us.
      </p>
      <p>
        This guide will help to find existing offers to buy cryptocurrency. If
        you want to create your own offer, please see our
        <a href='#'> article on creating offers.</a>
      </p>
      <div>
        <h4 className='my-2'>Video</h4>
        <p>Here’s a short video on how to buy Bitcoin instantly:</p>
        <VideoYoutubeEmbed embedId='5LMS0PIzGh8' />
        <h3 className='my-4'>Step 1 Setting up search requirements</h3>
        <div>
          <ol>
            <li>
              <p>
                {' '}
                <a href='#'>Create an account</a> or log in to your Paxful
                account, hover over the Buy arrow, and click your preferred
                cryptocurrency.
              </p>
              <p>The page with offers to buy cryptocurrency appears.</p>
              <Alert variant='success'>
                <b>Tip:</b> Using your phone? Click the hamburger icon and
                choose one of the options from the list that appears.
              </Alert>
            </li>
            <li>
              <p>
                Click Show All or Any payment method field and select your
                preferred payment method to buy crypto on the dialog box that
                appears.
              </p>
              <p>
                Alternatively, click View offers for all payment options to see
                the list of all payment methods available.
              </p>
            </li>
            <li>
              Click Any currency and select your currency from the list. Enter
              the amount you want to trade in the Any amount field. You can
              leave the Any amount field empty if you do not have any specific
              amount in mind.
            </li>
            <li>Select your country from the Location list.</li>
            <li>
              {' '}
              Click SEARCH FOR OFFERS. The offer list is updated according to
              your search requirements.
            </li>
          </ol>
        </div>
      </div>
      <div>
        <h3 className='my-4'>Step 2 Finding an offer</h3>
        <ol>
          <li className='mb-2'>
            <p>Browse through the list of offers.</p>
            <p>The list begins with offers that have:</p>
            <ul className='my-4' style={{ paddingLeft: '2rem' }}>
              <li>Sellers with the best rating and reputation.</li>
              <li>
                Sellers who are the most active on the platform and are ready
                for instant trade.
              </li>
              <li>The most profitable margin.</li>
            </ul>
            <p>
              Check the tags and labels for additional information about an
              offer. When you find an offer you like, click Buy.
            </p>
            <Alert variant='primary'>
              <p>
                <b>Note:</b> Your trade hasn’t started yet, at this point.
              </p>
            </Alert>
            <p>The Offer page appears.</p>
            <p>Study all details of the offer such as:</p>
            <ul style={{ paddingLeft: '2rem' }}>
              <li>
                Buying limits — is the offered amount neither too low nor too
                high?
              </li>
              <li>Seller’s rate — does it look profitable for you?</li>
              <li>
                Time limit — will you manage to execute the payment within this
                timeframe?
              </li>
              <li>
                Offer terms — is the seller requesting additional documents or
                having specific requests as part of the trade procedure?
              </li>
            </ul>
          </li>
          <li className='mb-2'>
            <p>
              Enter the amount you are ready to trade in the traditional
              currency field or cryptocurrency field. Click BUY NOW. You can
              click Take a Tour to receive a walk-through of the process in case
              you have any questions or doubts.
            </p>
            <p>The Trade chat page appears.</p>
            <Alert>
              <p>
                <b>Note:</b> At the moment when the trade starts, the
                cryptocurrency rate is fixed and will not fluctuate.
              </p>
            </Alert>
          </li>
        </ol>
      </div>
      <div>
        <h3 className='my-4'>Step 3 Trading</h3>
        <ol>
          <li className='mb-2'>
            Discuss the necessary details with your partner using our trade chat
            and follow their instructions carefully.
          </li>
          <li className='mb-2'>
            <p>Make the payment.</p>
            <p>After making the payment, click I have paid.</p>
            <p>The Self Declaration dialog box appears.</p>
          </li>
          <li className='mb-2'>
            <p>Click Yes, I have paid</p>
            <Alert variant='info'>
              <b>Note:</b>
              <ul className='mt-2' style={{ paddingLeft: '2rem' }}>
                <li>You can always cancel the trade by clicking Cancel.</li>
                <li>
                  In case of <a href='#'>any trouble or disagreement</a>, click
                  Dispute to invite our moderators to investigate the case.
                </li>
              </ul>
            </Alert>
            <p>
              The seller releases BTC from the trade escrow to your Paxful
              wallet. The trade is completed successfully
            </p>
            <Alert variant='success'>
              <b>Tip:</b>
              <ul className='mt-2' style={{ paddingLeft: '2rem' }}>
                <li>
                  After the seller of cryptocurrency has released funds from the
                  trade escrow into your Paxful wallet, consider{' '}
                  <a href='#'>leaving feedback</a>. This helps other traders to
                  understand who they are dealing with.
                </li>
                <li>
                  You can click Click to add Username to your contacts to
                  quickly trade with them in the future to add a user to your
                  Trade Partners list. This will help you to create your own
                  trading community with users you trust.
                </li>
                <li>
                  If you need a <a href='#'>public receipt</a> of the BTC
                  transaction, click Public receipt on the bottom of the page.
                </li>
              </ul>
            </Alert>
            <p>
              Check our <a href='#'>tips for buying cryptocurrency</a> for more
              information. In case if you want to sell cryptocurrency, explore
              the <a href='#'>following guide</a>.
            </p>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default BuyingCryptocurrency
