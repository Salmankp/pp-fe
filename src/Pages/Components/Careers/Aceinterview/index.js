import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Aceinterview = () => {
  return (
    <Container className='my-5 pt-5'>
      <Row>
        <Col md={7}>
          <div>
            <h1 className='mb-4'>How do you ace your interview?</h1>
            <ul style={{ paddingLeft: '2rem' }}>
              <li className='mb-4'>
                Read up on #BuiltWithBitcoin and our mission to achieve economic
                justice through Bitcoin.
              </li>
              <li className='mb-4'>
                Check out our social media channels. If you don’t know what
                Bitcoin is, do some research to understand the basics of its
                technological and economical impact
              </li>
              <li className='mb-4'>
                Check our social media accounts to get a sense of our culture
                and communication style
              </li>
              <li className='mb-4'>
                Check our social media accounts to get a sense of our culture
                and communication style Tell us more than what’s on your resume!
                What makes you stand out?
              </li>
            </ul>
          </div>
        </Col>
        <Col md={12}>
          <div className='mt-2 text-center'>
            <Link to='/open-positions'>
              <Button>See open positions</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Aceinterview
