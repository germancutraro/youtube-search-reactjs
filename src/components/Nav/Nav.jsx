import React from 'react';
import YoutubeLogo from '../../assets/images/youtube-logo.png';
import styles from './Nav.module.css';

const Nav = props => (
  <div className={styles.menu}>
    <nav className={styles.main_nav}>
      <a href='/'>
        <img
          src={YoutubeLogo}
          alt='Youtube Logo'
          className={styles.youtube_logo}
        />
      </a>
      {props.children}
    </nav>
  </div>
);

export default React.memo(Nav);
