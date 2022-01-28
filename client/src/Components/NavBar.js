import React from 'react'
import logo from '../images/logo.png'
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { Container } from 'react-bootstrap'


function NavBar() {
    return(
    <Navbar  id="navbar" expand="md">
    <Container >
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
          <Nav.Link href="/"  >Home</Nav.Link>
        </Nav.Item>
        <Nav.Item className="navpages">
          <Nav.Link href="/playlists" >Playlists</Nav.Link>
        </Nav.Item>
        <Nav.Item className="navpages">
          <Nav.Link href="/requests" >Requests</Nav.Link>
        </Nav.Item>
        <Nav.Item className="navlogin">
          <Nav.Link href="/login" >Log In</Nav.Link>
        </Nav.Item>
        <Nav.Item className="navlogin">
          <Nav.Link href="/signup" >Sign Up</Nav.Link>
        </Nav.Item>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

    )}

export default NavBar