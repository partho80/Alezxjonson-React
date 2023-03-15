import React from 'react'
import Biography from '../component/Biography/Biography'
import Blog from '../component/Blog/Blog'
import Experiance from '../component/Experiance/Experiance'
import Hamburger from '../component/Hambarger/Hamburger'
import Hero from '../component/Hero/Hero'
import HomeContact from '../component/Contact/HomeContact'
import Portfolio from '../component/Portfolio/Portfolio'
import Services from '../component/Services/Services'
import Testimonial from '../component/Testimonial/Testimonial'
import Header from '../component/Header/Header'

function Home() {
  return (
    <div>
          
          <Hero />
          <Hamburger />
          <Biography />
          <Services />
          <Experiance />
          <Portfolio />
          <Testimonial />
          <Blog />
          <HomeContact/>
          
      </div>
  )
}

export default Home