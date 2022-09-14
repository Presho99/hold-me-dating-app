import React, {useState} from 'react'
import "./Signin.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faHandHoldingHeart} from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router-dom";


function Signin({getUser}){
  
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = useState({})
  
  let history = useHistory()

  function handleLogin(e){
 e.preventDefault()
 if (user.password === password){
   history.push("/dashboard/main")
 }else{
   alert("Incorrect Password")
 }
    
  }

  function handleFetch(){
    fetch(`http://localhost:9393/person/${username}`)
    .then(r => r.json())
    .then(user => {
      setUser(user)
      getUser(user)
      
    })
  }

  console.log(user)
    return(
        <div className='signin' style={{alignItems: "center", justifyContent: "center"}}>
             <h1><FontAwesomeIcon icon={faHandHoldingHeart} style={{fontSize: "80", color: "#C298E0", marginBottom: "20px"}}/></h1>
                <form onSubmit={handleLogin}>
                  <input type="text" required placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)} onBlur={handleFetch} autoComplete="off"/>
                  <input type="password" required placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
                  <button className='login-btn'>Login</button>
                </form>
                <p>Forgot Password?</p>
                

        </div>
    )
}
export default Signin