import React, {useState} from 'react'
import NavBar from './NavBar'
import PlaylistCard from './PlaylistCard'
import SearchBar from './SearchBar'


function PlaylistPage ({member, setMember, allCreatedPlaylists}) {
    const [search, setSearch] = useState("")

    function searchedCreatedPlaylists() {
        if (search === ""){
            return allCreatedPlaylists
        } else {
            return allCreatedPlaylists.filter(createdPlaylist => createdPlaylist.description.toLowerCase().includes(search.toLowerCase()))
        }
    }

    const displayedCreatedPlaylists = searchedCreatedPlaylists().map((createdPlaylist) => (
        <PlaylistCard createdPlaylist={createdPlaylist} key={createdPlaylist.id}/>
    ))

    return (
    <div>
        <NavBar member={member} setMember={setMember}/>
        <SearchBar onSearch={setSearch}/>
        {displayedCreatedPlaylists}
    </div>
    )
}
export default PlaylistPage