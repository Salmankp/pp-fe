import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { GrAnnounce } from 'react-icons/gr'
import { FaFlagCheckered } from 'react-icons/fa'
import { HiBriefcase } from 'react-icons/hi'

const BusinessContacts = () => {
  return (
    <Container className='mt-5 pt-5'>
      <Row className='mb-3'>
        <Col md={12}>
          <h1 className='fw-bold mb-3'>Business Contacts</h1>
          <p>
            If you have a support issue or want to give us feedback about how we
            can improve our products, we’d love to hear more about it . However,
            if you want to contact P2P about other business related inquiries,
            we’re also available through other channels.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <div>
            <div className='d-flex align-items-center gap-3 mb-2'>
              <span>
                <GrAnnounce fontSize={30} color='#1fc28f' />
              </span>
              <h5 className='mb-0 fw-bold'>Press and Marketing</h5>
            </div>
            <p>
              Help spread the word about P2P through press and marketing
              initiatives. Contact us for press inquiries at{' '}
              <a href='#'>press@P2P.com</a>
            </p>
            <Button class='btn btn-outline-primary'>Contact Us</Button>
          </div>
        </Col>
        <Col md={4}>
          <div>
            <div className='d-flex align-items-center gap-3 mb-2'>
              <span>
                <FaFlagCheckered fontSize={30} />
              </span>
              <h5 className='mb-0 fw-bold'>Bug Bounty</h5>
            </div>
            <p>
              The Bug Bounty Program gives you an opportunity to earn a reward
              for identifying technical issues. Report them at
              <a href='#'> bugbounty@P2P.com</a>. More info <a href='#'>here</a>
              .
            </p>
            <Button class='btn btn-outline-primary'>Report a bug</Button>
          </div>
        </Col>
        <Col md={4}>
          <div>
            <div className='d-flex align-items-center gap-3 mb-2'>
              <span>
                <HiBriefcase fontSize={30} />
              </span>
              <h5 className='mb-0 fw-bold'>Corporate Accounts</h5>
            </div>
            <p>
              To register a corporate account for businesses trading on P2P, you
              can email <a href='#'> corporateaccounts@P2P.com</a>. More info{' '}
              <a href='#'>here</a>.
            </p>
            <Button class='btn btn-outline-primary'>Contact Us</Button>
          </div>
        </Col>
        <Col md={4}>
          <div>
            <div className='d-flex align-items-center gap-3 mb-2'>
              <span>
                <HiBriefcase fontSize={30} />
              </span>
              <h5 className='mb-0 fw-bold'>Sales and Partnerships</h5>
            </div>
            <p>
              To inquire about becoming a partner. Let us know if you’re
              interested in partnering with us by emailing{' '}
              <a href='#'>sales@P2P.com.</a>
            </p>
            <Button class='btn btn-outline-primary'>Contact Sales</Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default BusinessContacts
