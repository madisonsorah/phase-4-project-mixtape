import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import HomePage from "./Components/HomePage";
import LoginPage from './Components/LoginPage'
import CreatedPlaylists from "./Components/CreatedPlaylists";
import PlaylistRequests from "./Components/PlaylistRequests";
import SignupPage from "./Components/SignupPage";
import MemberProfile from "./Components/MemberProfile";

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
            <CreatedPlaylists member={member} setMember={setMember} allCreatedPlaylists={allCreatedPlaylists}/>
          </Route>
          <Route path="/browserequests">
            <PlaylistRequests member={member} setMember={setMember} allPlaylistRequests={allPlaylistRequests}/>
          </Route>
          <Route path="/profile">
            <MemberProfile member={member} setMember={setMember}/>
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