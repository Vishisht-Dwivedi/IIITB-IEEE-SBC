import React, { useState } from 'react'
import './Carousel.css'
import img1 from '../../assets/iiitbopal.png'
import img2 from '../../assets/inog.jpg'
import next from '../../assets/buttons/next.svg'
import back from '../../assets/buttons/back.svg'
const eventsArray = [{
    id: 1,
    headline: "Hackathons",
    description: "A hackathon, also known as a codefest, is a social coding event that brings computer programmers and other interested people together to improve upon or build a new software program The word hackathon is a portmanteau of the words hacker, which means clever programmer, and marathon, an event marked by endurance. The concept of the hackathon, also called a hack day or hack fest, was born out of the open source community. The first event labeled a hackathon was the OpenBSD Hackathon in Calgary, Canada, on June 4, 1999.",
    img: img1
},
{
    id: 2,
    headline: "Inaugration",
    description: "I do solemnly swear (or affirm) that I will support and defend the Constitution of the United States against all enemies, foreign and domestic; that I will bear true faith and allegiance to the same; that I take this obligation freely, without any mental reservation or purpose of evasion; and that I will well and faithfully discharge the duties of the office on which I am about to enter: So help me God.",
    img: img2
}];

const Carousel = () => {
    const [ImgIndex, setImgIndex] = useState(0);
    const imgArr = eventsArray.map(({ img, id }, index) => {
        return (
            <img src={img} key={id} style={{ translate: `${-100 * ImgIndex}%` }} />
        )
    });
    return (
        <div className="eventCarousel">
            <canvas className="canvas"></canvas>
            <div className="carouselBG">
                {imgArr}
            </div>
            <div className="eventDescription">
                <h2>
                    {eventsArray[ImgIndex].headline}
                </h2>
                <p>
                    {eventsArray[ImgIndex].description}
                </p>
            </div>
            <SmallSlides ImgIndex={ImgIndex} setImgIndex={setImgIndex} />
        </div>
    )
}

const SmallSlides = ({ ImgIndex, setImgIndex }) => {
    const imgArr = eventsArray.map(({ img, id }, index) => {
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
        <div className="SmallSlide">
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

export default Carousel;
