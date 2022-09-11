import React from 'react'
import './Profile.css'

function Profile() {
    return (
        <div className='profile-page'>
            <div className='prof-left'>
                <button className='top-edit'>
                    Edit
                </button>
                <h2>Profile</h2>
                <div className='prof-top'>
                    <img src='profile.jpeg' />
                    <h3>Susan O</h3>
                    <p>23</p>
                </div>

                <div className='prof-connect'>
                    <div className='conn-photo'>
                        <h3>4</h3>
                        <p>posts</p>
                    </div>
                    <div className='line'></div>
                    <div className='conn-following'>
                        <h3>4</h3>
                        <p>following</p>
                    </div>
                    <div className='line'></div>
                    <div className='conn-likes'>
                        <h3>4</h3>
                        <p>likes</p>
                    </div>
                </div>
                <div className='prof-bio'>

                    <p>Out of the night that covers me,
                        Black as the pit from pole to pole,
                        I thank whatever gods may be
                        For my unconquerable soul.


                        How charged with punishments the scroll,
                        I am the master of my fate,
                        I am the captain of my soul.
                    </p>
                </div>
                <div className='left-edits'>
                    <button>Upload New Avatar</button>
                    <button>Delete</button>
                </div>
            </div>

            <div className='prof-right'>
                <div className='right-heading'>
                    <h2>Basic Info</h2>
                    <div className='right-buttons'>
                        <button>Cancel</button>
                        <button>Save</button>
                    </div>
                </div>
                <div className='basic-info'>
                    <form>
                        <div className='basic-first'>
                            <input type="text" placeholder='First Name' />
                            <input type="text" placeholder='Last Name' />
                        </div>

                        <div className='basic-second'>
                            <label>Gender:</label>
                            <select name="gender" id="gender">
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                            <label>Location:</label>
                            <select name="location" id="location">
                                <option>Westlands</option>
                                <option>Dagoretti North</option>
                                <option>Dagoretti South</option>
                                <option>Langata</option>
                            </select>

                        </div>
                    </form>
                </div>

                <div className='about-me'>
                    <h2>About Me</h2>
                    <form>
                        <h3><label>Bio:</label></h3>
                        <textarea id="bio" maxLength="200" ></textarea>
                    </form>
                </div>

                <div className='preference'>
                    <h2>Preferences</h2>
                    <form>
                        <div className='pref-one'>
                           <input type="checkbox" value="Calls" id="call"/> 
                           <label for="call">Call</label>
                           <input type="checkbox" value="Text" id="text"/> 
                           <label for="text">Texts</label>
                           
                        </div>

                        <div className='pref-two'>
                           <input type="checkbox" value="Early" id="early"/> 
                           <label for="call">Early-Riser</label>
                           <input type="checkbox" value="Night" id="night"/> 
                           <label for="text">Night-Owl</label>
                          
                        </div>

                        <div className='pref-three'>
                           <input type="checkbox" value="City" id="city"/> 
                           <label for="call">City</label>
                           <input type="checkbox" value="Country" id="country"/> 
                           <label for="text">Countryside</label>
                          
                        </div>

                        <div className='pref-four'>
                           <input type="checkbox" value="Intro" id="intro"/> 
                           <label for="call">Introverted</label>
                           <input type="checkbox" value="Extro" id="extro"/> 
                           <label for="text">Extrovert</label>
                          
                        </div>

                        <div className='pref-five'>
                           <input type="checkbox" value="Early" id="early"/> 
                           <label for="call">Early-Riser</label>
                           <input type="checkbox" value="Night" id="night"/> 
                           <label for="text">Night-Owl</label>
                         
                        </div>
                    </form>
                </div>
            </div>





        </div>
    )
}

export default Profile