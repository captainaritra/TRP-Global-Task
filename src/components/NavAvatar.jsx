import React from "react";
import "./navavatar.css";
import ProfileImg from "../images/profile.jpg";
function NavAvatar() {
  return (
    <a className="nav-profile" href="/">
      <img src={ProfileImg} alt="Profile" className="profile" />
    </a>
  );
}

export default NavAvatar;
