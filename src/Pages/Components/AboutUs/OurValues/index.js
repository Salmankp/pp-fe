import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import ValuesImg from '../../../../assets/images/aboutus/values.webp'
import { FcDebt, FcHome, FcCollaboration } from 'react-icons/fc'

const OurValues = () => {
  return (
    <Container className={`mt-5 pt-5`}>
      <Row className='align-items-center'>
        <Col md={12}>
          <h1 className='mb-3'>Our Values</h1>
          <p className='mb-4'>
            We live and work by three simple values to guide us on our mammoth
            quest.
          </p>
        </Col>
        <Col md={7}>
          <div>
            <img className='w-100 rounded-5' src={ValuesImg} alt='ValuesImg' />
          </div>
        </Col>
        <Col md={5}>
          <div className='mb-3'>
            <div className='d-flex align-items-center gap-2 mb-3'>
              <span>
                <FcDebt fontSize={30} />
              </span>
              <h2 className='mb-0'>Be a Hero</h2>
            </div>
            <p>
              At P2P, we use superhuman efforts to get the job done. We work
              around the clock to provide our users with what they’ve been
              dreaming of. We’re making the impossible a reality to change the
              lives of billions around the world.
            </p>
          </div>
          <div className='mb-3'>
            <div className='d-flex align-items-center gap-2 mb-3'>
              <span>
                <FcCollaboration fontSize={30} />
              </span>
              <h2 className='mb-0'>Build for People</h2>
            </div>
            <p>
              When we make decisions at P2P, we think about people—not profits.
              We’re going to the places the rest of the world has ignored and
              forgotten. We’re helping families to thrive, building schools, and
              enabling our users to become their own boss.
            </p>
          </div>
          <div>
            <div className='d-flex align-items-center gap-2 mb-3'>
              <span>
                <FcHome fontSize={30} />
              </span>
              <h2 className='mb-0'>Stay Connected to the Streets</h2>
            </div>
            <p>
              We listen to our community 24/7 at P2P. We’re not in skyscrapers
              with “the suits”—we’re on the streets with the people. We’re
              always talking with our users, asking them for their feedback, and
              creating something even better.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default OurValues
