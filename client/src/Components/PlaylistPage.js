import React, {useEffect, useState} from 'react'
import PlaylistCard from './PlaylistCard'
import SearchBar from './SearchBar'


function PlaylistPage ({playlists}) {
    const [search, setSearch] = useState("")

    const searchedPlaylists = playlists.filter(request =>
    request.title.toLowerCase().includes(search.toLowerCase()))

    const displayedPlaylists = searchedPlaylists.map(request =>
    <PlaylistCard request={request} key={request.id}/>)

    return (
        <>
        <SearchBar onSearch={setSearch}/>
        {displayedPlaylists}
        </>
        
    )
}
export default PlaylistPage