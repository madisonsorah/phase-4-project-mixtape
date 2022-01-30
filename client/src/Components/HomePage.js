import React, {useEffect, useState} from 'react';
import NavBar from './NavBar';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';


function HomePage({member, setMember}) {
  const [allCreatedPlaylists, setAllCreatedPlaylists] = useState([]);
  const [allPlaylistRequests, setAllPlaylistRequests] = useState([]);

    useEffect(() => {
        fetch('/created_playlists')
        .then((r) => r.json())
        .then((createdPlaylistsData) => setAllCreatedPlaylists(createdPlaylistsData))
      }, []);

    useEffect(() => {
        fetch('/requested_playlists')
        .then((r) => r.json())
        .then((requestedPlaylistsData) => setAllPlaylistRequests(requestedPlaylistsData))
      }, []);

      const createdPlaylists = allCreatedPlaylists.map((createdPlaylist) => (
        <Card className='memberAccountCard' key={createdPlaylist.id} style={{ width: '18rem' }}>
          <Card.Img variant='top' src={createdPlaylist.cover_url}/>
          <Card.Body>
            <Link to={`/playlist/${createdPlaylist.id}`}>{createdPlaylist.title}</Link>
            <Card.Text><p className='fulfilledRequestP'>Fulfilled Request</p>{createdPlaylist.description}</Card.Text>
            <a className='createdPlaylistURL' href={createdPlaylist.playlist_url}>Link to Playlist</a>
          </Card.Body>
        </Card>
      ));


      const requestedPlaylists = allPlaylistRequests.map((requestedPlaylist) => (
        <Card className='memberAccountCard' key={requestedPlaylist.id} style={{ width: '18rem' }}>
          <Card.Img variant='top'/>
          <Card.Body>
            <Card.Title>Active Request</Card.Title>
            <Card.Text>{requestedPlaylist.description}</Card.Text>
          </Card.Body>
        </Card>
      ));
  
  return (
    <div className='homePageDiv'>
      <NavBar member={member} setMember={setMember}/>
        {member ? (
          <div>
            <h1>Welcome back to Mixtape, {member.username}!</h1>
            <div>
              <h2>Recently Created Playlists</h2>
              {createdPlaylists}
            </div>
            <div>Recently Submitted Requests</div>
              {requestedPlaylists}
          </div>
        ) : (
          <div>
            <h1>Welcome to Mixtape</h1>
            <Link to='/login'>Login</Link> | <Link to='/signup'>Sign Up</Link>
            <div>
              <h2>Recently Created Playlists</h2>
              {createdPlaylists}
            </div>
            <div>Recently Submitted Requests</div>
              {requestedPlaylists}
          </div>
        )}
    </div>
  )
}
  
  export default HomePage;