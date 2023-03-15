import React from 'react'
import Biography from '../component/Biography/Biography'
import Blog from '../component/Blog/Blog'
import Experiance from '../component/Experiance/Experiance'
import Header_4 from '../component/Header/Header_4'
import Hire from '../component/Hire/Hire'
import Portfolio_2 from '../component/Portfolio/Portfolio_2'
import Services from '../component/Services/Services'
import Testimonial from '../component/Testimonial/Testimonial'
import TopBanner from '../component/Topbanner/TopBanner'

function About() {
  return (
      <div>
         
          <TopBanner />
          <Biography/>
          <Services />
          <Experiance />
          <Portfolio_2 />
          <Testimonial />
          <Blog />
          <Hire/>
    </div>
  )
}

export default About