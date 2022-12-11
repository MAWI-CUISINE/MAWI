import React, { useEffect, useState } from 'react'
import './allRecipes.css'
import axios from 'axios';
import Navbar from '../navbar/Navbar.jsx';
import Foot from '../footer/Foot';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const AllRecipes = (props) => {
  const [allRecipes, setAllRecipes] = useState([])
  useEffect(() => {
    axios.get("http://localhost:5000/user/getallrecipes").then(res => {
      setAllRecipes(res.data)
    })
  }, [])
 const filter=(para)=>{
    axios.get(`http://localhost:5000/user/filter/${para}`).then(res =>{
      setAllRecipes(res.data)
    })
  }
  return (
    <div>
      <>
        <Navbar />

        <section className="best-receipe-area">
          <div className="container">
            <div className="row ">
              <div className="col">
                {/* button filter wth categorie  */}
                <div className="btn-group">
                  <button type="button" className="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    categories
                  </button>
                 
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#"
                     onClick={()=>{
                      filter("breakfast")
                    }}
                    >breakfast</a>
                    <a className="dropdown-item" href="#"
                    onClick={()=>{
                      filter("dnner")
                    }}
                    >dinner</a>
                    <a className="dropdown-item" href="#"
                    onClick={()=>{
                      filter("dessert")
                    }}
                    >dessert</a>
                  </div>
                </div>
                <div className="section-heading">
                  <h3>The best Receipies</h3>
                </div>
              </div>
            </div>
            <div className="row align-items-start">
              {allRecipes.map((e, i) => {
                return (
                  <div className="col col-sm-6 col-lg-4" onClick={() => {
                    props.changeview('one')
                    props.changeRecipe(e)
                  }} >
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

            </div> <div className='row postition-absolute bottom-0  end-0'><div className='col-1'></div><div className='col'></div><div className='col'><button className='btn btn-outline-success ' onClick={()=>{window.location.href='/post'}}>Add Recepie</button></div></div>
          </div>
         
         
        </section>
        {/* ##### Best Receipe Area End ##### */}
      </>
      <Foot />
    </div>
  );
}

export default AllRecipes