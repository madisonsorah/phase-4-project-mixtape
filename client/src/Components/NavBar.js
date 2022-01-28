import React from 'react'
import logo from '../images/logo.png'
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Button } from 'react-bootstrap'


function NavBar({member, setMember}) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setMember(null);
      }
    });
  }
  
  return (
    <Navbar id="navbar" expand="md">
    <Container>
    <Navbar.Brand href="/">
      <img
      src={logo}
      id="logo"
      className= "d-inline-block align-top"
      alt="logo"
      />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav id="navalign" className="navbarml-auto">
        <Nav.Item className="navpages">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item className="navpages">
          <Nav.Link href="/playlists" >Playlists</Nav.Link>
        </Nav.Item>
        <Nav.Item className="navpages">
          <Nav.Link href="/requests">Requests</Nav.Link>
        </Nav.Item>
      {member ? (
        <Nav.Item>
          <Nav.Item>
            <h1>Welcome {member.username}!</h1>
          </Nav.Item>
          <Nav.Item>
            <Button onClick={handleLogoutClick}>Logout</Button>
          </Nav.Item>
        </Nav.Item>
      ) : (
        <Nav.Item>
          <Nav.Item className="navlogin">
            <Nav.Link href="/memberlogin" >Log In</Nav.Link>
          </Nav.Item>
          <Nav.Item className="navlogin">
            <Nav.Link href="/membersignup" >Sign Up</Nav.Link>
          </Nav.Item>
        </Nav.Item>
      )}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

    )}

export default NavBar