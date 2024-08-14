import React, { useState } from "react";
import "./NavbarStyles";
import { NavbarStyles } from "./NavbarStyles";
import logo from "../../assets/logo.png";
import SearchIcon from "../../assets/search_icon.svg";
import bellIcon from "../../assets/bell_icon.svg";
import profileImg from "../../assets/profile_img.png";
import caretIcon from "../../assets/caret_icon.svg";

const Navbar = () => {
  const [dropDownVisible, setDropDownVisible] = useState(false);
  return (
    <div style={NavbarStyles.mainContainer}>
      <div style={NavbarStyles.navbarLeft}>
        <img style={NavbarStyles.navbarLeftImg} src={logo} alt="" />
        <ul style={NavbarStyles.ul}>
          <li style={NavbarStyles.li}>Home</li>
          <li style={NavbarStyles.li}>TV-Shows</li>
          <li style={NavbarStyles.li}>Movies</li>
          <li style={NavbarStyles.li}>New & Popular</li>
          <li style={NavbarStyles.li}>My list</li>
          <li style={NavbarStyles.li}>Browse by Languages</li>
        </ul>
      </div>
      <div style={NavbarStyles.navbarRight}>
        <img src={SearchIcon} alt="Search" style={NavbarStyles.icons} />
        <p>Children</p>
        <img src={bellIcon} alt="Search" style={NavbarStyles.icons} />
        <div
          style={NavbarStyles.profile}
          onMouseEnter={() => setDropDownVisible(true)}
          onMouseLeave={() => setDropDownVisible(false)}
        >
          <img src={profileImg} alt="" style={NavbarStyles.profileIcon} />
          <img src={caretIcon} alt="" />
          <div
            style={{
              ...NavbarStyles.dropDown,
              ...(dropDownVisible ? NavbarStyles.dropDownVisible : {}),
            }}
          >
            <p style={NavbarStyles.dropDownPara}>Logout of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
