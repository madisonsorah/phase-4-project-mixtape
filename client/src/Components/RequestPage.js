import React from 'react'
import RequestCard from './RequestCard'
import NavBar from './NavBar'

function RequestPage({member, setMember}) {
    return (
        <div>
            <NavBar member={member} setMember={setMember}/>
            <RequestCard/>
        </div>
    )
}
export default RequestPage