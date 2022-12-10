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
  console.log(props);
  const handleChange = (e) => {
    setPcategorie(e.selectedValue[0]);
  };
  const add = (para) => {
    axios
      .post("http://localhost:5000/user/post", para)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Navbar />
      <div className="hi p-5  justify-content-center">
        <div className="row maindiv border ">
          <div className="imageforwiwi col-4"></div>
          <div className="col-6 inputs">
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


            <div className="row ">
              <div className="">
                <h4>Ingredients:</h4>
                <textarea
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
                  className="Array"
                  type="text"
                  onChange={(event) => setPmethodecook(event.target.value)}
                />
              </div>
            </div>
            <div className="p-t-30">
              <button 
                className="btn btn--radius btn-success"
                type="submit"
                onClick={() => {
                  add({
                    Pname,
                    Ppeparation_time,
                    Pcook_time,
                    Pserves,
                  
                    Pingredients: [Pingredients],
                    Pmethodecook: [Pmethodecook],
                    Pimage,
                    Pcategorie,
                    Uname:props.user
                  });
                }}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostRecipe;
