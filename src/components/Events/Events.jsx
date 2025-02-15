import React from 'react'
import './Events.css'
import Carousel from './Carousel.jsx'

const Events = () => {
  return (
    <section className="Events" id="Events">
      <div className="Heading">
        <h2>Events</h2>
      </div>
      <div className="eventCarousel">
        <Carousel />
      </div>
    </section>
  )
}

export default Events