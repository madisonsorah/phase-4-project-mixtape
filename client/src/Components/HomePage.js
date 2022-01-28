import React from 'react'

function HomePage({member}) {
    if (member) {
      return <h1>Welcome, {member.username}!</h1>;
    } else {
      return <h1>Please Login or Sign Up</h1>;
    }
  }
  
  export default HomePage;