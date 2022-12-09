
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import axios from 'axios';
const PostRecipie = () => {
    console.log();
    const [Pname, setPname] = useState("")
    const [Ppeparation_time, setPpeparation_time] = useState(0)
    const [Pcook_time, setPcook_time] = useState(0)
    const [Pserves, setPserves] = useState(0)
    const [Pdescription, setPdescription] = useState(0)
    const [Pingredients, setPingredients] = useState([])
    const [Pmethodecook, setPmethodecook] = useState([])
    const [Pimage, setPimage] = useState("")
    const [Pcategorie, setPcategorie] = useState("")

    const add=(para)=>{
            axios.post('http://localhost:5000/user/post',para)
            .then (res=>{console.log(res);})
    }
    return (

        <div>




<div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="receipe-slider owl-carousel">
                        <img src="https://res.cloudinary.com/dnwi9wvci/image/upload/v1670511257/mawi/bg5_weirk3.jpg" alt=""/>
                        <img src="https://res.cloudinary.com/dnwi9wvci/image/upload/v1670511257/mawi/bg5_weirk3.jpg" alt=""/>
                        <img src="https://res.cloudinary.com/dnwi9wvci/image/upload/v1670511257/mawi/bg5_weirk3.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>




            {/* { <!-- ///// Breadcumb Area Start ///// --> } */}
         
            <div className="receipe-post-area section-padding-80">
                {/* <!-- Receipe Content Area --> */}
                <div className="receipe-content-area">
                    <div className="container">


                         <div className="row">
                            <div className="col-12 col-lg-8">
                            </div>


                            {/* <!-- Ingredients --> */}
                            <div className="col-12 col-lg-4">
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="contact-form-area">
                                   
                                        <div className="row">
                                            <div >
                                               
                                               <h >Choose the categorie of your recipe </h>
                                               <br></br>
                                                <select className="delicious-btn" 
                                               onChange={(event) =>  setPcategorie(event.target.value)}
                                                >
                                                <option> Categorie</option>
                                                <option> breakfast</option>
                                                <option> dinner</option>
                                                <option> desert</option>
                                                </select>
                                              <br></br>
                                                <h>Recipe Name :</h>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    placeholder="Name"
                                                    onChange={(event) => setPname(event.target.value)}
                                                />
                                                <h>Preparetion Time :</h>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    placeholder="Time"
                                                    onChange={(event) => setPpeparation_time(event.target.value)}
                                                />
                                                <h>Cook Time :</h>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    placeholder="Time"
                                                    onChange={(event) => setPcook_time(event.target.value)}
                                                />
                                                <h>Serves :</h>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    placeholder="Serves"
                                                    onChange={(event) => setPserves(event.target.value)}

                                                />
                                                <h>Description :</h>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Description"
                                                    onChange={(event) => setPdescription(event.target.value)}
                                                />
                                                <div className="col-12">
                                                    <h>Ingredients :</h>
                                                    <textarea
                                                        name="message"
                                                        className="form-control"
                                                        cols="30"
                                                        rows="10"
                                                        placeholder="Ingredients"
                                                        onChange={(event) => setPingredients(event.target.value)}
                                                    ></textarea>
                                                </div>
                                                <div className="col-12">
                                                    <h>Methode to cook :</h>
                                                    <textarea
                                                        name="message"
                                                        className="form-control"
                                                        cols="30"
                                                        rows="10"
                                                        placeholder="Methode to cook"
                                                        onChange={(event) => setPmethodecook(event.target.value)}
                                                    ></textarea>
                                                    <div className="col-12">
                                                        <h>Recipe image url :</h>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder='url image'
                                                            onChange={(event) => setPimage(event.target.value)}>
                                                        </input>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <Button
                                                    className="btn delicious-btn mt-30"
                                                    type="submit"
                                                    onClick={()=>{add({Pname,Ppeparation_time,Pcook_time,Pserves,Pdescription,Pingredients:[Pingredients],Pmethodecook:[Pmethodecook],Pimage,Pcategorie})
                                                   
                                                }}
                                            
                                                >
                                                    Post
                                                </Button>
                                            </div>
                                        </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


           

        
        </div>
    )
}

export default PostRecipie