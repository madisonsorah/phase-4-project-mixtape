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
        <div>
            <img src={member.avatar_url}></img>
            <Link to={`/profile/${member.id}`}>{member.username}</Link>
        </div>
    ))
    
    return (
        <div>
            <NavBar member={member} setMember={setMember}/>
            <div>
                <div>
                    <h1>Playlist Creators</h1>
                    <h3 className='memberListSubHead'>Explore playlists by creator.</h3>
                    <input value={search} placeholder='Search for Members' onChange={(e) => setSearch(e.target.value)}></input>
                    {renderMembers}
                </div>
            </div>
        </div>
    )
}

export default PlaylistCreators;