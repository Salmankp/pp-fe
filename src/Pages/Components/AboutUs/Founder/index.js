import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Classes from './style.module.scss'
import CeoImg from '../../../../assets/images/aboutus/ceo.webp'

const Founder = () => {
  return (
    <Container className={`mt-5 pt-5 ${Classes.ceoImgWrapper}`}>
      <Row>
        <Col md={6}>
          <h1 className='mb-3'>Our Founders</h1>
          <p>
            P2P started with a simple mission: to empower the forgotten four
            billion unbanked and underbanked, so they have control of their
            money in a way they've never had before.
          </p>
        </Col>
        <Col md={6}>
          <div className='d-flex justify-content-center mb-3'>
            <img
              src={CeoImg}
              className={`rounded-5 w-100 ${Classes.founderImg}`}
              alt='ceo'
            />
          </div>
          <div>
            <h2 className='mb-2'>Ray Youssef, CEO</h2>
            <p>
              An immigrant from Egypt raised in the heart of New York, Ray has
              always had a passion for helping others. He dreamed of a world
              where finance was accessible to everyone and that idea manifested
              as P2P.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Founder
