
import './App.css';
import React, { useEffect, useState } from "react"
import Dashboard from './Components/Dashboard';
import Header from "./Components/Header"
import { Route, Switch } from "react-router-dom"
import Home from "./Components/Home"
import Profile from './Components/Profile';


function App() {
  const [data, setData] = useState({})

  useEffect(() => {
    fetch('http://localhost:9393/matches')
    .then((r) => r.json())
    .then((setData))
  }, [])
  console.log(data)
  return (
    <div className="App">
      {/* <Profile/> */}
      <Home/>
      {/* <Header/>
      <Dashboard/> */}




      {/* <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="./dashboard">
          <Dashboard />
        </Route>

      </Switch> */}

    </div>

  );
}

export default App;
