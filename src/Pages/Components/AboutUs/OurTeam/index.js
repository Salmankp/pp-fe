import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Classes from './style.module.scss'
import CeoImg from '../../../../assets/images/aboutus/ceo.webp'
import ValuesImg from '../../../../assets/images/aboutus/values.webp'
import ProductImg from '../../../../assets/images/aboutus/product.webp'
import BitCoinImg from '../../../../assets/images/aboutus/children.webp'
import BannerImg from '../../../../assets/images/aboutus/about-banner.webp'

const OurTeam = () => {
  return (
    <Container className='mt-5 pt-5'>
      <Row>
        <Col md={12}>
          <div className='mb-4'>
            <h1 className='text-center fw-bold'>Our Team</h1>
          </div>
          <Row>
            <Col md={3}>
              <div className='text-center'>
                <h1>4</h1>
                <p>Offices around the world</p>
              </div>
            </Col>
            <Col md={3}>
              <div className='text-center'>
                <h1>200+</h1>
                <p>Employees who want to make the world a better place</p>
              </div>
            </Col>
            <Col md={3}>
              <div className='text-center'>
                <h1>21</h1>
                <p>Languages spoken in our global offices</p>
              </div>
            </Col>
            <Col md={3}>
              <div className='text-center'>
                <h1>1</h1>
                <p>
                  Mission to build a world with equal financial access for all
                </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col md={3}>
          <div className='mb-3'>
            <img
              className={`w-100 rounded-3 ${Classes.sideImges}`}
              src={CeoImg}
              alt='CeoImg'
            />
          </div>
          <div>
            <img
              className={`w-100 rounded-3 ${Classes.sideImges}`}
              src={ValuesImg}
              alt='ValuesImg'
            />
          </div>
        </Col>
        <Col md={6}>
          <div className='mb-3'>
            <img
              className={`w-100 rounded-3 ${Classes.midImages}`}
              src={BannerImg}
              alt='BannerImg'
            />
          </div>
          <div>
            <img
              className={`w-100 rounded-3 ${Classes.midImages}`}
              src={BitCoinImg}
              alt='BitCoinImg'
            />
          </div>
        </Col>
        <Col md={3}>
          <div className='mb-3'>
            <img
              className={`w-100 rounded-3 ${Classes.sideImges}`}
              src={ProductImg}
              alt='ProductImg'
            />
          </div>
          <div>
            <img
              className={`w-100 rounded-3 ${Classes.sideImges}`}
              src={CeoImg}
              alt='CeoImg'
            />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default OurTeam
