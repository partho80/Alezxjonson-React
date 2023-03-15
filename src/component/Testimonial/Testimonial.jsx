import React from 'react'
import Slider from "react-slick";

function Testimonial() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
            <section id="testimonial" className="testimonial spb-80">
                <div className="testimnial-area">
                    <div className="container">
                        <div className="section-top-box">
                            <h2 className="st-title">What Clients Say About Me</h2>
                            <p className="st-desc">Nunc eget lorem dolor sed viverra ipsum. Sed odio morbi quis commodo odio aenean
                                sed viverra ipsum. Sed odio morbi quis commodo </p>
                        </div>

                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                                <div className="testimonial-wrapper testimonial-slider">
                                    <Slider {...settings}>
                                        <div className="single-testimonial">
                                            <div className="testimonial-content-wrapper">
                                                <div className="testimonial-top">
                                                    <img src="assets/img/quote.png" alt="" className="quote-img" />
                                                    <p className="client-comment">Continually facilitate resource-leveling partnerships
                                                        before error free markets. Quickly seize compelling action items after
                                                        reliable
                                                        solutions. Leveling partnerships before error free markets before error.</p>
                                                </div>
                                                <div className="testimonial-bottom">
                                                    <img src="assets/img/member-1.jpg" alt="" className="testimonial-person-img" />
                                                    <h5 className="testimonial-person-name">Alezx Joson</h5>
                                                    <p className="testimonial-person-position">Web Developer</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-testimonial">
                                            <div className="testimonial-content-wrapper">
                                                <div className="testimonial-top">
                                                    <img src="assets/img/quote.png" alt="" className="quote-img" />
                                                    <p className="client-comment">Continually facilitate resource-leveling partnerships
                                                        before error free markets. Quickly seize compelling action items after
                                                        reliable
                                                        solutions. Leveling partnerships before error free markets before error.</p>
                                                </div>
                                                <div className="testimonial-bottom">
                                                    <img src="assets/img/member-1.jpg" alt="" className="testimonial-person-img" />
                                                    <h5 className="testimonial-person-name">Alezx Joson</h5>
                                                    <p className="testimonial-person-position">Web Developer</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-testimonial">
                                            <div className="testimonial-content-wrapper">
                                                <div className="testimonial-top">
                                                    <img src="assets/img/quote.png" alt="" className="quote-img" />
                                                    <p className="client-comment">Continually facilitate resource-leveling partnerships
                                                        before error free markets. Quickly seize compelling action items after
                                                        reliable
                                                        solutions. Leveling partnerships before error free markets before error.</p>
                                                </div>
                                                <div className="testimonial-bottom">
                                                    <img src="assets/img/member-1.jpg" alt="" className="testimonial-person-img" />
                                                    <h5 className="testimonial-person-name">Alezx Joson</h5>
                                                    <p className="testimonial-person-position">Web Developer</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-testimonial">
                                            <div className="testimonial-content-wrapper">
                                                <div className="testimonial-top">
                                                    <img src="assets/img/quote.png" alt="" className="quote-img" />
                                                    <p className="client-comment">Continually facilitate resource-leveling partnerships
                                                        before error free markets. Quickly seize compelling action items after
                                                        reliable
                                                        solutions. Leveling partnerships before error free markets before error.</p>
                                                </div>
                                                <div className="testimonial-bottom">
                                                    <img src="assets/img/member-1.jpg" alt="" className="testimonial-person-img" />
                                                    <h5 className="testimonial-person-name">Alezx Joson</h5>
                                                    <p className="testimonial-person-position">Web Developer</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial