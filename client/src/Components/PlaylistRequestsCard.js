import React, {useState} from 'react'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import SubmitPlaylist from './SubmitPlaylist'

function PlaylistRequestsCard({playlistRequest, member}) {
const history = useHistory();
const [error, setError] = useState("");
const [currentPlaylistRequest, setCurrentPlaylistRequest] = useState([]);

function handleLoggedIn() {
  if (member.id != playlistRequest.requester_id) {
    fetch(`/requested_playlists/${playlistRequest.id}`)
      .then((r) => r.json())
      .then ((playlistRequest) => setCurrentPlaylistRequest(playlistRequest))

    currentPlaylistRequest.map((request) => (
      <SubmitPlaylist key={request.id} request={request}/>))

    history.push("/submitplaylist");

  } else {
    setError("You cannot submit a playlist for your own request.")
  }
}

function handleNotLoggedIn() {
  history.push("/memberlogin");
}
  
  return (
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"/>
      <Card.Body>
        <Card.Title>Open Request</Card.Title>
        <Card.Text>{playlistRequest.description}</Card.Text>
        <Button onClick={member ? handleLoggedIn : handleNotLoggedIn} variant="primary">Submit Playlist</Button>
        {error ? (<p>{error}</p>) : null}
      </Card.Body>
      </Card>
  )
  }

export default PlaylistRequestsCard;