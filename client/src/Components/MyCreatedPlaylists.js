import React from 'react'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

function MyCreatedPlaylists({createdPlaylist}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={createdPlaylist.cover_url}/>
      <Card.Body>
        <Card.Title>{createdPlaylist.title}</Card.Title>
        <Card.Text>{createdPlaylist.description}</Card.Text>
        <Button variant="primary"><a href={createdPlaylist.playlist_url}>Link to Playlist</a></Button>
      </Card.Body>
    </Card>
  )
}

export default MyCreatedPlaylists;