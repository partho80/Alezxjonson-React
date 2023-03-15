import React from 'react'

function BlogDetailsBody() {
  return (
      <div>
          <section id="blog-details-page" className="blog-details-page sp-80">
        <div className="blog-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        {/* <!-- Search Start --> */}
                        <div className="product-search mb-3 mobile-show">
                            <div className="search-box">
                                <input type="text" placeholder="Search Here" /><span><i
                                        className="fas fa-search"></i></span>
                            </div>
                        </div>
                        {/* <!-- Search End --> */}
                        <div className="blog-wrapper">1
                            <div className="single-blog mb-5">
                                <div className="blog-img">
                                    <img src="assets/img/home-blog-1.jpg" alt="" />
                                </div>
                                <div className="bc-comment d-flex mt-3">
                                    <a href="#" className="text-custom mr-4"><span className="mr-2"> <i
                                                className="fas fa-user"></i></span>Elex Janto
                                    </a>
                                    <p className="text-custom mr-4">
                                        <span className="mr-2">
                                            <i className="fas fa-calendar-week"></i></span>
                                        01 Feb 2022
                                    </p>
                                    <a href="#" className="text-custom"><span className="mr-2"> <i
                                                className="fas fa-tag"></i></span>Web
                                        Design</a>
                                </div>
                                <div className="blog-title mt-2">
                                    <h3>
                                        Objectively conceptualize value-added human capital for
                                        high standards in web services.
                                    </h3>
                                </div>

                                <p className="blog-details my-4">
                                    Quis risus sed vulputate odio ut enim. Nulla aliquet
                                    porttitor lacus luctus accumsan tortor. Risus nullam eget
                                    felis eget. Justo nec ultrices dui sapien eget mi proin sed
                                    libero. Eu scelerisque felis imperdiet proin fermentum leo
                                    vel. Vivamus at augue eget arcu dictum. A arcu cursus vitae
                                    congue mauris. Orci ac auctor augue mauris augue neque
                                    gravida in fermentum. <br /><br />
                                    Nulla posuere sollicitudin aliquam ultrices sagittis orci a
                                    scelerisque purus. Eget duis at tellus at urna condimentum.
                                    Posuere lorem ipsum dolor sit amet consectetur adipiscing
                                    elit duis. Orci phasellus egestas tellus rutrum tellus
                                    pellentesque eu tincidunt. Tempus imperdiet nulla malesuada
                                    pellentesque elit eget gravida cum. Volutpat odio facilisis
                                    mauris sit amet massa. Pellentesque eu tincidunt tortor
                                    aliquam nulla facilisi cras fermentum odio.
                                </p>

                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <img className="bd-sm-img" src="assets/img/bd-sm-1.jpg" alt="" />
                                    </div>
                                    <div className="col-md-6">
                                        <img className="bd-sm-img" src="assets/img/bd-sm-2.jpg" alt="" />
                                    </div>

                                    <div className="col-md-12">
                                        <p className="blog-details my-4">
                                            Quis risus sed vulputate odio ut enim. Nulla aliquet
                                            porttitor lacus luctus accumsan tortor. Risus nullam
                                            eget felis eget. Justo nec ultrices dui sapien eget mi
                                            proin sed libero. Eu scelerisque felis imperdiet proin
                                            fermentum leo vel. Vivamus at augue eget arcu dictum. A
                                            arcu cursus vitae congue mauris. Orci ac auctor augue
                                            mauris augue neque gravida in fermentum.
                                        </p>
                                    </div>
                                </div>

                                {/* <!-- Blog Share Section Start --> */}
                                <div className="blog-share">
                                    <h3>Share on:</h3>
                                    {/* <!-- Social Section Start --> */}
                                    <div className="categories-wrapper">
                                        <ul className="share-collection">
                                            <li>
                                                <a href="https://www.facebook.com/"><i
                                                        className="fa-brands fa-facebook-f"></i></a>
                                            </li>
                                            <li>
                                                <a href="https://twitter.com/"><i className="fa-brands fa-twitter"></i></a>
                                            </li>
                                            <li>
                                                <a href="https://www.instagram.com/"><i
                                                        className="fa-brands fa-instagram"></i></a>
                                            </li>
                                            <li>
                                                <a href="https://www.linkedin.com/"><i
                                                        className="fa-brands fa-linkedin-in"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <!-- Social Section End --> */}
                                </div>
                                {/* <!-- Blog Share Section End -->

                                <!-- About-Author Start --> */}
                                <div className="about-author">
                                    <img className="author-img mr-4" src="assets/img/author.jpg" alt="" />
                                    <div className="author-bio">
                                        <h5>Elex Janto</h5>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Quis eos corporis non, laborum dolore voluptas.
                                        </p>
                                    </div>
                                </div>
                                {/* <!-- About-Author End -->

                                <!-- Comment Section Start --> */}
                                <section id="comment" className="sp-80">
                                    <div className="bd-title mb-4">
                                        <h4>Comment</h4>
                                    </div>

                                    <hr className="mb-4" />
                                    <div className="comment-wrapper">
                                        <div className="single-comment">
                                            <div className="comment-content">
                                                <div className="writter-img-box mr-4">
                                                    <img className="writter-img" src="assets/img/author.jpg" alt="" />
                                                </div>
                                                <div className="comment-box mb-4">
                                                    <h6>Elex Janto</h6>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur
                                                        adipisicing elit. Odio, doloremque? Ullam culpa,
                                                        doloribus repellat ducimus autem eum, ex sed
                                                        reiciendis cupiditate error cum accusantium
                                                        quidem!
                                                    </p>
                                                    <a href="#" className="read-more-btn mt-3"><span><i
                                                                className="fas fa-reply d-inline-block me-2"></i></span>
                                                        reply</a>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-11 offset-md-1">
                                                    <div className="single-comment ml-4">
                                                        <div className="comment-content">
                                                            <div className="writter-img-box mr-4">
                                                                <img className="writter-img"
                                                                    src="assets/img/comment-writter.jpg" alt="" />
                                                            </div>
                                                            <div className="comment-box mb-4">
                                                                <h6>Floyd Long</h6>
                                                                <p>
                                                                    Lorem ipsum dolor sit amet consectetur
                                                                    adipisicing elit.
                                                                </p>
                                                                <a href="#" className="read-more-btn mt-3"><span><i
                                                                            className="fas fa-reply d-inline-block me-2"></i></span>
                                                                    reply</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {/* <!-- Comment Section End -->

                                <!-- Post Section Start --> */}
                                <section id="post" className="post">
                                    <div className="bd-title mb-4">
                                        <h4>Post your comment</h4>
                                    </div>
                                    <div className="post-section">
                                        <form id="post-form" className="post-form">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="exampleInput"
                                                            placeholder="Name*" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="email" className="form-control" id="exampleInputEmail1"
                                                            placeholder="Email Address*" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <textarea className="form-control" id="exampleFormControlTextarea3"
                                                            rows="7" placeholder="Write your comment*"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="submit" className="btn btn-custom btn-custom-primary">
                                                Submit
                                            </button>
                                        </form>
                                    </div>
                                </section>
                                {/* <!-- Post Section End --> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        {/* <!-- Search Start --> */}
                        <div className="product-search mobile-hide mb-4">
                            <h3 className="sidebar-title mb-3">Search</h3>
                            <div className="search-box">
                                <input type="text" placeholder="Search Here" /><span><i
                                        className="fas fa-search"></i></span>
                            </div>
                        </div>
                        {/* <!-- Search End -->

                        <!-- Recent Post Start --> */}
                        <div className="recent-post-wrapper mb-4">
                            <h3 className="sidebar-title mb-3">Recent Post</h3>
                            <ul className="recent-post-collection">
                                <li className="d-flex align-items-center mb-3">
                                    <img src="assets/img/home-blog-1.jpg" alt="" className="rp-sm-img mr-3" />
                                    <div className="rp-text d-inline-block">
                                        <a href="blog-details.html" className="rp-title">Design how it work</a>
                                        <p className="">
                                            <span><i className="fas fa-calendar-week"></i></span> 14 May
                                            2022
                                        </p>
                                    </div>
                                </li>
                                <li className="d-flex align-items-center mb-3">
                                    <img src="assets/img/home-blog-2.jpg" alt="" className="rp-sm-img mr-3" />
                                    <div className="rp-text d-inline-block">
                                        <a href="blog-details.html" className="rp-title">Many of the best UI?</a>
                                        <p className="">
                                            <span><i className="fas fa-calendar-week"></i></span> 25 Dec
                                            2022
                                        </p>
                                    </div>
                                </li>
                                <li className="d-flex align-items-center mb-3">
                                    <img src="assets/img/home-blog-3.jpg" alt="" className="rp-sm-img mr-3" />
                                    <div className="rp-text d-inline-block">
                                        <a href="blog-details.html" className="rp-title">User Experience Role</a>
                                        <p className="">
                                            <span><i className="fas fa-calendar-week"></i></span> 03 Sep
                                            2022
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- Recent Post End -->

                        <!-- Category Section Start --> */}
                        <div className="categories-wrapper mb-4">
                            <h3 className="sidebar-title mb-3">Categories</h3>
                            <ul className="categories-collection">
                                <li>
                                    <a href="blog.html">Minimal <span>(20)</span> </a>
                                </li>
                                <li>
                                    <a href="blog.html">User Experience <span>(15)</span> </a>
                                </li>
                                <li>
                                    <a href="blog.html">Web Design <span>(17)</span> </a>
                                </li>
                                <li>
                                    <a href="blog.html">Motion Design <span>(10)</span> </a>
                                </li>
                                <li>
                                    <a href="blog.html">Inspiration <span>(13)</span> </a>
                                </li>
                                <li>
                                    <a href="blog.html">Trendy <span>(18)</span> </a>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- Category Section End -->

                        <!-- Tags Section Start --> */}
                        <div className="tags-wrapper mb-4">
                            <h3 className="sidebar-title mb-3">Tags</h3>
                            <ul className="tags-collection blog-tag-colloection">
                                <li><a href="blog.html" className="tags-choice">Design</a></li>
                                <li><a href="blog.html" className="tags-choice">Minimal</a></li>
                                <li>
                                    <a href="blog.html" className="tags-choice">Art Design</a>
                                </li>
                                <li>
                                    <a href="blog.html" className="tags-choice">Typography </a>
                                </li>
                                <li><a href="blog.html" className="tags-choice">Colorful</a></li>
                                <li>
                                    <a href="blog.html" className="tags-choice">Development</a>
                                </li>
                                <li>
                                    <a href="blog.html" className="tags-choice">Native Apps</a>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- Tags Section End -->

                        <!-- Social Section Start --> */}
                        <div className="categories-wrapper">
                            <h3 className="sidebar-title mb-3">Follow Me</h3>
                            <ul className="footer-social social-collection">
                                <li>
                                    <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/"><i className="fa-brands fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/"><i className="fa-brands fa-linkedin-in"></i></a>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- Social Section End --> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default BlogDetailsBody