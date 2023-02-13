import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import Classes from './style.module.scss'
import { Link } from 'react-router-dom'

const TabContent = ({ data }) => {
  return (
    <Row>
      <Col md={6}>
        <h2 className='mb-2'>
          {data.name} {data.subCity ? ', Estonia' : ''}
        </h2>
        <p>{data.description}</p>
        <Link to='/open-positions'>
          <Button>See open positions</Button>
        </Link>
      </Col>
      <Col md={6}>
        <div className={Classes.imgWrapper}>
          <img src={data.imgItem} className={`${Classes.contentImg} rounded`} />
        </div>
      </Col>
    </Row>
  )
}

export default TabContent
