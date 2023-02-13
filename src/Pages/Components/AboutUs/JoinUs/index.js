import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BannerImg from '../../../../assets/images/aboutus/about-banner.webp'
import Classes from './style.module.scss'
import { useSelector } from 'react-redux'

const JoinUs = () => {
  const { userInfo } = useSelector((state) => state.loggedInUser)
  const { data } = userInfo
  return (
    <div className='my-5 py-5'>
      <img
        className={`${Classes.imgItem} w-100`}
        src={BannerImg}
        alt='BannerImg'
      />
      <Container>
        <Row>
          <Col md={12}>
            <div className={`card ${Classes.cardWrapper}`}>
              <div className='card-body'>
                <h4 className='text-center mb-3'>
                  Let’s build the future together
                </h4>
                <h2 className='fw-bold text-center mb-3'>Join Our Movement</h2>
                <p className='text-center mb-5'>
                  Create your own P2P account and take the plunge into the world
                  of crypto.
                </p>
                <div className='d-flex align-items-center gap-4 justify-content-center'>
                  <Link to='/careers'>
                    <Button class='btn btn-outline-primary'>
                      Careers at P2P
                    </Button>
                  </Link>
                  {!data && (
                    <Link to='/login'>
                      <Button>Create an Account</Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default JoinUs
