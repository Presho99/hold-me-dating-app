import React from "react"
import "./Dashboard.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faVenusDouble } from '@fortawesome/free-solid-svg-icons'
import ProgressIcon from "./ProgressIcon"

function Dashboard() {
    return (
        <div className="dashboard">
            <div className="dashboard-item">
                <h4>Your profile is 100% complete</h4>
                <ProgressIcon/>
                <ProgressIcon/>
            </div>
            <div className="dashboard-item">
            <div className='panel' style={{ backgroundImage: "url('profile.webp')" }}>
                    <h3>Susan,24</h3>
                </div>
                <div className='panel' style={{ backgroundImage: "url('profile.webp')" }}>
                    <h3>Susan,24</h3>
                </div>
                <div className='panel' style={{ backgroundImage: "url('profile.webp')" }}>
                    <h3>Susan,24</h3>
                </div>
                <div className='panel' style={{ backgroundImage: "url('profile.webp')" }}>
                    <h3>Susan,24</h3>
                </div>
              
                
            </div>
            <div className="dashboard-item">
                <h3>Notifications</h3>
            <div className='chat'>
                    <div className='chat-icon'>
                        <FontAwesomeIcon icon={faUser}/>
                    </div>
                    <div className='chat-text'>
                        <h4>Susan</h4>
                        <p>is now following you</p>
                    </div>
                    <div className='chat-time'>
                        <p>2 hours ago</p>
                    </div>
                </div>
                <div className='chat'>
                    <div className='chat-icon'>
                        <FontAwesomeIcon icon={faUser}/>
                    </div>
                    <div className='chat-text'>
                        <h4>Susan</h4>
                        <p>is now following you</p>
                    </div>
                    <div className='chat-time'>
                        <p>2 hours ago</p>
                    </div>
                </div>
                <div className='chat'>
                    <div className='chat-icon'>
                        <FontAwesomeIcon icon={faUser}/>
                    </div>
                    <div className='chat-text'>
                        <h4>Susan</h4>
                        <p>is now following you</p>
                    </div>
                    <div className='chat-time'>
                        <p>2 hours ago</p>
                    </div>
                </div>
                <div className='chat'>
                    <div className='chat-icon'>
                        <FontAwesomeIcon icon={faUser}/>
                    </div>
                    <div className='chat-text'>
                        <h4>Susan</h4>
                        <p>is now following you</p>
                    </div>
                    <div className='chat-time'>
                        <p>2 hours ago</p>
                    </div>
                </div>
                <div className='chat'>
                    <div className='chat-icon'>
                        <FontAwesomeIcon icon={faVenusDouble}/>
                    </div>
                    <div className='chat-text'>
                        <h4>Susan</h4>
                        <p>Matched 90% with you</p>
                    </div>
                    <div className='chat-time'>
                        <p>3 hours ago</p>
                    </div>
                </div>
            </div>
            <div className="dashboard-item">
             
            </div>
            <div className="dashboard-item"></div>

        </div>
    )
}

export default Dashboard