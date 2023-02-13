import React from 'react'
import Classes from './banner.module.scss'
import BannerImg from '../../../../assets/images/aboutus/about-banner.webp'
import { Col, Container, Row } from 'react-bootstrap'

const Banner = () => {
  return (
    <div
      className={`${Classes.bannerImgWrapper} position-relative d-flex flex-column align-items-center`}
      style={{ backgroundImage: `url(${BannerImg})` }}
    >
      <Container>
        <Row>
          <Col md={6}>
            <div className='position-relative' style={{ zIndex: '1' }}>
              <h1 className='text-white mb-3'>
                Welcome to People-Powered Money
              </h1>
              <p className='text-white'>
                P2P is changing the world of finance. In just five years, we’ve
                become one of the leading peer-to-peer bitcoin marketplaces used
                by millions around the world. And we’re just getting started.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Banner
