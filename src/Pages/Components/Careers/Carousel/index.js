import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Slider from 'react-slick'

const Carousel = () => {
  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const dataImgs = [
    {
      imgSrc:
        'https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      imgSrc:
        'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ]
  return (
    <Container className='my-5 pt-5'>
      <Row>
        <Col md={12}>
          <Slider {...settings}>
            {dataImgs?.map((item, index) => (
              <div key={index} className='d-flex justify-content-center'>
                <img
                  style={{ height: '400px', objectFit: 'cover' }}
                  className='rounded'
                  src={item.imgSrc}
                  alt='bitcoin'
                />
              </div>
            ))}
          </Slider>
        </Col>
      </Row>
    </Container>
  )
}

export default Carousel
