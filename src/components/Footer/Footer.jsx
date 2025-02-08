import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png';
import { BsLinkedin } from "react-icons/bs";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { TbBrandYoutubeFilled } from "react-icons/tb";

const Footer = () => {
  return (
    <div className='footer'>
    <div className='sec1'>
    <div className='tag'>
        <img src={logo}></img>
        <h2>IIIT Bhopal</h2>
        <h3>COMPUTER SOCIETY</h3>
        <p>STUDENT BRANCH</p>
    </div>
        <div className='social-icons'>
            <a href='https://x.com/Ieeecsiiitbpl' target="_blank"><FaSquareTwitter size={30}/></a>
            <a href='https://www.linkedin.com/company/ieee-cs-student-branch-chapter-iiit-bhopal/' target="_blank"><BsLinkedin size={27}/></a>
            <a href='https://www.instagram.com/ieee_cs_iiitbpl?igsh=bjhia3F1N21rbHMw' target="_blank"><PiInstagramLogoFill size={32}/></a>
            <a href='https://www.facebook.com/share/1DBYRfv8HA/' target="_blank"><FaSquareFacebook size={30}/></a>
            <a href='https://www.youtube.com/@IIITBhopalIEEECS' target="_blank"><TbBrandYoutubeFilled size={34}/></a>
        </div>
    </div>

    <div className='sec2'>
    <h3>Membership</h3>
    <ul>
        <li><a href="#">Join</a></li>
        <li><a href="#">Renew</a></li>
        <li><a href="#">Benefits</a></li>
        <li><a href="#">IEEE Collabratec</a></li>
        <li><a href="mailto:security@ieee.org">Report cybersecurity concerns</a></li>
    </ul>
    </div>

    <div className='sec3'>
    <h3>Digital Library</h3>
            <ul>
                <li><a href="#">Magazines</a></li>
                <li><a href="#">Journals</a></li>
                <li><a href="#">Conference Proceedings</a></li>
                <li><a href="#">Video Library</a></li>
                <li><a href="#">Librarian Resources</a></li>
            </ul>
    </div>

    <div className='sec4'>
    <h3>Get Involved</h3>
            <ul>
                <li><a href="#">Conferences</a></li>
                <li><a href="#">Local activities</a></li>
                <li><a href="#">Publishing</a></li>
                <li><a href="#">Societies</a></li>
                <li><a href="#">Councils</a></li>
                <li><a href="#">Standards</a></li>
                <li><a href="#">Technical careers</a></li>
                <li><a href="#">Volunteer</a></li>
            </ul>
    </div>
    </div>
        
  )
}

export default Footer