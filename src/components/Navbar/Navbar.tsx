import React from 'react'
import './NavbarStyles';
import { NavbarStyles } from './NavbarStyles';
import logo from '../../assets/logo.png';
import SearchIcon from '../../assets/search_icon.svg';
import bellIcon from '../../assets/bell_icon.svg'
import profileImg from '../../assets/profile_img.png';
import caretIcon from '../../assets/caret_icon.svg';

const Navbar = () => {
  return (
    <div style={NavbarStyles.mainContainer}>
        <div style={NavbarStyles.navbarLeft}>
            <img style={NavbarStyles.navbarLeftImg} src={logo} alt="" />
            <ul style={NavbarStyles.ul}>
                <li>Home</li>
                <li>TV-Shows</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My list</li>
                <li>Browse by Languages</li>
            </ul>
        </div>
        <div style={NavbarStyles.navbarRight}>
            <img src={SearchIcon} alt="Search" />
            <p>Children</p>
            <img src={bellIcon} alt="Search" />
            <div style={NavbarStyles.profile}>
                <img src={profileImg} alt="" />
                <img src={caretIcon} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Navbar