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
              <img src={memberProfile.avatar_url}/>
              <h1>{memberProfile.username}</h1>
              <h3>{memberProfile.first_name} {memberProfile.last_name}</h3>
              <p>{memberProfile.bio}</p>
            </div>
          );
        
        const displayedCreatedPlaylists = createdPlaylists.map((createdPlaylist) => (
            <Card className='memberAccountCard' key={createdPlaylist.id} style={{ width: '18rem' }}>
              <Card.Img variant='top' src={createdPlaylist.cover_url}/>
              <Card.Body>
                <Card.Title>{createdPlaylist.title}</Card.Title>
                <Card.Text><p className='fulfilledRequestP'>Fulfilled Request</p>{createdPlaylist.description}</Card.Text>
                <a className='createdPlaylistURL' href={createdPlaylist.playlist_url}>Link to Playlist</a>
              </Card.Body>
            </Card>
          ));
        
          const displayedReceivedPlaylists = receivedPlaylists.map((receivedPlaylist) => (
            <Card className='memberAccountCard' key={receivedPlaylist.id} style={{ width: '18rem' }}>
              <Card.Img variant='top' src={receivedPlaylist.cover_url}/>
              <Card.Body>
                <Card.Title>{receivedPlaylist.title}</Card.Title>
                <Card.Text><p className='fulfilledRequestP'>Fulfilled Request</p>{receivedPlaylist.description}</Card.Text>
                <a className='receivedPlaylistURL' href={receivedPlaylist.playlist_url}>Link to Playlist</a>
              </Card.Body>
            </Card>
          ));
        
          const displayedRequestedPlaylists = requestedPlaylists.map((requestedPlaylist) => (
            <Card className='memberAccountCard' key={requestedPlaylist.id} style={{ width: '18rem' }}>
              <Card.Img variant='top'/>
              <Card.Body>
                <Card.Title>Active Request</Card.Title>
                <Card.Text>{requestedPlaylist.description}</Card.Text>
                <Button onClick={member ? handleLoggedIn : handleNotLoggedIn} variant='primary'>Submit Playlist</Button>
                {error ? (<p>{error}</p>) : null}
              </Card.Body>
            </Card>
          ));

    return (
        <div> 
            <NavBar member={member} setMember={setMember} />
            <div className="memberPageFloatContainer">
              <div className="memberPageFloatLeft">
                  {displayedMemberProfile}
              </div>
              <div className="memberPageFloatRight">
                <div>
                    <h1>Created Playlists</h1>
                    {displayedCreatedPlaylists}
                </div>
                <div>
                    <h1>Received Playlists</h1>
                    {displayedReceivedPlaylists}
                </div>
                <div>
                    <h1>Open Playlist Requests</h1>
                    {displayedRequestedPlaylists}
                </div>
              </div>
        </div>
      </div>
    )
}

export default MemberProfile;