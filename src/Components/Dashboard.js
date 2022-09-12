import React, { state, useEffect } from "react"
import "./Dashboard.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChartSimple, faGlobe, faGear, faCircleInfo, faContactBook, faFolder, faRightFromBracket, faVenusDouble } from '@fortawesome/free-solid-svg-icons'
import ProgressIcon from "./ProgressIcon"
import { useHistory } from "react-router-dom"

function Dashboard({}) {
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

    let history = useHistory()

    function handleFollow(){
        history.push("/dashboard/follow")
    }
    // const [users, setUsers] = useState([])
    // useEffect(() => {
    //     fetch("http://localhost:9393/men")
    //     .then((r) => r.json())
    //     .then((users) => setUsers(users))
    // }, {})
    return (
        <div className="dashboard">
            <div className="dashboard-item">
                <div className="main-menu" style={{display: "flex", flexDirection: "column"}}>
                    <h3 style={{color: "#9d2e3c"}}>Main Menu</h3>
                    <div className="main-dashboard" style={{display: "flex", marginTop:"20px"}}>
                        <FontAwesomeIcon icon={faChartSimple} />
                        <p style={{marginLeft: "20px"}}>Dashboard</p>
                    </div>
                    
                    <div className="main-following" style={{display: "flex", marginTop:"20px"}}>
                        <FontAwesomeIcon icon={faVenusDouble} />
                        <p style={{marginLeft: "20px", cursor: "pointer"}} onClick={handleFollow}>Following</p>
                    </div>
                    <div className="main-new" style={{display: "flex", marginTop:"20px"}}>
                        <FontAwesomeIcon icon={faGlobe} />
                        <p style={{marginLeft: "20px"}}>New & Online</p>
                    </div>
                    <div className="main-request" style={{display: "flex", marginTop:"20px"}}>
                        <FontAwesomeIcon icon={faFolder} />
                        <p style={{marginLeft: "20px"}}>Chat Request</p>
                    </div>
                    <div className="main-contacts" style={{display: "flex", marginTop:"20px"}}>
                        <FontAwesomeIcon icon={faContactBook} />
                        <p style={{marginLeft: "20px"}}>Contacts</p>
                    </div>
                </div>

                <div className="support" style={{display: "flex", flexDirection: "column", marginTop: "20px"}}>
                    <h3 style={{color: "#9d2e3c"}}>Support</h3>
                    <div className="settings" style={{display: "flex", marginTop: "20px"}}>
                        <FontAwesomeIcon icon={faGear} />
                        <p style={{marginLeft: "20px"}}>Settings</p>
                    </div>
                    <div className="help" style={{display: "flex", marginTop: "20px"}}>
                        <FontAwesomeIcon icon={faCircleInfo}/>
                        <p style={{marginLeft: "20px"}}>Help</p>
                    </div>
                    <div className="logout" style={{display: "flex", marginTop: "20px"}}>
                        <FontAwesomeIcon icon={faRightFromBracket}/>
                        <p style={{marginLeft: "20px"}}>Logout</p>
                    </div>

                </div>

            </div>
            <div className="dashboard-item">
                <div className='panel' style={{ backgroundImage: "url('profile.webp')" }}>
                    <h3 style={{ color: "#120A24", marginTop: "200px" }}>Susan,24</h3>
                </div>
                <div className='panel' style={{ backgroundImage: "url('profile.webp')" }}>
                    <h3 style={{ color: "#120A24", marginTop: "200px" }}>Susan,24</h3>
                </div>
                <div className='panel' style={{ backgroundImage: "url('profile.webp')" }}>
                    <h3 style={{ color: "#120A24", marginTop: "200px" }}>Susan,24</h3>
                </div>
                <div className='panel' style={{ backgroundImage: "url('profile.webp')" }}>
                    <h3 style={{ color: "#120A24", marginTop: "200px" }}>Susan,24</h3>
                </div>


            </div>
            <div className="dashboard-item">
                <h3>Following</h3>
                <div className='chat'>
                    <div className='chat-icon'>

                        <img src="profile.webp" style={{ width: "60px", height: "60px", }} />

                    </div>
                    <div className='chat-text'>
                        <h4>Susan</h4>
                        <p>matched with you</p>
                    </div>
                    <div className='chat-time'>
                        <p>2 hours ago</p>
                    </div>
                </div>
                <div className='chat'>
                    <div className='chat-icon'>

                        <img src="profile.webp" style={{ width: "60px", height: "60px", }} />

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
                        <img src="profile.webp" style={{ width: "60px", height: "60px", }} />
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
                        <img src="profile.webp" style={{ width: "60px", height: "60px", }} />
                    </div>
                    <div className='chat-text'>
                        <h4>Susan</h4>
                        <p>is now following you</p>
                    </div>
                    <div className='chat-time'>
                        <p>2 hours ago</p>
                    </div>
                </div>

            </div>

            <div className="dashboard-item">
                <h4 style={{ color: "pink" }}>Your profile is 100% complete</h4>
                <ProgressIcon />

            </div>
            <div className="dashboard-item" style={{ padding: "10px", alignItems: "center", justifyContent: "center" }}>
                <h4>"{quotes[Math.floor(Math.random() * quotes.length)]}"</h4>
            </div>


        </div>
    )
}

export default Dashboard