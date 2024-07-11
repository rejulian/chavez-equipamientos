import React from 'react'
import { Button, Card, CardBody, CardFooter, CardImg, CardTitle } from 'react-bootstrap'
import './Card.css'
import { Link } from 'react-router-dom'

const CardComponent = ({ title, src }) => {
  return (
    <Card>
      <CardImg variant='top' src={src} />
      <CardBody>
        <CardTitle>{title}</CardTitle>
      </CardBody>
      <CardFooter>
        <Link className='btn btn-warning link' to={`https://wa.me/5493364581329/?text=Me gustaria recibir mas informacion sobre: ${title}`}>Consultar</Link>
      </CardFooter>
    </Card>
  )
}

export default CardComponent