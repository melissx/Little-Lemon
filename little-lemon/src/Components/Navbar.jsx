import React, { useState } from 'react';
import Logo from "./Images/Logo.svg";

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleMenu = () => {
    setIsToggled(!isToggled);
  };

  return (
    <nav className={`navbar ${isToggled ? "open" : ""}`}>
      {/* logo */}
      <div className="navLogo">
        <img src={Logo} />
      </div>
      {/* navigation links */}
      <div className={`navLinks ${isToggled ? 'active' : ''}`}>
        <ul>
          <li><a href="/">HOME</a></li>
          <li><a href="/">ABOUT</a></li>
          <li><a href="/">MENU</a></li>
          <li><a href="/booking">RESERVATIONS</a></li>
          <li><a href="/">ORDER ONLINE</a></li>
          <li><a href="/">LOGIN</a></li>
        </ul>
      </div>
      {/* hamburger menu */}
      <div className='menuIcon' onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  )
}

export default Navbar;