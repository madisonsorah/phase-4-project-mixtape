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
        <Switch>
          <Route path="/home">
            <HomePage member={member} setMember={setMember}/>
          </Route>
          <Route path="/memberlogin">
            <LoginPage member={member} setMember={setMember}/>
          </Route>
          <Route path="/browseplaylists">
            <PlaylistPage member={member} setMember={setMember}/>
          </Route>
          <Route path="/browserequests">
            <RequestPage member={member} setMember={setMember}/>
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