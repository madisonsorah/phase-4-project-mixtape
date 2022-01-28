import React from 'react'
import note from '../images/note.jpg'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

function PlaylistCard() {
    return(
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={note} />
  <Card.Body>
    <Card.Title>Good Vibes</Card.Title>
    <Card.Text>
      A quick mockup for potential playlist cards.
    </Card.Text>
    <Button variant="primary">Link to Playlist</Button>
  </Card.Body>
</Card>
    )
}

export default PlaylistCard