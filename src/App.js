
import './App.css';
import React, { useEffect, useState } from "react"
import Dashboard from './Components/Dashboard';
import Header from "./Components/Header"
import { Route, Switch } from "react-router-dom"
import Profile from './Components/Profile';
import Navbar from './Components/Navbar';
import Signin from './Components/Signin';
import Signup from './Components/Signup';

function App() {
  const [user, setUser] = useState({})

  function getUser(signedInUser) {
    setUser(signedInUser)
  }
  return (
    <div className="App">
      {/* <Profile/> */}

      {/* <Header/>
      <Dashboard/> */}
      <Switch>
        <Route path="/home">
          <Switch>
            <div className='home'>
              <Navbar />
             

              <Route exact path="/home/signin">
              <Signin getUser={getUser} />
              </Route>
              <Route path="/home/signup">
                <Signup getUser={getUser} />
              </Route>
            </div>
          </Switch>
        </Route>

        <Route path="/dashboard">
          <Dashboard user={user}/>
        </Route>
      </Switch>



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
