import React, {useState} from 'react'
import {Link} from 'react-router-dom'
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
            {member ? (
                <div>
                    <SearchBar onSearch={setSearch}/>
                    <Link to="/submitrequest">Submit Playlist Request</Link>
                    {displayedPlaylistRequests}
                </div>
            ) : (
                <div>
                    <SearchBar onSearch={setSearch}/>
                    {displayedPlaylistRequests} 
                </div>
            )}
        </div>
    )
}
export default PlaylistRequests;