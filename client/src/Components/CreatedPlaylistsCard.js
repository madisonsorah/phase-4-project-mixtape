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
    <Card className='createdPlaylistCard' style={{ width: '18rem' }}>
      <Card.Body>
        <Link className='playlistTitle' to={`/playlist/${createdPlaylist.id}`}>{createdPlaylist.title}</Link>
        <p>Creator: <Link className='playlistCreator' to={`/profile/${playlistCreator.id}`}>{playlistCreator.username}</Link></p>
        <p className='fulfilledRequestP'>Request:</p>
        <p className='playlistDescription'>"{createdPlaylist.description}"</p>
        <Button className='createdPlaylistButton' variant='primary'><a className='createdPlaylistURL' href={createdPlaylist.playlist_url}>Link to Playlist</a></Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default CreatedPlaylistsCard;