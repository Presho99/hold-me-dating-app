
import './App.css';
import React, {useState} from "react"
import Dashboard from './Components/Dashboard';
import Header from "./Components/Header"
import { Route, Switch } from "react-router-dom"
import Home from "./Components/Home"
import Profile from './Components/Profile';


function App() {
  return (
    <div className="App">
      <Home/>

      {/* <Header/>
      <Dashboard/>
       */}
       {/* <Switch>
                <Route path="/">
                  <Home/>
                </Route>
                <Route path="./dashboard">
                  <Dashboard/>
                </Route>
                
            </Switch> */}
          
        </div>
    
  );
}

export default App;
