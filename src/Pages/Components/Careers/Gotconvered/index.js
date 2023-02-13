import React from 'react'
import { Row, Container, Col } from 'react-bootstrap'
import { BsBookmarkHeart, BsFlag } from 'react-icons/bs'
import { FaMedal } from 'react-icons/fa'

const Gotconvered = () => {
  return (
    <Container className='mt-5 pt-5'>
      <Row className='mb-4'>
        <Col md={12}>
          <h1 className='text-center'>We’ve got you covered</h1>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <div className='text-center'>
            <div className='mb-2'>
              <BsBookmarkHeart color='#1fc28f' fontSize={40} />
            </div>
            <h3>We care about your health</h3>
            <p>
              We offer catered lunch and dinner every day, a gym membership of
              your choice, various fitness and nutritional supplements, massages
              and chiropractic visits, and health-related team events. Online
              medical consultations with top-notch doctors.
            </p>
          </div>
        </Col>
        <Col md={4}>
          <div className='text-center'>
            <div className='mb-2'>
              <FaMedal color='#1fc28f' fontSize={40} />
            </div>
            <h3>We’re committed to your growth</h3>
            <p>
              From touring universities around the world to providing unlimited
              resources for training and professional development, we believe
              the only way forward is through continued growth and learning.
            </p>
          </div>
        </Col>
        <Col md={4}>
          <div className='text-center'>
            <div className='mb-2'>
              <BsFlag color='#1fc28f' fontSize={40} />
            </div>
            <h3>We like to let loose</h3>
            <p>
              Changing the world isn’t easy. So to balance out all of the hard
              work, we offer activities, events, and even company-wide paid
              vacations just for the fun, the experience, and the connections
              you can build with your colleagues from the other side of the
              globe.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Gotconvered
