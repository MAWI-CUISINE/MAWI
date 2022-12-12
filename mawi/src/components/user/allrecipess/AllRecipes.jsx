import React, { useEffect, useState } from 'react'
import './allRecipes.css'
import axios from 'axios';
import Navbar from '../navbar/Navbar.jsx';
import Foot from '../footer/Foot';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const AllRecipes = (props) => {
  const [allRecipes, setAllRecipes] = useState([])
  const [searching,setSearching]=useState('')
  useEffect(() => {
    axios.get("http://localhost:5000/user/getallrecipes").then(res => {
      setAllRecipes(res.data)
    })
  }, [])
  const filter = (para) => {
    axios.get(`http://localhost:5000/user/filter/${para}`).then(res => {
      setAllRecipes(res.data)
    })
  }
  
  const search = async(para) => {

    let searcharray = allRecipes.filter((e) =>
      e.Rname.toLowerCase().includes(para.toLowerCase())
    );
    
setAllRecipes(searcharray)
    
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
               <div className='row'>
                <div  className="col-2 btn-group">
                  <button type="button" className="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    categories
                  </button>

                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#"
                      onClick={() => {
                        filter("breakfast")
                      }}
                    >breakfast</a>
                    <a className="dropdown-item" href="#"
                      onClick={() => {
                        filter("di  nner")
                      }}
                    >dinner</a>
                    <a className="dropdown-item" href="#"
                      onClick={() => {
                        filter("dessert")
                      }}
                    >dessert</a>
                  </div>
                </div>
                <div className='col-6'></div>
                <div className="col input-group">
    <div className="form-outline">
      <input type="text" placeholder='search for a recipe' onChange={e=>setSearching(e.target.value)} id="form1" className="form-control" />
    
    </div>
    <button type="button" onClick={()=>search(searching)} className="btn btn-outline-success">
      <i className="fas fa-search" />
    </button>
  
  </div>
  </div>
                <div onClick={()=>{ axios
                  .get("http://localhost:5000/user/getallrecipes")
                  .then((res) => {
                    setAllRecipes(res.data);
                  });}} className="section-heading">
                  <h3>The best Receipies</h3>
                </div>
              </div>
            </div>
            <div className="row align-items-start">
              {allRecipes.map((e, i) => {
                return (
                  <div key={i} className="col col-sm-6 col-lg-4" onClick={() => {
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

            </div> <div className='row postition-absolute bottom-0  end-0'><div className='col-9'></div><div className='col'> join our coumunity by posting a recipe</div><div className='col'><button className='btn btn-outline-success ' onClick={() => { window.location.href = '/post' }}>Add Recepie</button></div></div>
          </div>


        </section>
        {/* ##### Best Receipe Area End ##### */}
      </>
      <Foot />
    </div>
  );
}

export default AllRecipes