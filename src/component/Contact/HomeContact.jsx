import React from 'react'

function HomeContact() {
  return (
      <div>
          <section id="home-contact" className="home-contact spb-80">
        <div className="home-contact-area">
            <div className="container">
                {/* <!-- Section Top Title --> */}
                <div className="section-top-box text-center">
                    <h2 className="st-title">Have A Look What Is Going On</h2>
                    <p className="st-desc">It is a long established fact that a reader will be distracted by the readable
                        content of a
                        page when looking at its layout. The point of using is the will be distracted.</p>
                </div>
                {/* <!-- Section Top Title --> */}
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="contact-card">
                            <p className="contact-card__icon"><i className="fa-solid fa-location-dot"></i></p>
                            <p className="contact-card__text">255 Brooklyn, Sheet Name</p>
                            <p className="contact-card__text">New York, USA</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="contact-card">
                            <p className="contact-card__icon"><i className="fa-solid fa-globe"></i></p>
                            <p className="contact-card__text">info@yourmail.com</p>
                            <p className="contact-card__text">www.yourwebsite.com</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="contact-card">
                            <p className="contact-card__icon"><i className="fa-solid fa-phone"></i></p>
                            <p className="contact-card__text">(000) 123 456 987</p>
                            <p className="contact-card__text">(000) 122 457 999</p>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center hc-wrapper">
                    <div className="col-md-6">
                        {/* <!-- Google-Map Start --> */}
                        <div className="google-map-section">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d58391.92348905992!2d90.33451974553982!3d23.83654255462999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3755c14a3366b005%3A0x901b07016468944c!2sMirpur%20DOHS%2C%20Dhaka!3m2!1d23.836468!2d90.36953919999999!5e0!3m2!1sen!2sbd!4v1642575818911!5m2!1sen!2sbd"
                                allowFullScreen="" loading="lazy"></iframe>
                        </div>
                        {/* <!-- Google-Map End --> */}
                    </div>

                    <div className="col-md-6">
                        <div className="home-contact-form-wrapper">
                          
                            <form className="post-form contact-form cu-page-form home-contact-form" method="post" action="php/mail.php" id="cf">
                                <div className="cf-msg"></div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="firstName" name="firstName" placeholder="First name"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="home-contact-lname"
                                                placeholder="Last name"/>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input type="email" className="form-control" id="email" name="email" placeholder="Email"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="sub-input" placeholder="Phone Number"/>
                                </div>
                               

                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label form="msg">Briefly tell us about your project and your
                                                current goals.
                                                How can we help you?</label> 
                                            <textarea className="form-control" id="msg" name="msg" rows="3" placeholder="Message"></textarea>
                                        </div>
                                    </div>
                                </div>
                                 
                                <button id="submit" name="submit"  type="submit" className="btn btn-custom btn-custom-primary cf-btn"><span className="mr-2"><i className="fa-solid fa-file-import"></i></span>Send Message</button>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default HomeContact