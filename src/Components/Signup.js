import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faHandHoldingHeart} from '@fortawesome/free-solid-svg-icons'
import React, {useState} from "react"
import { useHistory } from "react-router-dom"
import "./Signup.css"

function Signup({getUser}){
    const [signupDetails,setSignupDetails]=useState({first_name:"", password:"", city: "", job: "", birth: "", gender: "" });
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")
    let history = useHistory()
    

    const handleConfirm = (e) => {
        setConfirmPassword(e.target.value)
    }

    const handleCheckMatch = () => {
        if (signupDetails.password !== confirmPassword) {
           alert("Passwords don't match") 
           setError("Error")
        }else{
            setError("")
        }
    }

    const handleChange = (e) => {
        setSignupDetails(sign => ({...sign, [e.target.name]: e.target.value}))
    }

    function handleSubmit(e){
            e.preventDefault()
            const serverOptions ={
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(signupDetails)
            }
            fetch(`http://localhost:9393/${signupDetails.gender}`, serverOptions)
            .then(r => r.json())
            .then((user)=> {
                getUser(user)
                history.push("/dashboard/main")

            })
    }



    console.log(signupDetails)
    return(
        <div className="signup">
            <h1><FontAwesomeIcon icon={faHandHoldingHeart} style={{fontSize: "80", color: "#9D2E3C" }}/></h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-name">
                    <input type="text" placeholder='First name' style={{width:"400px"}} value={signupDetails.first_name} name="first_name" onChange={handleChange}></input>
                    
                    </div>

                    <div className="form-password">
                    <input type="password" placeholder='Password' required value={signupDetails.password} name="password" onChange={handleChange}></input>
                    <input type="password" placeholder='Confirm Password' style={{marginLeft: "10px"}} required value={confirmPassword} name="confirm_password" onChange={handleConfirm} onBlur={handleCheckMatch}></input>

                    </div>
                    
                    
                    <div className="loc-job">
                    <input type="text" placeholder='City' required value={signupDetails.city} name="city" onChange={handleChange}></input>
                    <input type="text" placeholder='Field of Work' style={{marginLeft: "20px"}} value={signupDetails.job} name="job" onChange={handleChange}></input>
                    </div>
                    <div className="birth-gender">
                    <label style={{color: "grey", fontSize: "14px"}}>DOB:
                    <input type="date" value={signupDetails.birth} name="birth" onChange={handleChange}/>
                    </label>

                    <input type="radio" value={"male"} id="male"
               onChange={handleChange} name="gender" style={{backgroundColor: "pink"}} />
             <label for="male" style={{color: "grey"}}>Male</label>

            <input type="radio" value={"female"} id="female"
              onChange={handleChange} name="gender"/>
            <label for="female" style={{color: "grey"}}>Female</label>
                    </div>
                    
                    
                    
                    <button >Sign up</button>
                </form>
                
        </div>
    )
}

export default Signup