import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import {
  FaCentercode,
  FaRegLightbulb,
  FaDashcube,
  FaTeamspeak,
  FaChartLine,
  FaRocketchat,
} from 'react-icons/fa'

const Departments = () => {
  const departmentsData = [
    {
      icon: <FaCentercode />,
      title: 'Software Development',
      description:
        'The heart of P2P. The cross-functional product teams work in agile sprints, constantly developing new products, updating existing ones, and envisioning the future reaches of peer-to-peer finance.',
    },
    {
      icon: <FaRegLightbulb />,
      title: 'Product',
      description:
        'The cross-functional product teams work in agile sprints, constantly thinking of new ways to improve our user’s experience. Designers, Product Managers and Analysts work their magic, transforming ideas into usable products and features',
    },
    {
      icon: <FaDashcube />,
      title: 'Compliance & Fraud and Customer Experience',
      description:
        'P2P’s largest department is dispersed between different continents to ensure 24/7 support and dispute resolution. These teams work on securing our platform and users, ensuring that regulatory requirements are met and conducting advanced blockchain analysis.',
    },
    {
      icon: <FaTeamspeak />,
      title: 'Marketing',
      description:
        'These are the people spreading the gospel of peer-to-peer finance across the world. Using both traditional and niche media channels, they aim to reach global audiences through education, content, and community building.',
    },
    {
      icon: <FaChartLine />,
      title: 'Finance',
      description:
        'These departments are the oil to our machine. They ensure that our books are up to date and that all our operations are within the law.',
    },
    {
      icon: <FaRocketchat />,
      title: 'People Operations',
      description:
        'The people who ensure P2P remains the best workplace ever! They run all our people efforts, and run all matters related to organizational development, along with handling office management and various administrative projects.',
    },
  ]
  return (
    <Container className='my-5 pt-5'>
      <Row>
        <Col md={12}>
          <h1 className='mb-5'>Departments</h1>
        </Col>
      </Row>
      <Row>
        {departmentsData?.map((item, index) => (
          <Col className='mb-4' key={index} md={6}>
            <Card className='h-100'>
              <Card.Body>
                <div className='mb-3' style={{ fontSize: '40px' }}>
                  {item.icon}
                </div>
                <h3 className='mb-2'>{item.title}</h3>
                <p>{item.description}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Departments
