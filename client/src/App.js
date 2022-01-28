import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';


import NavBar from './Components/NavBar'

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
        <Switch>
          <Route path="/testing">
            <h1>Hello</h1>
          </Route>
          <Route path="/">
            <NavBar />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;