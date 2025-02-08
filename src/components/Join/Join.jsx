import React from 'react'
import './Join.css'
import { FaInstagram } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { MdMailOutline } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { TbBrandYoutubeFilled } from "react-icons/tb";


const Join = () => {
  return (<>
    <div className='join'>
      <button>Join IEEE Today</button>
    </div>
    <section className='Joins'>
      <div className='form_wrapper'>
        <div className='details'>
          <h2>Contact Us</h2>
          <div className='media'>
            <a href='#'><MdMailOutline size={25} /><span>iiitbiee.org</span></a>
          </div>
          <div className='media'>
            <a href='#'><FaInstagram size={25} /><span>ieee_cs_iiitbpl</span></a>
          </div>
          <div className='media'>
            <a href=''><GrLocation size={25} /><span>NTB, Maulana Azad National Institute of Technology, Bhopal</span></a>
          </div>
          <div className='map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.7060756014343!2d77.40851199999999!3d23.217379900000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c42e585355ba1%3A0x7f9bd71e86c1f462!2sNEW%20TEACHING%20BLOCK%20(N.T.B)!5e0!3m2!1sen!2sin!4v1738944713285!5m2!1sen!2sin" allowfullscreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className='icon'>
            <a href='https://x.com/Ieeecsiiitbpl' target="_blank"><FaSquareTwitter size={30} /></a>
            <a href='https://www.linkedin.com/company/ieee-cs-student-branch-chapter-iiit-bhopal/' target="_blank"><BsLinkedin size={27} /></a>
            <a href='https://www.instagram.com/ieee_cs_iiitbpl?igsh=bjhia3F1N21rbHMw' target="_blank"><PiInstagramLogoFill size={32} /></a>
            <a href='https://www.facebook.com/share/1DBYRfv8HA/' target="_blank"><FaSquareFacebook size={30} /></a>
            <a href='https://www.youtube.com/@IIITBhopalIEEECS' target="_blank"><TbBrandYoutubeFilled size={34} /></a>
          </div>
        </div>
        <div className='form'>
          <h2>Get in Touch</h2>
          <div className='name'><input type="text" placeholder="Your Name" required></input></div>
          <div className='name'><input type="email" placeholder="Your Email" required></input></div>
          <div className='msg'><textarea type="text" placeholder="Message" ></textarea></div>
          <button type="button" class="btn"><a href="#">SEND MESSAGE</a></button>
        </div>
      </div>
    </section>
  </>
  )
}
export default Join