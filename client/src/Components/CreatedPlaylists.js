import React, {useState, useEffect} from 'react';
import NavBar from './NavBar';
import CreatedPlaylistsCard from './CreatedPlaylistsCard';

function CreatedPlaylists ({member, setMember}) {
    const [search, setSearch] = useState('');
    const [allCreatedPlaylists, setAllCreatedPlaylists] = useState([]);

    useEffect(() => {
        fetch('/created_playlists')
        .then((r) => r.json())
        .then((createdPlaylistsData) => setAllCreatedPlaylists(createdPlaylistsData))
      }, []);

    function searchedCreatedPlaylists() {
        if (search === ''){
            return allCreatedPlaylists
        } else {
            return allCreatedPlaylists.filter(createdPlaylist => createdPlaylist.description.toLowerCase().includes(search.toLowerCase()))
        }
    }

    const displayedCreatedPlaylists = searchedCreatedPlaylists().map((createdPlaylist) => (
        <CreatedPlaylistsCard createdPlaylist={createdPlaylist} key={createdPlaylist.id}/>
    ));

    return (
    <div>
        <NavBar member={member} setMember={setMember}/>
        <div className='createdPlaylistsDiv'>
            <h2 className='createdPlaylistsH2'>Created Playlists</h2>
            <p className='createdPlaylistsP'>Explore thousands of mixes created by passionate creators.</p>
            <input className='searchBar' value={search} placeholder='Search for Playlists' onChange={(e) => setSearch(e.target.value)}></input>
        </div>
        <div className='createdPlaylistsContainer'>
        {displayedCreatedPlaylists}
        </div>
        <div className='homepageFooter'></div>
    </div>
    )
}

export default CreatedPlaylists;