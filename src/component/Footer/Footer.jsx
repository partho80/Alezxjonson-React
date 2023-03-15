import React from 'react'

function Footer() {
  return (
      <div>
          <footer id="footer" className="footer">
        <div className="footer-area spt-80 footer-bg-img">
            <div className="container">
                <div className="main-footer text-center mx-auto">
                    <img src="assets/img/main-logo-white.png" alt="" className="main-logo-white"/>
                    <ul className="footer-social social-collection">
                        <li><a href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></a></li>
                        <li><a href="https://twitter.com/"><i className="fa-brands fa-twitter"></i></a></li>
                        <li><a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a></li>
                        <li><a href="https://www.linkedin.com/"><i className="fa-brands fa-linkedin-in"></i></a></li>
                        <li><a href="https://dribbble.com/"><i className="fa-brands fa-dribbble"></i></a></li>
                        <li><a href="https://www.behance.net/"><i className="fa-brands fa-behance"></i></a></li>
                    </ul>
                    <ul className="footer-menu-collection">
                        <li><a href="about.html">About us</a></li>
                        <li><a href="service.html">Services</a></li>
                        <li><a href="#">Speakers</a></li>
                        <li><a href="#">Event</a></li>
                        <li><a href="#">Schedule</a></li>
                        <li><a href="blog.html">Blog</a></li>
                    </ul>
                    <hr className="footer-hr"/>
                    <div className="footer-copyright">
                        <p className="copyright-text">All Rights Reserved &copy;Luminouslabs</p>
                    </div>
                </div>
            </div>
        </div>
          </footer>
            {/* <!-- scroll top start --> */}<div>
    <a className="material-scrolltop">
        <i className="fas fa-arrow-circle-up"></i>
              </a>
              </div>
    {/* <!-- scroll top end --> */}
    </div>
  )
}

export default Footer