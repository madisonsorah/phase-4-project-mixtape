import React from 'react'
import NavBar from './NavBar'
import PlaylistCard from './PlaylistCard'

function PlaylistPage({member, setMember}) {
    return (
    <div>
        <NavBar member={member} setMember={setMember}/>
        <PlaylistCard />
    </div>
    )
}
export default PlaylistPage