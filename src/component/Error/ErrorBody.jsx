import React from 'react'
import {Link} from 'react-router-dom'
function ErrorBody() {
  return (
      <div>
           <div id="page-error" className="sp-80">
        <div className="page-error-section">
            <div className="container">
                <div className="row mb-4">
                    <div className="col-md-8 offset-md-2">
                        <div className="error-content">
                            <div className="ec-img">
                                <img src="assets/img/404.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="back-home-btn text-center mx-auto mt-2">
                        <h2 className="error-title">Sorry! We can’t Find This Pages</h2>
                        <p className="error-text">Oops! The page you are looking for does not exit. it might been moved or
                            deleted.</p>
                        <Link className="btn btn-custom btn-custom-primary error-btn" to="/">Back to home</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ErrorBody