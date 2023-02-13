import React from 'react'
import { Alert, Card } from 'react-bootstrap'

const BuyingGameTerms = () => {
  return (
    <div>
      <p>
        In addition to gift cards with a game balance, some games offer an
        option to gift in-game items such as resources, skins, weapons, etc. We
        are happy to offer you an opportunity to buy crypto for in-game items.
        Here’s everything you need to know about it.
      </p>
      <Card>
        <Card.Body>
          <ol>
            <li>
              <a href='#'>Before trading</a>
            </li>
            <li>
              <a href='#'>Trading</a>
            </li>
            <li>
              <a href='#'>Searching for an offer</a>
            </li>
            <li>
              {' '}
              <a href='#'>Creating an offer</a>
            </li>
            <li>
              {' '}
              <a href='#'>Completing a trade</a>
            </li>
            <li>
              <a href='#'>After a trade</a>
            </li>
          </ol>
        </Card.Body>
      </Card>
      <div className='my-4'>
        <h3>Before trading</h3>
        <p>
          Before you start buying cryptocurrency for in-game items, make sure
          you have the means to prove if the item was actually transferred to
          your trade partner. Whether you choose a game currency, boost, or
          skin, you must ensure you have the means to verify the transition of
          the item.
        </p>
        <Alert variant='danger'>
          <b>Warning</b>
          <ul className='mt-3' style={{ paddingLeft: '2rem' }}>
            <li>Selling accounts is prohibited. </li>
            <li>
              Don’t disclose any information (eg. your Paxful or game account
              login details) to the sellers.{' '}
            </li>
            <li>
              Don’t take the risk by transacting outside of Paxful trade flow as
              it isn’t protected by <a href='#'>Paxful secure escrow</a>.
            </li>
          </ul>
        </Alert>
      </div>
      <div className='mb-4'>
        <h3>Trading</h3>
        <h4>Searching for an offer</h4>
        <p>
          The first step to buying cryptocurrency for game items is to look for
          an offer that accepts <a href='#'>this type of payment</a>. You can
          also specify the amount you wish to buy and the currency you prefer.
        </p>
        <p>
          Choose the best rate of cryptocurrency to have the highest profit
          possible. Also, pay attention to the reputation of your potential
          trade partner. And finally, read through the offer terms and trade
          instructions carefully.{' '}
        </p>
        <p>
          Talk to your trade partner in the trade chat. Clarify how exactly the
          in-game item will be delivered and decide whether your trade partner
          is okay with the product before proceeding.
        </p>
      </div>
      <div className='mb-4'>
        <h3>Creating an offer</h3>
        <p>
          To buy crypto for game items, you can also{' '}
          <a href='#'>create your own offer</a>.
        </p>
        <p>Here are a few things to keep in mind:</p>
        <ul style={{ paddingLeft: '2rem' }}>
          <li>
            Set a margin you find profitable as no negotiations are allowed
            during the trade.
          </li>
          <li>
            Write clear <a href='#'>offer terms and instructions</a>.
          </li>
          <li>
            Use offer labels to highlight essential information such as the item
            type and the name of a game.
          </li>
          <li>
            Consider including FAQs section—think what questions trade partners
            may as
            <li>
              If necessary, mention the following:
              <ul style={{ paddingLeft: '2rem' }}>
                <li>the game server where the exchange should take place;</li>
                <li>
                  will the delivery happen “face to face”, via game mail, or any
                  other in-game exchange channel;
                </li>
                <li>required game character level, etc.</li>
              </ul>
            </li>
          </li>
          <li>
            Be clear about what proof of payment you can offer to your trade
            partner, for example, screenshots of an in-game transaction.
          </li>
        </ul>
        <p>
          Once you’ve created and published your personalized offer, wait for a
          seller to start the trade with you. Once a trade has started, you will
          receive a notification. Feel free to discuss all the necessary details
          with your trade partner on the trade chat, and proceed accordingly.
        </p>
      </div>
      <div className='mb-4'>
        <h3>Completing a trade</h3>
        <p>
          Once you have provided all the documents requested by the seller,
          click Paid. The last step will be for the seller to confirm receiving
          the payment. Please be patient because this may take some time. Once
          the seller has confirmed the payment, they should release the crypto
          to you and the trade will be complete.
        </p>
        <Alert variant='success'>
          <p>
            <b>TIP:</b>
            Do take a screenshot of your proof and keep it as it may be useful
            in case of a <a href='#'>dispute</a>.
          </p>
        </Alert>
      </div>
      <div className='mb-4'>
        <h3>After a trade</h3>
        <p>
          Once the trade is completed, you can leave appropriate feedback for
          your trade partner. Also, if you like trading with the user, you can
          add them to <a href='#'>your trusted list</a>.
        </p>
        <p>
          See our step-by-step guide on{' '}
          <a href='#'>how to buy cryptocurrency</a> and{' '}
          <a href='#'>tips on how to buy cryptocurrency</a>.
        </p>
      </div>
    </div>
  )
}

export default BuyingGameTerms
