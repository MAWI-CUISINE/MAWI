import React from 'react'
import "./home.css";

const NavBar = () => {
  return (
    <div>
      {" "}
      {/* <!-- header-start --> */}
      <header>
        <div className="header-area ">
          <div id="sticky-header" className="main-header-area ">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-3 col-lg-2">
                  <div className="logo">
                    <a href="index.html">
                      <img src="img/logo.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-7">
                  <div className="main-menu   d-none d-lg-block">
                    <nav>
                      <ul id="navigation">
                        <li>
                          <a href="index.html">home</a>
                        </li>
                        <li>
                          <a href="about.html">about</a>
                        </li>
                        <li>
                          <a href="Recipes.html">Recipes</a>
                        </li>
                        <li>
                          <a href="/">
                            blog <i className="ti-angle-down"></i>
                          </a>
                          <ul className="submenu">
                            <li>
                              <a href="blog.html">blog</a>
                            </li>
                            <li>
                              <a href="single-blog.html">single-blog</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/">
                            pages <i className="ti-angle-down"></i>
                          </a>
                          <ul className="submenu">
                            <li>
                              <a href="recipes_details.html">Recipes Details</a>
                            </li>
                            <li>
                              <a href="elements.html">elements</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                  <div className="search_icon">
                    <a href="/">
                      <i className="ti-search"></i>
                    </a>
                  </div>
                </div>
                <div className="col-12">
                  <div className="mobile_menu d-block d-lg-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- header-end --> */}
    </div>
  );
}

export default NavBar