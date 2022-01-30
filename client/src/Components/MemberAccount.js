import React, {useState, useEffect} from 'react';
import NavBar from './NavBar';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function MemberAccount({member, setMember}) {
  const [myCreatedPlaylists, setMyCreatedPlaylists] = useState([]);
  const [myReceivedPlaylists, setMyReceivedPlaylists] = useState([]);
  const [myRequestedPlaylists, setMyRequestedPlaylists] = useState([]);

  useEffect (() => {
    if (member) {
      fetch(`/members/${member.id}/created_playlists`)
      .then((r) => r.json())
      .then((createdPlaylistsData) => setMyCreatedPlaylists(createdPlaylistsData))
  
    fetch(`/members/${member.id}/received_playlists`)
      .then((r) => r.json())
      .then((receivedPlaylistsData) => setMyReceivedPlaylists(receivedPlaylistsData))
  
    fetch(`/members/${member.id}/requested_playlists`)
      .then((r) => r.json())
      .then((requestedPlaylistsData) => setMyRequestedPlaylists(requestedPlaylistsData))
    }
  }, [member]);

  function handleDeleteRequest(id) {
    let updatedPlaylistRequests = myRequestedPlaylists.filter((playlistRequest) => playlistRequest.id !== id)
    setMyRequestedPlaylists(updatedPlaylistRequests);
    const config = {
      method: 'DELETE',
    }
    fetch(`/requested_playlists/${id}`, config);
  };

  const createdPlaylists = myCreatedPlaylists.map((createdPlaylist) => (
    <div className='playlistCards'>
    <Card className='memberAccountCard' key={createdPlaylist.id} style={{ width: '18rem' }}>
      <Card.Img variant='top' src={createdPlaylist.cover_url}/>
      <Card.Body>
        <Card.Title>{createdPlaylist.title}</Card.Title>
        <Card.Text><p className='fulfilledRequestP'>Fulfilled Request</p>"{createdPlaylist.description}"</Card.Text>
        <a className='createdPlaylistURL' href={createdPlaylist.playlist_url}>Link to Playlist</a>
      </Card.Body>
    </Card>
    </div>
  ));

  const receivedPlaylists = myReceivedPlaylists.map((receivedPlaylist) => (
    <div className='playlistCards'>
    <Card className='memberAccountCard' key={receivedPlaylist.id} style={{ width: '18rem' }}>
      <Card.Img variant='top' src={receivedPlaylist.cover_url}/>
      <Card.Body>
        <Card.Title>{receivedPlaylist.title}</Card.Title>
        <Card.Text><p className='fulfilledRequestP'>Fulfilled Request</p>"{receivedPlaylist.description}"</Card.Text>
        <a className='receivedPlaylistURL' href={receivedPlaylist.playlist_url}>Link to Playlist</a>
      </Card.Body>
    </Card>
    </div>
  ));

  const requestedPlaylists = myRequestedPlaylists.map((requestedPlaylist) => (
    <div className='playlistCards'>
    <Card className='memberAccountCard' key={requestedPlaylist.id} style={{ width: '18rem' }}>
      <Card.Img variant='top'/>
      <Card.Body>
        <Card.Title>Active Request</Card.Title>
        <Card.Text>"{requestedPlaylist.description}"</Card.Text>
        <Button variant='primary' onClick={() => handleDeleteRequest(requestedPlaylist.id)}>Delete</Button>
      </Card.Body>
    </Card>
    </div>
  ));

    return (
        <div className='homePageDiv'>
        <NavBar member={member} setMember={setMember}/>
         {member ? (
           <div>
            <div className='welcomeDiv'>
              <h1 className='accountPageWelcomeHeader'>Hello, {member.first_name}!</h1>
              <p className='accountPageP'>{member.username}</p>
              <p className='accountPageP'>{member.email}</p>
              <Link to={`/profile/${member.id}`}>My Profile Page</Link>
            </div>
            <div className="accountPlaylists">
            <div className='homePageCreatedContainer'>
              <div className='playlistContainer'>
                <h4 className='homePageh2'>Created Playlists</h4>
                {createdPlaylists}
              </div>
            </div>
            <div className='homePageCreatedContainer'>
              <div className='playlistContainer'>
                <h4 className='homePageh2'>Received Playlists</h4>
                {receivedPlaylists}
              </div>
            </div>
            <div className='homePageCreatedContainer'>
              <div className='playlistContainer'>
                <h4 className='homePageh2'>Open Playlist Requests</h4>
                {requestedPlaylists}
              </div>
            </div>
            </div>
            </div>
          ) : (
            <h1>Please Login or Sign Up</h1>
          )}
        </div>
    )
  }
  
  export default MemberAccount;