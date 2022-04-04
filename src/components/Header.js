import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faBell} from '@fortawesome/free-solid-svg-icons'
import {faMessage} from '@fortawesome/free-solid-svg-icons'

const Header = (props) => {
    const profile = {
        name: 'Rakshith',
        icon: 'https://www.w3schools.com/bootstrap/img_avatar3.png'
    }

    return (
        <div id='header'>
            <div className='searchBar'>
                <input id="searchBox" type="text" placeholder='Search any thing you want'/>
            </div>
            <div className='profile'>
                <a><FontAwesomeIcon icon={faUser} /></a>
                <a><FontAwesomeIcon icon={faBell} /></a>
                <a><FontAwesomeIcon icon={faMessage} /></a>
                <img src={profile.icon} width="25" height="25" />
                <span id="pname">{profile.name}</span>
            </div>
        </div>
    )
}

export default Header