import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const LikeToWork = () => {
  return (
    <Container className={`mt-5 pt-5`}>
      <Row>
        <Col md={12}>
          <div>
            <h1 className='text-center'>What’s it like to work at P2P?</h1>
            <p className='text-center'>
              Working at P2P is anything but ordinary. With four offices
              scattered across the globe, our teams are always on the grind. We
              work hard, play hard, and then work harder to ensure that we’re
              always ahead of the game. You can often find P2P employees jamming
              out to music, at the gym, grabbing snacks, or lounging out in the
              sun. It might sound cheesy but we call each other family because
              we love each other and love what we do.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default LikeToWork
