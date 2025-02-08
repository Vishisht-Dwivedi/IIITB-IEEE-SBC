import React from 'react'
import './Events.css'
import Carousel from './Carousel.jsx'

const Events = () => {
  return (
    <section className="Events">
      <div className="Heading">
        <h1>Events</h1>
      </div>
      <div className="eventCarousel">
        <Carousel />
      </div>
    </section>
  )
}

export default Events