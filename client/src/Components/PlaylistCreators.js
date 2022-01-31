import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import NavBar from './NavBar';

function PlaylistCreators({member, setMember}) {
    const [allMembers, setAllMembers] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch('/members')
        .then((r) => r.json())
        .then((memberData) => setAllMembers(memberData))
    },[])

    function searchedMembers() {
        if(search == ''){
            return allMembers
        } else {
            return allMembers.filter(member => member.username.toLowerCase().includes(search.toLowerCase()))
        }
    }
    
    const renderMembers = searchedMembers().map((member) => (
        <div className='memberListMember'>
            <img className='memberListAvatar' src={member.avatar_url}></img>
            <Link className='memberListLink' to={`/profile/${member.id}`}>{member.username}</Link>
        </div>
    ))
    
    return (
        <div>
            <NavBar member={member} setMember={setMember}/>
            <div>
                <div className='createdPlaylistsDiv'>
                    <h2 className='createdPlaylistsH2'>Playlist Creators</h2>
                    <p className='createdPlaylistsP'>Explore playlists and requests by creator.</p>
                    <input className='searchBar' value={search} placeholder='Search for Creators' onChange={(e) => setSearch(e.target.value)}></input>
                </div>
                <div className='creatorsContainer'>
                {renderMembers}
                </div>
                <div className='homepageFooter'></div>
            </div>
        </div>
    )
}

export default PlaylistCreators;