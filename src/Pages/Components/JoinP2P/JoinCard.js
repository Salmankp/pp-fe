import React from 'react'
import { Card } from 'react-bootstrap'
import Classes from './style.module.scss'

const JoinCard = ({ className, data }) => {
  return (
    <Card bg={data?.varantBg} className={`${className} ${Classes.cardItem}`}>
      <Card.Body>
        <h3 className='text-white'>{data?.cardTitle}</h3>
        <p className='text-white'>{data?.description}</p>
      </Card.Body>
    </Card>
  )
}

export default JoinCard
