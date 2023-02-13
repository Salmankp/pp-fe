import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import BitCoinImg from '../../../../assets/images/aboutus/children.webp'

const BuildWithBitcoin = () => {
  return (
    <Container className='mt-5 pt-5'>
      <Row>
        <Col md={6}>
          <h1>#BuiltwithBitcoin</h1>
          <p>
            At P2P, we believe Bitcoin is the future and a vehicle for change.
            Built with Bitcoin is our initiative to provide opportunities,
            improve lives, and make the world a better place for communities
            that need it the most, using Bitcoin.
          </p>
          <p>
            The goal? To build 100 schools, water facilities, and
            entrepreneurial incubators funded entirely by Bitcoin. We’re
            currently building our fourth school and only have 96 more to go!
          </p>
          <p>
            Built with Bitcoin also helped with COVID-19 relief in Africa—with
            generous contributions from our users and friends we were able to
            provide food, hand sanitisers, and other protective equipment to
            those in need.
          </p>
          <p className='fw-bold'>Join us! Let's change the world together.</p>
          <Button>
            Learn More <BsFillArrowRightCircleFill />
          </Button>
        </Col>
        <Col md={6}>
          <img className='w-100 rounded-5' src={BitCoinImg} alt='BitCoinImg' />
        </Col>
      </Row>
    </Container>
  )
}

export default BuildWithBitcoin
