import React from 'react'
import './Profile.css'
import {femaleUrls, maleUrls} from "./data.js"
import { useHistory } from 'react-router-dom'

function Profile({user}) {
    console.log(user)

    let history = useHistory()

    let image = ""

    if(user.gender === "male"){
        image = maleUrls[Math.floor(Math.random() * maleUrls.length)]

    }else {
        image = femaleUrls[Math.floor(Math.random() * femaleUrls.length)]
    }

    function handleLogout(){
        history.push("/")

    }

    function handleFollow(){
        history.push("/dashboard/follow")
    }
    return (
        <div className='profile-page'>
            <div className='prof-left'>
                <button className='top-edit'>
                    Edit
                </button>
                <h2 style={{color: "#C298E0"}}>Profile</h2>
                <div className='prof-top'>
                    <img src={image} />
                    <h3 style={{color: "#C298E0"}}>{user.first_name}</h3>
                    <p>{user.job}</p>
                    <p></p>
                </div>

                <div className='prof-connect'>
                    <div className='conn-photo' onClick={handleFollow}>
                        <h3 style={{color: "#C298E0"}}>View</h3>
                        <p>matches</p>
                    </div>
                    <div className='line'></div>
                    <div className='conn-following'>
                        <h3 style={{color: "#C298E0"}}>Gender</h3>
                        <p>{user.gender}</p>
                    </div>
                    <div className='line'></div>
                    <div className='conn-likes'>
                        <h3 style={{color: "#C298E0"}}>City</h3>
                        <p>{user.city}</p>
                    </div>
                </div>
                <div className='prof-bio'>

                    <p>Out of the night that covers me,
                        Black as the pit from pole to pole,
                        I thank whatever gods may be
                        For my unconquerable soul.

                    </p>
                </div>
                <div className='left-edits'>
                    
                    <button style={{cursor: "pointer"}} onClick= {handleLogout}>Log out</button>
                    <button style={{cursor: "pointer"}} onClick= {handleLogout}>Delete</button>
                </div>
            </div>

           


        </div>
    )
}

export default Profile