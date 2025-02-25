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
        <li><a href="#">Home</a></li>
        <li><a href="#AboutIIITB">IIIT Bhopal</a></li>
        <li><a href="#AboutIEEE">IEEE</a></li>
        <li><a href="#Events">Events</a></li>
        <li><a href="#Teams">Team</a></li>
        <li><a href="#Joins">Contact Us</a></li>
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
          <li onClick={() => setMenuOpen(false)}><a href="#">Home</a></li>
          <li onClick={() => setMenuOpen(false)}><a href="#AboutIIITB">IIIT Bhopal</a></li>
          <li onClick={() => setMenuOpen(false)}><a href="#AboutIEEE">IEEE</a></li>
          <li onClick={() => setMenuOpen(false)}><a href="#Events">Events</a></li>
          <li onClick={() => setMenuOpen(false)}><a href="#Teams">Team</a></li>
          <li onClick={() => setMenuOpen(false)}><a href="#Joins">Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;