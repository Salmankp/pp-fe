import React from 'react'
import { Alert, Card } from 'react-bootstrap'

const InGameItems = () => {
  return (
    <div>
      <p>
        In addition to gift cards with a game balance, some games offer an
        option to gift in-game items such as resources, skins, weapons, etc. We
        are happy to offer you an opportunity to sell crypto for in-game items.
        Here’s everything you need to know about it.
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
          Before you start selling cryptocurrency for in-game items, make sure
          you have the means to check if the item was actually transferred to
          you. Whether you choose a game currency, boost, or skin, you must
          ensure you have the means to verify the transition of the item.
        </p>
        <Alert variant='danger'>
          <b>Warning:</b>
          <ul className='mt-2' style={{ paddingLeft: '2rem' }}>
            <li className='mb-2'>Buying accounts is prohibited.</li>
            <li className='mb-2'>
              Don’t return the in-game item under any circumstances after you
              have received it.
            </li>
            <li className='mb-2'>
              Don’t take the risk by transacting outside of Paxful trade flow as
              it isn’t protected by <a href='#'>Paxful secure escrow.</a>
            </li>
          </ul>
        </Alert>
      </div>
      <div className='mb-3'>
        <h3 className='mb-3'>Trading</h3>
        <h4>Searching for an offer</h4>
        <p>
          The first step to selling cryptocurrency for game items is to look for
          an offer that accepts this <a href='#'>type of payment</a>. You can
          also specify the amount you wish to sell and the currency you prefer.
        </p>
        <p>
          Choose the best rate of cryptocurrency to have the highest profit
          possible. Also, pay attention to the reputation of your potential
          trade partner. And finally, read through the offer terms and trade
          instructions carefully.
        </p>
        <p>
          Talk to your trade partner in the trade chat. Clarify how exactly the
          in-game item will be delivered to you and decide whether you are okay
          with the product before proceeding.
        </p>
        <Alert variant='info'>
          <p>
            <b>Note:</b> If after the trade has started you are being offered an
            item that is different from the advertised one, be extra cautious.
          </p>
        </Alert>
      </div>
      <div className='mb-3'>
        <h3 className='mb-3'>Creating an offer</h3>
        <p>
          To sell crypto for game items, you can also{' '}
          <a href='#'>create your own offer</a>.
        </p>
        <p>Here are a few things to keep in mind:</p>
        <ul className='my-4' style={{ paddingLeft: '2rem' }}>
          <li className='mb-2'>
            Set a margin you find profitable as no negotiations are allowed
            during the trade.
          </li>
          <li className='mb-2'>
            Write clear <a href='#'>offer terms and instructions</a>.
          </li>
          <li className='mb-2'>
            Use <b>offer labels</b> to highlight essential information such as
            the item type and the name of a game.
          </li>
          <li className='mb-2'>
            Consider including FAQs section—think what questions trade partners
            may ask.
          </li>
          <li className='mb-2'>
            <p>If necessary, mention the following:</p>
            <ul style={{ paddingLeft: '2rem' }}>
              <li>the game server where the exchange should take place;</li>
              <li>
                will the delivery happen “face to face”, via game mail, or any
                other in-game exchange channel;
              </li>
              <li>required game character level, etc.</li>
            </ul>
          </li>
          <li className='mb-2'>
            Be clear about what proof of payment you expect from your trade
            partner, for example, screenshots of an in-game transaction.
          </li>
        </ul>
        <p>
          Once you’ve created and published your personalized offer, wait for a
          buyer to start the trade with you. Once a trade has started, you will
          receive a notification. Feel free to discuss all the necessary details
          with your trade partner on the trade chat, and proceed accordingly.
        </p>
      </div>
      <div className='mb-3'>
        <h3 className='mb-3'>Completing a trade</h3>
        <p>
          Once you’ve received the item and the buyer has marked the trade as
          “Paid”, you can release the cryptocurrency from the trade escrow.
          Click the Release button only if you are absolutely sure about
          receiving the payment. Remember that cryptocurrency transactions are
          final and irreversible.
        </p>
      </div>
      <div className='mb-3'>
        <h3 className='mb-3'>After a trade</h3>
        <p>
          Once the trade is completed, you can leave appropriate feedback for
          your trade partner. Also, if you like trading with the user, you can
          add them to <a href='#'>your trusted list</a>.
        </p>
        <p>
          See our step-by-step guide on{' '}
          <a href='#'>how to sell cryptocurrency</a> and our{' '}
          <a href='#'>rules for selling cryptocurrency.</a>
        </p>
      </div>
    </div>
  )
}

export default InGameItems
