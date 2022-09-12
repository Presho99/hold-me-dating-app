import React, { useEffect, useState } from 'react'
import "./Following.css"
import { femaleUrls, maleUrls } from "./data.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

function Following({ user }) {
    const [followers, setFollowers] = useState([])

    useEffect((() => {
        fetch(`http://localhost:9393/${user.gender}`)
            .then(r => r.json())
            .then(setFollowers)
    }),
        [user])




    return (
        <div className='following'>
            {
                followers.map(follower => {
                    return (
                        <div className='following-panel' >
                            <img src={user.gender === "male" ? femaleUrls[Math.floor(Math.random() * femaleUrls.length)] : maleUrls[Math.floor(Math.random() * maleUrls.length)]} />
                            <div style={{display: "flex", justifyContent: "center"}}>
                                <div>
                                    <h3>{follower.first_name}</h3>
                                    <p>{follower.job}</p>
                                </div>
                                <FontAwesomeIcon icon={faPlusCircle} />
                            </div>

                        </div>

                    )
                })
            }


            {/* <div className='following-panel' >
                <img src= "https://images.pexels.com/photos/38289/portrait-photography-profile-face-one-38289.jpeg?auto=compress&cs=tinysrgb&w=400"/>
                <h3>Suzanne</h3>
                <p>job</p>
            </div>
            <div className='following-panel' >
                <img src= "https://images.pexels.com/photos/38289/portrait-photography-profile-face-one-38289.jpeg?auto=compress&cs=tinysrgb&w=400"/>
                <h3>Suzanne</h3>
                <p>job</p>
            </div>
            <div className='following-panel' >
                <img src= "https://images.pexels.com/photos/38289/portrait-photography-profile-face-one-38289.jpeg?auto=compress&cs=tinysrgb&w=400"/>
                <h3>Suzanne</h3>
                <p>job</p>
            </div>
            <div className='following-panel' >
                <img src= "https://images.pexels.com/photos/38289/portrait-photography-profile-face-one-38289.jpeg?auto=compress&cs=tinysrgb&w=400"/>
                <h3>Suzanne</h3>
                <p>job</p>
            </div> */}

        </div>
    )
}

export default Following