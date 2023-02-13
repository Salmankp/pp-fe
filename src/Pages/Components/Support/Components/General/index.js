import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import VideoYoutubeEmbed from '../../../Common/VideoYoutubeEmbed'
import GetStarted from './GetStarted'
import P2PFees from './P2PFees'

const General = () => {
  return (
    <>
      <h2 className='mb-4'>General</h2>
      <Accordion defaultActiveKey='0'>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>What is P2P ?</Accordion.Header>
          <Accordion.Body>
            <h5>
              Welcome to P2p, the leading peer-to-peer (P2P) Bitcoin
              marketplace!
            </h5>
            <p>
              Our platform allows our Pax Citizens to connect with other people
              like them worldwide to buy and sell cryptocurrency. The community
              is 9 million strong and growing every day!
            </p>
            <div>
              <h5>So what can you actually do on P2p's platform?</h5>
              <ul style={{ paddingLeft: '2rem' }} className='mb-2'>
                <li>
                  Connect with other Pax Citizens to buy and sell Bitcoin (BTC),
                  Ethereum (ETH), and Tether (USDT).
                </li>
                <li>
                  When selling cryptocurrency, you decide the price and the
                  payment methods you'll accept. You control your financial
                  future on P2p!
                </li>
                <li>
                  Store your cryptocurrency in our free Wallet and transfer
                  coins to other P2p wallets for free!
                </li>
                <li>
                  No bank? No problem. With P2p, you can use over 400 payment
                  methods, including PayPal and other eWallets, prepaid debit
                  cards, and gift cards.
                </li>
                <li>
                  With our <a href='#'>escrow system</a> and dedicated{' '}
                  <a href='#'>Customer Support team</a>, P2p is also extremely
                  secure, and we’re constantly working to keep it that way.
                </li>
              </ul>
              <p>
                P2p is built for the people. We aim to improve the financial
                lives of the 100%, not just the 1%.
              </p>
              <VideoYoutubeEmbed embedId='5LMS0PIzGh8' />
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='1'>
          <Accordion.Header>Getting Started With P2p</Accordion.Header>
          <Accordion.Body>
            <p>
              P2p is a leading peer-to-peer marketplace where users can buy,
              sell, and store various cryptocurrencies. Ready to start building
              your financial future? We'll walk you through signing up with P2p.
            </p>
            <GetStarted />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='2'>
          <Accordion.Header>Payment Methods</Accordion.Header>
          <Accordion.Body>
            <p>
              We currently have over 400 ways to buy and sell cryptocurrency on
              P2P! While some payment methods may be restricted based on{' '}
              <a href='#'>where you live</a>, you'll still have plenty of ways
              to trade in our marketplace.
            </p>
            <p>Some of our most popular payment types include:</p>
            <ol>
              <li>Bank transfers (ACH, wire transfers, etc.)</li>
              <li>Credit/debit cards</li>
              <li>Online Wallets (PayPal, Skrill, Neteller, etc.)</li>
              <li>Gift cards (Amazon, iTunes, Visa, etc.)</li>
              <li>Altcoins (Ethereum, Litecoin)</li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='3'>
          <Accordion.Header>P2P Fees</Accordion.Header>
          <Accordion.Body>
            <p>
              When trading or transferring cryptocurrency you may run into fees.
              At P2P we offer a competitive fee structure so you get to keep
              more of your Bitcoin.
            </p>
            <P2PFees />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='4'>
          <Accordion.Header>Is P2P Legit and Safe?</Accordion.Header>
          <Accordion.Body>
            <p>
              We’ve taken a lot of security measures to make sure our users are
              safe in the marketplace.
            </p>
            <p>
              We have a strict verification process that helps ensure we know
              our customers, an army of dispute and fraud prevention analysts to
              help make sure trades run smoothly and to keep bad actors away
              from the marketplace. We also have an escrow feature in place
              where the crypto being traded is safely held until the trade is
              complete. This safeguards your money and helps make sure the
              crypto goes to the right party in case of disputes.
            </p>
            <p>
              We use BitGo as our wallet service provider, which is one of the
              most secure and high-tech services on the market. Additionally, we
              provide you with all means to protect your funds within your P2P
              account, like setting up two-factor authentication when you log
              into your account and send crypto out of your P2P wallet.
            </p>
            <p>
              To top it all off, we have some of the best cybersecurity
              professionals on our team that work around the clock to make sure
              our users and platform are safe from harm and hackers.
            </p>
            <p>
              If you’re looking for more information on your safety in the
              marketplace, check out these articles:
            </p>
            <ul style={{ paddingLeft: '2rem' }} className='my-2'>
              <li>
                <a href='#'>How to stay safe on P2P</a>
              </li>
              <li>
                <a href='#'>Reporting a problem</a>
              </li>
              <li>
                <a href='#'>Is my P2P wallet secure?</a>
              </li>
            </ul>
            <div>
              <h5>Is P2P trustworthy?</h5>
              <p>
                P2P has an AML policy, we comply with{' '}
                <a href='#'>
                  Office of Foreign Assets Control ("OFAC") sanctions
                </a>
                , we’re a regulated financial entity, and we’re trusted by over
                5 million users. See what our users have to say about us through
                our
                <a href='#'>reviews</a>!
              </p>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='5'>
          <Accordion.Header>
            Why is My Bitcoin Transaction Still Unconfirmed?
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Chances are most of your Bitcoin transactions have been quickly
              confirmed. It takes two confirmations from the network before your
              balance is fully available in your P2P wallet. This is the
              industry standard for a truly secure wallet. This can take
              anywhere from five minutes to an hour, depending on the Bitcoin
              network. However, some Bitcoin transactions can take longer to be
              confirmed by miners. If you believe your transaction is taking
              longer than usual to be confirmed it could be due to mempool
              congestion and fees.
            </p>
            <div className='my-3'>
              <h4>What is Mempool and Mempool Congestion?</h4>
              <p>
                Mempool is short for “memory” and “pool”. It is a way for
                Bitcoin to store unconfirmed transactions before being confirmed
                in the blockchain. It can be likened to waiting rooms at a
                doctor's office.{' '}
              </p>
              <p>
                Mempool congestion is when there are many unconfirmed Bitcoin
                transactions waiting to be confirmed to the blockchain by
                miners, and this is similar to when waiting rooms are full of
                people to see different doctors. Mempool congestion can be
                caused by two things:
              </p>
            </div>
            <div className='my-3'>
              <h4>Transaction volume is high</h4>
              <p>
                This means the number of transactions waiting to be confirmed on
                the blockchain is high, and the volume of confirmations needed
                can’t be processed fast enough. This can be likened to when
                doctors are overwhelmed by the number of patients that are in
                the waiting room.
              </p>
            </div>
            <div className='my-3'>
              <h4>Trade hash decreased abruptly</h4>
              <p>
                When the trade hash decreases abruptly, it means that there are
                not enough miners to confirm each transaction. This is similar
                to when there are not enough doctors to see waiting patients.
                Because of this the patients or in this case, the Bitcoin
                confirmations must wait longer.
              </p>
            </div>
            <div className='my-3'>
              <h4>How Do My Transaction Fees Relate to My Waiting Time?</h4>
              <p>
                It’s a misconception that there is one universal mempool. This
                is not the case as each transaction is unique and miners have
                different methods of confirming each transaction to the
                blockchain. With various fees tied to each unique transaction,
                miners are likely to process transactions with higher fees
                faster as they collect some of the fees. If you sent or bought a
                lower amount of Bitcoin and paid a lower fee, you may have to
                wait longer.
              </p>
            </div>
            <div className='my-3'>
              <h4>
                What Should I Do If My Bitcoin Transaction is Unconfirmed?
              </h4>
              <p>
                It’s rare that a transaction never settles on the blockchain, as
                most transactions will settle within 72 hours. In most cases,
                P2P advises you to wait 72 hours before resending the
                transaction. If the transaction never makes it to the blockchain
                after 72 hours, your Bitcoin can be found in the wallet it was
                originally sent from.
              </p>
              <p>
                For more information on checking your transaction status, visit
                our help center article:{' '}
                <a href='#'>How to Check Bitcoin Transaction Status</a>
              </p>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  )
}

export default General
