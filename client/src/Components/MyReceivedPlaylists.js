import React from 'react'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

function MyReceivedPlaylists({receivedPlaylist}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={receivedPlaylist.cover_url}/>
      <Card.Body>
        <Card.Title>{receivedPlaylist.title}</Card.Title>
        <Card.Text>{receivedPlaylist.description}</Card.Text>
        <Button variant="primary"><a href={receivedPlaylist.playlist_url}>Link to Playlist</a></Button>
      </Card.Body>
    </Card>
  )
}

export default MyReceivedPlaylists;