import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import NavBar from './NavBar';
import {cassetteTapeOuterPink} from '../images/cassetteTapeOuterPink.png'

function CreatedPlaylistPage({member, setMember}) {
    let {id} = useParams();
    const [createdPlaylist, setCreatedPlaylist] = useState([]);
    const [playlistCreator, setPlaylistCreator] = useState([]);
    const [playlistReceiver, setPlaylistReceiver] = useState([]);
    
    useEffect(() => {
        fetch(`/created_playlists/${id}`)
        .then((response) => response.json())
        .then((createdPlaylistData) => setCreatedPlaylist(createdPlaylistData))
    }, [id])

    useEffect(() => {
        fetch(`/members/${createdPlaylist.creator_id}`)
        .then((response) => response.json())
        .then((creatorData) => setPlaylistCreator(creatorData))
        
        fetch(`/members/${createdPlaylist.requester_id}`)
        .then((response) => response.json())
        .then((requesterData) => setPlaylistReceiver(requesterData))
    }, [createdPlaylist])   

    return (
        <div>
            <NavBar member={member} setMember={setMember} />
            <div className='homePageDiv'>
                <div className='accountPageFloatContainer'>
                    <div className='memberPageFloatLeft'>
                        <img className='gamePageImage' src={cassetteTapeOuterPink} alt={createdPlaylist.title}></img>
                    </div>
                    <div className='memberPageFloatRight'>
                        <h2 className='playlistTitle'>{createdPlaylist.title}</h2>
                        <p className= 'playlistDescription'>Request:</p>
                        <p className='playlistDescription'>{createdPlaylist.description}</p>
                        <a className='createdPlaylistURL' href={createdPlaylist.playlist_url}>Link to Playlist</a>
                        <h4 className='playlistCreator'>Creator: {playlistCreator.username}</h4>
                        <h4 className='playlistCreator'>Receiver: {playlistReceiver.username}</h4>
                    </div>
                </div>
            </div>
            <Link to='/browseplaylists'>Back</Link>
        </div>
    )
}

export default CreatedPlaylistPage;