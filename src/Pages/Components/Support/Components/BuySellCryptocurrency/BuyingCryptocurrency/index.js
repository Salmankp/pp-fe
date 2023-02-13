import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import VerifiedImg from '../../../../../../assets/images/support/verified.png'
import BuyingCryptocurrency from './BuyingCryptocurrency'
import TipsforBuying from './TipsforBuying'
import BuyingGameTerms from './BuyingGameTerms'
import BuyingWithGold from './BuyingWithGold'

const BuyingCryptocurrencyContent = () => {
  return (
    <Accordion defaultActiveKey=''>
      <Accordion.Item eventKey='0'>
        <Accordion.Header>Changes to Indian income tax laws</Accordion.Header>
        <Accordion.Body>
          <p>
            Beginning July 1, 2022, income tax law in India will require income
            taxes to be paid for the transfer, meaning the sale or exchange, of
            any virtual digital asset (VDA) such as cryptocurrency. Anyone who
            purchases cryptocurrency from a buyer located in India will be
            required to pay a 1% tax on the sale, regardless of where the buyer
            is located.
          </p>
          <p>
            This tax isn't collected or remitted by P2P, as all members of our
            community are responsible for reporting their income to the
            appropriate government agencies and paying any applicable taxes. For
            more information about this change check out our{' '}
            <a href='#'>blog post</a>.
          </p>
          <p>
            If you'd like more information about tax law or your specific
            circumstances, you'll want to contact a legal or tax professional.
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='1'>
        <Accordion.Header>What are P2P Verified Offers?</Accordion.Header>
        <Accordion.Body>
          <p>So you've signed up for P2P - welcome! Time to start trading!</p>
          <p>
            We know that choosing an offer can be challenging at first. Which
            one do you pick? Who can you trust?
          </p>
          <p>
            You'll now be able to find offers that have been verified by P2P
            from trusted members of our community.
          </p>
          <h4>How do I use P2P Verified Offers?</h4>
          <p>
            When searching for offers in the Marketplace, enter your search
            criteria, like the type of cryptocurrency you'd like to buy, your
            payment method and currency, and how much you'd like to purchase.
          </p>
          <p>
            To make sure you're only seeing P2P Verified Offers, you'll want to
            click the toggle for this option.
          </p>
          <img src={VerifiedImg} alt='VerifiedImg' />
          <p>
            You can then click 'Find Offers', and you'll be shown the offers
            that match your criteria. All of these offers have been verified by
            P2P, and the sellers are in good standing in our community.{' '}
          </p>
          <p>Happy trading!</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='2'>
        <Accordion.Header>Buying Cryptocurrency</Accordion.Header>
        <Accordion.Body>
          <BuyingCryptocurrency />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='3'>
        <Accordion.Header>Tips for Buying Cryptocurrency</Accordion.Header>
        <Accordion.Body>
          <TipsforBuying />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='4'>
        <Accordion.Header>
          Buying Cryptocurrency with In-game Items
        </Accordion.Header>
        <Accordion.Body>
          <BuyingGameTerms />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='5'>
        <Accordion.Header>Buying Cryptocurrency with Gold</Accordion.Header>
        <Accordion.Body>
          <BuyingWithGold />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default BuyingCryptocurrencyContent
