import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import NavBar from './NavBar';

function MemberProfile({member, setMember}) {
    let {id} = useParams();
    const navigate = useNavigate();
    const [createdPlaylists, setCreatedPlaylists] = useState([]);
    const [receivedPlaylists, setReceivedPlaylists] = useState([]);
    const [requestedPlaylists, setRequestedPlaylists] = useState([]);
    const [memberProfile, setMemberProfile] = useState([]);
    const [error, setError] = useState('');

  function handleLoggedIn() {
    console.log(member.id)
    console.log(id)
    if (member.id != id) {
      navigate(`/submitplaylist/${id}`, { replace: true });
    } else {
      setError('You cannot submit a playlist for your own request.');
    }
  }

  function handleNotLoggedIn() {
    navigate('/memberlogin', { replace: true })
  }

    useEffect (() => {
        fetch(`/members/${id}`)
            .then((r) => r.json())
            .then ((memberProfileData) => setMemberProfile(memberProfileData))
        
        fetch(`/members/${id}/created_playlists`)
          .then((r) => r.json())
          .then((createdPlaylistsData) => setCreatedPlaylists(createdPlaylistsData))
      
        fetch(`/members/${id}/received_playlists`)
          .then((r) => r.json())
          .then((receivedPlaylistsData) => setReceivedPlaylists(receivedPlaylistsData))
      
        fetch(`/members/${id}/requested_playlists`)
          .then((r) => r.json())
          .then((requestedPlaylistsData) => setRequestedPlaylists(requestedPlaylistsData))
        }, [id]);

        
        const displayedMemberProfile = (
            <div key={memberProfile.id}>
              <img className="profileAvatar" src={memberProfile.avatar_url}/>
              <h1 className='playlistDescription'>{memberProfile.username}</h1>
              <h3 className='playlistDescription'>{memberProfile.first_name} {memberProfile.last_name}</h3>
              <p className='playlistDescription'>{memberProfile.bio}</p>
            </div>
          );
        
        const displayedCreatedPlaylists = createdPlaylists.map((createdPlaylist) => (
          <div className='playlistCards'>
            <Card className='createdPlaylistCard' key={createdPlaylist.id} style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title className='playlistTitle'>{createdPlaylist.title}</Card.Title>
                <Card.Text><p className='fulfilledRequestP'>Request:</p>"{createdPlaylist.description}"</Card.Text>
                <a className='createdPlaylistURL' href={createdPlaylist.playlist_url}>Link to Playlist</a>
              </Card.Body>
            </Card>
            </div>
          ));
        
          const displayedReceivedPlaylists = receivedPlaylists.map((receivedPlaylist) => (
            <div className='playlistCards'>
            <Card className='createdPlaylistCard' key={receivedPlaylist.id} style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title className='playlistTitle'>{receivedPlaylist.title}</Card.Title>
                <Card.Text><p className='fulfilledRequestP'>Request:</p>"{receivedPlaylist.description}"</Card.Text>
                <a className='receivedPlaylistURL' href={receivedPlaylist.playlist_url}>Link to Playlist</a>
              </Card.Body>
            </Card>
            </div>
          ));
        
          const displayedRequestedPlaylists = requestedPlaylists.map((requestedPlaylist) => (
            <div className='playlistCards'>
            <Card className='createdPlaylistCard' key={requestedPlaylist.id} style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title className='playlistTitle'>Open Request</Card.Title>
                <Card.Text>"{requestedPlaylist.description}"</Card.Text>
                <Button className='createdPlaylistButton' onClick={member ? handleLoggedIn : handleNotLoggedIn} variant='primary'>Submit Playlist</Button>
                {error ? (<p>{error}</p>) : null}
              </Card.Body>
            </Card>
            </div>
          ));

    return (
        <div className='homePageDiv'> 
            <NavBar member={member} setMember={setMember} />
            <div className='accountPageFloatContainer'>
              <div className='memberPageFloatLeft'>
                  {displayedMemberProfile}
              </div>
              <div className='memberPageFloatRight'>
                <div className='accountPlaylists'>
                  <div className='accountPlaylistContainer'>
                    <h4 className='homePageh2'>Created Playlists</h4>
                    {displayedCreatedPlaylists}
                  </div>
                  <div className='accountPlaylistContainer'>
                    <h4 className='homePageh2'>Received Playlists</h4>
                    {displayedReceivedPlaylists}
                  </div>
                  <div className='accountPlaylistContainer'>
                    <h4 className='homePageh2'>Open Playlist Requests</h4>
                    {displayedRequestedPlaylists}
                </div>
              </div>
            </div>
        </div>
      </div>
    )
}

export default MemberProfile;