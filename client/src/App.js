import React, {useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePage from './Components/HomePage';
import LoginPage from './Components/LoginPage';
import CreatedPlaylists from './Components/CreatedPlaylists';
import PlaylistRequests from './Components/PlaylistRequests';
import PlaylistCreators from './Components/PlaylistCreators';
import SubmitRequest from './Components/SubmitRequest';
import SubmitPlaylist from './Components/SubmitPlaylist';
import CreatedPlaylistPage from './Components/CreatedPlaylistPage';
import SignupPage from './Components/SignupPage';
import MemberAccount from './Components/MemberAccount';
import MemberProfile from './Components/MemberProfile';

function App() {
  const [member, setMember] = useState(null);

  useEffect(() => {
    fetch('/me')
    .then((r) => {
      if (r.ok) {
        r.json().then((member) => setMember(member));
      }
    });
  }, []);

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<HomePage member={member} setMember={setMember}/>}/>
          <Route path='/memberlogin' element={<LoginPage member={member} setMember={setMember}/>}/>
          <Route path='/browseplaylists' element={<CreatedPlaylists member={member} setMember={setMember} />} />
          <Route path='/playlist/:id' element={<CreatedPlaylistPage member={member} setMember={setMember}/>} />
          <Route path='/browserequests' element={<PlaylistRequests member={member} setMember={setMember} />} />
          <Route path='/playlistcreators' element={<PlaylistCreators member={member} setMember={setMember} />} />
          <Route path='/submitrequest' element={<SubmitRequest member={member} setMember={setMember}/>} />
          <Route path='/submitplaylist/:id' element={<SubmitPlaylist member={member} setMember={setMember}/>} />
          <Route path='/profile/:id' element={<MemberProfile member={member} setMember={setMember}/>} />
          <Route path='/account' element={<MemberAccount member={member} setMember={setMember}/>} />
          <Route path='/membersignup' element={<SignupPage member={member} setMember={setMember}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;