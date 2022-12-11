import React from "react";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../adminNavbar/Navbar.jsx";
import axios from "axios";
import Foot from "../../user/footer/Foot.jsx";

// import "./Recipe.css"
import Singleingr from "./Singleingr";

const Recipies = (props) => {
  const One = props.recipe;

  const [allRecipes, setAllRecipes] = useState([]);
  const [likes, setLikes] = useState(One.Rlike);
  const [dislikes, setDisLikes] = useState(One.Rdislike);
  const [image, setImage] = useState(One.Rimage);

  const Like = (nama) => {
    axios.put(`http://localhost:5000/user/recipelike/${nama}`);
    let laca = likes;
    setLikes(laca + 1);
  };
  const DisLike = (nama) => {
    axios.put(`http://localhost:5000/user/recipedislike/${nama}`);
    let dislaca = dislikes;
    setDisLikes(dislaca + 1);
  };
  return (
    <div>
      <Navbar />
      <div>
        <div className="receipe-post-area section-padding-80">
          {/* <!-- Receipe Content Area --> */}
          <div className="receipe-content-area">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-8">
                  <div className="receipe-headline my-5">
                    <h2>{One && One.Rname}</h2>
                    <div className="row">
                      <div className="receipe-duration col-8 col-md-8">
                        <h6>Prep: {One && One.Rpeparation_time}</h6>
                        <h6>Cook: {One && One.Rcook_time}</h6>
                        <h6>
                          Yields:{One && One.Rserves}
                          Servings
                        </h6>
                        <h6>
                          Categorie:
                          {One && One.Rcategorie}
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-4">
                  <img src={One.Rimage} />
                  <div className="row p-3 d-flex justify-content-center">
                    <div className=" col-2 col-lg-2">
                      <h6
                        onClick={() => {
                          Like(One.Rname);
                        }}
                      >
                        <FontAwesomeIcon icon="fa-regular fa-thumbs-up" />
                        {likes}
                      </h6>
                    </div>{" "}
                    <div className=" col-2 col-lg-2">
                      <h6
                        onClick={() => {
                          DisLike(One.Rname);
                        }}
                      >
                        <FontAwesomeIcon icon="fa-regular fa-thumbs-down" />
                        {dislikes}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-8 col-lg-8">
                  {One &&
                    One.Rmethodecook.map((e, i) => (
                      <div>
                        {/* <!-- Single Preparation Step --> */}
                        <div className="single-preparation-step d-flex">
                          <h4>{i}</h4>
                          <p>{e}</p>
                        </div>
                      </div>
                    ))}
                </div>
                {/* <!-- Ingredients --> */}
                <div className="col-4 col-lg-4">
                  <div className="ingredients">
                    <h4>Ingredients</h4>

                    {One &&
                      One.Ringredients.map((e, i) => (
                        <Singleingr e={e} i={i} />
                      ))}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <div className="section-heading text-left">
                    <h3>Leave a comment</h3>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <div className="contact-form-area">
                    <form action="/" method="post">
                      <div className="row">
                        <div className="col-12 col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Name"
                          />
                        </div>
                        <div className="col-12 col-lg-6">
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="E-mail"
                          />
                        </div>
                        <div className="col-12">
                          <input
                            type="text"
                            className="form-control"
                            id="subject"
                            placeholder="Subject"
                          />
                        </div>
                        <div className="col-12">
                          <textarea
                            name="message"
                            className="form-control"
                            id="message"
                            cols="30"
                            rows="10"
                            placeholder="Message"
                          ></textarea>
                        </div>
                        <div className="col-12">
                          <Button
                            className="btn delicious-btn mt-30"
                            type="submit"
                          >
                            Post Comments
                          </Button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Foot></Foot>
      </div>
    </div>
  );
};

export default Recipies;
