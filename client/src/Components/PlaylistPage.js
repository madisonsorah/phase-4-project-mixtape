import React from 'react'
import NavBar from './NavBar'
import PlaylistCard from './PlaylistCard'

function PlaylistPage({member, setMember, allCreatedPlaylists}) {
    const createdPlaylists = allCreatedPlaylists.map((createdPlaylist) => (
        <PlaylistCard createdPlaylist={createdPlaylist}/>
    ))
    return (
    <div>
        <NavBar member={member} setMember={setMember}/>
        {createdPlaylists}
    </div>
    )
}
export default PlaylistPage