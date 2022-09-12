
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
          
            <div className='home'>
              <Navbar />


              <Route exact path="/home/signin">


                <Signin getUser={getUser} />
              </Route>
              <Route path="/home/signup">

                <Signup getUser={getUser} />
              </Route>
            </div>
          
        </Route>

        <Route path="/dashboard">
          <Header />
          <Route path="/dashboard/main">

            <Dashboard user={user} />

          </Route>
          <Route path="/dashboard/follow">
            <Following/>
          </Route>

          <Route path="/dashboard/profile">
            <Profile/>
          </Route>

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
