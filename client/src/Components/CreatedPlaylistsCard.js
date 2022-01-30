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
    <div className='playlistCards'>
    <Card className='memberAccountCard' style={{ width: '18rem' }}>
      <Card.Img variant='top' src={createdPlaylist.cover_url}/>
      <Card.Body>
        <Link className='playlistTitle' to={`/playlist/${createdPlaylist.id}`}>{createdPlaylist.title}</Link>
        <p>Creator</p>
        <Link className='playlistDescription' to={`/profile/${playlistCreator.id}`}>{playlistCreator.username}</Link>
        <p className='playlistDescription'>Fulfilled Request</p>
        <p className='playlistDescription'>{createdPlaylist.description}</p>
        <Button className='createdPlaylistButton' variant='primary'><a className='createdPlaylistURL' href={createdPlaylist.playlist_url}>Link to Playlist</a></Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default CreatedPlaylistsCard;