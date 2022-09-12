import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faHandHoldingHeart} from '@fortawesome/free-solid-svg-icons'
import React, {useState} from "react"
import { useHistory } from "react-router-dom"
import "./Signup.css"

function Signup(){
    let history = useHistory()
    const [signupDetails,setSignupDetails]=useState({first_name:"", password:"", confirm_password:"", location: "", job: "", birth: "", gender: "" });

    const handleChange = (e) => {
        setSignupDetails(e.target.value)
    }

    
    return(
        <div className="signup">
            <h1><FontAwesomeIcon icon={faHandHoldingHeart} style={{fontSize: "80", color: "#9D2E3C" }}/></h1>
                <form>
                    <div className="form-name">
                    <input type="text" placeholder='First name' style={{width:"400px"}} value={signupDetails.first_name} name="first_name"></input>
                    
                    </div>

                    <div className="form-password">
                    <input type="password" placeholder='Password' required value={signupDetails.password} name={password}></input>
                    <input type="password" placeholder='Confirm Password' style={{marginLeft: "10px"}} required value={signupDetails.confirm_password} name={confirm_password}></input>

                    </div>
                    </form>

                    <form>
                    
                    <div className="loc-job">
                    <input type="text" placeholder='Location' required value={signupDetails.location} name={location}></input>
                    <input type="text" placeholder='Field of Work' style={{marginLeft: "20px"}} value={signupDetails.job} name={job}></input>
                    </div>
                    <div className="birth-gender">
                    <label style={{color: "grey", fontSize: "14px"}}>DOB:
                    <input type="date" value={signupDetails.birth} name={birth}/>
                    </label>

                    <input type="radio" value={signupDetails.gender} id="male"
               onChange={handleChange} name="gender" style={{backgroundColor: "pink"}}/>
             <label for="male" style={{color: "grey"}}>Male</label>

            <input type="radio" value={signupDetails.gender} id="female"
              onChange={handleChange} name="gender"/>
            <label for="female" style={{color: "grey"}}>Female</label>
                    </div>
                    
                    
                    
                    <button >Sign up</button>
                </form>
                
        </div>
    )
}

export default Signup