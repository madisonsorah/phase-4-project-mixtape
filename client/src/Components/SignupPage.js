import React, {useState} from 'react';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import NavBar from './NavBar';

function SignUp({member, setMember}) {
  const [username, setUsername] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch('/members', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
        navigate('/account', { replace: true })
      } else {
        setErrorMessage('An account with these credentials already exists.')
      }
    });
  }

  return (
    <div className='signUpPage'>
      <NavBar member={member} setMember={setMember}/>
      <div className='signUpFormDiv'>
      <Form className='signUpForm' onSubmit={handleSubmit}>
        <h3 className='signUpHeader'>Sign Up</h3>
        <Form.Label className='signUpLabel'>First Name</Form.Label>
        <Form.Control
          type='text'
          autoComplete='off'
          value={first_name}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Form.Label className='signUpLabel'>Last Name</Form.Label>
        <Form.Control
          type='text'
          autoComplete='off'
          value={last_name}
          onChange={(e) => setLastName(e.target.value)}
        />
        <Form.Label className='signUpLabel'>Email</Form.Label>
        <Form.Control
          type='text'
          autoComplete='off'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Label className='signUpLabel'>Username</Form.Label>
        <Form.Control
          type='text'
          autoComplete='off'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Form.Label className='signUpLabel'>Password</Form.Label>
        <Form.Control
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete='current-password'
        />
        <Form.Label className='signUpLabel'>Password Confirmation</Form.Label>
        <Form.Control
          type='password'
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete='current-password'
        />
        <Button className='signUpButton' type='submit'>Sign Up</Button>
        {errorMessage ? (<p className='errorMessage'>{errorMessage}</p>) : null}
      </Form>
      </div>
    </div>
  );
}

export default SignUp;