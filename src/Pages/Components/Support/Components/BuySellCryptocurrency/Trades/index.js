import React from 'react'
import { Alert } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'
import Sell from './AutomatedBankTransfer/Sell'
import Buy from './AutomatedBankTransfer/Buy'

const Trades = () => {
  return (
    <Accordion defaultActiveKey=''>
      <Accordion.Item eventKey='0'>
        <Accordion.Header>Automated Bank Transfers</Accordion.Header>
        <Accordion.Body>
          <div>
            <p>
              We’ve automated Bank Transfers on Paxful to make trading even
              easier and safer for our users.{' '}
            </p>
            <p>
              From now on, the trade chat will be disabled in Bank Transfer
              offers you create or edit. We’ll automatically share the buyer and
              seller’s account details with each other instead. We’ve also
              introduced new Offer Terms for Bank Transfer trades, which have
              been set by Paxful. These Offer Terms outline how the trade will
              proceed.{' '}
            </p>
            <Alert>
              <b>Note:</b> If you’d prefer to stick with the old Bank Transfer
              process, choose “Other Bank Transfer” as your payment method.
            </Alert>
          </div>
          <div className='mb-4'>
            <h4 className='mb-3'>
              How to sell cryptocurrency with an automated Bank Transfer
            </h4>
            <Sell />
          </div>
          <div>
            <h4 className='mb-3'>
              How to buy cryptocurrency with an automated Bank Transfer
            </h4>
            <Buy />
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='1'>
        <Accordion.Header>How to Avoid chargebacks</Accordion.Header>
        <Accordion.Body>
          <p>
            Chargebacks can happen with some payment methods even after a trade
            is done. This means that your trade partner can request their funds
            back, even after you received the payment. There are a few different
            things you can do to protect yourself from chargebacks when trading
            in the marketplace:
          </p>
          <ul style={{ paddingLeft: '2rem' }}>
            <li className='mb-2'>
              Chargebacks are usually related to third party payments*. If a
              third party payment was sent, try to get as much information as
              you can about the account the payment was sent from
            </li>
            <li className='mb-2'>
              Take a look at your trade partner’s feedback history before
              starting a trade to make sure they aren’t getting feedback about
              chargebacks
            </li>
            <li className='mb-2'>
              if you created the offer, add tags that indicate if you accept
              third party payments or not.
              <p>
                f the user is ID verified, ask them if they are making the
                payment with their verified name
              </p>
            </li>
            <li className='mb-2'>
              If you don’t accept third party payments and the buyer is trying
              to use one, ask the buyer to cancel the trade
            </li>
          </ul>
          <p>
            *Third-party payments are payments made by someone who the payment
            method/account does not belong to.
          </p>
          <p>
            If a buyer has filed a chargeback, take a look at this article to
            see what you can do.
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='2'>
        <Accordion.Header>P2P Escrow</Accordion.Header>
        <Accordion.Body>
          <p>
            Paxful’s escrow feature aims to ensure a fair trade experience for
            both parties. Paxful is a peer-to-peer cryptocurrency marketplace
            where people can meet and safely trade crypto using over 300 payment
            methods. When a trade starts, the cryptocurrency from the seller’s
            wallet is automatically moved into a temporary safe deposit account
            (escrow) where it will be held until the transaction is complete.
          </p>
          <h5>So how does the escrow work?</h5>
          <p>
            When a trade starts, the seller’s crypto is automatically
            transferred into our secure escrow.{' '}
          </p>
          <Alert>
            <p>
              <b>Note:</b> The amount transferred into the escrow is the trade
              amount plus escrow fee.
            </p>
          </Alert>
          <p>
            <b>How escrow helps cryptocurrency buyers:</b> If you as a buyer
            make the payment but the seller refuses to release your crypto, the
            secure escrow serves as a guarantee. The seller’s cryptocurrency
            will stay in escrow until our moderators step in to investigate the
            situation and award the cryptocurrency to the deserving party.
          </p>
          <p>
            <b>How escrow helps cryptocurrency sellers:</b> Sometimes a buyer
            may not be able to finalize the payment for the cryptocurrency. If
            you’re the seller in this case, then your cryptocurrency is safely
            returned back to your wallet.
          </p>
          <p>
            Once the payment is made and confirmed, the seller can release
            cryptocurrency from escrow to the buyer, and this will mark the
            completion of the trade.
          </p>
          <p>
            Here is more information on how you can{' '}
            <a href='#'>start a dispute</a>. Also, check how you can contact our
            24/7 dedicated <a href='#'>customer support team</a>.
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='3'>
        <Accordion.Header>Paxfull Trades Flow</Accordion.Header>
        <Accordion.Body>
          <p>
            All Paxful trades flow in a similar way. However, you may encounter
            some specific cases depending on the payment method you choose. If
            you familiarize yourself with the process, it’ll make trading on
            Paxful a lot easier.
          </p>
          <div className='mb-4'>
            <h5 className='mb-4'>Buying cryptocurrency</h5>
            <p>
              Find an offer on our Buy Bitcoin list. For more information on how
              to buy crypto see our guide.
            </p>
            <p>
              You can also create your own offers directly from your Paxful
              account. See our short guide on how to create your first offer.
            </p>
          </div>
          <div className='mb-4'>
            <h5 className='mb-4'>Selling cryptocurrency</h5>
            <p>
              Find an offer on our Sell Bitcoin list. For more information on
              how to sell crypto see our guide.
            </p>
            <p>
              You can also <b>create your own offers</b> directly from
              <a href='#'> your Paxful account</a>. See our short guide on how
              to <a href='#'>create your first offer.</a>
            </p>
            <Alert>
              <p>
                <b>Note:</b> Some payment methods on our platform have automated
                trade flow. Here is the list:
              </p>
              <a href='#'>Trade Page Lite </a>
            </Alert>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='4'>
        <Accordion.Header>Trade Status</Accordion.Header>
        <Accordion.Body>
          <p>Trade statuses determine the progress of your trades. </p>
          <p>
            Each trade on Paxful may have a different status. You can see the
            exact status of your trades from your dashboard. There are eight
            statuses your trade could possibly have:
          </p>
          <p>
            <b>Active funded –</b> a trade has started, and funds have been
            transferred from the seller’s wallet into trade escrow.
          </p>
          <p>
            <b>Paid –</b> a buyer has marked the trade as paid. It means that a
            buyer of cryptocurrency is sure that he has made the payment and has
            actually clicked the Paid button.
          </p>
          <p>
            <b>Expired –</b> every trade has a payment window for a buyer to
            make a payment. When a trade is funded, but a buyer failed to mark a
            trade as paid, the payment window expires. This status means that a
            trade has been cancelled.
          </p>
          <p>
            <b>Cancelled –</b>a buyer or a seller has willingly cancelled a
            trade
          </p>
          <p>
            <b>Dispute open –</b>a buyer or a seller has opened a dispute.
          </p>
          <p>
            <b>Successful –</b>a seller of cryptocurrency has released funds
            from the trade escrow to the buyer’s wallet.
          </p>
          <p>
            <b>Awarded seller –</b>a dispute has taken place, and cryptocurrency
            was awarded to the seller of cryptocurrency.
          </p>
          <p>
            <b>Awarded buyer –</b>a dispute has taken place, and cryptocurrency
            was awarded to the buyer of cryptocurrency.
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='5'>
        <Accordion.Header>How Do QR Codes work ?</Accordion.Header>
        <Accordion.Body>
          <p>
            You can add a QR code to your Paxful account to help make your
            online wallet trades easier and faster. By adding a QR code, you can
            quickly share your online wallet details in the trade chat, or when
            you're creating an offer. We’ve broken down the steps on how to add
            and use a QR code in the Paxful marketplace:
          </p>
          <div className='mb-4'>
            <h4 className='mb-3'>To add a QR code to your Paxful account:</h4>
            <ol>
              <li className='mb-3'>
                Head to the <a href='#'>settings page</a> of your Paxful account
                and click on Payment details
              </li>
              <li className='mb-3'>
                Scroll down to Online Wallets and click on Add New
              </li>
              <li className='mb-3'>
                Next, pick your wallet name, upload the wallet URL, and give the
                account a nickname{' '}
              </li>
              <li className='mb-3'>Once you’re done, click Add</li>
            </ol>
          </div>
          <div className='mb-4'>
            <h4 className='mb-3'>
              To edit or delete a QR code connected to your Paxful account:
            </h4>
            <ol>
              <li className='mb-3'>
                Head to the settings page of your Paxful account and click on
                Payment details
              </li>
              <li className='mb-3'>
                Select the online wallet you’d like to edit or delete
              </li>
              <li className='mb-3'>Click on the action you’d like to do</li>
            </ol>
          </div>
          <div className='mb-4'>
            <h4 className='mb-3'>To upload a QR code in the chat:</h4>
            <ol>
              <li className='mb-3'>
                Once you’ve started a trade and you have a QR code linked to
                your Paxful account, you’ll see a mini QR code icon in the trade
                chat. Tap on the icon for the list of your linked online wallets
              </li>
              <li className='mb-3'>Select the QR code you’d like to use</li>
              <li className='mb-3'>
                From there, your QR code will be uploaded to the chat
              </li>
            </ol>
            <Alert>
              <b>Notes:</b>
              <ul className='mt-2' style={{ paddingLeft: '2rem' }}>
                <li>
                  If you created a sell offer with an online wallet, your QR
                  code will automatically appear in the trade chat once the
                  trade is started.
                </li>
                <li>
                  If you’re the buyer, you’ll need to click on the QR code link
                  to visit your trade partner’s online wallet.
                </li>
              </ul>
            </Alert>
          </div>
          <div className='mb-4'>
            <h4 className='mb-3'>To create an offer with a QR code:</h4>
            <ol>
              <li className='mb-3'>
                Start by creating your offer as you usually would—if you select
                an online wallet that is supported by this feature, you’ll have
                the option to upload your linked online wallet during the first
                step:
              </li>
              <li className='mb-3'>
                Select the online wallet you’d like to use step:
              </li>
              <li className='mb-3'>
                From there, you can continue to create your offer as usual{' '}
              </li>
            </ol>
            <Alert>
              <p>
                <b>Note:</b> If you're adding a QR code to your offer, the
                details will automatically be shared in the trade chat once the
                trade starts.
              </p>
            </Alert>
            <Alert variant='danger'>
              <p>
                <b>Warning:</b> Not all payment methods and regions are
                available with this feature right now.
              </p>
            </Alert>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default Trades
