import React from 'react'
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.js";
import "../NavBar.css";
const NavBar = () => {
  return (
    <div>
     <div className="search-wrapper">
        {/* <!-- Close Btn --> */}
        <div className="close-btn"><i className="fa fa-times" aria-hidden="true"></i></div>

        <div className="container">
            <div className="row">
                <div className="col-12">
                    <form action="#" method="post">
                        <input type="search" name="search" placeholder="Type any keywords..."/>
                        <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- ##### Header Area Start ##### --> */}
    <header className="header-area">

        {/* <!-- Top Header Area --> */}
        <div className="top-header-area">
            <div className="container h-100">
                <div className="row h-100 align-items-center justify-content-between">
                    {/* <!-- Breaking News --> */}
                    <div className="col-12 col-sm-6">
                        <div className="breaking-news">
                            <div id="breakingNewsTicker" className="ticker">
                                <ul>
                                    <li><a href="/">Hello World!</a></li>
                                    <li><a href="/">Welcome to Colorlib Family.</a></li>
                                    <li><a href="/">Hello Delicious!</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Top Social Info --> */}
                    <div className="col-12 col-sm-6">
                        <div className="top-social-info text-right">
                            <a href="/"><i className="fa fa-pinterest" aria-hidden="true"></i></a>
                            <a href="/"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                            <a href="/"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                            <a href="/"><i className="fa fa-dribbble" aria-hidden="true"></i></a>
                            <a href="/"><i className="fa fa-behance" aria-hidden="true"></i></a>
                            <a href="/"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- Navbar Area --> */}
        <div className="delicious-main-menu">
            <div className="classy-nav-container breakpoint-off">
                <div className="container">
                    {/* <!-- Menu --> */}
                    <nav className="classy-navbar justify-content-between" id="deliciousNav">

                        {/* <!-- Logo --> */}
                        <a className="nav-brand" href="index.html"><img src="img/core-img/logo.png" alt=""/></a>

                        {/* <!-- Navbar Toggler --> */}
                        <div className="classy-navbar-toggler">
                            <span className="navbarToggler"><span></span><span></span><span></span></span>
                        </div>

                        {/* <!-- Menu --> */}
                        <div className="classy-menu">

                            {/* <!-- close btn --> */}
                            <div className="classycloseIcon">
                                <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                            </div>

                            {/* <!-- Nav Start --> */}
                            <div className="classynav">
                                <ul>
                                    <li className="active"><a href="index.html">Home</a></li>
                                    <li><a href="/">Pages</a>
                                        <ul className="dropdown">
                                            <li><a href="index.html">Home</a></li>
                                            <li><a href="about.html">About Us</a></li>
                                            <li><a href="blog-post.html">Blog Post</a></li>
                                            <li><a href="receipe-post.html">Receipe Post</a></li>
                                            <li><a href="contact.html">Contact</a></li>
                                            <li><a href="elements.html">Elements</a></li>
                                            <li><a href="/">Dropdown</a>
                                                <ul className="dropdown">
                                                    <li><a href="index.html">Home</a></li>
                                                    <li><a href="about.html">About Us</a></li>
                                                    <li><a href="blog-post.html">Blog Post</a></li>
                                                    <li><a href="receipe-post.html">Receipe Post</a></li>
                                                    <li><a href="contact.html">Contact</a></li>
                                                    <li><a href="elements.html">Elements</a></li>
                                                    <li><a href="/">Dropdown</a>
                                                        <ul className="dropdown">
                                                            <li><a href="index.html">Home</a></li>
                                                            <li><a href="about.html">About Us</a></li>
                                                            <li><a href="blog-post.html">Blog Post</a></li>
                                                            <li><a href="receipe-post.html">Receipe Post</a></li>
                                                            <li><a href="contact.html">Contact</a></li>
                                                            <li><a href="elements.html">Elements</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="/">Mega Menu</a>
                                        <div className="megamenu">
                                            <ul className="single-mega cn-col-4">
                                                <li className="title">Catagory</li>
                                                <li><a href="index.html">Home</a></li>
                                                <li><a href="about.html">About Us</a></li>
                                                <li><a href="blog-post.html">Blog Post</a></li>
                                                <li><a href="receipe-post.html">Receipe Post</a></li>
                                                <li><a href="contact.html">Contact</a></li>
                                                <li><a href="elements.html">Elements</a></li>
                                            </ul>
                                            <ul className="single-mega cn-col-4">
                                                <li className="title">Catagory</li>
                                                <li><a href="index.html">Home</a></li>
                                                <li><a href="about.html">About Us</a></li>
                                                <li><a href="blog-post.html">Blog Post</a></li>
                                                <li><a href="receipe-post.html">Receipe Post</a></li>
                                                <li><a href="contact.html">Contact</a></li>
                                                <li><a href="elements.html">Elements</a></li>
                                            </ul>
                                            <ul className="single-mega cn-col-4">
                                                <li className="title">Catagory</li>
                                                <li><a href="index.html">Home</a></li>
                                                <li><a href="about.html">About Us</a></li>
                                                <li><a href="blog-post.html">Blog Post</a></li>
                                                <li><a href="receipe-post.html">Receipe Post</a></li>
                                                <li><a href="contact.html">Contact</a></li>
                                                <li><a href="elements.html">Elements</a></li>
                                            </ul>
                                            <div className="single-mega cn-col-4">
                                                <div className="receipe-slider owl-carousel">
                                                    <a href="/"><img src="img/bg-img/bg1.jpg" alt=""/></a>
                                                    <a href="/"><img src="img/bg-img/bg6.jpg" alt=""/></a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li><a href="receipe-post.html">Receipies</a></li>
                                    <li><a href="receipe-post.html">4 Vegans</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>

                                {/* <!-- Newsletter Form --> */}
                                <div className="search-btn">
                                    <i className="fa fa-search" aria-hidden="true"></i>
                                </div>

                            </div>
                            {/* <!-- Nav End --> */}
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    </div>
  )
}

export default NavBar