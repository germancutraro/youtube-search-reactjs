import React from "react";
import YoutubeLogo from "./images/youtube-logo.png";
import "./Nav.css";

const Nav = props => {
  return (
    <div className="menu">
      <nav className="main-nav">
        <a href="/">
          <img src={YoutubeLogo} alt="Youtube Logo" className="youtube-logo" />
        </a>
        {props.children}
      </nav>
    </div>
  );
};

export default Nav;
