import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../../Admi/adminNavbar/Navbar";
import "./approve.css";

const Approve = (props) => {
 
  const [suggestion, setSuggestion] = useState([]);
const approve=(name,body)=>{
 
  axios
    .post("http://localhost:5000/user/postRecipes", body)
    .then((res) => {
      axios
        .delete(`http://localhost:5000/user/deletePost/${name}`)
        .then((res) => {
          axios
            .get(`http://localhost:5000/user/getAllPost`)
            .then((response) => {
              let filtred=response.data.filter(e=>e.Pname)
              setSuggestion(filtred);
           
            });
        });
    })
    .catch((err) => alert("cannot approve this item try again  later"));
}
const deny=(name)=>{
   axios.delete(`http://localhost:5000/user/deletePost/${name}`)
   .then(res=>{
 axios.get(`http://localhost:5000/user/getAllPost`).then((response) => {
   setSuggestion(response.data);
 });
   }).catch(err=>alert('cannot delete this item try again  later'))
}
  useEffect(() => {
    axios.get(`http://localhost:5000/user/getAllPost`).then((response) => {
     let filtred = response.data.filter((e) => e.Pname);
     setSuggestion(filtred);
    });
  }, []);
 

  return (
    <div>
      <Navbar />
      <div className="p-3 ms-5 container">
        <div className="row  d-flex m-5 flex-wrap align-items-center">
          {suggestion &&
            suggestion.map((e, i) => (
              <div
                key={i}
                className=" vgr-cards col-sm-6"
                style={{ width: "30%" }}
              >
                <div className="card">
                  <div className="card-img-body ps-2 pt-2">
              <img                 
                      className="card-img"
                      src={e.Pimage}
                      style={{ width: "315px", height: "165px" }}
                      alt="Card image cap"
                    />
                  </div>
                  <div className="card-body">
                    <div className="text-justify">
                      Recipe name:<p className="h7">{e.Pname}</p>
                    </div>
                    <div className="text-justify">
                      Categorie:<p className="h7">{e.Pcategorie}</p>
                    </div>

                    <button
                      onClick={() =>
                        approve(e.Pname, {
                          Rname: e.Pname,
                          Rpeparation_time: e.Ppeparation_time,
                          Rcook_time: e.Pcook_time,

                          Rserves: e.Pserves,
                          Ringredients: e.Pingredients,
                          Rmethodecook: e.Pmethodecook,
                          Rimage: e.Pimage,

                          Rcategorie: e.Pcategorie,
                          Rdescription: e.Pdescription,
                        })
                      }
                      className="btn btn-outline-success"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => {
                        deny(e.Pname);
                      }}
                      className="btn btn-outline-danger"
                    >
                      deny
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Approve;
