import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import TabContent from './TabContent.js'
import BannerImg from '../../../../assets/images/aboutus/about-banner.webp'
import ValuesImg from '../../../../assets/images/aboutus/values.webp'
import BitCoinImg from '../../../../assets/images/aboutus/children.webp'

const OurOffice = () => {
  const [cityName, setCityName] = useState('Tallinn')
  const officCities = [
    {
      name: 'Tallinn',
      subCity: 'Estonia',
      imgItem: BannerImg,
      description:
        'Tallinn is often referred to as the “Silicon Valley” of Europe. The small but thriving city is known for its vibrant start-up scene and impressive medieval architecture. The innovative spirit and open-minded approach of the people here, make Estonia a great place for our product development team to create world-changing, life-altering products.',
    },
    {
      name: 'New York City',
      subCity: 'USA',
      imgItem: ValuesImg,
      description:
        'New York City is one of the largest financial hubs in the world and was the natural choice for Paxful to grow its presence while attracting lots of great partnerships. Having kicked off as a two-person startup, the New York office quickly expanded to include members from a number of different departments, including our legal and compliance teams who work tirelessly to bring Paxful to the next level.',
    },
    {
      name: 'Hong Kong',
      imgItem: BannerImg,
      description:
        'Hong Kong is a cultural melting pot that has grown to become one of the busiest business meccas in the world. The Hong Kong office is home to members of our marketing and business development teams, who are making great strides in connecting various Asian markets to the rest of the world.',
    },
    {
      name: 'Manila',
      subCity: 'Philippines',
      imgItem: BitCoinImg,
      description:
        'Manila is the economic, political, social, and cultural hub of the Philippines. One of the most dynamic and fastest growing industries in Manila is the information technology-business process outsourcing (IT-BPO) industry. That’s why Manila was an obvious choice to be the center of our customer experience and marketing teams.',
    },
  ]
  return (
    <Container className={`mt-5 pt-5`}>
      <Row>
        <Col md={12}>
          <div>
            <h1 className='mb-3'>Our offices</h1>
            <div className='d-flex flex-wrap gap-3 mb-4'>
              {officCities?.map((item, index) => (
                <Button
                  onClick={() => setCityName(item.name)}
                  variant={
                    cityName === item.name ? 'primary' : 'outline-primary'
                  }
                  key={index}
                >
                  {item.name}
                </Button>
              ))}
            </div>
            {officCities?.map((item, index) => (
              <>
                {item?.name === cityName && (
                  <TabContent key={index} data={item} />
                )}
              </>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default OurOffice
