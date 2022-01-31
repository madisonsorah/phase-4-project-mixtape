import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import PlaylistRequestsCard from './PlaylistRequestsCard';
import NavBar from './NavBar';
import SearchBar from './SearchBar';

function PlaylistRequests({member, setMember}) {
    const [search, setSearch] = useState('')
    const [allPlaylistRequests, setAllPlaylistRequests] = useState([]);

    useEffect(() => {
        fetch('/requested_playlists')
        .then((r) => r.json())
        .then((requestedPlaylistsData) => setAllPlaylistRequests(requestedPlaylistsData))
      }, []);

    function searchedPlaylistRequests() {
        if (search === ''){
            return allPlaylistRequests
        } else {
            return allPlaylistRequests.filter(requestedPlaylist => requestedPlaylist.description.toLowerCase().includes(search.toLowerCase()))
        }
    }

    const displayedPlaylistRequests = searchedPlaylistRequests().map((playlistRequest) => (
        <PlaylistRequestsCard playlistRequest={playlistRequest} key={playlistRequest.id} member={member}/>
    ));

    
    return (
        <div>
            <NavBar member={member} setMember={setMember}/>
            {member ? (
                <div>
                    <div className='requestedPlaylistsDiv'>
                        <h2 className='createdPlaylistsH2'>Playlist Requests</h2>
                        <p className='createdPlaylistsP'>Create a personalized playlist for a MixTape member or submit a request.</p>
                        <div className='submitDiv'>
                        <Link className='submitRequest' to='/submitrequest'>Submit Playlist Request</Link>
                        </div>
                        <input className='searchBar' value={search} placeholder='Search for Request' onChange={(e) => setSearch(e.target.value)}></input>
                    </div>
                    <div className='requestedPlaylistsContainer'>
                    {displayedPlaylistRequests}
                    </div>
                    <div className='homepageFooter'></div>
                </div>
            ) : (
                <div>
                    <div className='requestedPlaylistsDiv'>
                        <h2 className='createdPlaylistsH2'>Playlist Requests</h2>
                        <p className='createdPlaylistsP'>Create a personalized playlist for a MixTape member.</p>
                        <input className='searchBar' value={search} placeholder='Search for Request' onChange={(e) => setSearch(e.target.value)}></input>
                    </div>
                    <div className='createdPlaylistsContainer'>
                    {displayedPlaylistRequests} 
                    </div>
                    <div className='homepageFooter'></div>
                </div>
            )}
        </div>
    )
}

export default PlaylistRequests;