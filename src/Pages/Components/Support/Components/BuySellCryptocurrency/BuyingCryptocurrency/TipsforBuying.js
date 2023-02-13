import React from 'react'
import { Card } from 'react-bootstrap'

const TipsforBuying = () => {
  return (
    <div>
      <p>
        Buying cryptocurrency can be confusing, especially when you're new to
        it. The internet is full of contradictory information, so we've put
        together some helpful tips to get you started with cryptocurrency on
        Paxful:{' '}
      </p>
      <Card className='my-3'>
        <Card.Body>
          <ol>
            <li className='mb-2'>
              <a href='#'>The minimum trade amount on Paxful</a>
            </li>
            <li className='mb-2'>
              <a href='#'>The seller's reputation and activity</a>
            </li>
            <li className='mb-2'>
              <a href='#'>
                Always read the terms of the offer and the seller's instructions
                before you start a trade.
              </a>
            </li>
            <li className='mb-2'>
              <a href='#'>Be aware of the price.</a>
            </li>
            <li className='mb-2'>
              <a href='#'>
                Click the Paid button only when you have actually paid.
              </a>
            </li>
            <li className='mb-2'>
              <a href='#'>Don't cancel the trade after you've already paid.</a>
            </li>
            <li className='mb-2'>
              <a href='#'>
                Brokering gift card codes is strictly prohibited on Paxful.
              </a>
            </li>
            <li className='mb-2'>
              <a href='#'>
                Using third parties for making payments is not allowed.
              </a>
            </li>
            <li className='mb-2'>
              <a href='#'>
                Always trade for the whole amount of the gift card.
              </a>
            </li>
            <li className='mb-2'>
              <a href='#'>
                Never ask the seller to release the cryptocurrency first.
              </a>
            </li>
            <li className='mb-2'>
              <a href='#'>Be polite to sellers.</a>
            </li>
            <li className='mb-2'>
              <a href='#'>Not Interested? Cancel!</a>
            </li>
          </ol>
        </Card.Body>
      </Card>
      <div className='mb-3'>
        <h4>The minimum trade amount on Paxful.</h4>
        <p>
          If you’re buying Bitcoin, the current minimum is 10 USD or its
          equivalent in other currencies. If you’re selling, then the minimum is
          0.001 BTC.
        </p>
      </div>
      <div className='mb-3'>
        <h4>The seller’s reputation and activity.</h4>
        <p>
          A seller’s reputation is displayed with a{' '}
          <span className='text-success'>green</span> thumb.
          Screen_Shot_2022-03-11_at_5.18.37_PM.png This is the total of all of
          the positive feedback the seller has received.
        </p>
        <p>
          Clicking on the seller's name will show their full profile, where you
          can see how much negative feedback they've received in addition to the
          positive. You can also see their location, all of their active offers,
          and other important information about them.
        </p>
        <p>
          Pay attention to each type of <b>feedback:</b>{' '}
          <span className='text-success'>positive</span> and{' '}
          <span className='text-danger'>negative</span>.
        </p>
        <p>
          For example, despite having more than 10,000 positive feedback scores
          and 1000 negative feedback, you should still be cautious about such a
          user. Pay attention to the percentage of negative feedback in relation
          to the negative and positive ones. Also, do not forget to check for
          <b>how long a user is present on our platform</b>.
        </p>
        <p>
          It is also much better if the seller is <b>ID-verified</b>. This means
          that we have checked his documents and background. Additionally, check
          when the seller was <b>last seen online</b> on Paxful. This will help
          to make sure that you will have a quick trade without any delays from
          the seller’s side.
        </p>
      </div>
      <div className='mb-3'>
        <h4>
          Always read the terms of the offer and the seller's instructions
          before you start a trade.
        </h4>
        <p>
          Sellers should mention what they expect and what you will need to
          provide. For example, for gift cards, many sellers require a receipt
          showing that the gift card was bought legally and also to establish
          that you are indeed the owner of the gift cards. If this information
          is requested and you cannot provide it, then it is better not to
          proceed with the trade. If you can provide all the requirements, then
          make sure you have everything ready before you start the trade.
        </p>
      </div>
      <div className='mb-3'>
        <h4>Be aware of the price.</h4>
        <p>
          The Bitcoin price on Paxful is never equal to its official market rate
          as sellers charge a fee to convert traditional currency into Bitcoin.
          The price of the fee varies among sellers and depends on who you buy
          from. So be on the lookout for the best deals. The offer page always
          includes the rate of each seller. What should interest you the most is
          how much you get on dollar. The higher the number, the more profitable
          the trade will be for you.
        </p>
      </div>
      <div className='mb-3'>
        <h4>Click the Paid button only when you have actually paid.</h4>
        <p>
          Once you’ve clicked the Paid button, the countdown timer stops and the
          order can no longer expire. This is important because if you had sent
          the seller the payment info such as a gift card code and the offer
          expires, then the escrow is released and you won’t get your
          cryptocurrency. The Paid button also provides security from dishonest
          or forgetful sellers. If you click the Paid button and you haven’t
          paid, the seller might think you’re a coin-locker or someone trying to
          scam them. Be sure to click the button only once you’ve paid to
          prevent complications.
        </p>
      </div>
      <div className='mb-3'>
        <h4>Don't cancel the trade after you've already paid.</h4>
        <p>
          We know that problems sometimes arise during trades, but it's
          important to never cancel the trade after you've already paid the
          seller. If you've paid for your crypto but something has gone wrong,
          you can start a dispute! Beginning a dispute brings a Paxful Moderator
          in to help with the situation. If you cancel the trade, Moderators
          aren't able to help, and getting a resolution will take longer.
        </p>
      </div>
      <div className='mb-3'>
        <h4>Brokering gift card codes is strictly prohibited on Paxful.</h4>
        <p>
          Brokering is when you buy a gift card code from someone, thinking you
          can sell it later to someone else. Even if you checked the code when
          you bought it, the person who sold you the code can use it anytime
          without your knowledge, and this is why it is against the Paxful{' '}
          <a href='#'>Terms of Service</a>. If you keep trying to give sellers
          used codes, you will be reported and banned from trading on Paxful as
          it is not only a waste of your own time but also that of others.
          Remember to only use gift cards you have bought yourself.
        </p>
      </div>
      <div className='mb-3'>
        <h4>Using third parties for making payments is not allowed.</h4>
        <p>
          You must be the actual payer and be the original owner of the
          submitted payment (Owner of the gift card, credit card, bank account,
          an account of online payment platform). Being a middleman in paying
          for the cryptocurrency is not allowed and can be considered as a scam.
        </p>
      </div>
      <div className='mb-3'>
        <h4>Always trade for the whole amount of the gift card.</h4>
        <p>
          If you have a $50 gift card, then you can’t trade for a fraction of
          that (ex. Asking someone to take only $33 only out of your $50). Note
          that the seller can only take the whole amount so if you start order
          for $33 and he takes $50, the only way to get your change back in
          cryptocurrency is by starting a new trade for the difference. Seller’s
          ranges may not meet that amount or the seller may take down their
          offers or go offline.
        </p>
      </div>
      <div className='mb-3'>
        <h4> Never ask the seller to release the cryptocurrency first.</h4>
        <p>
          This is grounds for an instant ban as it indicates a scam. We have a
          trade escrow service so you know the crypto is there and waiting for
          you once you complete the payment.
        </p>
      </div>
      <div className='mb-3'>
        <h4>Be polite to sellers.</h4>
        <p>
          They go through a lot of tough customers and being polite can save you
          a lot of time. Being polite is about a lot more than your language;
          it’s about following their instructions as well. Note that if there is
          a <a href='#'>dispute</a>, the moderator will take language into
          account.
        </p>
      </div>
      <div className='mb-3'>
        <h4>Not Interested? Cancel!</h4>
        <p>
          If you are no longer interested in the trade and have not yet paid the
          seller, feel free to cancel the trade. It will free their escrow and
          let them continue to trade with others who are interested. If you
          don’t cancel the trade and leave it hanging, the seller will have to
          file a dispute or report you, which will probably result in you
          getting negative feedback. You can see all of your active trades on
          your <a href='#'>dashboard</a>. Click <b>Chat</b> to open the trade,
          and click <b>Cancel</b> to cancel them.
        </p>
        <p>
          Also, remember that any price negotiation is strictly forbidden. If
          you do not like the offer, do not insist on changing the price in the
          same trade. Just start a new trade with new values to avoid any
          disputes or misunderstandings with the seller.
        </p>
      </div>
    </div>
  )
}

export default TipsforBuying
