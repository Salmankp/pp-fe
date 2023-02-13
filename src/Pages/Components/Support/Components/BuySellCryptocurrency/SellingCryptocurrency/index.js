import React from 'react'
import { Alert, Card } from 'react-bootstrap'
import VideoYoutubeEmbed from '../../../../Common/VideoYoutubeEmbed'
import Accordion from 'react-bootstrap/Accordion'
import Rules from './Rules'
import InGameItems from './InGameItems'
import ForGold from './ForGold'
import WithBankTransfer from './WithBankTransfer'
import WithCashPayment from './WithCashPayment'

const SellingCryptocurrency = () => {
  return (
    <Accordion defaultActiveKey=''>
      <Accordion.Item eventKey='0'>
        <Accordion.Header>Selling Cryptocurrency</Accordion.Header>
        <Accordion.Body>
          <p>
            Selling crypto is very exciting, and we are thrilled that you are
            taking this journey with us.
          </p>
          <p>
            This guide will help to find existing offers to sell cryptocurrency.
            If you want to create your own offer, please see our article on
            <a href='#'>creating offers</a>.{' '}
          </p>
          <Card className='my-4'>
            <Card.Body>
              <ol>
                <li className='mb-2'>
                  <a href='#'>Video</a>
                </li>
                <li className='mb-2'>
                  <a href='#'>Step 1 Setting up search requirements</a>
                </li>
                <li className='mb-2'>
                  <a href='#'>Step 2 Finding an offer</a>
                </li>
                <li className='mb-2'>
                  <a href='#'>Step 3 Trading</a>
                </li>
              </ol>
            </Card.Body>
          </Card>
          <div>
            <h3>Video</h3>
            <p>Here’s a short video on how to sell Bitcoin instantly:</p>
            <VideoYoutubeEmbed embedId='5LMS0PIzGh8' />
            <h3 className='my-3'>Step 1 Setting up search requirements</h3>
            <ol>
              <li className='mb-2'>
                <p>
                  <a href='#'> Create an account </a> or log in to your Paxful
                  account, hover over the Sell arrow, and click your preferred
                  cryptocurrency.
                </p>
                <p>The page with offers to sell cryptocurrency appears.</p>
                <Alert variant='success'>
                  <p>
                    <b>Top:</b> Using your phone? Click the hamburger icon and
                    choose one of the options from the list that appears.
                  </p>
                </Alert>
              </li>
              <li>
                <p>
                  Click <b>Show All</b> or <b>Any payment method</b> field and
                  select your preferred payment method to sell crypto on the
                  dialog box that appears.
                </p>
                <p>
                  Alternatively, click View offers for all payment options to
                  see the list of all payment methods available.
                </p>
              </li>
              <li>
                <p>
                  Click <b>Any currency</b> and select your currency from the
                  list. Enter the amount you want to trade in the{' '}
                  <b>Any amount</b>
                  field.
                </p>
                <p>
                  You can leave the <b>Any amount</b> field empty if you do not
                  have any specific amount in mind.
                </p>
              </li>
              <li>
                Select your country from the <b>Location</b> list.
              </li>
              <li>
                Click <b>FIND OFFERS</b>. The offer list is updated according to
                your search requirements.
              </li>
            </ol>
          </div>
          <div className='my-3'>
            <h3 className='mb-3'>Step 2 Finding an offer</h3>
            <ol>
              <li className='mb-2'>
                <p>Browse through the list of offers.</p>
                <p>The list begins with offers that have:</p>
                <ul style={{ paddingLeft: '2rem' }}>
                  <li>Buyers with the best rating and reputation.</li>
                  <li>
                    Buyers who are the most active on the platform and are ready
                    for instant trade.
                  </li>
                  <li>The most profitable margin.</li>
                </ul>
                <p className='my-2'>
                  Check the tags and labels for additional information about an
                  offer. When you find an offer you like, click <b>Sell</b>.
                </p>
                <Alert variant='info'>
                  <p>
                    <b>Note:</b> Your trade hasn’t started yet, at this point.
                  </p>
                </Alert>
                <p>
                  The <b>Offer</b> page appears.
                </p>
                <p>Study all details of the offer such as:</p>
                <ul style={{ paddingLeft: '2rem' }}>
                  <li className='mb-2'>
                    Selling limits — is the offered amount neither too low nor
                    too high?
                  </li>
                  <li className='mb-2'>
                    Buyer’s rate — does it look profitable for you?
                  </li>
                  <li className='mb-2'>
                    Offer terms — is the buyer requesting additional documents
                    or having specific requests as part of the trade procedure?
                  </li>
                  <li className='mb-2'>
                    <a href='#'>P2P fee</a> — this fee depends on the payment
                    method you choose.
                  </li>
                </ul>
              </li>
              <li className='mb-2'>
                Enter the amount you are ready to trade in the{' '}
                <b>traditional currency</b> field or <b>cryptocurrency</b>{' '}
                field. Click <b>SELL NOW</b>.
              </li>
              <li>
                In a dialog box that appears, click{' '}
                <b>I understand the risk, proceed to sell.</b>
              </li>
              <li>
                <p>
                  A new caution dialog box appears. Confirm reading the warning
                  by clicking <b>I understand</b>
                </p>
                <p>
                  The <b>Trade chat</b> page appears.
                </p>
                <Alert variant='info'>
                  <b>Note:</b>
                  <ul className='mt-2' style={{ paddingLeft: '2rem' }}>
                    <li>
                      When the trade starts, the cryptocurrency rate is fixed
                      and will not fluctuate.
                    </li>
                    <li>
                      Cryptocurrency is moved from your personal Paxful wallet
                      to the trade’s secure escrow.
                    </li>
                  </ul>
                </Alert>
              </li>
            </ol>
          </div>
          <div className='mb-2'>
            <h3 className='mb-3'>Step 3 Trading</h3>
            <ol>
              <li>
                Discuss the necessary details with your partner using our trade
                chat and follow their instructions carefully.
              </li>
              <li>
                <p>
                  Once your trade partner has made the payment, click{' '}
                  <b>Release</b>.
                </p>
                <p>
                  Double-check if the amount sent to you is correct. Confirm
                  sending BTC to the buyer by clicking <b>Release</b> in a
                  dialog box that appears.
                </p>
                <Alert variant='info'>
                  <b>Note:</b>
                  <ul className='mt-2' style={{ paddingLeft: '2rem' }}>
                    <li className='mb-2'>
                      Only the buyer can cancel the trade.
                    </li>
                    <li className='mb-2'>
                      In case of any trouble or disagreement, click Dispute to
                      invite our moderators to investigate the case.
                    </li>
                    <li className='mb-2'>
                      You can click Report a problem to file a{' '}
                      <a href='#'>report</a>.
                    </li>
                    <li>
                      If the trade expires, you can reopen it by clicking{' '}
                      <b>Reopen escrow</b>.
                    </li>
                  </ul>
                </Alert>
                <p>
                  You release BTC from the trade escrow to buyer's Paxful
                  wallet. The trade is completed successfully.{' '}
                </p>
                <Alert variant='success'>
                  <b>Note:</b>
                  <ul className='mt-2' style={{ paddingLeft: '2rem' }}>
                    <li className='mb-2'>
                      After a trade, consider leaving feedback to your trade
                      partner. This helps other traders to understand who they
                      are dealing with.
                    </li>
                    <li className='mb-2'>
                      You can click Click to add Username to your contacts to
                      quickly trade with them in the future to add a user to
                      your Trade Partners list. This will help you to create
                      your own trading community with users you trust.
                    </li>
                    <li className='mb-2'>
                      If you need a <a href='#'>public receipt</a> of the BTC
                      transaction, click
                      <b>Public receipt</b> on the bottom of the page.
                    </li>
                  </ul>
                </Alert>
                <Alert variant='danger'>
                  <p>
                    <b>Warning:</b> If your country is in the{' '}
                    <a href='#'>OFAC grey list</a>, selling cryptocurrency
                    requires you to <a href='#'>verify your ID</a>.
                  </p>
                </Alert>
                <p>
                  Check our <a href='#'>tips for selling cryptocurrency</a> for
                  more information. In case if you want to buy crypto, see{' '}
                  <a href='#'>the following guide</a>.
                </p>
              </li>
            </ol>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='1'>
        <Accordion.Header>Rules for Selling Cryptocurrency</Accordion.Header>
        <Accordion.Body>
          <Rules />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='2'>
        <Accordion.Header>
          Selling Cryptocurrency for in-game items
        </Accordion.Header>
        <Accordion.Body>
          <InGameItems />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='3'>
        <Accordion.Header>Selling Cryptocurrency for Gold</Accordion.Header>
        <Accordion.Body>
          <ForGold />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='4'>
        <Accordion.Header>
          Selling Cryptocurrency with Bank Transfers
        </Accordion.Header>
        <Accordion.Body>
          <WithBankTransfer />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='5'>
        <Accordion.Header>
          Selling Cryptocurrency with Cash Payments
        </Accordion.Header>
        <Accordion.Body>
          <WithCashPayment />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default SellingCryptocurrency
