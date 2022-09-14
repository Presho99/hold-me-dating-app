
import './App.css';
import React, { useEffect, useState } from "react"
import Dashboard from './Components/Dashboard';
import Header from "./Components/Header"
import { Route, Switch } from "react-router-dom"
import Profile from './Components/Profile';
import Navbar from './Components/Navbar';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Following from './Components/Following';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [user, setUser] = useState({})
  

  function getUser(signedInUser) {
    setUser(signedInUser)
  }
  return (
    <div className="App">
      

      <Switch>
        

        <Route path="/dashboard">
          <Header user={user} />
          <Route path="/dashboard/main">

            <Dashboard user={user} />

          </Route>
          <Route path="/dashboard/follow">
            <Following user={user} />
          </Route>

          <Route path="/dashboard/profile">
            <Profile />
          </Route>

        </Route>

        <Route  exact path={"/"}>
          <Navbar getUser={getUser}/>
        </Route>


      </Switch>




    </div>

  );
}

export default App;
