import React, { Component } from 'react';
import styles from './styles.module.scss';
import logo from './logo-white.png';
import informMeLogo from './inform-me-logo.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} className={styles.infotrackLogo}></img>
      <img src={informMeLogo} className={styles.informMeLogo}></img>
    </header>
  )
}
export default Header;
