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
   const [fileInputState, setFileInputState] = useState("");
   const [previewSource, setPreviewSource] = useState("");
   const [selectedFile, setSelectedFile] = useState();

   const handleImageUpload = (e) => {
     const file = e.target.files[0];
     previewFile(file);
     setSelectedFile(file);
     setFileInputState(e.target.value);
   };

   const [imageUploader, setImageUploader] = useState({ current: null });

   const previewFile = (file) => {
     const reader = new FileReader();
     reader.readAsDataURL(file);
     reader.onloadend = () => {
       setPreviewSource(reader.result);
     };
   };
  const handleChange = (e) => {
    setPcategorie(e.selectedValue[0]);
  };
  const add = (para) => {
    let {
                    Pname,
                    Ppeparation_time,
                    Pcook_time,
                    Pserves,
Pdescription,
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
        Pdescription,
        Pingredients,
        Pmethodecook,
        Pimage,
        Pcategorie,
      })
      .then((res) => (window.location.href = "allrecipes"))

      .catch((err) => alert(err));
  };
  return (
    <div>
      <Navbar />
      <div className="hi p-5  justify-content-center">
        <div className="row maindiv border ">
          <div className="col-4"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              ref={imageUploader}
              style={{
                display: "none",
              }}
            />
            <div
              className=""
             
              onClick={() => imageUploader.current.click()}
            >
              <img
                alt="not"
                className=""
                src={previewSource}
          
              />
            </div>
          </div>
          <div className="col-7 inputs">
            {/* TODO */}
            <h2 className="title pt-4">add a recipe</h2>

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
              <div className="col p-2">
                {" "}
                <button
                  className="btn btn--radius btn-success"
                  type="submit"
                  onClick={() => {
                    add({
                      Pname,
                      Ppeparation_time,
                      Pcook_time,
                      Pserves,
                      Pdescription,
                      Pingredients,
                      Pmethodecook,
                      Pimage: previewSource,
                      Pcategorie,
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
    </div>
  );
};

export default PostRecipe;
