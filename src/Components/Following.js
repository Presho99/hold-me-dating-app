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
                    function handleAdd() {
                        const match = {
                            man_id: (user.gender === "male" ? user.id : follower.id),
                            woman_id: (user.gender === "female" ? user.id : follower.id),
                            percentage: Math.floor(Math.random()* 50 + 50)

                        }
                        const serverOptions = {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(match)
                        }

                        fetch(`http://localhost:9393/matches`, serverOptions)
                        .then(r => r.json())
                        .then(()=>{
                            alert(`You are a ${match.percentage}% match with ${follower.first_name}`)
                        })
                    }
                    return (
                        <div className='following-panel' >
                            <img src={user.gender === "male" ? femaleUrls[Math.floor(Math.random() * femaleUrls.length)] : maleUrls[Math.floor(Math.random() * maleUrls.length)]} />
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <div>
                                    <h3>{follower.first_name}</h3>
                                    <p>{follower.job}</p>
                                </div>
                                <FontAwesomeIcon icon={faPlusCircle} onClick={handleAdd} />
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