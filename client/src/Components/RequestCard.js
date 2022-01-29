import React from 'react'
import note from '../images/RAd1s5.jpg'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

function RequestCard({playlistRequest}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={note}/>
      <Card.Body>
        <Card.Title>Open Request</Card.Title>
        <Card.Text>{playlistRequest.description}</Card.Text>
        <Button variant="primary">Submit created playlist</Button>
      </Card.Body>
    </Card>
  )
}

export default RequestCard