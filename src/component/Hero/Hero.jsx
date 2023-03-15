import React from 'react'

function Hero() {
  return (
      <div>
           <section id="hero" className="hero">
        <div className="hero-area hero-bg-img">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-4 col-lg-6 mobile-show mb-4">
                        <div className="hero-image-box">
                            <img src="assets/img/hero-img.jpg" alt="" className="hero-img"/>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-6">
                        <div className="hero-area-content">
                            <p className="hero-top-text">say hello,</p>
                            <h1 className="hero-title">I'm a Alezx Joson
                                UX Designer</h1>
                            <p className="hero-text">I am professional designer world-wide. Tempor commode ullamcorper a
                                lacus hello vestibulum. Viverra vitae congue au consequent ac felis. Seed viverra tells
                                in has habitats plate. Aliquam null facilisi egestas.</p>
                            <a href="#" className="btn btn-custom btn-custom-primary">Hire Me <span className="ml-2"><i
                                        className="fa-solid fa-arrow-right"></i></span></a>

                            <div className="social-box">
                                <p className="social-text">Follow me</p>
                                <ul className="social-collection">
                                    <li><a href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></a>
                                    </li>
                                    <li><a href="https://dribbble.com/"><i className="fa-brands fa-dribbble"></i></a></li>
                                    <li><a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>
                                    </li>
                                    <li><a href="https://www.pinterest.com/"><i
                                                className="fa-brands fa-pinterest-p"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 mobile-hide">
                        <div className="hero-image-box">
                            <img src="assets/img/hero-img.jpg" alt="" className="hero-img"/>
                        </div>
                    </div>
                </div>
                <div className="hero-arrow">
                    <p><a href="#biography"><i className="fa-solid fa-arrow-down-long"></i></a></p>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Hero