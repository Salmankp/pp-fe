import React from 'react'
import { Alert } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'

const Disputes = () => {
  return (
    <Accordion defaultActiveKey=''>
      <Accordion.Item eventKey='0'>
        <Accordion.Header>Why Did I Lose a Dispute ?</Accordion.Header>
        <Accordion.Body>
          <div className='mb-4'>
            <p>
              In order to keep Paxful a great and safe experience for all, we
              use moderators when a dispute has been placed. As a part of Paxful
              protocol, our moderators are the neutral judges when deciding who
              wins or loses a dispute.
            </p>
            <p>Below are several common reasons why a user may lose:</p>
            <ul style={{ paddingLeft: '2rem' }}>
              <li className='mb-2'>
                The user did not provide the requested evidence within 12 hours
                of the dispute.
              </li>
              <li className='mb-2'>Suspicious trade activity</li>
              <li className='mb-2'>
                The user did not submit the trade/hash ID of the transaction
              </li>
              <li className='mb-2'>
                Buyer or Seller did not submit a PDF of their bank/online
                account statement that shows the transaction
              </li>
              <li className='mb-2'>
                The user provided insufficient, false, or edited evidence
              </li>
              <li className='mb-2'>
                Buyer or seller violated the other party’s offer terms and/or
                trade instructions.
              </li>
              <li className='mb-2'>
                User violated any of Paxful’s Terms of Service.
              </li>
            </ul>
          </div>
          <Alert>
            <p>
              <b>Note:</b> Some of these reasons could lead to you being
              permanently banned from our platform.
            </p>
          </Alert>
          <div className='mb-4'>
            <h4 className='mb-2'>What to do during a dispute?</h4>
            <p>
              During a dispute, we recommend that users of both parties adhere
              to our <a href='#'>Terms of Service</a>. At Paxful, we try to be
              as fair and as helpful as possible, and during the process, we
              recommend that users be forthcoming with information in order to
              quickly and correctly resolve the dispute.{' '}
            </p>
          </div>
          <div className='mb-4'>
            <h4 className='mb-2'>What do we ask for in disputes?</h4>
            <p>
              During a dispute, we also ask for any evidence that may help the
              moderator make a decision. Evidence can include the following:
            </p>
            <ul style={{ paddingLeft: '2rem' }}>
              <li className='mb-2'>
                A PDF of your bank/online account statement that shows the
                transaction
              </li>
              <li className='mb-2'>
                A video recording/screenshot of the online wallet transaction
                that took place
              </li>
              <li className='mb-2'>The trade/hash ID of the transaction</li>
              <li className='mb-2'>
                Any additional screenshots that prove you completed the
                transaction
              </li>
            </ul>
            <p>
              For further information on what to provide in a dispute visit our
              Help Center page: What Information Should I Provide During a
              Dispute.
            </p>
            <p>
              Paxful understands that filing a dispute can be a frustrating
              experience, and we are continuously working towards solutions to
              make the Paxful trading experience safe and secure for all our
              users. If you have further questions on your dispute claims please
              reach out to our support team.
            </p>
            <p>
              For more information on why you may have lost a dispute
              specifically related to gift cards, visit our page Why did{' '}
              <a href='#'>I lose my gift card dispute</a>. For more information
              on how to start a dispute, visit this{' '}
              <a href='#'>Help Center page</a>.
            </p>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='1'>
        <Accordion.Header>When should I File a Dispute ?</Accordion.Header>
        <Accordion.Body>
          <div>
            <p>
              There are a few instances where filing a dispute is your best
              option to resolve an issue.{' '}
            </p>
            <div className='mb-4'>
              <p>As a buyer:</p>
              <ul style={{ paddingLeft: '2rem' }}>
                <li className='mb-2'>
                  if you’ve followed the seller’s instructions, completed the
                  payment, but the seller refuses to release the crypto
                </li>
                <li className='mb-2'>
                  If you made the payment but the seller stops responding and
                  has not released the crypto
                </li>
                <li className='mb-2'>
                  If you notice any violations of the{' '}
                  <a href='#'>Terms of Service</a>
                </li>
              </ul>
            </div>
            <div className='mb-4'>
              <p>As a seller:</p>
              <ul style={{ paddingLeft: '2rem' }}>
                <li className='mb-2'>
                  If the buyer marks the trade as “paid” but is unresponsive
                </li>
                <li className='mb-2'>
                  If the buyer says they have paid you, but you did not receive
                  the payment or there’s an issue with the payment
                </li>
                <li className='mb-2'>
                  If you notice any violations of the{' '}
                  <a href='#'>Terms of Service</a>
                </li>
              </ul>
            </div>
            <p>
              If you’re not sure how to file a dispute, take a look at{' '}
              <a href='#'>this article</a> for a step-by-step guide.
            </p>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='2'>
        <Accordion.Header>
          When information should i provide during a dispute?
        </Accordion.Header>
        <Accordion.Body>
          <div className='mb-4'>
            <h5 className='mb-3'>General Tips:</h5>
            <p>
              The more information you provide during the dispute process, the
              easier our team will be able to process your dispute. We’ve put
              together a collection of best practices to help our team
              accurately process your disputes.
            </p>
          </div>
          <div className='mb-4'>
            <h5 className='mb-3'>When uploading evidence::</h5>
            <ul style={{ paddingLeft: '2rem' }}>
              <li className='mb-2'>
                Make sure the image is not cut off or cropped
              </li>
              <li className='mb-2'>Make sure the image is clear</li>
              <li className='mb-2'>Do not alter or change the image</li>
            </ul>
          </div>
          <div className='mb-4'>
            <h5 className='mb-3'>What information should I provide?</h5>
            <h6 className='mb-3'>Gift card disputes:</h6>
            <div className='mb-4'>
              <p>Buyer:</p>
              <ul style={{ paddingLeft: '2rem' }}>
                <li className='mb-2'>
                  Image of the gift card with the Paxful trade chat clearly in
                  the background (please make sure that all four corners of the
                  card are in the image)
                </li>
                <li className='mb-2'>
                  Receipts to prove that you own the gift card
                </li>
                <li className='mb-2'>
                  Video recording of checking the balance of a gift card before
                  uploading it during the trade{' '}
                </li>
                <li className='mb-2'>
                  Evidence showing you own the gift card (history from the
                  issuer’s website, etc.)
                </li>
              </ul>
            </div>
            <div className='mb-4'>
              <p>Seller:</p>
              <ul style={{ paddingLeft: '2rem' }}>
                <li className='mb-2'>
                  A full screen, un-cropped screenshot that shows both the code
                  itself and the error message received when trying to redeem
                </li>
              </ul>
              <p>
                For more information on gift card disputes, take a look at{' '}
                <a href='#'>this article.</a>
              </p>
            </div>
          </div>
          <div className='mb-4'>
            <h4>Bank transfer disputes:</h4>
            <ul style={{ paddingLeft: '2rem' }}>
              <li className='mb-2'>
                A PDF of your bank statement that shows the transaction
              </li>
              <li className='mb-2'>
                Video recording of transaction history (name must match the name
                on your Paxful account, and please show the transaction history
                from the day before the trade up until today)
              </li>
              <li className='mb-2'>
                Audio recording from you and the financial institution
                confirming the transaction
              </li>
            </ul>
          </div>
          <div className='mb-4'>
            <h4>Goods and services disputes:</h4>
            <ul style={{ paddingLeft: '2rem' }}>
              <li className='mb-2'>
                Any evidence you have (selfie with the person you traded with,
                receipts, etc.)
              </li>
            </ul>
          </div>
          <div className='mb-4'>
            <h4>Online wallet disputes:</h4>
            <ul style={{ paddingLeft: '2rem' }}>
              <li className='mb-2'>
                Screenshot of the online wallet transaction that took place
              </li>
              <li className='mb-2'>
                Proof that the online wallet belongs to you (video recording of
                your online wallet account name matching the name on your Paxful
                account)
              </li>
            </ul>
          </div>
          <div className='mb-4'>
            <h4>Debit/credit card disputes:</h4>
            <ul style={{ paddingLeft: '2rem' }}>
              <li className='mb-2'>
                Proof that your card was charged (video recording of your bank
                account name matching the name on your Paxful account and 10
                days of transaction history and please make sure the date is
                visible)
              </li>
              <li className='mb-2'>
                Audio recording of the conversation between you and your card
                provider confirming the transaction
              </li>
            </ul>
          </div>
          <div className='mb-4'>
            <h4>Cash disputes:</h4>
            <ul style={{ paddingLeft: '2rem' }}>
              <li className='mb-2'>
                Any evidence that you have that shows your cash withdrawal (bank
                statement, ATM receipt, etc.)
              </li>
            </ul>
          </div>
          <div className='mb-4'>
            <h4>Digital currency disputes:</h4>
            <ul style={{ paddingLeft: '2rem' }}>
              <li className='mb-2'>The trade/hash ID of the transaction</li>
              <li className='mb-2'>
                Any additional screenshots that prove you completed the
                transaction
              </li>
            </ul>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='3'>
        <Accordion.Header>
          I have an issue with a trade but i can't file a Dispute
        </Accordion.Header>
        <Accordion.Body>
          <p>
            The best way to get it resolved is through{' '}
            <a href='#'>filing a dispute</a>. The sooner a dispute is filed, the
            more resources our team will have to help resolve the dispute.{' '}
          </p>
          <p>
            If you’re not able to file a dispute, our team will do our best to
            help, but we may not be able to resolve the issue. Our team will
            investigate and take necessary action, if needed, to help make sure
            that this doesn’t happen again in the future.
          </p>
          <p>
            If you reach out to us about this, please send us as much
            information as you can, such as the trade ID, proof of ownership,
            evidence, details of what happened, etc.{' '}
          </p>
          <Alert>
            <b>Note:</b> We will only allow this one time. We recommend taking a
            look at the guide we put together to help prevent issues like this
            in the future.
          </Alert>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='4'>
        <Accordion.Header>
          Why did i lose a gift card Dispute ?
        </Accordion.Header>
        <Accordion.Body>
          <div>
            <h3 className='mb-3'>
              As a buyer, you could lose your dispute due to any of the
              following reasons:
            </h3>
            <ul className='mb-3' style={{ paddingLeft: '2rem' }}>
              <li className='mb-2'>
                Not providing valid evidence requested within the time frame
                given to you
              </li>
              <li className='mb-2'>
                Unable to prove that you are the original owner of the gift
                card. We do not advise selling a card that you did not
                originally buy. No brokering of gift cards is allowed
              </li>
              <li className='mb-2'>Selling a used or invalid gift card</li>
              <li className='mb-2'>The evidence provided was insufficient </li>
              <li className='mb-2'>
                A violation of the other party’s offer terms and/or trade
                instructions
              </li>
              <li className='mb-2'>
                Failing to provide proof of payment, not responding to the
                seller or otherwise being inactive in the trade after clicking
                "Paid" (please note that in these cases, your dispute may be
                decided in under 12 hours)
              </li>
              <li className='mb-2'>
                Other violations of Paxful’s Terms of Service
              </li>
            </ul>
            <Alert variant='danger'>
              <p>
                <b>Warning:</b> Some of these reasons could lead to you being
                permanently banned from our platform.
              </p>
            </Alert>
            <p>
              Supporting the trade of gift cards for a cryptocurrency is
              complicated. The guidelines we follow are to protect the Paxful
              community when a gift card trade is disputed
            </p>
          </div>
          <div className='mb-4'>
            <h4 className='mb-3'>
              As a seller, you could lose your dispute due to any of the
              following reasons:
            </h4>
            <ul style={{ paddingLeft: '2rem' }}>
              <li className='mb-2'>
                You redeemed a valid gift card and did not release the
                cryptocurrency
              </li>
              <li className='mb-2'>
                A violation of the offer terms and/or trade instructions
              </li>
              <li className='mb-2'>Suspicious trade activity</li>
              <li className='mb-2'>
                You provided insufficient, false, or edited evidence
              </li>
              <li className='mb-2'>
                Other violations of Paxful’s Terms of Service
              </li>
            </ul>
          </div>
          <div className='mb-4'>
            <h4 className='mb-3'>What to do during a gift card dispute?</h4>
            <p>
              Paxful conducts thorough investigations to resolve gift card
              disputes, despite minimal support from gift card services. If you
              enter a dispute, you must be prepared to prove that you are the
              owner of the card. If you are not the original owner of the gift
              card, this makes proving the validity of the gift card very
              difficult. For this reason, sellers of cryptocurrency are highly
              favored in such disputes.{' '}
            </p>
          </div>
          <div className='mb-4'>
            <h4 className='mb-3'>What do we ask for in gift card disputes?</h4>
            <ul className='mb-3' style={{ paddingLeft: '2rem' }}>
              <li className='mb-2'>
                A photo of the original gift card with your Paxful trade chat
                clearly visible in the background
              </li>
              <li className='mb-2'>
                A complete photo of the original receipt (no cut-offs)
              </li>
              <li className='mb-2'>
                For electronic codes (e-codes), an invoice of the original
                payment and video recording of your bank statement as proof of
                purchase
              </li>
              <li className='mb-2'>
                Proof of conversation with the gift card issuing company’s
                customer support
              </li>
              <li className='mb-2'>
                Any additional evidence as required by Paxful (Example: ID
                Verification)
              </li>
            </ul>
            <Alert>
              <p>
                <b>Note:</b> Gift card disputes may take up to three weeks to
                resolve. Following the moderator's instructions and being
                responsive in the trade chat is important in resolving the
                dispute in a timely manner. Here’s a detailed article about the
                <a href='#'>dispute process</a>.
              </p>
            </Alert>
            <p>
              As per our <a href='#'>Terms of Service</a>, we remind you that
              Paxful is not a licensed gift card vendor nor an authorized dealer
              of any gift card issuer - and brokering or reselling gift cards is
              strictly prohibited on our platform. Paxful understands that gift
              card disputes can be quite <a href='#'>challenging</a> and we are
              continuously working towards solutions to make the trading
              experience safe and secure for all our users.
            </p>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='5'>
        <Accordion.Header>
          How do i start a Dispute on Paxful ?
        </Accordion.Header>
        <Accordion.Body>
          <div>
            <p>
              Paxful offers an opportunity for our customers to freely trade
              crypto with each other. Although the vast majority of the trades
              go smoothly and successfully, there are cases that require the
              intervention of a third party — our moderators. On Paxful we have
              our own dispute system through which we settle conflicts between
              our users in the best way possible. This article will give you an
              overview of the dispute resolution process.{' '}
            </p>
            <div className='my-3'>
              <ol>
                <li className='mb-3'>Video</li>
                <li className='mb-3'>Steps to start and win a dispute</li>
                <li className='mb-3'>Reasons for losing a dispute</li>
              </ol>
            </div>
            <div className='mb-4'>
              <h4>Video</h4>
              <p>Here’s a short and informative video on the topic:</p>
            </div>
            <div className='mb-4'>
              <h4>Steps to start a dispute</h4>
              <ol className='my-4'>
                <li className='mb-3'>In the trade chat, click Dispute.</li>
                <li className='mb-3'>
                  Select a dispute reason from the list and explain what
                  happened clearly in the text box below.
                  <p>Here are the dispute options for sellers and buyers:</p>
                  <ul style={{ paddingLeft: '2rem' }}>
                    <li className='mb-2'>
                      Cryptocurrency seller: Coin locking, payment issue, other.
                    </li>
                    <li>
                      Cryptocurrency buyer: Unresponsive vendor, payment issue,
                      other.
                    </li>
                  </ul>
                  <p>
                    For more info about dispute types, see{' '}
                    <a href='#'>Cases to start a dispute</a>.
                  </p>
                </li>
                <li className='mb-3'>
                  Click Start dispute and check your trade chat for a message
                  from a moderator.
                </li>
                <li className='mb-3'>
                  Provide as much evidence as you can, such as:
                  <ul style={{ paddingLeft: '2rem' }}>
                    <li className='mb-2'>
                      Proof of payment (transaction receipt, a screenshot of
                      payment, video proof)
                    </li>
                    <li className='mb-2'>
                      Proof of ownership (transaction receipt, receipt from the
                      store of the gift cards, online receipt,
                    </li>
                    <li className='mb-2'>
                      Operation screenshots or video recording.
                    </li>
                    <li className='mb-2'>
                      Phone call recording of a conversation with the third
                      party’s customer support.
                    </li>
                    <li className='mb-2'>
                      Any additional proof as requested by our moderators.
                    </li>
                  </ul>
                  <p>
                    The dispute will be investigated by our moderators and a
                    decision will be made based on the evidence provided by both
                    parties. Paxful moderators resolve disputes by evaluating
                    trade terms, offer instructions, evidence of payment, trade
                    chat interaction, user reputation, past trading history, as
                    well as data submitted and or collected in accordance with
                    the Privacy Policy.
                  </p>
                  <Alert>
                    <b>Note:</b>
                    <ul style={{ paddingLeft: '2rem' }}>
                      <li className='mb-2'>
                        Once you have submitted a dispute request, you do not
                        have to contact our Support. Our moderators will
                        definitely look into your case as soon as possible and
                        reach out to you.
                      </li>
                      <li className='mb-2'>
                        Dispute investigation is a complicated process and may
                        take time (up to three weeks). We are grateful for your
                        patience and understanding.
                      </li>
                      <li className='mb-2'>
                        Don’t flood the chat with messages as it may hold up the
                        moderator. Wait for the moderator to join the dispute
                        for investigation.
                      </li>
                    </ul>
                  </Alert>
                  <h5>How to cancel your dispute?</h5>
                  <p>
                    If you have started a dispute but changed your mind and want
                    to cancel it, do one the following:
                  </p>
                  <ul className='mb-3' style={{ paddingLeft: '2rem' }}>
                    <li className='mb-2'>
                      If you started a dispute as a seller and you see that the
                      buyer has resolved the issue from their side, click
                      Release.
                    </li>
                    <li className='mb-2'>
                      If you started a dispute as a buyer and you see that the
                      issue has been resolved, click Cancel.
                    </li>
                  </ul>
                  <Alert variant='success'>
                    <p>
                      <b>Tip:</b> To ensure the best solution possible, wait for
                      a moderator and let them decide on how to solve the
                      dispute.
                    </p>
                  </Alert>
                  <div>
                    <h4>Reasons for losing a dispute</h4>
                    <p>
                      If you lose a dispute, it could be for several reasons.
                      The most common reasons are:
                    </p>
                    <ul className='mb-3' style={{ paddingLeft: '2rem' }}>
                      <li className='mb-2'>
                        You were not able to provide clear reasons and evidence
                        as requested by the moderator
                      </li>
                      <li className='mb-2'>
                        The evidence you provided was not enough
                      </li>
                    </ul>
                    <p>
                      We also check the trading history of both parties to see
                      if you were able to follow the trade instructions or offer
                      terms of the previous trades. A decision is made only when
                      the investigation is finalized to the moderator’s
                      satisfaction. Read more here: Why did I lose a gift card
                      dispute?{' '}
                    </p>
                  </div>
                  <p>
                    Read more on how to protect your funds from scammers in our
                    <a href='#'>security guide</a>.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default Disputes
