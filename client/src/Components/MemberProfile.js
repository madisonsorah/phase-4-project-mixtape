import React from 'react'
import NavBar from './NavBar'

function MemberPage({member, setMember}) {
    return (
        <div>
        <NavBar member={member} setMember={setMember}/>
         {member ? (
            <h1>Welcome, {member.username}!</h1>
          ) : (
            <h1>Please Login or Sign Up</h1>
          )}
        </div>
    )
  }
  
  export default MemberPage;