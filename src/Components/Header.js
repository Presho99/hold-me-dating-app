import React from "react"
import './Header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHandHoldingHeart, faSearch, faMessage, faAddressBook, faCircleInfo, faGear, faGlobe, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import {femaleUrls, maleUrls} from "./data.js"

function Header({user}) {
    console.log(user)
    let image = ""

    if(user.gender === "male"){
        image = maleUrls[Math.floor(Math.random() * maleUrls.length)]

    }else {
        image = femaleUrls[Math.floor(Math.random() * femaleUrls.length)]
    }
    
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
                <p>Hi, {user.first_name}</p>
                <img src={image}></img>
            </div>
        </div>
    )
}

export default Header