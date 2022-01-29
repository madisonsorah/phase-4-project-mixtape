import React, {useState, useEffect} from 'react'
import NavBar from './NavBar'
import CreatedPlaylistsCard from './CreatedPlaylistsCard'
import SearchBar from './SearchBar'


function CreatedPlaylists ({member, setMember}) {
    const [search, setSearch] = useState("")
    const [allCreatedPlaylists, setAllCreatedPlaylists] = useState([]);

    useEffect(() => {
        fetch("/created_playlists")
        .then((r) => r.json())
        .then((createdPlaylistsData) => setAllCreatedPlaylists(createdPlaylistsData))
      }, [])

    function searchedCreatedPlaylists() {
        if (search === ""){
            return allCreatedPlaylists
        } else {
            return allCreatedPlaylists.filter(createdPlaylist => createdPlaylist.description.toLowerCase().includes(search.toLowerCase()))
        }
    }

    const displayedCreatedPlaylists = searchedCreatedPlaylists().map((createdPlaylist) => (
        <CreatedPlaylistsCard createdPlaylist={createdPlaylist} key={createdPlaylist.id}/>
    ))

    return (
    <div>
        <NavBar member={member} setMember={setMember}/>
        <SearchBar onSearch={setSearch}/>
        {displayedCreatedPlaylists}
    </div>
    )
}
export default CreatedPlaylists;