import React, { useState } from 'react';
import './Join.css';
import { FaInstagram } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { MdMailOutline } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { useForm } from "react-hook-form";

const socialLinks = [
  { href: 'https://x.com/Ieeecsiiitbpl', icon: <FaSquareTwitter size={30} /> },
  { href: 'https://www.linkedin.com/company/ieee-cs-student-branch-chapter-iiit-bhopal/', icon: <BsLinkedin size={27} /> },
  { href: 'https://www.instagram.com/ieee_cs_iiitbpl?igsh=bjhia3F1N21rbHMw', icon: <PiInstagramLogoFill size={32} /> },
  { href: 'https://www.facebook.com/share/1DBYRfv8HA/', icon: <FaSquareFacebook size={30} /> },
  { href: 'https://www.youtube.com/@IIITBhopalIEEECS', icon: <TbBrandYoutubeFilled size={34} /> }
];

const Join = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.text();
      console.log(result);

      if (response.ok) {
        alert('Message sent successfully!');
        reset();
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error sending your message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className='join'>
        <button>Join IEEE Today</button>
      </div>
      <section className='Joins' id="Joins">
        <div className='form_wrapper'>
          <div className='details'>
            <h2>Contact Us</h2>
            <div className='media'>
              <a href='mailto:iiitbiee.org'><MdMailOutline size={25} /><span>iiitbiee.org</span></a>
            </div>
            <div className='media'>
              <a href='https://www.instagram.com/ieee_cs_iiitbpl' target="_blank"><FaInstagram size={25} /><span>ieee_cs_iiitbpl</span></a>
            </div>
            <div className='media'>
              <a href='https://www.google.com/maps?q=NTB,Maulana+Azad+National+Institute+of+Technology,Bhopal' target="_blank"><GrLocation size={25} /><span>NTB, Maulana Azad National Institute of Technology, Bhopal</span></a>
            </div>
            <div className='map'>
              <iframe title="Location Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.7060756014343!2d77.40851199999999!3d23.217379900000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c42e585355ba1%3A0x7f9bd71e86c1f462!2sNEW%20TEACHING%20BLOCK%20(N.T.B)!5e0!3m2!1sen!2sin!4v1738944713285!5m2!1sen!2sin" allowFullScreen loading="lazy"></iframe>
            </div>
            <div className='icon'>
              {socialLinks.map(({ href, icon }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer">{icon}</a>
              ))}
            </div>
          </div>
          <form className='form' onSubmit={handleSubmit(onSubmit)}>
            <h2>Get in Touch</h2>
            <div className='name'>
              <input type="text" placeholder="Your Name" {...register("name", { required: true })} />
              {errors.name && <span className='error'>Please enter your name.</span>}
            </div>
            <div className='name'>
              <input type="email" placeholder="Your Email" {...register("email", { required: true })} />
              {errors.email && <span className='error'>Please enter a valid email.</span>}
            </div>
            <div className='msg'>
              <textarea placeholder="Message" {...register("message", { required: true })} />
              {errors.message && <span className='error'>Please enter a message.</span>}
            </div>
            <button type="submit" className="btn" disabled={isSubmitting}>Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Join;
