import React from 'react'
import "../assets/Header.css";

function Header() {
  return (
    <div className="nav">
        <div className="left_nav">
            <img src="/images/logo.png" alt="logo" />
            <p>UNDER THE AIGES OF DOSW</p>
        </div>
        <div className="right_nav">
            <ul>
                <li>HOME</li>
                <li>EVENTS</li>
                <li>MOVIES</li>
                <li>TEAM</li>
                <li>FAQS</li>
            </ul>
        </div>
    </div>

  )
}

export default Header;