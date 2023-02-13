import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { FiMail } from 'react-icons/fi'

const VerifyEmail = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div
            style={{ border: '1px solid #1fc28f' }}
            className='d-flex justify-content-between align-items-center p-3 mt-3 rounded'
          >
            <div className='d-flex gap-5'>
              <div>
                <FiMail style={{ color: '#1fc28f' }} className='display-4' />
              </div>
              <div>
                <h3>Verify Your Email</h3>
                <p className='mb-0'>
                  Before starting, we’ll need you to confirm your email address.
                </p>
              </div>
            </div>
            <span>
              <button className='nextBtn mt-0'>Verify Me</button>
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default VerifyEmail
