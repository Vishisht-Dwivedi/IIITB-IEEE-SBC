import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';
import logo from '../../assets/logos/logo.png';
import logo1 from '../../assets/logo1.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='navbar'>
      <img src={logo} alt='Logo' className='logo' />

      <ul className={menuOpen ? 'nav-links open' : 'nav-links'}>
        <li>Home</li>
        <li>About Us</li>
        <li>Events</li>
        <li>Team</li>
        <li>Contact Us</li>
      </ul>

      <img src={logo1} alt='Logo1' className='logo1' />

      <button className='menu-btn' onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      <div className={menuOpen ? 'mobile-menu open' : 'mobile-menu'}>
        <button className='close-btn' onClick={() => setMenuOpen(false)}>
          <FiX />
        </button>
        <ul>
          <li onClick={() => setMenuOpen(false)}>Home</li>
          <li onClick={() => setMenuOpen(false)}>About Us</li>
          <li onClick={() => setMenuOpen(false)}>Events</li>
          <li onClick={() => setMenuOpen(false)}>Team</li>
          <li onClick={() => setMenuOpen(false)}>Contact Us</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
