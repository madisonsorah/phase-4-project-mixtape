import React, {useState} from 'react'
import PlaylistRequestsCard from './PlaylistRequestsCard'
import NavBar from './NavBar'
import SearchBar from './SearchBar'

function PlaylistRequests({member, setMember, allPlaylistRequests}) {
    const [search, setSearch] = useState("")

    function searchedPlaylistRequests() {
        if (search === ""){
            return allPlaylistRequests
        } else {
            return allPlaylistRequests.filter(requestedPlaylist => requestedPlaylist.description.toLowerCase().includes(search.toLowerCase()))
        }
    }

    const displayedPlaylistRequests = searchedPlaylistRequests().map((playlistRequest) => (
        <PlaylistRequestsCard playlistRequest={playlistRequest} key={playlistRequest.id}/>
    ))

    
    return (
        <div>
            <NavBar member={member} setMember={setMember}/>
            <SearchBar onSearch={setSearch}/>
            {displayedPlaylistRequests}
        </div>
    )
}
export default PlaylistRequests;