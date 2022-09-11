import React, {useState} from 'react'
import {Switch,  Route} from "react-router-dom"
import './Home.css'
import  Navbar from './Navbar'
import Signin from './Signin'
import Signup from './Signup'


function Home(){
    return(
        <div className='home'>
        
    <Navbar  />
    <Switch>
    <Route path="/signin">
        <Signin/>
    </Route>
    <Route path="/signup">
        <Signup/>
    </Route>
    </Switch>
    
    </div>
    )
    
}

export default Home