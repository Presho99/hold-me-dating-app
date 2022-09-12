import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faHandHoldingHeart} from '@fortawesome/free-solid-svg-icons'
import React, {useState} from "react"
import { useHistory } from "react-router-dom"
import "./Signup.css"

function Signup(){
    let history = useHistory()
    const [signupDetails,setSignupDetails]=useState('');

    const handleChange = (e) => {
        setSignupDetails(e.target.value)
    }

    
    return(
        <div className="signup">
            <h1><FontAwesomeIcon icon={faHandHoldingHeart} style={{fontSize: "80", color: "#9D2E3C" }}/></h1>
                <form>
                    <div className="form-name">
                    <input type="text" placeholder='First name' style={{width:"400px"}}></input>
                    
                    </div>

                    <div className="form-password">
                    <input type="password" placeholder='Password' required></input>
                    <input type="password" placeholder='Confirm Password' style={{marginLeft: "10px"}} required></input>

                    </div>
                    </form>

                    <form>
                    
                    <div className="loc-job">
                    <input type="text" placeholder='Location' required></input>
                    <input type="text" placeholder='Field of Work' style={{marginLeft: "20px"}}></input>
                    </div>
                    <div className="birth-gender">
                    <label style={{color: "grey", fontSize: "14px"}}>DOB:
                    <input type="date"/>
                    </label>

                    <input type="radio" value="male" id="male"
               onChange={handleChange} name="gender" style={{backgroundColor: "pink"}}/>
             <label for="male" style={{color: "grey"}}>Male</label>

            <input type="radio" value="female" id="female"
              onChange={handleChange} name="gender"/>
            <label for="female" style={{color: "grey"}}>Female</label>
                    </div>
                    
                    
                    
                    <button >Sign up</button>
                </form>
                
        </div>
    )
}

export default Signup