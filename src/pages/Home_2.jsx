import React from 'react'
import Biography from '../component/Biography/Biography'
import Blog from '../component/Blog/Blog'
import Header from '../component/Header/Header'
import Hero_2 from '../component/Hero/Hero_2'
import Hire from '../component/Hire/Hire'
import Portfolio_2 from '../component/Portfolio/Portfolio_2'
import Services_2 from '../component/Services/Services_2'

function Home_2() {
  return (
      <div>
        
          <Hero_2 />
          <Biography />
          <Services_2 />
          <Portfolio_2 />
          <Blog />
          <Hire/>
    </div>
  )
}

export default Home_2