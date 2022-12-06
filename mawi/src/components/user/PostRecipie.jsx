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
            {/* { <!-- ##### Breadcumb Area Start ##### --> } */}
            <div
                className="breadcumb-area bg-img bg-overlay"
                style={{
                    backgroundImage:
                        " url('https://res.cloudinary.com/dugewmeeh/image/upload/v1670248688/breadcumb3_r0b4mn.jpg')",
                }}
            >
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="breadcumb-text text-center">
                                <h2>Recipe</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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

            {/* <!-- ##### Follow Us Instagram Area Start ##### --> */}
            <div className="follow-us-instagram">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h5>Follow Us Instragram</h5>
                        </div>
                    </div>
                </div>
                {/* <!-- Instagram Feeds --> */}
                <div className="insta-feeds d-flex flex-wrap">
                    {/* <!-- Single Insta Feeds --> */}
                    <div className="single-insta-feeds">
                        <img
                            src="https://res.cloudinary.com/dugewmeeh/image/upload/v1670248932/mawi%20cuisine/insta1_qlet3h.jpg"
                            alt=""
                        />
                        {/* <!-- Icon --> */}
                        <div className="insta-icon">
                            <a href="#">

                            </a>
                        </div>
                    </div>

                    {/* <!-- Single Insta Feeds --> */}
                    <div className="single-insta-feeds">
                        <img
                            src="https://res.cloudinary.com/dugewmeeh/image/upload/v1670248989/mawi%20cuisine/insta2_uwrmlo.jpg"
                            alt=""
                        />
                        {/* <!-- Icon --> */}
                        <div className="insta-icon">
                            <a href="#">
                                <i className="fa fa-instagram" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>

                    {/* <!-- Single Insta Feeds --> */}
                    <div className="single-insta-feeds">
                        <img
                            src="https://res.cloudinary.com/dugewmeeh/image/upload/v1670249063/mawi%20cuisine/insta3_ehnaae.jpg"
                            alt=""
                        />
                        {/* <!-- Icon --> */}
                        <div className="insta-icon">
                            <a href="#">
                                <i className="fa fa-instagram" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>

                    {/* <!-- Single Insta Feeds --> */}
                    <div className="single-insta-feeds">
                        <img
                            src="https://res.cloudinary.com/dugewmeeh/image/upload/v1670249083/mawi%20cuisine/insta4_nd6wrw.jpg"
                            alt=""
                        />
                        {/* <!-- Icon --> */}
                        <div className="insta-icon">
                            <a href="#">
                                <i className="fa fa-instagram" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>

                    {/* <!-- Single Insta Feeds --> */}
                    <div className="single-insta-feeds">
                        <img
                            src="https://res.cloudinary.com/dugewmeeh/image/upload/v1670249105/mawi%20cuisine/insta5_oyivr8.jpg"
                            alt=""
                        />
                        {/* <!-- Icon --> */}
                        <div className="insta-icon">
                            <a href="#">
                                <i className="fa fa-instagram" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>

                    {/* <!-- Single Insta Feeds --> */}
                    <div className="single-insta-feeds">
                        <img
                            src="https://res.cloudinary.com/dugewmeeh/image/upload/v1670249126/mawi%20cuisine/insta6_rlzig6.jpg"
                            alt=""
                        />
                        {/* <!-- Icon --> */}
                        <div className="insta-icon">
                            <a href="#">
                                <i className="fa fa-instagram" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>

                    {/* <!-- Single Insta Feeds --> */}
                    <div className="single-insta-feeds">
                        <img
                            src="https://res.cloudinary.com/dugewmeeh/image/upload/v1670249146/mawi%20cuisine/insta7_rjzno4.jpg"
                            alt=""
                        />
                        {/* <!-- Icon --> */}
                        <div className="insta-icon">
                            <a href="#">
                                <i className="fa fa-instagram" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ##### Follow Us Instagram Area End ##### --> */}

            {/* <!-- ##### Footer Area Start ##### --> */}
            <footer className="footer-area">
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-12 h-100 d-flex flex-wrap align-items-center justify-content-between">
                            {/* <!-- Footer Social Info --> */}
                            <div className="footer-social-info text-right">
                                <a href="#">
                                    <i className="fa fa-pinterest" aria-hidden="true"></i>
                                </a>
                                <a href="#">
                                    <i className="fa fa-facebook" aria-hidden="true"></i>
                                </a>
                                <a href="#">
                                    <i className="fa fa-twitter" aria-hidden="true"></i>
                                </a>
                                <a href="#">
                                    <i className="fa fa-dribbble" aria-hidden="true"></i>
                                </a>
                                <a href="#">
                                    <i className="fa fa-behance" aria-hidden="true"></i>
                                </a>
                                <a href="#">
                                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                                </a>
                            </div>
                            {/* <!-- Footer Logo --> */}
                            <div className="footer-logo">
                                <a href="index.html">
                                    <img
                                        src="https://res.cloudinary.com/dugewmeeh/image/upload/v1670249613/mawi%20cuisine/logo_cptyxq.png"
                                        alt=""
                                    />
                                </a>
                            </div>
                            {/* <!-- Copywrite --> */}
                            {/* <p><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                            Copyright &copy;
                            <script>document.write(new Date().getFullYear());</script> All
                            rights reserved | This template is made with{" "}
                            <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                            <a href="https://colorlib.com" target="_blank">
                                Colorlib
                            </a>
                            {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p> */}
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default PostRecipie