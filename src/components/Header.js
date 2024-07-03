import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/nerds-la-logo.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav>
        <div className="logo">
        <Link to="/"><img src={logo} alt="Nerds LA Logo" /></Link>
        </div>
        <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About Us</Link></li>
          <li><Link to="/donate" onClick={toggleMenu}>Donate</Link></li>
          <li><Link to="/events" onClick={toggleMenu}>Upcoming Events</Link></li>
          <li><Link to="/resources" onClick={toggleMenu}>Resources</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;