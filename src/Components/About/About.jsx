import React from 'react'
import "./About.css"
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}} />
        </div>

        <div className="about-right">
            <h3>🌿 About Our University</h3>

            <p>Welcome to World Best Education Under the University, where excellence and innovation come together. 
              We offer top-notch academic programs, guided by experienced faculty, in a dynamic learning environment.</p>
                  <p>With state-of-the-art facilities, global collaborations, and a commitment to student success, we empower future leaders to make a meaningful impact.

Join us and shape your future today!</p>
                 <ul>🔎 Why Choose Us?
                  <li>World-class curriculum designed for real-world applications.</li>
                  <li>Experienced and dedicated faculty members.</li>
                  <li>Cutting-edge research opportunities.</li>
                  <li>Global exposure through partnerships and exchange programs.</li>
                  <li>Strong focus on career development and placement support.</li>
                 </ul>
        </div>
        </div>
  )
}

export default About