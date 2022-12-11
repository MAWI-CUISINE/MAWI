import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../adminNavbar/Navbar";
import "./approve.css"

const Approve = () => {
    const [suggestion, setSuggestion]=useState([])


useEffect(()=>{
axios.get(`http://localhost:5000/user/getAllPost`).then((response)=>{
    setSuggestion(response.data)
})
},[])
console.log(suggestion[0],"maryouma");




  return (
 
    <div>
        <Navbar />
        <div className="p-3 ms-5 container" >
  <div className="row  d-flex m-5 flex-wrap align-items-center">
  
  
  { suggestion && suggestion.map((e)=>(
     <div className=" vgr-cards col-sm-6" style={{width:"30%" }}>
     <div className="card" >
         <div className="card-img-body">
         <img className="card-img" src={e.Pimage}  style={{width:"315px",height:"165px"}} alt="Card image cap"/>
         </div>
         <div className="card-body" >
           <p className="text-justify">Username:<p className="h7"></p></p>
           <p className="text-justify">Recipe name:<p className="h7">{e.Pname}</p></p>
           <p className="text-justify">Categorie:<p className="h7">{e.Pcategorie}</p></p>
           <p className="card-text">Description:</p>
           <a href="/" className="btn btn-outline-primary">Approve</a>
           <a href="/" className="btn btn-outline-primary">deny</a>
         </div>
       </div>
   </div>
  ))
 
  }
  
  
  
  
</div> 
  </div>
</div>
 
  )
}

export default Approve