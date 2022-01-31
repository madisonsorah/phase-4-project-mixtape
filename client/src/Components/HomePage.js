import React, {useEffect, useState} from 'react';
import NavBar from './NavBar';
import {Link} from 'react-router-dom';
import CreatedPlaylistsCard from './CreatedPlaylistsCard';
import PlaylistRequestsCard from './PlaylistRequestsCard';

function HomePage({member, setMember}) {
  const [allCreatedPlaylists, setAllCreatedPlaylists] = useState([]);
  const [allPlaylistRequests, setAllPlaylistRequests] = useState([]);

    useEffect(() => {
        fetch('/created_playlists')
        .then((r) => r.json())
        .then((createdPlaylistsData) => setAllCreatedPlaylists(createdPlaylistsData))
      }, []);

    useEffect(() => {
        fetch('/requested_playlists')
        .then((r) => r.json())
        .then((requestedPlaylistsData) => setAllPlaylistRequests(requestedPlaylistsData))
      }, []);

      const createdPlaylists = allCreatedPlaylists.map((createdPlaylist) => (
        <CreatedPlaylistsCard createdPlaylist={createdPlaylist} key={createdPlaylist.id}/>
    ));


      const requestedPlaylists = allPlaylistRequests.map((playlistRequest) => (
        <PlaylistRequestsCard playlistRequest={playlistRequest} key={playlistRequest.id} member={member}/>
    ));
  
  return (
    <div className='homePage'>
      <NavBar member={member} setMember={setMember}/>
        {member ? (
          <div className='homePageFloatContainer'>
            <div className='welcomeDiv1'>
            <h1 className='homePageWelcomeHeader2'>Welcome back to MixTape, <Link className='welcomeUsername' to='/account'>{member.first_name}</Link>.</h1>
            <h6 className='joinCommunity'>Catch up on new playlists and requests below.</h6>
            </div>
              <div className='playlistContainer'>
              <h4 className='homePageh2'>Recently Created Playlists</h4>
              {createdPlaylists}
            </div>
              <div className='playlistContainer'>
              <h4 className='homePageh2'>Recently Submitted Requests</h4>
              {requestedPlaylists}
              </div>
            <div className='homepageFooter'></div>
          </div>
        ) : (
          <div className='homePageFloatContainer'>
            <div className='welcomeDiv'>
            <h1 className='homePageWelcomeHeader'>Welcome to MixTape</h1>
            <h6 className='joinCommunity'>Join our local community of audio lovers and share personalized playlists.</h6>
            <div>
            <Link className='welcomeUsername2' to='/memberlogin'>Login</Link>
            </div>
            <div>
            <Link className='welcomeUsername2' to='/membersignup'>Sign Up</Link>
            </div>  
            </div>
            <div>
              <div className='playlistContainer'>
              <h4 className='homePageh4'>Recently Created Playlists</h4>
              {createdPlaylists}
              </div>
            </div>
            <div>
              <div className='requestContainer'>
              <h4 className='homePageh4'>Recently Submitted Requests</h4>
              {requestedPlaylists}
              </div>
            </div>
            <div className='homepageFooter'></div>
          </div>
        )}
    </div>
  )
}
  
  export default HomePage;