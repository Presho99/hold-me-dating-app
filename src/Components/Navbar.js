
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
                <button onClick={() => setLogin(false)} style={{cursor: "pointer"}}>Signup</button>
                <button onClick={() => setLogin(true)}>Login</button>
            </div>

            {login ? <Signin getUser={getUser}/> : <Signup getUser={getUser}/>}
        </div>

    )
}

export default Navbar