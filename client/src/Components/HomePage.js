import React, {useEffect, useState} from 'react';
import NavBar from './NavBar';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
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
        <div className='playlistCards'>
          <Card className='memberAccountCard' style={{ width: '18rem' }}>
          <Card.Body>
            <Link className='playlistTitle' to={`/playlist/${createdPlaylist.id}`}>{createdPlaylist.title}</Link>
            <p className='playlistDescription'>Fulfilled Request</p>
            <p className='playlistDescription'>{createdPlaylist.description}</p>
            <Button className='createdPlaylistButton' variant='primary'><a className='createdPlaylistURL' href={createdPlaylist.playlist_url}>Link to Playlist</a></Button>
          </Card.Body>
        </Card>
        </div>
      ));


      const requestedPlaylists = allPlaylistRequests.map((requestedPlaylist) => (
        <div className='playlistCards'>
        <Card className='memberAccountCard' key={requestedPlaylist.id} style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title className='playlistTitle'>Active Request</Card.Title>
            <Card.Text className='playlistDescription'>{requestedPlaylist.description}</Card.Text>
          </Card.Body>
        </Card>
        </div>
      ));
  
  return (
    <div className='homePage'>
      <NavBar member={member} setMember={setMember}/>
        {member ? (
          <div className='homePageFloatContainer'>
            <div className='welcomeDiv1'>
            <h1 className='homePageWelcomeHeader'>Welcome back to MixTape, <Link className="welcomeUsername" to="/account">{member.username}</Link>!</h1>
            </div>
            <div className='homePageCreatedContainer'>
              <div className='playlistContainer'>
              <h4 className='homePageh2'>Recently Created Playlists</h4>
              {createdPlaylists}
              </div>
            </div>
            <div className='homePageRequestedContainer'>
              <div className='playlistContainer'>
              <h4 className='homePageh2'>Recently Submitted Requests</h4>
              {requestedPlaylists}
              </div>
            </div>
            <div className='homepageFooter'></div>
          </div>
        ) : (
          <div className='homePageFloatContainer'>
            <div className='welcomeDiv'>
            <h1 className='homePageWelcomeHeader2'>Welcome to MixTape!</h1>
            <h6 className='joinCommunity'>Join our local community of audio lovers and share personalized playlists.</h6>
            <div>
            <Link className="welcomeUsername2" to='/login'>Login</Link>
            </div>
            <div>
            <Link className="welcomeUsername2" to='/signup'>Sign Up</Link>
            </div>  
            </div>
            <div>
              <div className='playlistContainer'>
              <h4 className='homePageh4'>Recently Created Playlists</h4>
              {createdPlaylists}
              </div>
            </div>
            <div>
              <div className='requestContainer'>
              <h4 className='homePageh4'>Recently Submitted Requests</h4>
              {requestedPlaylists}
              </div>
            </div>
            <div className='homepageFooter'></div>
          </div>
        )}
    </div>
  )
}
  
  export default HomePage;