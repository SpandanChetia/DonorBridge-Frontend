import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    const buttonClass = 'button'; 

    return (
        <>
            <nav className="navbar">
                <ul>
                    <li key="home">
                        <button className="logo">BRIGHTFUND</button>
                    </li>
                    <li key="donate">
                        <button className={buttonClass}>Donate</button>
                    </li>
                    <li key="sign-in">
                        <button className={buttonClass}>Sign In</button>
                    </li>
                    <li key="fundraiser">
                        <Link to='/signin'><button className={buttonClass}>Start a Fundraiser</button></Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
