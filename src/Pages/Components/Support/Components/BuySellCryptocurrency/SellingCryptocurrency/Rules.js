import React from 'react'
import { Card } from 'react-bootstrap'

const Rules = () => {
  return (
    <div>
      <p>
        Being a P2P seller can be very profitable if you follow some basic
        rules. To get you started, we’ve compiled a few rules to make selling
        cryptocurrency not only easy but safe and secure as well:
      </p>
      <Card>
        <Card.Body>
          <ol>
            <li className='mb-2'>
              <a href='#'>Accept your responsibility for possible risks.</a>
            </li>
            <li className='mb-2'>
              <a href='#'>
                {' '}
                Brokering gift card codes is strictly prohibited on P2P.
              </a>
            </li>
            <li className='mb-2'>
              <a href='#'>Be responsive to buyers.</a>
            </li>
            <li className='mb-2'>
              <a href='#'>Maintain a civil tone with your trade partners.</a>
            </li>
            <li className='mb-2'>
              <a href='#'> Write clear offer terms and trade instructions.</a>
            </li>
            <li className='mb-2'>
              <a href='#'>
                Be aware of the minimum trade amount on our platform.
              </a>
            </li>
            <li className='mb-2'>
              <a href='#'>Do not use third parties for payments.</a>
            </li>
            <li className='mb-2'>
              <a href='#'>Off-escrow trades are not allowed.</a>
            </li>
            <li className='mb-2'>
              <a href='#'> Price negotiations are strongly forbidden.</a>
            </li>
          </ol>
        </Card.Body>
      </Card>
      <div className='my-3'>
        <h3>1. Accept your responsibility for possible risks.</h3>
        <p>
          We at P2P do as much as possible to increase the level of security on
          our platform. However, you, as a seller, should accept all risks and
          liabilities that come with trading. It is up to you to protect
          yourself from malicious users and obvious scams. Check our{' '}
          <a href='#'>security guide</a> and <a href='#'>safety tips</a> for
          more information.
        </p>
      </div>
      <div className='mb-3'>
        <h3>2. Brokering gift card codes is strictly prohibited on P2P.</h3>
        <p>
          Brokering is when you buy a gift card code from a third party and
          resell it later to someone else. This goes against the{' '}
          <a href='#'>P2P Terms of Service</a> and is strictly prohibited. This
          rule applies both to e-codes and physical gift cards.
        </p>
      </div>
      <div className='mb-3'>
        <h3>3. Be responsive to buyers.</h3>
        <ul style={{ paddingLeft: '2rem' }}>
          <li className='mb-2'>
            If you are not at your computer, please deactivate all your offers.
            You can easily do it from your <a href='#'>Dashboard</a>. This will
            also help you avoid having your BTC locked in a trade escrow if a
            buyer starts a trade during your absence.
          </li>
          <li>
            When a buyer starts a trade with you, say “Hi” and let them know you
            are ready to trade. Example: “Hi, I am ready, please follow the
            instructions and you can have your cryptocurrency in no time!“. This
            message may sound too simple and obvious. However, according to our
            statistics, a high number of canceled trades are due to an
            unresponsive seller. Please show to the buyer that you are ready.
          </li>
        </ul>
      </div>
      <div className='mb-3'>
        <h3>4. Maintain a civil tone with your trade partners.</h3>
        <p>
          Offensive language and disrespectful tone are not allowed on our
          platform. Be understanding to buyers as some of them may lack trading
          experience. If you face any serious issue with your trade partner, do
          invite our moderators by <a href='#'>starting a dispute</a>.
        </p>
      </div>
      <div className='mb-3'>
        <h3>5. Write clear offer terms and trade instructions.</h3>
        <ul style={{ paddingLeft: '2rem' }}>
          <li className='mb-2'>
            Have both offer terms and trade instructions in a simple short
            bulleted or numbered list. Read more on how to write{' '}
            <a href='#'>good offer terms</a> and trade instructions. This is
            relevant when <a href='#'>creating your own offer.</a>
          </li>
          <li className='mb-2'>
            <p>
              Write concise offer terms. The buyer sees offer terms before he
              starts the trade. It may contain important information about the
              trade.
            </p>
            <p>
              Example: uploading a photo of ID, uploading a cash receipt,
              accepting physical gift cards only, etc.
            </p>
            <p>
              Note that buyers avoid offers with complicated terms. Clear offer
              terms also give advantage in case of a dispute. Never leave this
              section blank while creating an offer.
            </p>
          </li>
          <li className='mb-2'>
            Write clear trade instructions. Trade instructions are shown to a
            buyer once a trade starts. Instructions give additional guidance to
            your trade partner and should consist of clear steps.
          </li>
          <li className='mb-2'>
            Provide your customers with helpful aids and examples if necessary.
            For example, if you require them to upload a selfie with a photo ID,
            then put an example picture.
          </li>
        </ul>
      </div>
      <div className='mb-3'>
        <h3>6. Be aware of the minimum trade amount on our platform.</h3>
        <p>
          It’s important that you know what the minimum trade amount set on P2P.
          Currently, the minimum trade amount is 10 USD to buy cryptocurrency.
          If you are selling cryptocurrency, the minimum is 0.001 BTC.
        </p>
      </div>
      <div className='mb-3'>
        <h3>7. Do not use third parties for payments. </h3>
        <p>
          You are the person responsible for accepting and processing payments.
          If you have no control over the payment and you transfer
          responsibility to others, this can be considered as fraud. For
          example, in the case of bank transfer, you should be the account
          owner, in the case of altcoins, you should be the owner of the wallet,
          etc.
        </p>
      </div>
      <div className='mb-3'>
        <h3>8. Off-escrow trades are not allowed.</h3>
        <p>
          It’s important that you do not give other users your contact
          information to do a trade outside P2P trade flow. P2P escrow must be
          used at all times or your account may be banned. By avoiding paying
          escrow fees to our platform while trading outside our escrow service,
          you expose your BTC to much higher risk as our investigation team will
          not be able to assist you in case of <a href='#'>an argument</a>.
        </p>
      </div>
      <div className='mb-3'>
        <h3>9. Price negotiations are strongly forbidden.</h3>
        <p>
          A buyer of cryptocurrency must pay the exact price that is set for
          trade. If during a trade both sides agree to change the amount, a new
          trade must be re-opened for the correct amount. Price negotiations
          within the same trade are against our <a href='#'>Terms of Service</a>
          .
        </p>
        <p>
          Check our guide on <a href='#'>how to sell cryptocurrency on P2P</a>{' '}
          to have an overview of our trade flow.
        </p>
      </div>
    </div>
  )
}

export default Rules
