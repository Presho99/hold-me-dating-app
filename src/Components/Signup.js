import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import "./Signup.css"

function Signup({ getUser }) {
    const [signupDetails, setSignupDetails] = useState({ first_name: "", password: "", city: "", job: "", birth: "", gender: "" });
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
        } else {
            setError("")
        }
    }

    const handleChange = (e) => {
        setSignupDetails(sign => ({ ...sign, [e.target.name]: e.target.value }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        const serverOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(signupDetails)
        }
        fetch(`http://localhost:9393/${signupDetails.gender}`, serverOptions)
            .then(r => r.json())
            .then((user) => {
                getUser(user)
                history.push("/dashboard/main")

            })
    }




    return (
        <div className="signup">
            <h1><FontAwesomeIcon icon={faHandHoldingHeart} style={{ fontSize: "80", color: "#C298E0" }} /></h1>
            <form onSubmit={handleSubmit}>

                <input type="text" placeholder='First name' value={signupDetails.first_name} name="first_name" onChange={handleChange}></input>
                <input type="password" placeholder='Password' required value={signupDetails.password} name="password" onChange={handleChange}></input>
                <input type="password" placeholder='Confirm Password' required value={confirmPassword} name="confirm_password" onChange={handleConfirm} onBlur={handleCheckMatch}></input>
                <input type="text" placeholder='City' required value={signupDetails.city} name="city" onChange={handleChange}></input>
                <input type="text" placeholder='Field of Work' value={signupDetails.job} name="job" onChange={handleChange}></input>
                <input type="date" value={signupDetails.birth} name="birth" onChange={handleChange} />

                
                    <input type="radio" value={"male"} id="male"
                        onChange={handleChange} name="gender" style={{ backgroundColor: "pink" }} />
                    <label for="male" style={{ color: "grey" }}>Male</label>

                    <input type="radio" value={"female"} id="female"
                        onChange={handleChange} name="gender" />
                    <label for="female" style={{ color: "grey" }}>Female</label>
                
                <button >Sign up</button>
            </form>

        </div>
    )
}

export default Signup