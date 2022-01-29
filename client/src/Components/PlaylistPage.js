import React from 'react'
import NavBar from './NavBar'
import PlaylistCard from './PlaylistCard'
import SearchBar from './SearchBar'


function PlaylistPage ({member, setMember, allCreatedPlaylists}) {
    const [search, setSearch] = useState("")

    const createdPlaylists = allCreatedPlaylists.map((createdPlaylist) => (
        <PlaylistCard createdPlaylist={createdPlaylist} key={createdPlaylist.id}/>
    ))

    const filteredPlaylists = createdPlaylists.filter(createdPlaylist =>
    createdPlaylist.title.toLowerCase().includes(search.toLowerCase()))

    return (
    <div>
        <NavBar member={member} setMember={setMember}/>
        <SearchBar onSearch={setSearch}/>
        {filteredPlaylists}
    </div>
    )
}
export default PlaylistPage