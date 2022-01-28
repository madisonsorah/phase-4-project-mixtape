import React from 'react'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function PlaylistCard({playlist}) {

  

    return(
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={playlist.cover_url} />
  <Card.Body>
    <Card.Title>{playlist.title}</Card.Title>
    <Card.Text>
      {playlist.description}
    </Card.Text>
    <Button variant="primary" >Link to Playlist
      <Link to={`/playlists/${playlist.id}`} ></Link>
    </Button>
  </Card.Body>
</Card>
    )
}

export default PlaylistCard