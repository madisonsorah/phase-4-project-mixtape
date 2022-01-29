import React, {useState, useEffect} from 'react'
import NavBar from './NavBar';
import MyCreatedPlaylists from './MyCreatedPlaylists';
import MyReceivedPlaylists from './MyReceivedPlaylists';
import MyRequestedPlaylists from './MyRequestedPlaylists';

function MemberAccount({member, setMember}) {
  const [myCreatedPlaylists, setMyCreatedPlaylists] = useState([]);
  const [myReceivedPlaylists, setMyReceivedPlaylists] = useState([]);
  const [myRequestedPlaylists, setMyRequestedPlaylists] = useState([]);

  useEffect (() => {
    if (member) {
      fetch(`/members/${member.id}/created_playlists`)
      .then((r) => r.json())
      .then((createdPlaylistsData) => setMyCreatedPlaylists(createdPlaylistsData))
  
    fetch(`/members/${member.id}/received_playlists`)
      .then((r) => r.json())
      .then((receivedPlaylistsData) => setMyReceivedPlaylists(receivedPlaylistsData))
  
    fetch(`/members/${member.id}/requested_playlists`)
      .then((r) => r.json())
      .then((requestedPlaylistsData) => setMyRequestedPlaylists(requestedPlaylistsData))
    }
  }, [member])

  const createdPlaylists = myCreatedPlaylists.map((createdPlaylist) => (
    <MyCreatedPlaylists createdPlaylist={createdPlaylist} key={createdPlaylist.id}/>
  ))

  const receivedPlaylists = myReceivedPlaylists.map((receivedPlaylist) => (
    <MyReceivedPlaylists receivedPlaylist={receivedPlaylist} key={receivedPlaylist.id}/>
  ))

  const requestedPlaylists = myRequestedPlaylists.map((requestedPlaylist) => (
    <MyRequestedPlaylists requestedPlaylist={requestedPlaylist} key={requestedPlaylist.id}/>
  ))

    return (
        <div className="homePageDiv">
        <NavBar member={member} setMember={setMember}/>
         {member ? (
           <div>
            <div>
              <h1>Hello, {member.first_name}!</h1>
              <img alt="member avatar" src={member.avatar_url}></img>
              <p>{member.username}</p>
              <p>{member.email}</p>
            </div>
            <div>
              <h1>Created Playlists</h1>
              {createdPlaylists}
            </div>
            <div>
              <h1>Received Playlists</h1>
              {receivedPlaylists}
            </div>
            <div>
              <h1>Open Playlist Requests</h1>
              {requestedPlaylists}
            </div>
            </div>
          ) : (
            <h1>Please Login or Sign Up</h1>
          )}
        </div>
    )
  }
  
  export default MemberAccount;