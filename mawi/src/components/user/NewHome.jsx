import React from 'react'
import "./home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Typewriter from 'typewriter-effect';


const NewHome = () => {
  return (

<div>
    {/* <!-- header-start --> */}
    <header>
        <div className="header-area ">
            <div id="sticky-header" className="main-header-area ">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-3 col-lg-2">
                            <div className="logo">
                                <a href="index.html">
                                    <img src="https://res.cloudinary.com/dnwi9wvci/image/upload/v1670434638/mawi/Brown_Illustration_Traditional_Food_Logo-removebg-preview_v6tutd.png" alt="" style={{width:"200px",height:"200px"  }} className=" top-0 start-0"/>
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <div className="main-menu   d-none d-lg-block">
                                <nav>
                                    <ul id="navigation">
                                        <li><h4 style={{color:"white"}} href="index">Home</h4></li>
                                        <li><h4 style={{color:"white"}} href="shop">Shop</h4></li>
                                        <li><h4 style={{color:"white"}} href="/">Recipes<FontAwesomeIcon icon="fa-light fa-angle-down" /></h4>
                                            <ul className="submenu">
                                                <li><a href="allrecipes">All Recipes</a></li>
                                                <li><a href="AddRecipe">Add Recipe</a></li>
                                            </ul>
                                        </li>
                                        <li><h4 style={{color:"white"}} href="about">About</h4></li>
                                    </ul>
                                </nav>
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

    {/* <!-- slider_area_start --> */}
    <div className="slider_area">
        <div className="single_slider  d-flex align-items-center slider_bg_1">
            <div className="container">
                <div className="row align-items-center justify-content-center">
            
            </div>
        </div>
        </div>
    </div>
    {/* <!-- slider_area_end --> */}
   
    {/* <!-- /recepie_area_start  --> */}

    {/* <!-- recepie_videos   --> */}
    <div className="recepie_videoes_area">
        <div className="container">
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="recepie_info">
                        <h3>Recipe videos 
                            that never misses 
                            any portion</h3>
                    <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women.</p>
                    <div className="video_watch d-flex align-items-center">
                        <a className="popup-video" href="https://www.youtube.com/watch?v=lr6AMBsjxrY"> <i className="ti-control-play"></i> </a>
                        <div className="watch_text" >
                            <h4>Watch Video</h4>
                            <p>You will love our execution</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="videos_thumb">
                        <div className="big_img">
                            <img src="img/video/big.png" alt=""/>
                        </div>
                        <div className="small_thumb">
                            <img src="img/video/small_1.png" alt=""/>
                        </div>
                        <div className="small_thumb_2">
                            <img src="img/video/2.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!--/ recepie_videos   --> */}

    {/* <!-- dish_area start  --> */}
    <div className="dish_area">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="dish_wrap d-flex">
                        <div className="single_dish text-center">
                            <div className="thumb">
                                <img src="img/recepie/recpie_1.png" style={{height:"192px" , width:"195px"}} alt=""/>
                            </div>
                            <h3>Breakfast</h3>
                            <p>“All happiness depends on a leisurely breakfast. There is nothing better than a proper breakfast. Expect problems and eat them for breakfast.”</p>
                        </div>
                        <div className="single_dish text-center">
                            <div className="thumb">
                                <img src="img/recepie/recpie_3.png" style={{height:"192px" , width:"195px"}} alt=""/>
                            </div>
                            <h3>Dinner</h3>
                            <p>“Dinner is where the magic happens in the kitchen.”</p>
                        </div>
                        <div className="single_dish text-center">
                            <div className="thumb">
                                <img src="img/recepie/recpie_4.png" alt=""/>
                            </div>
                            <h3>Dessert</h3>
                            <p>“You can't buy happiness, but you can prepare dessert and that's kind of the same thing.”</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!--/ dish_area start  --> */}

    {/* <!-- latest_trand     --> */}
    <div className="latest_trand_area">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="trand_info text-center">
                        <p>Thousands of recipes are waiting to be watched</p>
                        <h3>Discover latest trending recipes</h3>
                        <a href="/" className="boxed-btn3">View all Recipes</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!--/ latest_trand     --> */}

    {/* <!-- customer_feedback_area  --> */}
    <div className="customer_feedback_area">
        <div className="container">
            
            {/* <div className="row justify-content-center mb-50">
                <div className="col-xl-9">
                <img src={"https://bestanimations.com/media/food/142730108waffles-animated-gif.gif#.Y5DpAY1l0G8.link"}  style={{position:"relative" ,left:"80%"}} alt="my-gif" />
                </div>
            </div> */}
                <div className="recepie_videoes_area">
        <div className="container">
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="recepie_info">
                       <h3>
                        <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 60,
                            strings:["NOTHING BRINGS PEOPLE TOGETHER LIKE GOOD FOOD."]
                        }}
                        />
                       </h3>
                
                 
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                <div className="col-xl-9">
                <img src={"https://bestanimations.com/media/food/142730108waffles-animated-gif.gif#.Y5DpAY1l0G8.link"}  style={{position:"relative" ,left:"40%"}} alt="my-gif" />
                </div>
                </div>
            </div>
        </div>
    </div>
            <div className="row">
                <div className="col-xl-12">
                    <div className="customer_active owl-carousel">
                        <div className="single_customer d-flex">
                            <div className="thumb">
                                <img src="img/testmonial/2.png" alt=""/>
                            </div>
                            <div className="customer_meta">
                                <h3>Adame Nesane</h3>
                                <span>Chief Customer</span>
                                <p>You're had. Subdue grass Meat us winged years you'll doesn't. fruit two also won one yielding creepeth third give may never lie alternet food.</p>
                            </div>
                        </div>
                        <div className="single_customer d-flex">
                            <div className="thumb">
                                <img src="img/testmonial/1.png" alt=""/>
                            </div>
                            <div className="customer_meta">
                                <h3>Adame Nesane</h3>
                                <span>Chief Customer</span>
                                <p>You're had. Subdue grass Meat us winged years you'll doesn't. fruit two also won one yielding creepeth third give may never lie alternet food.</p>
                            </div>
                        </div>
                        <div className="single_customer d-flex">
                            <div className="thumb">
                                <img src="img/testmonial/2.png" alt=""/>
                            </div>
                            <div className="customer_meta">
                                <h3>Adame Nesane</h3>
                                <span>Chief Customer</span>
                                <p>You're had. Subdue grass Meat us winged years you'll doesn't. fruit two also won one yielding creepeth third give may never lie alternet food.</p>
                            </div>
                        </div>
                        <div className="single_customer d-flex">
                            <div className="thumb">
                                <img src="img/testmonial/1.png" alt=""/>
                            </div>
                            <div className="customer_meta">
                                <h3>Adame Nesane</h3>
                                <span>Chief Customer</span>
                                <p>You're had. Subdue grass Meat us winged years you'll doesn't. fruit two also won one yielding creepeth third give may never lie alternet food.</p>
                            </div>
                        </div>
                        <div className="single_customer d-flex">
                            <div className="thumb">
                                <img src="img/testmonial/2.png" alt=""/>
                            </div>
                            <div className="customer_meta">
                                <h3>Adame Nesane</h3>
                                <span>Chief Customer</span>
                                <p>You're had. Subdue grass Meat us winged years you'll doesn't. fruit two also won one yielding creepeth third give may never lie alternet food.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- / customer_feedback_area  --> */}

    {/* <!-- download_app_area --> */}
    <div className="download_app_area">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-xl-6 col-md-6">
                    <div className="download_thumb">
                        <div className="big_img">
                            <img src="img/video/big_1.png" alt=""/>
                        </div>
                        <div className="small_01">
                            <img src="img/video/small_sm1.png" alt=""/>
                        </div>
                        <div className="small_02">
                            <img src="img/video/sm2.png" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-md-6">
                    <div className="download_text">
                        <h3>Download app to
                            get recipes from
                            Everywhere</h3>
                        <div className="download_android_apple">
                            <a className="active" href="/">
                                <div className="download_link d-flex">
                                    <i className="fa fa-apple"></i>
                                    <div className="store">
                                        <h5>Available</h5>
                                        <p>on App Store</p>
                                    </div>
                                </div>
                            </a>
                            <a href="/">
                                <div className="download_link d-flex">
                                    <i className="fa fa-android"></i>
                                    <div className="store">
                                        <h5>Download</h5>
                                        <p>from Play Store</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!--/ download_app_area --> */}

    {/* <!-- footer  --> */}
    <footer className="footer">
            <div className="footer_top">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-2 col-md-6 col-lg-2">
                            <div className="footer_widget">
                                <h3 className="footer_title">
                                    Top Products
                                </h3>
                                <ul>
                                    <li><a href="/">Managed Website</a></li>
                                    <li><a href="/"> Manage Reputation</a></li>
                                    <li><a href="/">Power Tools</a></li>
                                    <li><a href="/">Marketing Service</a></li>
                                </ul>
    
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-6 col-lg-2">
                            <div className="footer_widget">
                                <h3 className="footer_title">
                                    Quick Links
                                </h3>
                                <ul>
                                    <li><a href="/">Jobs</a></li>
                                    <li><a href="/">Brand Assets</a></li>
                                    <li><a href="/">Investor Relations</a></li>
                                    <li><a href="/">Terms of Service</a></li>
                                </ul>
    
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-6 col-lg-2">
                            <div className="footer_widget">
                                <h3 className="footer_title">
                                    Features
                                </h3>
                                <ul>
                                    <li><a href="/">Jobs</a></li>
                                    <li><a href="/">Brand Assets</a></li>
                                    <li><a href="/">Investor Relations</a></li>
                                    <li><a href="/">Terms of Service</a></li>
                                </ul>
    
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-6 col-lg-2">
                            <div className="footer_widget">
                                <h3 className="footer_title">
                                    Resources
                                </h3>
                                <ul>
                                    <li><a href="/">Guides</a></li>
                                    <li><a href="/">Research</a></li>
                                    <li><a href="/">Experts</a></li>
                                    <li><a href="/">Agencies</a></li>
                                </ul>
    
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-lg-4">
                                <div className="footer_widget">
                                        <h3 className="footer_title">
                                                Subscribe
                                        </h3>
                                        <p className="newsletter_text">You can trust us. we only send promo offers,</p>
                                        <form action="/" className="newsletter_form">
                                            <input type="text" placeholder="Enter your mail"/>
                                            <button type="submit"> <i className="ti-arrow-right"></i> </button>
                                        </form>
                                        
                                    </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copy-right_text">
                <div className="container">
                    <div className="footer_border"></div>
                    <div className="row align-items-center">
                        <div className="col-xl-8 col-md-8">
                            <p className="copy_right">
                                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by 
{/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                            </p>
                        </div>
                        <div className="col-xl-4 col-md-4">
                            <div className="socail_links">
                                <ul>
                                    <li>
                                        <a href="/">
                                            <i className="ti-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <i className="ti-twitter-alt"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <i className="fa fa-dribbble"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <i className="fa fa-behance"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer></div>
  )
}

export default NewHome