import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ValuesImg from '../../../../assets/images/aboutus/values.webp'

const OurStory = () => {
  return (
    <Container className={`mt-5 pt-5`}>
      <Row>
        <Col md={7}>
          <div>
            <img
              style={{ height: '400px', objectFit: 'cover' }}
              className='w-100 rounded-5'
              src={ValuesImg}
              alt='ValuesImg'
            />
          </div>
        </Col>
        <Col md={5}>
          <div>
            <h1>Our Story</h1>
            <p>
              P2P was born in 2015 from the minds of founders Ray Youssef and
              Artur Schaback, who dreamed of financial inclusion for anyone who
              desired it. With millions of people lacking access to financial
              services, there was a gap that needed to be filled. Today, P2P is
              one of the largest peer-to-peer Bitcoin marketplaces in the world,
              serving over 3 million customers worldwide. The P2P revolution has
              arrived.
            </p>
            <h6 className='text-end'>Artur Schaback & Ray Youssef</h6>
            <p className='text-secondary text-end' style={{ fontSize: '12px' }}>
              Executive team of P2P
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default OurStory
