import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TermsList from './components/TermsList'

const Main = () => {
  return (
    <Container className='pt-5 mt-5'>
      <Row>
        <Col md={12}>
          <h1 className='mb-3'>P2p Inc. TERMS OF SERVICE</h1>
          <p className='text-secondary'>Effective Date: March 4, 2021</p>
          <div>
            <p>
              THIS AGREEMENT CONTAINS VERY IMPORTANT INFORMATION REGARDING YOUR
              RIGHTS AND OBLIGATIONS, AS WELL AS CONDITIONS, LIMITATIONS AND
              EXCLUSIONS THAT MIGHT APPLY TO YOU. PLEASE READ IT CAREFULLY.
            </p>
            <p>
              These Terms of Service and any amendments and restatements hereof
              (the <b>“Agreement”</b>) form a legal agreement covering the
              provision of services from P2p to you, including offering a
              marketplace to enable buyers and sellers of “Digital Assets” (such
              term to be broadly understood to include digital currencies such
              as Bitcoin, Tether, and others, supported by a P2p wallet) to
              engage in transactions with each other (the <b>“Marketplace”</b>),
              offering hosted digital wallet services, holding and releasing
              Digital Assets as instructed upon completion of a purchase of
              Digital Assets and any other services described in this Agreement
              (collectively the “Services” and individually, a <b>“Service”</b>)
              provided by P2p, Inc. and all of its affiliates, including but not
              limited to P2p USA, Inc.(collectively, “P2p” or “we” or “us” or
              the <b>“company”</b>) to you as an individual (also referred to as
              a “user” or “you”). P2p.com and its related Services are owned and
              operated by P2p. Your use of the Services will be governed by this
              Agreement, along with our Privacy Policy, Cookie Policy, and
              E-Sign Consent.
            </p>
            <p>
              THESE TERMS REQUIRE THE USE OF ARBITRATION TO RESOLVE DISPUTES
              RATHER THAN JURY TRIALS OR CLASS ACTIONS.
            </p>
            <p>
              By signing up to use an account through P2p.com, or any associated
              websites, APIs, or mobile applications, including any URLs
              operated by P2p (collectively the “P2p Website” or the “Website”),
              you agree that you have carefully and thoroughly read, understand,
              and accept all of the terms and conditions contained in this
              Agreement including our{' '}
              <a href='#'>Privacy Policy, Cookie Policy,</a> and E-Sign Consent.
            </p>
            <p>
              THE VALUE OF DIGITAL ASSETS CAN GO UP OR DOWN AND THERE CAN BE A
              SUBSTANTIAL RISK THAT YOU LOSE MONEY BUYING, SELLING, HOLDING, OR
              INVESTING IN DIGITAL ASSETS. YOU SHOULD CAREFULLY CONSIDER WHETHER
              TRADING OR HOLDING DIGITAL ASSETS IS SUITABLE FOR YOU IN LIGHT OF
              YOUR FINANCIAL CONDITION.
            </p>
          </div>
          <div>
            <h3 className='my-3'>About P2p and its Services</h3>
            <p>
              P2p is a leading peer-to-peer marketplace to facilitate the
              purchase and sale of Digital Assets with sellers accepting more
              than 300 payment methods in exchange for their Digital Assets.
              Payment methods are negotiated and exchanged on a peer-to-peer
              basis between the buyers in the Marketplace (<b>“Buyers”</b>) and
              sellers in the Marketplace (<b>“Sellers”</b>). Our users agree
              upon which payment methods to use to complete a transaction and
              are fully responsible and liable for using such payment methods in
              a lawful manner.
            </p>
            <p>
              P2p also offers hosted digital wallet services through a leading
              global digital asset wallet provider. Our worldwide userbase is
              able to post offers to either buy or sell Digital Assets in a
              variety of convenient methods. The creator of the offer is
              responsible for listing terms of the transaction, including the
              payment methods the Seller will accept. Once an offer is selected
              by another P2p user, the Seller’s Digital Assets are locked as
              part of our transaction procedures (which we refer to as “P2p
              Escrow”) until all conditions necessary to consummate the
              transaction have occurred. The sale is complete and Digital Assets
              are unlocked and released to the Buyer by the Seller once the
              Buyer has completed the terms of the transaction and payment has
              been confirmed valid and received by the Seller. P2p DOES NOT ACT
              AS A PAYMENT PROCESSOR. ALL LIABILITY FOR SENDING AND RECEIVING
              PAYMENT AND CONFIRMING THE VALIDITY OF THE TRANSACTIONS LIE
              BETWEEN THE BUYER AND SELLER. The Digital Assets we lock are
              released back to the Seller if the Buyer chooses to cancel the
              transaction. The Seller may not cancel the transaction at any
              point. The Seller only has the option to unlock the Digital Assets
              and release it to the Buyer. This is for the security protection
              for the Buyer. Should a Seller need to cancel the transaction due
              to a Buyer not following the terms of the transaction, they must
              start a dispute and provide a reason for doing so as further
              described in Section 8 of this Agreement. Transactions on our
              Website are conducted between the Buyers and Sellers. Accordingly,
              P2p is not a party to any transaction.
            </p>
            <p>
              The hosted digital currency wallet service provided by P2p is a
              secure method of storing, sending, and receiving digital currency.
              P2p does not store or custody any Digital Assets. Digital Assets
              are always stored on its respective networks or blockchains. All
              digital currency transactions occur within the digital currency
              network, not on P2p. There are no guarantees that the transaction
              will process on the digital currency network. P2p reserves the
              right to refuse to process any transaction if required by law or
              if we deem the transactions to be against our terms and conditions
              in this Agreement. You hereby accept and acknowledge that you take
              full responsibility for all activities that occur under your
              wallet and accept all risks of any authorized or unauthorized
              access to your wallet, to the maximum extent permitted by law.
            </p>
          </div>
          <div>
            <TermsList />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Main
