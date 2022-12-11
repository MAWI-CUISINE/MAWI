import React, { useEffect, useState } from 'react'
import './allRecipes.css'
import axios from 'axios';
import Navbar from '../navbar/Navbar.jsx';
import Foot from '../footer/Foot';
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const AllRecipes = (props) => {
  const [allRecipes,setAllRecipes]=useState([])
useEffect(()=>{
  axios.get("http://localhost:5000/user/getallrecipes").then(res=>{
    setAllRecipes(res.data)
  })
}, [])
// <div >HOVER ME
//   <div class="showme">hai</div>
// </div>
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
              { allRecipes.map((e,i)=>{
                return (
                  <div  onClick={()=>{
                    props.changeview('one')
                    props.changeRecipe(e)}} className="col-12 col-sm-6 col-lg-4">
                    <div className="single-best-receipe-area mb-30" >
                      <img
                        style={{ width: "339px", height: "339px" }}
                        src={e.Rimage}
                        alt="recipeImage"
                      />
                      <div
                        style={{ width: "339px" }}
                        className="receipe-content"
                      >
                        
                          <h5>{e.Rname}</h5>
                      
                        <div className="ratings">
                          <div className="row">
                            <div className="col-3"></div>
                            <div className="col-2">
                              <FontAwesomeIcon icon="fa-solid fa-thumbs-up" />
                              {e.Rlike}
                            </div>
                            <div className="col-3">
                              <FontAwesomeIcon icon="fa-solid fa-thumbs-down" />
                              {e.Rdislike}
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
              <Foot/>
    </div>
  );
}

export default AllRecipes