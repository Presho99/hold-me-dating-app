import React from 'react'
import "./Signin.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faHandHoldingHeart} from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router-dom";


function Signin(){
  
  let history = useHistory()
    return(
        <div className='signin'>
             <h1><FontAwesomeIcon icon={faHandHoldingHeart} style={{fontSize: "80", color: "#9D2E3C", marginLeft: "150"}}/></h1>
                <form>
                  <input type="text" required placeholder='Username'/>
                  <input type="password" required placeholder='Password'/>
                  <button className='login-btn' onClick={() => history.push('./dashboard')}>Login</button>
                </form>
                <p>Forgot Password?</p>
                

        </div>
    )
}
export default Signin