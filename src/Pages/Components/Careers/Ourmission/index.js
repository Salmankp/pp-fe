import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Ourmission = () => {
  return (
    <Container className='mt-5 pt-5'>
      <Row>
        <Col md={12}>
          <div>
            <h1 className='mb-4 text-center'>Our mission</h1>
            <p className='text-center'>
              Our goal is economic freedom through peer-to-peer finance. With a
              secure, intuitive platform made up of verified customers, we aim
              to be a global financial passport and universal translator for
              money. Putting education at the forefront, our team seeks to help
              people from all over the world connect and build relationships
              with one another, allowing them to learn and grow together. At the
              end of the day, it’s about making tangible differences in lives
              everywhere. Real change brought on by real people.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Ourmission
