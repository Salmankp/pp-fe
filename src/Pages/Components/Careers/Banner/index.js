import React from 'react'
import Classes from './banner.module.scss'
import { Link } from 'react-router-dom'
import BannerImg from '../../../../assets/images/aboutus/about-banner.webp'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { BsFillPlayCircleFill } from 'react-icons/bs'
import VideoModal from './VideoModal'

const Banner = () => {
  const [modalShow, setModalShow] = React.useState(false)
  return (
    <div
      className={`${Classes.bannerImgWrapper} position-relative d-flex flex-column align-items-center`}
      style={{ backgroundImage: `url(${BannerImg})` }}
    >
      <Container>
        <Row>
          <Col md={6}>
            <div className='position-relative' style={{ zIndex: '1' }}>
              <h1 className='text-white mb-3'>Join the P2P family</h1>
              <p className='text-white'>
                Here at P2P, we strive to make palpable changes to the everyday
                lives of people. We believe financial freedom is a human right
                and aim to make that a reality. Join our cause and make a
                difference!
              </p>
              <Link to='/open-positions'>
                <Button>See open positions</Button>
              </Link>
              <div
                onClick={() => setModalShow(true)}
                role='button'
                className={`${Classes.videoItem} border border-1 border-white rounded px-3 py-2 mt-3 d-flex align-items-center gap-2`}
              >
                <span className='text-white display-4'>
                  <BsFillPlayCircleFill />
                </span>
                <p className='text-white mb-0'>
                  Want to know what P2P is? Watch this awesome video and find
                  out!
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <VideoModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  )
}

export default Banner
