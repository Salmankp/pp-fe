import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Instagram = () => {
  return (
    <Container className='my-5 pt-5'>
      <Row>
        <Col md={12}>
          <div>
            <h3 className='text-center'>
              Follow #lifeatP2P on Instagram and get a sneak peek into our
              everyday life
            </h3>
            <Row className='my-4'>
              <Col md={4}>
                <div>
                  <img
                    className='rounded'
                    style={{
                      maxWidth: '100%',
                      height: '400px',
                      objectFit: 'cover',
                    }}
                    src='https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&w=1600'
                    alt='img'
                  />
                </div>
              </Col>
              <Col md={4}>
                <div>
                  <img
                    className='rounded'
                    style={{
                      maxWidth: '100%',
                      height: '400px',
                      objectFit: 'cover',
                    }}
                    src='https://images.pexels.com/photos/1447418/pexels-photo-1447418.jpeg?auto=compress&cs=tinysrgb&w=1600'
                    alt='img'
                  />
                </div>
              </Col>
              <Col md={4}>
                <div>
                  <img
                    className='rounded'
                    style={{
                      maxWidth: '100%',
                      height: '400px',
                      objectFit: 'cover',
                    }}
                    src='https://images.pexels.com/photos/1097946/pexels-photo-1097946.jpeg?auto=compress&cs=tinysrgb&w=1600'
                    alt='img'
                  />
                </div>
              </Col>
            </Row>
            <div className='text-center'>
              <Button variant='outline-primary'>View more on instagram</Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Instagram
