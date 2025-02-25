import React, { useEffect, useState } from 'react';
import './Carousel.css';
import next from '../../assets/buttons/next.svg';
import back from '../../assets/buttons/back.svg';
import PhyBalls from '../../components/About/PhyBalls.jsx';

async function getEvents() {
    const response = await fetch('/api/events');
    const eventsArray = await response.json();
    return eventsArray;
}

const Carousel = () => {
    const [eventsArray, setEventsArray] = useState([]);
    const [ImgIndex, setImgIndex] = useState(0);

    useEffect(() => {
        async function fetchData() {
            const data = await getEvents();
            setEventsArray(data);
        }

        fetchData();
    }, []);

    if (eventsArray.length === 0) {
        return <div>Loading...</div>;
    }

    const imgArr = eventsArray.map(({ img, id }) => (
        <img src={img} key={id} style={{ transform: `translateX(${-100 * ImgIndex}%)` }} />
    ));

    return (
        <div className="eventCarousel">
            <PhyBalls />
            <div className="carouselBG">
                {imgArr}
            </div>
            <div className="eventDescription">
                <h2>{eventsArray[ImgIndex]?.headline}</h2>
                <p>{eventsArray[ImgIndex]?.description}</p>
            </div>
            <SmallSlides ImgIndex={ImgIndex} setImgIndex={setImgIndex} eventsArray={eventsArray} />
        </div>
    );
};

const SmallSlides = ({ ImgIndex, setImgIndex, eventsArray }) => {
    const imgArr = eventsArray.map(({ img, id }, index) => {
        return (
            <img src={img} key={id} style={{ translate: `${-100 * ImgIndex}%` }} />
        )
    });
    function showNextImage() {
        setImgIndex((index) => {
            if (index === eventsArray.length - 1) return 0;
            return index + 1;
        });
    }

    function showPrevImage() {
        setImgIndex((index) => {
            if (index === 0) return eventsArray.length - 1;
            return index - 1;
        });
    }

    return (
        <div className="SmallSlide">
            {imgArr}
            <button style={{ left: 0, bottom: 0 }} onClick={showPrevImage}>
                <img src={back} alt="Previous" />
            </button>
            <button style={{ right: 0, bottom: 0 }} onClick={showNextImage}>
                <img src={next} alt="Next" />
            </button>
        </div>
    );
};

export default Carousel;
