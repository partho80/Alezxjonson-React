import React from 'react'

function Header_4() {
  return (
      <div>
           <header id="header" className="header">
        <div className="header-area">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <a className="navbar-brand" href="index.html">
                        <img src="assets/img/main-logo-white.png" alt="" className="main-logo"/>
                    </a>
                    <button className="navbar-toggler x" type="button" data-toggle="collapse"
                        data-target="#navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle active"
                                    href="index.html">Home</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="index.html">Home 1</a></li>
                                    <li><a className="dropdown-item" href="index-2.html">Home 2</a></li>
                                    <li><a className="dropdown-item" href="index-3.html">Home 3</a></li>
                                    <li><a className="dropdown-item active" href="index-4.html">Home 4</a></li>
                                </ul>
                            </li>
                            <li className="nav-item"><a className="nav-link" href="about.html">About Me</a></li>
                            <li className="nav-item"><a className="nav-link" href="portfolio.html">Portfolio</a></li>
                            <li className="nav-item"><a className="nav-link" href="blog.html">Blog</a></li>
                            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#">Pages</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="blog-details.html">Blog Details</a></li>
                                    <li><a className="dropdown-item" href="404.html">404</a></li>
                                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">More...</a>
                                        <ul className="dropdown-menu child-submenu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            <li><a className="dropdown-item" href="#">One more link</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </header>
    </div>
  )
}

export default Header_4