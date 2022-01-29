import React from 'react';
import logo from '../images/logo.png';
import {useNavigate} from 'react-router-dom';
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Container} from 'react-bootstrap';


function NavBar({member, setMember}) {
  const navigate = useNavigate();

  function handleLogoutClick() {
    fetch('/logout', { method: 'DELETE' }).then((r) => {
      if (r.ok) {
        setMember(null);
      }
    });
    navigate('/memberlogin', { replace: true });
  }
  
  return (
    <Navbar id='navbar' expand='md'>
        {member ? (
          <Container>
          <Navbar.Brand href='/home'>
            <img
            src={logo}
            id='logo'
            className= 'd-inline-block align-top'
            alt='logo'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav'/>
          <Navbar.Collapse id='basic-navbar-nav'>
          <Nav id='navalign' className='navbarml-auto'>
            <Nav.Item className='navpages'>
              <Nav.Link href='/home'>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item className='navpages'>
              <Nav.Link href='/browseplaylists' >Browse Playlists</Nav.Link>
            </Nav.Item>
            <Nav.Item className='navpages'>
              <Nav.Link href='/browserequests'>Browse Requests</Nav.Link>
            </Nav.Item>
            <Nav.Item className='navlogin'>
              <Nav.Link href='/account'>Account</Nav.Link>
            </Nav.Item>
            <Nav.Item className='navlogin'>
              <button className='logoutButton' onClick={handleLogoutClick}>Logout</button>
            </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
        ) : (
          <Container>
          <Navbar.Brand href='/home'>
            <img
            src={logo}
            id='logo'
            className= 'd-inline-block align-top'
            alt='logo'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav'/>
          <Navbar.Collapse id='basic-navbar-nav'>
          <Nav id='navalign' className='navbarml-auto'>
            <Nav.Item className='navpages'>
              <Nav.Link href='/home'>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item className='navpages'>
              <Nav.Link href='/browseplaylists' >Browse Playlists</Nav.Link>
            </Nav.Item>
            <Nav.Item className='navpages'>
              <Nav.Link href='/browserequests'>Browse Requests</Nav.Link>
            </Nav.Item>
            <Nav.Item className='navlogin'>
              <Nav.Link href='/memberlogin' >Log In</Nav.Link>
            </Nav.Item>
            <Nav.Item className='navlogin'>
              <Nav.Link href='/membersignup' >Sign Up</Nav.Link>
            </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
        )}
</Navbar>
)}

export default NavBar;