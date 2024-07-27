import React from 'react'
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function Cards({children,color}) {
  return (
    <div>
      <Card bg={color} className='rounded-5 col-12 d-flex align-items-center mx-5'> {children} </Card>
    </div>
  )
}

export default Cards
