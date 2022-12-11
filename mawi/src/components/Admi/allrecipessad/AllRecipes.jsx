import React, { useEffect, useState } from 'react'
import './allRecipes.css'
import Navbar from "../adminNavbar/Navbar";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
const AllRecipes = (props) => {
  const [allrecipes,setAllRecipes]=useState([])
 useEffect(() => {
   axios.get("http://localhost:5000/user/getallrecipes").then((res) => {
     setAllRecipes(res.data);
   });
 }, []);
const DeleteRecipe=(name)=>{
axios
  .delete(`http://localhost:5000/user/deleteRecipe/${name}`)
  .then((res) => {
    axios.get("http://localhost:5000/user/getallrecipes").then((res) => {
      setAllRecipes(res.data);
    });
  })
  .catch((err) => alert("Error deleting"));
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
                  <h3></h3>
                </div>
              </div>
            </div>
            <div className="row">
              {allrecipes.map((e,i)=>{
                return (
                  <div className="col-12 col-sm-6 col-lg-4">
                    <div className="single-best-receipe-area mb-30">
                      <img
                        onClick={() => {
                          props.changeview("one");
                          props.changeRecipe(e);
                        }}
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
                            <div className="col-5"></div>
                            <div
                              className="col-2 btn text-danger"
                              onClick={() => {console.log('hi');
                                DeleteRecipe(e.Rname)
                              }}
                            >
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