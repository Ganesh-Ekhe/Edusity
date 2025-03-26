import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Hero } from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VoideoPlayer from './Components/VoideoPlayer/VoideoPlayer'


const App = () => {
  const [playState, setPlayState] = useState(false);
  return (
    <div>
     <Navbar/>
     <Hero/>
     <div className="container">
      <Title subTitle='Our Program' title="What We Offer"/>
     <Programs/>
     <About setPlayState={setPlayState}/>
     <Title subTitle='gallery' title="Campus Photos"/>
     <Campus/>
     <Title subTitle='Testimonials' title="what student says"/>
     <Testimonials/>
     <Title subTitle='Contact Us' title="Get In Tuch"/>
     <Contact/>
     <Footer/>
     </div>
     <VoideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App