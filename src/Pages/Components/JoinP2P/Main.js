import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Classes from './style.module.scss'
import JoinCard from './JoinCard'

const Main = () => {
  const steppedInfo = [
    {
      cardTitle: 'Mutual fit',
      varantBg: 'primary',
      description:
        'We aim for an ideal fit on both sides through several conversations during the hiring process. We’re looking for talented candidates, but we want you to be confident that Paxful is the right place for you too.',
    },
    {
      cardTitle: 'Submit application',
      varantBg: 'secondary',
      description:
        "See a role at Paxful that suits you? Submit an application and tell us why you'd be a great addition to the team.",
    },
    {
      cardTitle: 'Let’s chat',
      varantBg: 'danger',
      description:
        'If your application stands out, we’ll call you to learn more about you and your career history.',
    },
    {
      cardTitle: 'Initial interview',
      varantBg: 'info',
      description:
        'Tell us how your skills and experience can help our mission.',
    },
    {
      cardTitle: 'Task assignment',
      varantBg: 'warning',
      description: 'Time to show us what you can do.',
    },
    {
      cardTitle: 'Second interview',
      varantBg: 'dark',
      description:
        'You’re almost there! You’ll meet peers and department leaders to make sure it’s a good fit.',
    },
    {
      cardTitle: 'Offer and contract',
      varantBg: 'success',
      description: 'Welcome to the Paxful family!',
    },
  ]
  return (
    <div className={Classes.howToJoinWrapper}>
      <div className='bg-light py-5'>
        <Container>
          <Row>
            <Col md={12}>
              <div className='text-center'>
                <h1 className='mb-4'>Join P2P.</h1>
                <p>
                  We’re building a financial system that serves the 100%, not
                  just the 1%. Looking to join the peer-to-peer finance
                  revolution? Here’s how our hiring process works:
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className='mt-5'>
        <Row className='justify-content-center'>
          <Col md={12}>
            {steppedInfo?.map((item, index) => (
              <div
                key={index}
                className={`mb-5 wrapper position-relative ${
                  Classes.upperCard
                } ${(index + 1) % 2 === 0 ? 'd-flex justify-content-end' : ''}`}
              >
                <JoinCard data={item} />
                <div
                  className={`${Classes.countStep} bg-${item?.varantBg} text-white d-flex justify-content-center align-items-center`}
                >
                  <span>{index + 1}</span>
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Main
