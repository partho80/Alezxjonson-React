import React from 'react'

function Portfolio() {
  return (
      <div>
           <section id="portfolio-project" className="portfolio-project sp-80">
        <div className="portfolio-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="portfolio-project-left">
                            <div className="section-top-box text-left">
                                <h2 className="st-title">My Portfolio Project</h2>
                                <p className="st-desc">Volutpat diam ut venenatis tellus in. Mi ipsum faucibus vitae aliquet
                                    nec. Tincidunt eget nullam non nisi est sit amet.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="iso-nav">
                            <ul className="isotope-btn-wrapper">
                                <li className="active isotope-btn" data-filter="*">All</li>
                                <li className="isotope-btn" data-filter=".project">Project</li>
                                <li className="isotope-btn" data-filter=".web">Web</li>
                                <li className="isotope-btn" data-filter=".design">Design</li>
                                <li className="isotope-btn" data-filter=".app">App</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="main-iso row">
                    <div className="item web col-md-6 mb-4">
                        <div className="single-port-project dh-container">
                            <div className="single-port-project-top">
                                <img src="assets/img/design-1.jpg" alt=""/>
                                <div className="single-port-project-hover dh-overlay">
                                    <a href="#"><i className="fa-solid fa-link"></i></a>
                                </div>
                            </div>
                            <div className="single-port-project-bottom">
                                <h3 className="port-project-title">3d character design</h3>
                                <p className="port-designer">Design by UXtech</p>
                            </div>
                        </div>
                    </div>
                    <div className="item design project col-md-6 mb-4">
                        <div className="single-port-project dh-container">
                            <div className="single-port-project-top">
                                <img src="assets/img/design-2.jpg" alt=""/>
                                <div className="single-port-project-hover dh-overlay">
                                    <a href="#"><i className="fa-solid fa-link"></i></a>
                                </div>
                            </div>
                            <div className="single-port-project-bottom">
                                <h3 className="port-project-title">Product design</h3>
                                <p className="port-designer">User-Interface design</p>
                            </div>
                        </div>
                    </div>
                    <div className="item app col-md-6 mb-4">
                        <div className="single-port-project dh-container">
                            <div className="single-port-project-top">
                                <img src="assets/img/design-3.jpg" alt=""/>
                                <div className="single-port-project-hover dh-overlay">
                                    <a href="#"><i className="fa-solid fa-link"></i></a>
                                </div>
                            </div>
                            <div className="single-port-project-bottom">
                                <h3 className="port-project-title">Nike Redesign</h3>
                                <p className="port-designer">Product Design</p>
                            </div>
                        </div>
                    </div>
                    <div className="item project web col-md-6 mb-4">
                        <div className="single-port-project dh-container">
                            <div className="single-port-project-top">
                                <img src="assets/img/design-4.jpg" alt=""/>
                                <div className="single-port-project-hover dh-overlay">
                                    <a href="#"><i className="fa-solid fa-link"></i></a>
                                </div>
                            </div>
                            <div className="single-port-project-bottom">
                                <h3 className="port-project-title">Mockup Design</h3>
                                <p className="port-designer">12 left in stock</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Portfolio