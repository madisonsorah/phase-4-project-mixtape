import React, {useState} from 'react'
import RequestCard from './RequestCard'
import NavBar from './NavBar'
import SearchBar from './SearchBar'

function RequestPage({member, setMember, allPlaylistRequests}) {
    const [search, setSearch] = useState("")

    function searchedPlaylistRequests() {
        if (search === ""){
            return allPlaylistRequests
        } else {
            return allPlaylistRequests.filter(requestedPlaylist => requestedPlaylist.description.toLowerCase().includes(search.toLowerCase()))
        }
    }

    const displayedPlaylistRequests = searchedPlaylistRequests().map((playlistRequest) => (
        <RequestCard playlistRequest={playlistRequest} key={playlistRequest.id}/>
    ))

    
    return (
        <div>
            <NavBar member={member} setMember={setMember}/>
            <SearchBar onSearch={setSearch}/>
            {displayedPlaylistRequests}
        </div>
    )
}
export default RequestPage