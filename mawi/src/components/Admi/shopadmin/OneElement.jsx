import axios from "axios";
import React, { useState } from "react";

const OneElement = ({ e }) => {
    const [originalname,setOriginalName]=useState(e.Sname)
  const [price, setPrice] = useState(e.Sprice);
  const [name, setName] = useState(e.Sname);
  console.log(price,name);
  const UpdateElement=(element,body)=>{
    axios
      .put(`http://localhost:5000/user/UpdateItem/${element}`, body)
      .catch((err) => alert("an error occured"));
  } 
  const deleteElement = (element) => {
    axios
      .delete(`http://localhost:5000/user/deleteElement/${element}`)
      .catch((err) => alert("an error occured"));
  }; 
  return (
    <div >
      <div className="col mb-5"style={{width:'300px', height:'500px'}}>
        <div className="card h-100">
          {/* <!-- Product image-->  */}
          <img
            className="card-img-top justify-content-center"
            src={e.Simage}
            style={{
              width: "60%",
              height: "40%",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
          {/* <!-- Product details-->  */}
          <div className="card-body p-4">
            <div className="text-center">
              {/* <!-- Product name-->  */}
              <div class="form-group">
                <label>Product Name</label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  class="form-control"
                  defaultValue={name}
                  placeholder="enter product Name"
                />
              </div>

              {/* <!-- Product price-->  */}
              <div class="form-group">
                <label>Price</label>
                <input
                  onChange={(e) => setPrice(e.target.value)}
                  type="text"
                  class="form-control"
                  defaultValue={price}
                  placeholder="enter product Price"
                />
              </div>

              {/*
                        TODO
                         <QtyPicker
                                                    value={value}
                                                    onChange={function (newValue) { value = newValue }} /> */}
            </div>
          </div>
          {/* <!-- Product actions-->  */}
          <div className="p-4 pt-0 border-top-0 bg-transparent row">
            <div className="text-center col-6">
              <button
                onClick={() => {
               UpdateElement(originalname,{name,price})
                }}
                className="btn btn-outline-success mt-auto"
              >
                update
              </button>
            </div>
            <div className="text-center col-6">
              <button
                onClick={() => {
                  deleteElement(originalname)
                }}
                className="btn btn-outline-danger mt-auto"
              >
                delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneElement;
