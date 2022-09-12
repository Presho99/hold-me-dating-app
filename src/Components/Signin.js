import React, {useState} from 'react'
import "./Signin.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faHandHoldingHeart} from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router-dom";


function Signin(){
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  
  let history = useHistory()

  function handleFetch(){
    fetch(`http://localhost:9393/person/${username}`)
    .then(r => r.json())
    .then(console.log)
  }
    return(
        <div className='signin' style={{alignItems: "center", justifyContent: "center"}}>
             <h1><FontAwesomeIcon icon={faHandHoldingHeart} style={{fontSize: "80", color: "#9D2E3C"}}/></h1>
                <form>
                  <input type="text" required placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)} onBlur={handleFetch}/>
                  <input type="password" required placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                  <button className='login-btn' onClick={() => history.push('./dashboard')}>Login</button>
                </form>
                <p>Forgot Password?</p>
                

        </div>
    )
}
export default Signin