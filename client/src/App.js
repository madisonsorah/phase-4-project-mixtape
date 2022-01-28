import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';



import LoginPage from './Components/LoginPage'
import PlaylistPage from "./Components/PlaylistPage";
import RequestPage from "./Components/RequestPage";
import SignupPage from "./Components/SignupPage";
import NavBar from "./Components/NavBar";

function App() {
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

  

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/playlists">
            <PlaylistPage playlists={playlists} />
          </Route>
          <Route path="/requests">
            <RequestPage requests={requests} />
          </Route>
          <Route path="/signup">
            <SignupPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;