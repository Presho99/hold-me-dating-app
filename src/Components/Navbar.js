
import React, { useState } from 'react'
import './Navbar.css'
import { NavLink } from "react-router-dom"
import Signin from './Signin'
import Signup from './Signup'


function Navbar({getUser}) {
    const [login, setLogin] = useState(true)

    return (
        <div className='home'>
            <div className='navbar' style={{ backgroundImage: "url('login.webp')" }}>
                <button className="one" onClick={() => setLogin(false)} style={{cursor: "pointer"}}><h1>SignUp</h1></button>
                <button className="two" onClick={() => setLogin(true)} style={{cursor: "pointer"}}><h1>Login</h1></button>
            </div>

            {login ? <Signin getUser={getUser}/> : <Signup getUser={getUser}/>}
        </div>

    )
}

export default Navbar