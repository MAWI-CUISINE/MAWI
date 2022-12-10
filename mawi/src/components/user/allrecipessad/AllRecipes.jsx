import React from 'react'
import './allRecipes.css'
import Navbar from '../navbar/Navbar.jsx';
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
const AllRecipes = (props) => {
const DeleteRecipe=(name)=>{
axios.delete(`http://localhost:5000/user/delete/Wedding Gift Spaghetti Sauce`);
}
  return (
    <div>
      <>
      <Navbar/>
        <section className="best-receipe-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-heading">
                  <h3>The best Receipies</h3>
                </div>
              </div>
            </div>
            <div className="row">
              {['','','','','',''].map((e,i)=>{
                return (
                  <div className="col-12 col-sm-6 col-lg-4">
                    <div className="single-best-receipe-area mb-30">
                      <img
                        src="https://res.cloudinary.com/dnwi9wvci/image/upload/v1670513504/mawi/insta2_vpzwmj.jpg"
                        alt=""
                      />
                      <div className="receipe-content">
                        <a href="receipe-post.html">
                          <h5>test</h5>
                        </a>
                        <div className="ratings">
                          <div className="row">
                            <div className="col-5"></div>
                            <div className="col-2">
                              <FontAwesomeIcon icon="fa-solid fa-trash" />
                            </div>
                           
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              
              {/* Single Best Receipe Area */}
             
            </div>
          </div>
        </section>
        {/* ##### Best Receipe Area End ##### */}
      </>
    </div>
  );
}

export default AllRecipes