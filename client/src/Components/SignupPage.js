import React, { useState } from "react";
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import NavBar from './NavBar'

function SignUp({member, setMember}) {
  const [username, setUsername] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/members", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name,
        last_name,
        username,
        email,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((member) => setMember(member));
      }
    });
    navigate("/account", { replace: true })
  }

  return (
    <div>
      <NavBar member={member} setMember={setMember}/>
      <Form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          autoComplete="off"
          value={first_name}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          autoComplete="off"
          value={last_name}
          onChange={(e) => setLastName(e.target.value)}
        />
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="text"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <Form.Label>Password Confirmation</Form.Label>
        <Form.Control
          type="password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
        <Button type="submit">Sign Up</Button>
      </Form>
    </div>
  );
}

export default SignUp;