import React, {useState} from 'react';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

function PlaylistRequestsCard({playlistRequest, member}) {
  const navigate = useNavigate();
  const [error, setError] = useState('');

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
    <Card style={{ width: '18rem' }}>
      <Card.Img variant='top'/>
      <Card.Body>
        <Card.Title>Open Request</Card.Title>
        <Card.Text>{playlistRequest.description}</Card.Text>
        <Button onClick={member ? handleLoggedIn : handleNotLoggedIn} variant='primary'>Submit Playlist</Button>
        {error ? (<p>{error}</p>) : null}
      </Card.Body>
    </Card>
    )
}

export default PlaylistRequestsCard;