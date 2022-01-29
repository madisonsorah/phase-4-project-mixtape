import React from 'react';
import NavBar from './NavBar';

function HomePage({member, setMember}) {
  
  return (
    <div className='homePageDiv'>
      <NavBar member={member} setMember={setMember}/>
        {member ? (
          <h1>Welcome, {member.username}!</h1>
        ) : (
          <h1>Please Login or Sign Up</h1>
        )}
    </div>
  )
}
  
  export default HomePage;