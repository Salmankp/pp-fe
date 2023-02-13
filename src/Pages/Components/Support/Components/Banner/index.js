import React from 'react'
import Classes from './style.module.scss'
import { Col, Container, Row, Form } from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs'

const Banner = () => {
  return (
    <div className={`${Classes.bannerWrapper} d-flex`}>
      <Container>
        <Row className='justify-content-center'>
          <Col md={7}>
            <Form>
              <Form.Group className='position-relative' controlId='searchField'>
                <Form.Control type='seatch' placeholder='Search' />
                <span className={Classes.searchIcon}>
                  <BsSearch />
                </span>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Banner
