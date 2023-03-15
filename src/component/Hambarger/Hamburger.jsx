import React from 'react'

function Hamburger() {
  return (
      <div>
          <div className="hamburger-menu mobile-hide">
        <div id="ham-btn">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
    <div id="myBox" className="my-box">
        <h2 className="ham-title">Follow Me</h2>
        <ul className="footer-social social-collection">
            <li><a href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></a></li>
            <li><a href="https://twitter.com/"><i className="fa-brands fa-twitter"></i></a></li>
            <li><a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a></li>
            <li><a href="https://www.linkedin.com/"><i className="fa-brands fa-linkedin-in"></i></a></li>
            <li><a href="https://dribbble.com/"><i className="fa-brands fa-dribbble"></i></a></li>
            <li><a href="https://www.behance.net/"><i className="fa-brands fa-behance"></i></a></li>
        </ul>
    </div>
    </div>
  )
}

export default Hamburger