import React, {state, useEffect} from "react"
import "./Dashboard.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faVenusDouble } from '@fortawesome/free-solid-svg-icons'
import ProgressIcon from "./ProgressIcon"

function Dashboard() {
    const quotes = [
        "I crave a love that drowns oceans",
        "I fell for you and I am still falling",
        "You make my heart smile",
        "Distance can't stop what's meant to be",
        "I have looked at you in millions of ways and I have loved you in each",
        "You give me the kind of feelings people write novels about",
        "You are the best thing I never planned",
        "I am jealous of everybody, who can see you everyday",
        "Thank you for reminding me what butterflies feel like",
        "I am mine before I am ever anyone else's"

    ]
    // const [users, setUsers] = useState([])
    // useEffect(() => {
    //     fetch("http://localhost:9393/men")
    //     .then((r) => r.json())
    //     .then((users) => setUsers(users))
    // }, {})
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
            <div className="dashboard-item" style={{padding: "10px", alignItems: "center", justifyContent: "center"}}>
             <h4>{quotes[Math.floor(Math.random() * quotes.length)]}</h4>
            </div>
            <div className="dashboard-item"></div>

        </div>
    )
}

export default Dashboard