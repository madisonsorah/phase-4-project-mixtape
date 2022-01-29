import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import NavBar from './NavBar'

function SubmitRequest({member, setMember}) {
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  function handleSubmitRequest(e) {
    e.preventDefault();
    fetch("/requested_playlists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
          description,
          requester_id: member.id 
        }),
    });
    navigate("/browserequests", { replace: true })
  }

  return (
    <div>
      <NavBar member={member} setMember={setMember}/>
      <Form onSubmit={handleSubmitRequest}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Playlist Request:</Form.Label>
          <Form.Control 
          type="text"
          placeholder="Enter a description for your playlist request"
          autoComplete="off"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">Request Playlist</Button>
      </Form>
    </div>
  )
}
export default SubmitRequest;