import React from 'react'

function TopBanner() {
  return (
      <div>
          <div className="top-banner" style={{ backgroundImage: `url('assets/img/page-banner.jpg')` }}>
        <div className="container">
            <div className="row">
                <div className="banner-title">
                    <h2>About Me</h2>
                    <div className="banner-breadcrumb">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">About Me</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        <div className="overlay"></div>
    </div>
    </div>
  )
}

export default TopBanner