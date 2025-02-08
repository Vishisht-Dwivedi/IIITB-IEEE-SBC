import React from 'react'
import './Navbar.css'
import logo from '../../assets/logos/logo.png'
import logo1 from '../../assets/logo1.png'

const Navbar = () => {
  return (
    <nav className='container'>
      <img src={logo} alt='' className='logo' />
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Events</li>
        <li>Team</li>
        <li>Contact Us</li>
      </ul>
      <img src={logo1} alt='' className='logo1' />
    </nav>
  )
}

export default Navbar