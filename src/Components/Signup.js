import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faHandHoldingHeart} from '@fortawesome/free-solid-svg-icons'
import React from "react"
import "./Signup.css"

function Signup(){
    return(
        <div className="signup">
            <h1><FontAwesomeIcon icon={faHandHoldingHeart} style={{fontSize: "80", color: "#9D2E3C", marginLeft: "150"}}/></h1>
                <form>
                    <div className="form-name">
                    <input type="text" placeholder='First name'></input>
                    <input type="text" placeholder='Surname' style={{marginLeft: "20px"}}></input>
                    </div>

                    <div className="form-password">
                    <input type="password" placeholder='Password'></input>
                    <input type="password" placeholder='Confirm Password' style={{marginLeft: "10px"}}></input>

                    </div>
                    
                    
                    <input type="text" placeholder='Location'></input>
                    <input type="text" placeholder='Field of Work'></input>
                    <button>Sign up</button>
                </form>
        </div>
    )
}

export default Signup