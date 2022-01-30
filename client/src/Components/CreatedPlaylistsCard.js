import React, {useState, useEffect} from 'react';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';

function CreatedPlaylistsCard({createdPlaylist}) {
  const [playlistCreator, setPlaylistCreator] = useState([]);

  useEffect(() => {
    fetch(`/members/${createdPlaylist.creator_id}`)
    .then((response) => response.json())
    .then((creatorData) => setPlaylistCreator(creatorData))
}, [createdPlaylist]) 
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src={createdPlaylist.cover_url}/>
      <Card.Body>
        <Link to={`/playlist/${createdPlaylist.id}`}>{createdPlaylist.title}</Link>
        <p>Creator</p>
        <Link to={`/profile/${playlistCreator.id}`}>{playlistCreator.username}</Link>
        <p>Fulfilled Request</p>
        <p>{createdPlaylist.description}</p>
        <Button variant='primary'><a href={createdPlaylist.playlist_url}>Link to Playlist</a></Button>
      </Card.Body>
    </Card>
  )
}

export default CreatedPlaylistsCard;