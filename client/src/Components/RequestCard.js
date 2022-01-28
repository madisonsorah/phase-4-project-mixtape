import React from 'react'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function RequestCard({request}) {
    return(
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={request.cover_url} />
  <Card.Body>
    <Card.Title>{request.title}</Card.Title>
    <Card.Text>
      {request.description}
    </Card.Text>
    <Button variant="primary" >Link to Request
    <Link to={`playlists/${request.id}`}></Link>
    </Button>
  </Card.Body>
</Card>
    )
}

export default RequestCard