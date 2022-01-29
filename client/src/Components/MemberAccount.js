import React, {useState, useEffect} from 'react';
import NavBar from './NavBar';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

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
    <Card className='memberAccountCard' key={createdPlaylist.id} style={{ width: '18rem' }}>
      <Card.Img variant='top' src={createdPlaylist.cover_url}/>
      <Card.Body>
        <Card.Title>{createdPlaylist.title}</Card.Title>
        <Card.Text><p className='fulfilledRequestP'>Fulfilled Request</p>{createdPlaylist.description}</Card.Text>
        <a className='createdPlaylistURL' href={createdPlaylist.playlist_url}>Link to Playlist</a>
      </Card.Body>
    </Card>
  ));

  const receivedPlaylists = myReceivedPlaylists.map((receivedPlaylist) => (
    <Card className='memberAccountCard' key={receivedPlaylist.id} style={{ width: '18rem' }}>
      <Card.Img variant='top' src={receivedPlaylist.cover_url}/>
      <Card.Body>
        <Card.Title>{receivedPlaylist.title}</Card.Title>
        <Card.Text><p className='fulfilledRequestP'>Fulfilled Request</p>{receivedPlaylist.description}</Card.Text>
        <a className='receivedPlaylistURL' href={receivedPlaylist.playlist_url}>Link to Playlist</a>
      </Card.Body>
    </Card>
  ));

  const requestedPlaylists = myRequestedPlaylists.map((requestedPlaylist) => (
    <Card className='memberAccountCard' key={requestedPlaylist.id} style={{ width: '18rem' }}>
      <Card.Img variant='top'/>
      <Card.Body>
        <Card.Title>Active Request</Card.Title>
        <Card.Text>{requestedPlaylist.description}</Card.Text>
        <Button variant='primary' onClick={() => handleDeleteRequest(requestedPlaylist.id)}>Delete</Button>
      </Card.Body>
    </Card>
  ));

    return (
        <div className='homePageDiv'>
        <NavBar member={member} setMember={setMember}/>
         {member ? (
           <div>
            <div>
              <h1>Hello, {member.first_name}!</h1>
              <img alt='member avatar' src={member.avatar_url}></img>
              <p>{member.username}</p>
              <p>{member.email}</p>
            </div>
            <div>
              <h1>Created Playlists</h1>
              {createdPlaylists}
            </div>
            <div>
              <h1>Received Playlists</h1>
              {receivedPlaylists}
            </div>
            <div>
              <h1>Open Playlist Requests</h1>
              {requestedPlaylists}
            </div>
            </div>
          ) : (
            <h1>Please Login or Sign Up</h1>
          )}
        </div>
    )
  }
  
  export default MemberAccount;