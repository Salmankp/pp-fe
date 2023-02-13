import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProductImg from '../../../../assets/images/aboutus/product.webp'

const OurProduct = () => {
  return (
    <Container className={`mt-5 pt-5`}>
      <Row className='align-items-center'>
        <Col md={5}>
          <h1>Our Product</h1>
          <p>
            P2P is changing the way the world moves money and embraces crypto -
            allowing transfers with anyone, anywhere, at any time.
          </p>
          <p>
            No bank account? No problem. We have over 300 payment methods to
            choose from, making it easy for you to move your money the way you
            like.
          </p>
        </Col>
        <Col md={7}>
          <img className='w-100 rounded-5' src={ProductImg} alt='ProductImg' />
        </Col>
      </Row>
    </Container>
  )
}

export default OurProduct
