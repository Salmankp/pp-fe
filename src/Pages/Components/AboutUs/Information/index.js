import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaUsers } from 'react-icons/fa'
import { BsWallet, BsShieldShaded } from 'react-icons/bs'

const Information = () => {
  return (
    <Container className={`mt-5 pt-5`}>
      <Row>
        <Col md={4}>
          <div>
            <div className='mb-3 d-flex align-items-center gap-3'>
              <span>
                <FaUsers fontSize={30} color='#119d71' />
              </span>
              <h4 className='mb-0 fw-bold'>People-Powered Technology</h4>
            </div>
            <p>
              P2P is entirely peer-to-peer, which means our users trade with
              real people—the way bitcoin was intended to be used.
            </p>
          </div>
        </Col>
        <Col md={4}>
          <div>
            <div className='mb-3 d-flex align-items-center gap-3'>
              <span>
                <BsWallet fontSize={30} color='#119d71' />
              </span>
              <h4 className='mb-0 fw-bold'>Free Crypto Wallet</h4>
            </div>
            <p>
              Reliable, easy-to-use, and doesn’t cost you a penny. Our digital
              wallet gives everyone a safe place to store their wealth — no
              matter who you are or where you’re from.
            </p>
          </div>
        </Col>
        <Col md={4}>
          <div>
            <div className='mb-3 d-flex align-items-center gap-3'>
              <span>
                <BsShieldShaded fontSize={30} color='#119d71' />
              </span>
              <h4 className='mb-0 fw-bold'>Secure</h4>
            </div>
            <p>
              Safety and security are the most important factors when it comes
              to your money. All trades on P2P are protected by our secure
              escrow service to guarantee peace of mind.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Information
