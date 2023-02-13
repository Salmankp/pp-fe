import React, { useState } from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'
import ReactCodeInput from 'react-code-input'
import VerifyEmailPage from '../index'

const VerifyEmail = () => {
  const [showVerifyEmail, setShowVerifyEmail] = useState(false)
  return (
    <Container className='my-5 pt-5'>
      <Row>
        <Col md={8}>
          {!showVerifyEmail && (
            <Card>
              <Card.Header>Verify your email</Card.Header>
              <Card.Body>
                <p>
                  Enter the code or click the link we've sent to
                  example@gmail.com to verify your email. If you didn't receive
                  an email from us,{' '}
                  <span
                    onClick={() => setShowVerifyEmail(!showVerifyEmail)}
                    role='button'
                    className='text-primary'
                  >
                    you can try using a different email address.
                  </span>
                </p>
                <div className='mt-3'>
                  <h5>Enter Code</h5>
                  <ReactCodeInput />
                  <p className='text-primary mt-2' role='button'>
                    Resend verification mail
                  </p>
                </div>
              </Card.Body>
            </Card>
          )}

          {showVerifyEmail && <VerifyEmailPage />}
        </Col>
      </Row>
    </Container>
  )
}

export default VerifyEmail
