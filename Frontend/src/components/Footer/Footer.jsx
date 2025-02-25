import React from 'react'
import './Footer.css'
import logo from '../../assets/logos/logo.png';
import { BsLinkedin } from "react-icons/bs";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { TbBrandYoutubeFilled } from "react-icons/tb";

const Footer = () => {
    return (
        <>
            <footer>
                <div>
                    <h2>Membership</h2>
                    <a href="">Join</a>
                    <a href="">Benefits</a>
                </div>
                <div>
                    <div className='tag'>
                        <img src={logo}></img>
                        <h2>IIIT Bhopal</h2>
                        <h3>COMPUTER SOCIETY</h3>
                        <p>STUDENT BRANCH</p>
                    </div>
                    <div className='social-icons'>
                        <a href='https://x.com/Ieeecsiiitbpl' target="_blank"><FaSquareTwitter size={30} /></a>
                        <a href='https://www.linkedin.com/company/ieee-cs-student-branch-chapter-iiit-bhopal/' target="_blank"><BsLinkedin size={27} /></a>
                        <a href='https://www.instagram.com/ieee_cs_iiitbpl?igsh=bjhia3F1N21rbHMw' target="_blank"><PiInstagramLogoFill size={32} /></a>
                        <a href='https://www.facebook.com/share/1DBYRfv8HA/' target="_blank"><FaSquareFacebook size={30} /></a>
                        <a href='https://www.youtube.com/@IIITBhopalIEEECS' target="_blank"><TbBrandYoutubeFilled size={34} /></a>
                    </div>
                </div>
                <div>
                    <h2>Resources</h2>
                    <a href="">Magazines (or Journals)</a>
                    <a href="">Conferences</a>
                    <a href="">Technical Careers</a>
                    <a href="">Volunteer</a>
                </div>
            </footer>
            <div className="credits">
                <p>© 2025 IEEE Computer Society, IIIT Bhopal. All rights reserved.</p>
                <p>Designed By - Vishisht, Shubhojeet | Developed By - Priya, Vishisht</p>
            </div>
        </>
    )
}

export default Footer