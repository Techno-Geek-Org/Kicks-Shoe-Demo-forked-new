import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div>
      <div className='hero'>
        <h1>DO IT <span>RIGHT</span></h1>
      </div>
      <div className="hero-container">
        <div className="hero-content-left">
          <h2>NIKE AIR MAX</h2>
          <p>Nike introducing the new air max for <br /> everyone's comfort</p>
          <button>SHOP NOW</button>
        </div>
        <div className="hero-content-right">
          <img src="/assets/Rectangle1.jpg" alt="" />
          <img className='img2' src="/assets/Rectangle2.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero
