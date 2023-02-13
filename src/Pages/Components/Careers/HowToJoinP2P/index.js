import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { FaFileAlt, FaPhoneAlt, FaMoneyCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const HowToJoinP2P = () => {
  return (
    <Container className='mt-5 pt-5'>
      <Row>
        <Col md={12}>
          <div className='text-center'>
            <h1 className='mb-5'>How to join the Paxful family</h1>
            <Row>
              <Col md={4}>
                <div className='text-center'>
                  <div className='mb-5'>
                    <FaFileAlt className='display-1' color='#1fc28f' />
                  </div>
                  <h4>Mutual fit and application</h4>
                </div>
              </Col>
              <Col md={4}>
                <div className='text-center'>
                  <div className='mb-5'>
                    <FaPhoneAlt className='display-1' color='#1fc28f' />
                  </div>
                  <h4>Prepare for a call</h4>
                </div>
              </Col>
              <Col md={4}>
                <div className='text-center'>
                  <div className='mb-5'>
                    <FaMoneyCheck className='display-1' color='#1fc28f' />
                  </div>
                  <h4>The first interview</h4>
                </div>
              </Col>
            </Row>
            <Link to='/how-to-join'>
              <Button className='mt-5'>View more</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default HowToJoinP2P
