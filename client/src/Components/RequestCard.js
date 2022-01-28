import React from 'react'
import note from '../images/RAd1s5.jpg'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

function RequestCard() {
    return(
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={note} />
  <Card.Body>
    <Card.Title>Request Card</Card.Title>
    <Card.Text>
      A quick mockup for potential request cards.
    </Card.Text>
    <Button variant="primary">Link to Request</Button>
  </Card.Body>
</Card>
    )
}

export default RequestCard