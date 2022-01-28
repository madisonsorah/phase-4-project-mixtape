import React from 'react'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'


function LoginPage () {
    return (
        
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Log in with your email</Form.Label>
    <Form.Control type="email" placeholder="Email" />
    <Form.Text className="text-muted">
      
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Enter Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Continue
  </Button>
</Form>
    )
}
export default LoginPage