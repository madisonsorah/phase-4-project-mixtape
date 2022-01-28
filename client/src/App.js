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
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
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
            <PlaylistPage />
          </Route>
          <Route path="/requests">
            <RequestPage />
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