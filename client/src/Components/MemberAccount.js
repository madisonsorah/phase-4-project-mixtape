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
    <Card className='createdPlaylistCard' style={{ width: '18rem' }}>
      <Card.Body>
        <Link className='playlistTitle' to={`/playlist/${createdPlaylist.id}`}>{createdPlaylist.title}</Link>
        <p className='fulfilledRequestP'>Request:</p>
        <p className='playlistDescription'>"{createdPlaylist.description}"</p>
        <Button className='createdPlaylistButton' variant='primary'><a className='createdPlaylistURL' href={createdPlaylist.playlist_url}>Link to Playlist</a></Button>
      </Card.Body>
    </Card>
    </div>
  ));

  const receivedPlaylists = myReceivedPlaylists.map((receivedPlaylist) => (
    <div className='playlistCards'>
    <Card className='createdPlaylistCard' style={{ width: '18rem' }}>
      <Card.Body>
        <Link className='playlistTitle' to={`/playlist/${receivedPlaylist.id}`}>{receivedPlaylist.title}</Link>
        <p className='fulfilledRequestP'>Request:</p>
        <p className='playlistDescription'>"{receivedPlaylist.description}"</p>
        <Button className='createdPlaylistButton' variant='primary'><a className='createdPlaylistURL' href={receivedPlaylist.playlist_url}>Link to Playlist</a></Button>
      </Card.Body>
    </Card>
    </div>
  ));

  const requestedPlaylists = myRequestedPlaylists.map((requestedPlaylist) => (
    <div className='playlistCards'>
    <Card key={requestedPlaylist.id} className='memberAccountCard' style={{ width: '18rem' }}>
      <Card.Img variant='top'/>
      <Card.Body>
        <Card.Title className='playlistRequestTitle'>Open Request</Card.Title>
        <Card.Text className='playlistDescription'>"{requestedPlaylist.description}"</Card.Text>
        <Button className='requestedPlaylistButton' variant='primary' onClick={() => handleDeleteRequest(requestedPlaylist.id)}>Delete</Button>
      </Card.Body>
    </Card>
    </div>
  ));

    return (
        <div className='homePageDiv'>
        <NavBar member={member} setMember={setMember}/>
         {member ? (
           <div>
            <div className='accountWelcomeDiv'>
              <h1 className='homePageWelcomeHeader'>Welcome back, {member.first_name}.</h1>
            </div>
            <div className='accountPageFloatContainer'>
              <div className='memberPageFloatLeft'>
                <h4>Account Details</h4>
                <p className='playlistDescription'>{member.username}</p>
                <p className='playlistDescription'>{member.email}</p>
                <p className='playlistDescription'>{member.bio}</p>
                <Link className='submitRequest' to={`/profile/${member.id}`}>My Profile Page</Link>
              </div>
              <div className='memberPageFloatRight'>
                <div className='accountPlaylists'>
                    <div className='accountPlaylistContainer'>
                      <h4 className='homePageh2'>Created Playlists</h4>
                        {createdPlaylists}
                    </div>
                    <div className='accountPlaylistContainer'>
                      <h4 className='homePageh2'>Received Playlists</h4>
                        {receivedPlaylists}
                  </div>
                    <div className='accountPlaylistContainer'>
                      <h4 className='homePageh2'>Open Playlist Requests</h4>
                        {requestedPlaylists}
                  </div>
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