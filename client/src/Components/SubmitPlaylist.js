import React, {useState} from 'react';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {useNavigate, useParams} from 'react-router-dom';
import NavBar from './NavBar';

function SubmitPlaylist({member, setMember}) {
  const {id} = useParams();
  const [title, setTitle] = useState('');
  const [cover_url, setCoverUrl] = useState('');
  const [playlist_url, setPlaylistUrl] = useState('');
  const navigate = useNavigate();

  function handleSubmitPlaylist(e) {
    e.preventDefault();
    fetch(`/requested_playlists/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
          title,
          cover_url,
          playlist_url,
          creator_id: member.id 
        }),
    })
    .then(() => {
      navigate('/browseplaylists', { replace: true })
    })
  }

  return (
    <div className='submitPlaylistPage'>
      <NavBar member={member} setMember={setMember}/>
      <div className='submitPlaylistFormDiv'>
      <Form className='submitPlaylistForm' onSubmit={handleSubmitPlaylist}>
        <h3 className='submitPlaylistHeader'>Submit a Playlist</h3>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label className="submitLabel">Playlist Title:</Form.Label>
          <Form.Control 
          type='text'
          placeholder='Enter a title for your playlist'
          autoComplete='off'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          />
          <Form.Label className="submitLabel">Playlist Cover:</Form.Label>
          <Form.Control 
          type='text'
          placeholder='Enter a cover image URL for your playlist'
          autoComplete='off'
          value={cover_url}
          onChange={(e) => setCoverUrl(e.target.value)}
          />
          <Form.Label className="submitLabel">Playlist Link:</Form.Label>
          <Form.Control 
          type='text'
          placeholder='Enter URL to your playlist'
          autoComplete='off'
          value={playlist_url}
          onChange={(e) => setPlaylistUrl(e.target.value)}
          />
          <Form.Text className='text-muted'></Form.Text>
        </Form.Group>
        <Button className='submitPlaylistButton' variant='primary' type='submit'>Submit Playlist</Button>
      </Form>
      </div>
      <div className='homepageFooter'></div>
    </div>
  )
}

export default SubmitPlaylist;