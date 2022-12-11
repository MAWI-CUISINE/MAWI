import React, { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import BootstrapSelect from "react-bootstrap-select-dropdown";
import "./post.css";
import Navbar from "../navbar/Navbar.jsx";
const PostRecipe = (props) => {

  const [Pname, setPname] = useState("");
  const [Ppeparation_time, setPpeparation_time] = useState(0);
  const [Pcook_time, setPcook_time] = useState(0);
  const [Pserves, setPserves] = useState(0);
  const [Pingredients, setPingredients] = useState([]);
  const [Pmethodecook, setPmethodecook] = useState([]);
  const [Pimage, setPimage] = useState("");
  const [Pcategorie, setPcategorie] = useState("");

  const [Pdescription, setPdescription] = useState("");
  
  const handleChange = (e) => {
    setPcategorie(e.selectedValue[0]);
  };
  const add = (para) => {
    let {
                    Pname,
                    Ppeparation_time,
                    Pcook_time,
                    Pserves,

                    Pingredients,
                    Pmethodecook,
                    Pimage,
                    Pcategorie,
                   
                  }=para
     Pmethodecook = Pmethodecook.split(".");
     Pingredients = Pingredients.split(".");
 
 

    axios
      .post("http://localhost:5000/user/post", {
        Pname,
        Ppeparation_time,
        Pcook_time,
        Pserves,

        Pingredients,
        Pmethodecook,
        Pimage,
        Pcategorie,
      })
      
      .catch((err) => alert(err));
  };
  return (
    <div>
      <Navbar />
      <div className="hi p-5  justify-content-center">
        <div className="row maindiv border ">
          <div className="imageforwiwi col-4"></div>
          <div className="col-7 inputs">
            {/* TODO */}
            <h2 className="title"></h2>

            <div className="input row">
              <input
                className="input--style-2 col-4"
                type="text"
                placeholder="Recipe Name :"
                onChange={(event) => setPname(event.target.value)}
              />
              <div className="col-8">
                <div className="rs-select2 js-select-simple select--no-search">
                  <BootstrapSelect
                    options={[
                      {
                        labelKey: "optionItem1",
                        value: "breakfast",
                      },
                      {
                        labelKey: "optionItem1",
                        value: "dinner",
                      },
                      {
                        labelKey: "optionItem2",
                        value: "dessert",
                      },
                    ]}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="">
                <div className="input">
                  <input
                    className="input--style-2 js-datepicker"
                    type="text"
                    placeholder="Preparation Time:"
                    onChange={(event) =>
                      setPpeparation_time(event.target.value)
                    }
                  />
                </div>
              </div>
            </div>

            <div className="input">
              <input
                className="input--style-2 js-datepicker"
                type="text"
                placeholder="Cook Time :"
                onChange={(event) => setPcook_time(event.target.value)}
              />
            </div>
            <div className="input">
              <input
                className="input--style-2 js-datepicker"
                type="text"
                placeholder="Recipe image url :"
                onChange={(event) => setPimage(event.target.value)}
              />
            </div>

            <div className="input">
              <input
                className="input--style-2 js-datepicker"
                type="text"
                placeholder="servings:"
                onChange={(event) => setPserves(event.target.value)}
              />
            </div>
            <div className="input">
              <input
                className="input--style-2 js-datepicker"
                type="text"
                placeholder="description:"
                onChange={(event) => setPdescription(event.target.value)}
              />
            </div>

            <div className="row ">
              <div className="">
                <h4>Ingredients:</h4>
                <textarea
                  placeholder="please separete ur ingredients  with a   '.'"
                  className="Array"
                  type="text"
                  onChange={(event) => setPingredients(event.target.value)}
                />
              </div>
            </div>
            <div className="row ">
              <div className="">
                <h4>Method to cook:</h4>
                <textarea
                  placeholder="please separete ur methods  with a   '.'"
                  className="Array"
                  type="text"
                  onChange={(event) => setPmethodecook(event.target.value)}
                />
              </div>
            </div>
            <div className="p-t-30 row">
              <div className="col-10"></div>
              <div className="col p-2"> <button
                className="btn btn--radius btn-success"
                type="submit"
                onClick={() => {
                  add({
                    Pname,
                    Ppeparation_time,
                    Pcook_time,
                    Pserves,

                    Pingredients,
                    Pmethodecook,
                    Pimage,
                    Pcategorie,
                   
                  });
                }}
              >
                Post
              </button></div>

             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostRecipe;
