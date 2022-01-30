import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import NavBar from "./NavBar";

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
            <div className="gamePageDiv">
                <div className="gamePageFloatContainer">
                    <div className="gamePageFloatLeft">
                        <img className="gamePageImage" src={createdPlaylist.cover_url} alt={createdPlaylist.title}></img>
                    </div>
                    <div className="gamePageFloatRight">
                        <h2>{createdPlaylist.title}</h2>
                        <p>Fulfilled Request</p>
                        <p className="gamePageDescription">{createdPlaylist.description}</p>
                        <a href={createdPlaylist.playlist_url}>Link to Playlist</a>
                        <h4>Creator: {playlistCreator.username}</h4>
                        <h4>Receiver: {playlistReceiver.username}</h4>
                    </div>
                </div>
            </div>
            <Link to="/browseplaylists">Back</Link>
        </div>
    )
}

export default CreatedPlaylistPage;