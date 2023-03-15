import React from 'react'

function Services() {
  return (
      <div>
         <section id="services" className="services spb-80">
        <div className="services-area">
            <div className="container">
                <div className="section-top-box">
                    <h2 className="st-title">My Awesome Services</h2>
                    <p className="st-desc">Nunc eget lorem dolor sed viverra ipsum. Sed odio morbi quis commodo odio aenean
                        sed viverra ipsum. Sed odio morbi quis commodo </p>
                </div>
                <div className="row services-wrapper">
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div className="single-services">
                            <img className="services-icon" src="assets/img/service-1.svg" alt=""/>
                            <h4 className="service-title">Web Development</h4>
                            <p className="service-text">Nunc eget lorem dolor sed viverra ipsum. Sed morbi quis...</p>
                            <a href="#" className="read-more-btn">Read More<span className="ml-2"><i
                                        className="fa-solid fa-arrow-right"></i></span></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div className="single-services">
                            <img className="services-icon" src="assets/img/service-2.svg" alt=""/>
                            <h4 className="service-title">UI/UX Design</h4>
                            <p className="service-text">Nunc eget lorem dolor sed viverra ipsum. Sed morbi quis...</p>
                            <a href="#" className="read-more-btn">Read More<span className="ml-2"><i
                                        className="fa-solid fa-arrow-right"></i></span></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div className="single-services">
                            <img className="services-icon" src="assets/img/service-3.svg" alt=""/>
                            <h4 className="service-title">Branding Design</h4>
                            <p className="service-text">Nunc eget lorem dolor sed viverra ipsum. Sed morbi quis...</p>
                            <a href="#" className="read-more-btn">Read More<span className="ml-2"><i
                                        className="fa-solid fa-arrow-right"></i></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>  
    </div>
  )
}

export default Services