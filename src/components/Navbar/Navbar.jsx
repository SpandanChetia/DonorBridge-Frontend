import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Dropdown from "./Dropdown";

export default function Navbar() {
  const [dropdown, setdropdown] = useState(false);
  const handleMouseEnter = () => {
    setdropdown(true);
  };
  const handleMouseLeave = () => {
    setdropdown(false);
  };
  return (
    <>
      <nav className={styles.navbar}>
        <ul>
          <li key="home">
            <button className={styles.logo}>BRIGHTFUND</button>
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
    </>
  );
}
