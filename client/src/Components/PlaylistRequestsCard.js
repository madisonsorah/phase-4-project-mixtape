import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

function PlaylistRequestsCard({playlistRequest, member}) {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [playlistRequester, setPlaylistRequester] = useState([]);

  useEffect(() => {
    fetch(`/members/${playlistRequest.requester_id}`)
    .then((response) => response.json())
    .then((requesterData) => setPlaylistRequester(requesterData))
}, [playlistRequest]) 

  function handleLoggedIn() {
    if (member.id !== playlistRequest.requester_id) {
      navigate(`/submitplaylist/${playlistRequest.id}`, { replace: true });
    } else {
      setError('You cannot submit a playlist for your own request.');
    }
  }

  function handleNotLoggedIn() {
    navigate('/memberlogin', { replace: true })
  }
  
  return (
    <div className='playlistCards'>
    <Card className='memberAccountCard' style={{ width: '18rem' }}>
      <Card.Img variant='top'/>
      <Card.Body>
        <Card.Title className='playlistRequestTitle'>Open Request</Card.Title>
        <p>Requested by: <Link className='playlistRequester' to={`/profile/${playlistRequester.id}`}>{playlistRequester.username}</Link></p>
        <Card.Text className='playlistDescription'>"{playlistRequest.description}"</Card.Text>
        <Button className='requestedPlaylistButton' onClick={member ? handleLoggedIn : handleNotLoggedIn} variant='primary'>Submit Playlist</Button>
        {error ? (<p className='errorMessage'>{error}</p>) : null}
      </Card.Body>
    </Card>
    </div>
    )
}

export default PlaylistRequestsCard;