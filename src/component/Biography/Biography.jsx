import React from 'react'

function Biography() {
  return (
      <div>
           <section id="biography" className="biography sp-80">
        <div className="biography-area">
            <div className="container">
                <div className="row bio-wrapper">
                    <div className="col-lg-5 col-md-6">
                        <div className="bio-left-left">
                            <img src="assets/img/hero-img.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6">
                        <div className="bio-right-area">
                            <h2 className="bio-title">I am Alezx. I am professional
                                UI/UX designer world-wide.</h2>
                            <p className="bio-desc">Nunc eget lorem dolor sed viverra ipsum. Sed odio morbi quis commodo
                                odio aenean sed. Maecenas sed enim ut sem. Est placerat imperdiet euismod. Aliquam nulla
                                facilisiegestas erat imperdiet sed euismod.</p>
                            <div className="bio-list">
                                <ul className="bio-collection">
                                    <li><span>Name :</span> Alezx Joson</li>
                                    <li><span>Email :</span> alezxjoson@gmail.com</li>
                                    <li><span>City :</span> New York</li>
                                    <li><span>Office :</span>NewYork Tech</li>
                                </ul>
                            </div>
                            <div className="bio-btn-wrapper">
                                <a href="#" className="btn btn-custom btn-custom-primary mr-4">Download CV</a>
                                <div className="social-box">
                                    <p className="social-text">Follow me</p>
                                    <ul className="social-collection">
                                        <li><a href="https://www.facebook.com/"><i
                                                    className="fa-brands fa-facebook-f"></i></a>
                                        </li>
                                        <li><a href="https://dribbble.com/"><i className="fa-brands fa-dribbble"></i></a>
                                        </li>
                                        <li><a href="https://www.instagram.com/"><i
                                                    className="fa-brands fa-instagram"></i></a>
                                        </li>
                                        <li><a href="https://www.pinterest.com/"><i
                                                    className="fa-brands fa-pinterest-p"></i></a></li>
                                    </ul>
                                </div>
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

export default Biography