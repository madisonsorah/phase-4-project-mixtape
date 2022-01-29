import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import HomePage from "./Components/HomePage";
import LoginPage from './Components/LoginPage'
import PlaylistPage from "./Components/PlaylistPage";
import RequestPage from "./Components/RequestPage";
import SignupPage from "./Components/SignupPage";
import MemberProfile from "./Components/MemberProfile";

function App() {
<<<<<<< HEAD
  const [playlists, setPlaylists] = useState([]);
  const [requests, setRequests] = useState([]);
  

  useEffect(() => {
    fetch("http://localhost:3000/created_playlists")
      .then((r) => r.json())
      .then((playlists) => setPlaylists(playlists));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/requested_playlists")
      .then((r) => r.json())
      .then((requests) => setRequests(requests));
  }, []);

  
=======
  const [member, setMember] = useState(null);
  const [allCreatedPlaylists, setAllCreatedPlaylists] = useState([]);
  const [allRequestedPlaylists, setAllRequestedPlaylists] = useState([]);

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
    .then((requestedPlaylistsData) => setAllRequestedPlaylists(requestedPlaylistsData))
  }, [])
>>>>>>> main

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/home">
            <HomePage member={member} setMember={setMember}/>
          </Route>
          <Route path="/memberlogin">
            <LoginPage member={member} setMember={setMember}/>
          </Route>
          <Route path="/browseplaylists">
            <PlaylistPage member={member} setMember={setMember} allCreatedPlaylists={allCreatedPlaylists}/>
          </Route>
<<<<<<< HEAD
          <Route path="/playlists">
            <PlaylistPage playlists={playlists} />
          </Route>
          <Route path="/requests">
            <RequestPage requests={requests} />
=======
          <Route path="/browserequests">
            <RequestPage member={member} setMember={setMember} allRequestedPlaylists={allRequestedPlaylists}/>
          </Route>
          <Route path="/profile">
            <MemberProfile member={member} setMember={setMember}/>
>>>>>>> main
          </Route>
          <Route path="/membersignup">
            <SignupPage member={member} setMember={setMember}/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;