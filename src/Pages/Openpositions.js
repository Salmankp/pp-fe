import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Openpositions = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={12}>
            <div className='mt-5 pt-5'>
              <h1 className='mb-3'>Careers at Paxful</h1>
              <p>
                Paxful is the people-powered marketplace for money transfers
                with anyone, anywhere, at any time. Imagine a world where
                everyone has equal access to finance, no matter who they are, or
                where they’re from. We're building it. Our mission is to empower
                the forgotten four billion unbanked, so they have control of
                their money in a way they've never had before.{' '}
              </p>
              <p>
                Working across three offices in different time zones, the Paxful
                team serves our amazing community of 4 million strong. We build
                for people, not profits, and consider ourselves to be everyday
                heroes who don’t wear capes or masks. That’s why we launched
                Built with Bitcoin, a charitable initiative that aims to build
                100 schools, water facilities, and entrepreneurial incubators in
                emerging markets all over the world. We want to show that
                bitcoin can have a positive impact and make real changes in the
                lives of people everywhere.
              </p>
              <h3>Current Job Openings</h3>
              <p>There are no current openings.</p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className='mt-5 bg-light'>
        <Container>
          <Row>
            <Col md={12}>
              <div className='text-center py-4'>
                <p className='fs-4'>
                  Powered by <span className='text-success'>Green house</span>
                </p>
                <p className='mb-0 fs-6'>
                  Read our <a href='#'>Privacy Policy</a>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Openpositions
