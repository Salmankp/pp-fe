import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import EditOffers from './EditOffers'
import FeaturedOffers from './FeaturedOffers'
import Restriction from './Restriction'
import RestrictionPaymentMethod from './RestrictionPaymentMethod'
import OfferRemoved from './OfferRemoved'
import WorkingHours from './WorkingHours'

const Offers = () => {
  return (
    <Accordion defaultActiveKey=''>
      <Accordion.Item eventKey='0'>
        <Accordion.Header>How do i Edit My Offers</Accordion.Header>
        <Accordion.Body>
          <EditOffers />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='1'>
        <Accordion.Header>Featured Offers</Accordion.Header>
        <Accordion.Body>
          <FeaturedOffers />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='2'>
        <Accordion.Header>
          Country Restrictions on Payment Methods
        </Accordion.Header>
        <Accordion.Body>
          <Restriction />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='3'>
        <Accordion.Header>
          How can I lift a restriction on my payment method?
        </Accordion.Header>
        <Accordion.Body>
          <RestrictionPaymentMethod />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='4'>
        <Accordion.Header>Why Was My Offer Removed?</Accordion.Header>
        <Accordion.Body>
          <OfferRemoved />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='5'>
        <Accordion.Header>Offer working hours</Accordion.Header>
        <Accordion.Body>
          <WorkingHours />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default Offers
