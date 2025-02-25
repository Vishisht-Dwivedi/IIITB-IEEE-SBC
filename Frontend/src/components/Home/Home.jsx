import React, { useState, useEffect } from 'react'
import './Home.css'
import background from '../../assets/background.jpg';
import next from '../../assets/buttons/next.svg'
import back from '../../assets/buttons/back.svg'

async function getUpcomingEvents() {
  const response = await fetch('/api/upcoming-events');
  const eventsArray = await response.json();
  return eventsArray;
}

const HomeCarouselImages = ({ ImgIndex, setImgIndex, eventsArray }) => {
  const imgArr = eventsArray.map(({ img, id }, index) => {
    return (
      <img src={img} key={id} style={{ translate: `${-100 * ImgIndex}%` }} />
    )
  });

  function showNextImage() {
    setImgIndex(index => {
      if (index === imgArr.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImage() {
    setImgIndex(index => {
      if (index === 0) return imgArr.length - 1;
      return index - 1;
    });
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
  const [eventsArray, setEventsArray] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getUpcomingEvents();
      setEventsArray(data);
    }

    fetchData();
  }, []);

  if (eventsArray.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <section className='home' style={{ marginTop: 0 }}>
      <div className="home-background">
        <img src={background} alt="BG-Img" />
      </div>
      <div className='home-box'>
        <div className='home-text'>
          <h1>{eventsArray[ImgIndex].headline}</h1>
          <p>{eventsArray[ImgIndex].description}</p>
        </div>
        <div className="home-carousel">
          <HomeCarouselImages ImgIndex={ImgIndex} setImgIndex={setImgIndex} eventsArray={eventsArray} />
        </div>
      </div>
    </section>
  )
}

export default Home;
