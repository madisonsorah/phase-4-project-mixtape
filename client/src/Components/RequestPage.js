import React from 'react'
import RequestCard from './RequestCard'
import NavBar from './NavBar'

function RequestPage({member, setMember, allRequestedPlaylists}) {
    const playlistRequests = allRequestedPlaylists.map((playlistRequest) => (
        <RequestCard playlistRequest={playlistRequest}/>
    ))
    
    return (
        <div>
            <NavBar member={member} setMember={setMember}/>
            {playlistRequests}
        </div>
    )
}
export default RequestPage