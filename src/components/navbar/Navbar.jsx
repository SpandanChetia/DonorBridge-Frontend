import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Dropdown from "./Dropdown";
import logoImage from '../home/img/logo.svg';

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const handleMouseEnter = () => {
    setDropdown(true);
  };
  const handleMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li key="home">
          <Link to='/' className={styles.logoLink}>
            <img src={logoImage} className={styles.logo} alt="DonorBridge Logo" />
          </Link>
        </li>
        <li key="donate">
          <button
            className={styles.button}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Donate
          </button>
          {dropdown && (
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Dropdown />
            </div>
          )}
        </li>
        <li key="sign-in">
          <Link to="signin">
            <button className={styles.button}>Sign In</button>
          </Link>
        </li>
        <li key="fundraiser">
          <button className={styles.button}>Start a Fundraiser</button>
        </li>
      </ul>
    </nav>
  );
}
