import React from "react"
import './Header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHandHoldingHeart, faSearch, faMessage, faAddressBook, faCircleInfo, faGear, faGlobe, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'


function Header({user}) {
    console.log(user)
    
    return (
        <div className="header">
            <div className="logo">
                <h3>HoldMe<FontAwesomeIcon icon={faHandHoldingHeart} style={{ marginLeft: "10" }} /></h3>
            </div>

            <div className="search">
                <form className="searchbar">
                    <input type="text" placeholder="Search user" />
                    <button><FontAwesomeIcon icon={faSearch} /></button>
                </form>
            </div>

            <div className="header-profile">
                <p>Hi</p>
                <img src='profile.webp'></img>
            </div>
        </div>
    )
}

export default Header