import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

function LoginPage ({setMember}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://127.0.0.1:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((member) => setMember(member));
      }
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username:</Form.Label>
        <Form.Control 
        type="text"
        placeholder="Enter Username"
        autoComplete="off"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control 
        type="password"
        placeholder="Enter Password"
        autoComplete="off"
        value={password}
        onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">Submit</Button>
    </Form>
  )
}
export default LoginPage