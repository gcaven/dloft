import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import styles from './styles.module.scss';

const Header = ({ location }) => (
  <header className={styles.header}>
    <div className={styles.navList}>
      <Link className={styles.navItem} to="/bio">Hi. I'm Dee</Link>
      <Link className={styles.navItem} to="/play">The joy of play</Link>
      <Link className={styles.navItem} to="/portfolio">Portfolio</Link>
    </div>
    <Link to="/">
      <img className={styles.logo} src={logo} alt="Deanne Loft, RGD"/>
    </Link>
  </header>
);

export default withRouter(Header);
