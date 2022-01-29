import {useState} from 'react'
import RequestCard from './RequestCard'
import NavBar from './NavBar'
import SearchBar from './SearchBar'

function RequestPage({member, setMember, allRequestedPlaylists}) {
    const [search, setSearch] = useState("")

    const playlistRequests = allRequestedPlaylists.map((playlistRequest) => (
        <RequestCard playlistRequest={playlistRequest} key={playlistRequest.id}/>
    ))

    const filteredPlaylistRequests = playlistRequests.filter(request =>
        request.title.toLowerCase().includes(search.toLowerCase()))
    
    return (
        <div>
            <NavBar member={member} setMember={setMember}/>
            <SearchBar onSearch={setSearch}/>
            {filteredPlaylistRequests}
        </div>
    )
}
export default RequestPage