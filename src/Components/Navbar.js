
import React from 'react'
import './Navbar.css'
import { NavLink } from "react-router-dom"


function Navbar(){
    return(
        <div className='navbar' style={{backgroundImage: "url('login.webp')"}}>
            <nav >

                <NavLink to="/home/signup" style={{textDecoration: "none"}}><h1>Signup</h1></NavLink>
                <NavLink to="/home/signin" style={{textDecoration: "none"}}><h1>Login</h1></NavLink>
            </nav>
            

    
        </div>
    )
}

export default Navbar