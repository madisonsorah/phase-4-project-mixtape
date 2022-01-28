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
  const [member, setMember] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((member) => setMember(member));
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar member={member} setMember={setMember}/>
        <Switch>
          <Route path="/login">
            <LoginPage setMember={setMember} />
          </Route>
          <Route path="/playlists">
            <PlaylistPage />
          </Route>
          <Route path="/requests">
            <RequestPage />
          </Route>
          <Route path="/signup">
            <SignupPage setMember={setMember} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;