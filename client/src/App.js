import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NavBar from "./Components/NavBar";
import HomePage from "./Components/HomePage";
import LoginPage from './Components/LoginPage'
import PlaylistPage from "./Components/PlaylistPage";
import RequestPage from "./Components/RequestPage";
import SignupPage from "./Components/SignupPage";
import MemberProfile from "./Components/MemberProfile";

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
          <Route path="/home">
            <HomePage/>
          </Route>
          <Route path="/memberlogin">
            <LoginPage setMember={setMember}/>
          </Route>
          <Route path="/browseplaylists">
            <PlaylistPage/>
          </Route>
          <Route path="/browserequests">
            <RequestPage/>
          </Route>
          <Route path="/profile">
            <MemberProfile/>
          </Route>
          <Route path="/membersignup">
            <SignupPage setMember={setMember}/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;