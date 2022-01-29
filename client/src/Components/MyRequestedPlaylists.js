import React from 'react'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

function MyRequestedPlaylists({playlistRequest}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"/>
      <Card.Body>
        <Card.Title>Active Request</Card.Title>
        <Card.Text>{playlistRequest.description}</Card.Text>
        <Button variant="primary" onClick={handleDeleteRequest}>Delete</Button>
      </Card.Body>
    </Card>
  )
}

export default MyRequestedPlaylists;