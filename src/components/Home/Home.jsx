import React from 'react'
import './Home.css'
import background from '../../assets/background.jpg';
const Home = () => {
  return (
    <section className='home'>
      <div className="home-background">
        <img src={background} alt="BG-Img" />
      </div>
      <div className='home-box'>
        <div className="home-image">

        </div>
        <div className='home-text'>
          <h1>IEEE COMPUTER SOCIETY</h1>
          <p>The IEEE Computer Society at IIIT Bhopal is a dynamic student community
            fostering innovation in computing. It organizes workshops, hackathons,
            and seminars, providing a platform for students to enhance technical skills,
            collaborate on projects, and engage with industry experts.</p>
        </div>
        <div className='posters'></div>
      </div>
    </section>
  )
}

export default Home