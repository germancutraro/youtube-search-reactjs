import React from 'react';
import YoutubeLogo from './images/youtube-logo.png';
import './Nav.css';

const Nav = () => {
  return (
    <div className="menu">
      <nav className="main-nav">
        <img src={YoutubeLogo} alt="Youtube Logo" className="youtube-logo"/>
      </nav>
    </div>
  )
};

export default Nav;