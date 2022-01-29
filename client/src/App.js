import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import HomePage from "./Components/HomePage";
import LoginPage from './Components/LoginPage'
import CreatedPlaylists from "./Components/CreatedPlaylists";
import PlaylistRequests from "./Components/PlaylistRequests";
import SubmitRequest from "./Components/SubmitRequest";
import SubmitPlaylist from "./Components/SubmitPlaylist";
import SignupPage from "./Components/SignupPage";
import MemberAccount from "./Components/MemberAccount";

function App() {
  const [member, setMember] = useState(null);
  const [allCreatedPlaylists, setAllCreatedPlaylists] = useState([]);
  const [allPlaylistRequests, setAllPlaylistRequests] = useState([]);

  useEffect(() => {
    // auto-login
    fetch("/me")
    .then((r) => {
      if (r.ok) {
        r.json().then((member) => setMember(member));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/created_playlists")
    .then((r) => r.json())
    .then((createdPlaylistsData) => setAllCreatedPlaylists(createdPlaylistsData))
  }, [])

  useEffect(() => {
    fetch("/requested_playlists")
    .then((r) => r.json())
    .then((requestedPlaylistsData) => setAllPlaylistRequests(requestedPlaylistsData))
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage member={member} setMember={setMember}/>}/>
          <Route path="/memberlogin" element={<LoginPage member={member} setMember={setMember}/>}/>
          <Route path="/browseplaylists" element={<CreatedPlaylists member={member} setMember={setMember} allCreatedPlaylists={allCreatedPlaylists}/>} />
          <Route path="/browserequests" element={<PlaylistRequests member={member} setMember={setMember} allPlaylistRequests={allPlaylistRequests}/>} />
          <Route path="/submitrequest" element={<SubmitRequest member={member} setMember={setMember}/>} />
          <Route path="/submitplaylist/:id" element={<SubmitPlaylist member={member} setMember={setMember}/>} />
          <Route path="/account" element={<MemberAccount member={member} setMember={setMember}/>} />
          <Route path="/membersignup" element={<SignupPage member={member} setMember={setMember}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;