import React from 'react'
import {Link,NavLink} from 'react-router-dom'

function Header() {
  return (
      <div>
          <header id="header" className="header">
        <div className="header-area">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <a className="navbar-brand" href="index.html">
                        <img src="assets/img/main-logo.png" alt="" className="main-logo"/>
                    </a>
                    <button className="navbar-toggler x" type="button" data-toggle="collapse"
                        data-target="#navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item dropdown"><Link className="nav-link dropdown-toggle active"
                                    to="/">Home</Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item active" to="/">Home 1</Link></li>
                                    <li><Link className="dropdown-item" to="/Home_2">Home 2</Link></li>
                                    <li><Link className="dropdown-item" to="/Home_3">Home 3</Link></li>
                                    <li><Link className="dropdown-item" to="/Home_4">Home 4</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item"><NavLink className="nav-link" to="/About">About Me</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/Portfolio">Portfolio</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/Blog">Blog</NavLink></li>
                            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#">Pages</a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/BlogDetails">Blog Details</Link></li>
                                    <li><Link className="dropdown-item" to="/Error">404</Link></li>
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

export default Header