import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

export const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h2>🎓 Welcome to World Best Education Under the University</h2>
            <p>Unlock the doors to excellence with world-class education! Our university is dedicated to shaping bright minds with top-tier courses, expert faculty, and cutting-edge resources. Whether you aspire to innovate, lead, or excel in your field, we provide the perfect foundation for your success.</p>
                  <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}
