import React, { useState } from 'react'
import './Home.css'
import background from '../../assets/background.jpg';
import next from '../../assets/buttons/next.svg'
import back from '../../assets/buttons/back.svg'
import posterGD from '../../assets/posterGD.jpg'
import comingSoon from '../../assets/comingSoon.jpg'

const upcomingEvents = [{
  id: 1,
  headline: "Logo Competition",
  description: "Get ready to unleash your creativity! We're excited to announce our logo design competition, where you can showcase your skills and win amazing prizes! Whether you're a professional designer or just starting out, this is your chance to shine. So, put on your thinking cap, get creative, and submit your best design.",
  img: posterGD
},
{
  id: 2,
  headline: "Launching Soon",
  description: "Get ready for a new era of tech at IIIT Bhopal! 💻 The IEEE Computer Society SBC is launching soon, bringing you exciting workshops, tech talks, and hands-on projects. Whether you're a coding enthusiast or just curious, this is the place to be! Stay tuned for more updates!",
  img: comingSoon
}];

const HomeCarouselImages = ({ ImgIndex, setImgIndex }) => {
  const imgArr = upcomingEvents.map(({ img, id }, index) => {
    return (
      <img src={img} key={id} style={{ translate: `${-100 * ImgIndex}%` }} />
    )
  });

  function showNextImage() {
    setImgIndex(index => {
      if (index === imgArr.length - 1) return 0
      return index + 1
    })
  }

  function showPrevImage() {
    setImgIndex(index => {
      if (index === 0) return imgArr.length - 1
      return index - 1
    })
  }

  return (
    <div className="homeCarousel">
      {imgArr}
      <button style={{ left: 0, bottom: 0 }} onClick={showPrevImage}>
        <img src={back} alt="" />
      </button>
      <button style={{ right: 0, bottom: 0 }} onClick={showNextImage}>
        <img src={next} alt="" />
      </button>
    </div>
  )
}

const Home = () => {
  const [ImgIndex, setImgIndex] = useState(0);
  return (
    <section className='home' style={{ marginTop: 0 }}>
      <div className="home-background">
        <img src={background} alt="BG-Img" />
      </div>
      <div className='home-box'>
        <div className='home-text'>
          <h1>{upcomingEvents[ImgIndex].headline}</h1>
          <p>{upcomingEvents[ImgIndex].description}</p>
        </div>
        <div className="home-carousel">
          <HomeCarouselImages ImgIndex={ImgIndex} setImgIndex={setImgIndex} />
        </div>
      </div>
    </section>
  )
}

export default Home