import React from "react";
import { Button } from "react-bootstrap";
// import {fa} from "@react-icons/all-files"
// // import "./Recipes.css"

const Recipies = (props) => {
  console.log(props, 'md' ); 
//   const oneRecipe = props.recipe;
//   const Im=["https://res.cloudinary.com/dugewmeeh/image/upload/v1670248932/mawi%20cuisine/insta1_qlet3h.jpg","https://res.cloudinary.com/dugewmeeh/image/upload/v1670248989/mawi%20cuisine/insta2_uwrmlo.jpg","https://res.cloudinary.com/dugewmeeh/image/upload/v1670249063/mawi%20cuisine/insta3_ehnaae.jpg","https://res.cloudinary.com/dugewmeeh/image/upload/v1670249083/mawi%20cuisine/insta4_nd6wrw.jpg","https://res.cloudinary.com/dugewmeeh/image/upload/v1670249105/mawi%20cuisine/insta5_oyivr8.jpg","https://res.cloudinary.com/dugewmeeh/image/upload/v1670249126/mawi%20cuisine/insta6_rlzig6.jpg","https://res.cloudinary.com/dugewmeeh/image/upload/v1670249146/mawi%20cuisine/insta7_rjzno4.jpg"]
//   return (
//     <div>
//       {/* { <!-- ##### Breadcumb Area Start ##### --> } */}
//       <div
//         className="breadcumb-area bg-img bg-overlay"
//         style={{
//           backgroundImage:
//             " url('https://res.cloudinary.com/dugewmeeh/image/upload/v1670248688/breadcumb3_r0b4mn.jpg')",
//         }}
//       >
//         <div className="container h-100">
//           <div className="row h-100 align-items-center">
//             <div className="col-12">
//               <div className="breadcumb-text text-center">
//                 <h2>Recipe</h2>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <!-- ##### Breadcumb Area End ##### --> */}

//       <div class="receipe-post-area section-padding-80">
//         {/* <!-- Receipe Post Search --> */}
//         <div class="receipe-post-search mb-80">
//           <div class="container">
//             <form action="#" method="post">
//               <div class="row">
//                 <div class="col-12 col-lg-6">
//                   <select name="select1" id="select1">
//                     <option value="1">All Receipies Categories</option>
//                     <option value="1">All Receipies Categories 2</option>
//                     <option value="1">All Receipies Categories 3</option>
//                     <option value="1">All Receipies Categories 4</option>
//                     <option value="1">All Receipies Categories 5</option>
//                   </select>
//                 </div>

//                 <div class="col-12 col-lg-5">
//                   <input
//                     type="search"
//                     name="search"
//                     placeholder="Search Receipies"
//                     style={{ height: "40px" }}
//                   />
//                 </div>
//                 <div class="col-12 col-lg-1 text-right">
//                   <button
//                     type="submit"
//                     style={{ background: "#40BA37" }}
//                     className="btn text-white"
//                   >
//                     Search
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>

//         {/* <!-- Receipe Slider --> */}
//         <div className="container">
//           <div className="row">
//             <div className="col-12">
//               <div className="receipe-slider owl-carousel">
//                 <img
//                   src="https://res.cloudinary.com/dugewmeeh/image/upload/v1670248802/mawi%20cuisine/bg5_hrrixd.jpg"
//                   alt=""
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* <!-- Receipe Content Area --> */}
//         <div className="receipe-content-area">
//           <div className="container">
//             <div className="row">
//               <div className="col-12 col-md-8">
//                 <div className="receipe-headline my-5">
//                   <span>April 05, 2018</span>
//                   <h2>Vegetarian cheese salad</h2>
//                   <div className="receipe-duration">
//                     <h6>Prep: 15 mins</h6>
//                     <h6>Cook: 30 mins</h6>
//                     <h6>Yields: 8 Servings</h6>
//                   </div>
//                 </div>
//               </div>

//               <div className="col-12 col-md-4">
//                 <div className="receipe-ratings text-right my-5"></div>
//               </div>
//             </div>

//             <div className="row">
//               {oneRecipe.Pmethodecook.map((e, i) => (
//                 <div className="col-12 col-lg-8">
//                   {/* <!-- Single Preparation Step --> */}
//                   <div className="single-preparation-step d-flex">
//                     <h4>{i}</h4>
//                     <p>{e}</p>
//                   </div>
//                 </div>
//               ))}

//               {/* <!-- Ingredients --> */}
//               <div className="col-12 col-lg-4">
//                 <div className="ingredients">
//                   <h4>Ingredients</h4>
                

//                   {
//      oneRecipe.Ringredients.map((e,i)=>( 
//                      <div>   
//   <div className="custom-control custom-checkbox"> 
//             <input
//                  type="checkbox"
//                  className="custom-control-input"
//                  id="customCheck1"
//             />
//             <label
//                    className="custom-control-label"
//                    htmlFor="customCheck1"
//                     >
//                       {e}
  
// </label></div>
// </div>
//    ))}
                 
//                 </div>
//               </div>
//             </div>
            

//             <div className="row">
//               <div className="col-12">
//                 <div className="section-heading text-left">
//                   <h3>Leave a comment</h3>
//                 </div>
//               </div>
//             </div>

//             <div className="row">
//               <div className="col-12">
//                 <div className="contact-form-area">
//                   <form action="#" method="post">
//                     <div className="row">
//                       <div className="col-12 col-lg-6">
//                         <input
//                           type="text"
//                           className="form-control"
//                           id="name"
//                           placeholder="Name"
//                         />
//                       </div>
//                       <div className="col-12 col-lg-6">
//                         <input
//                           type="email"
//                           className="form-control"
//                           id="email"
//                           placeholder="E-mail"
//                         />
//                       </div>
//                       <div className="col-12">
//                         <input
//                           type="text"
//                           className="form-control"
//                           id="subject"
//                           placeholder="Subject"
//                         />
//                       </div>
//                       <div className="col-12">
//                         <textarea
//                           name="message"
//                           className="form-control"
//                           id="message"
//                           cols="30"
//                           rows="10"
//                           placeholder="Message"
//                         ></textarea>
//                       </div>
//                       <div className="col-12">
//                         <Button
//                           className="btn delicious-btn mt-30"
//                           type="submit"
//                         >
//                           Post Comments
//                         </Button>
//                       </div>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* <!-- ##### Follow Us Instagram Area Start ##### --> */}
//       <div className="follow-us-instagram">
//         <div className="container">
//           <div className="row">
//             <div className="col-12">
//               <h5>Follow Us Instragram</h5>
//             </div>
//           </div>
//         </div>
//         {/* <!-- Instagram Feeds --> */}
//         <div className="insta-feeds d-flex flex-wrap">

// {Im.map((e,i)=>(
//   <>
//   {/* <!-- Single Insta Feeds --> */}
//           <div className="single-insta-feeds">
//             <img
//               src={e}
//               alt=""
//             />
           
//           </div>
//           </>
// ))}

          
        




//         </div>
//       </div>
//       {/* <!-- ##### Follow Us Instagram Area End ##### --> */}

//       {/* <!-- ##### Footer Area Start ##### --> */}
//       <footer className="footer-area">
//         <div className="container h-100">
//           <div className="row h-100">
//             <div className="col-12 h-100 d-flex flex-wrap align-items-center justify-content-between">
//               {/* <!-- Footer Social Info --> */}
//               <div className="footer-social-info text-right">
//                 <a href="#">
//                   <i className="fa fa-pinterest" aria-hidden="true"></i>
//                 </a>
//                 <a href="#">
//                   <i className="fa fa-facebook" aria-hidden="true"></i>
//                 </a>
//                 <a href="#">
//                   <i className="fa fa-twitter" aria-hidden="true"></i>
//                 </a>
//                 <a href="#">
//                   <i className="fa fa-dribbble" aria-hidden="true"></i>
//                 </a>
//                 <a href="#">
//                   <i className="fa fa-behance" aria-hidden="true"></i>
//                 </a>
//                 <a href="#">
//                   <i className="fa fa-linkedin" aria-hidden="true"></i>
//                 </a>
//               </div>
//               {/* <!-- Footer Logo --> */}
//               <div className="footer-logo">
//                 <a href="index.html">
//                   <img
//                     src="https://res.cloudinary.com/dugewmeeh/image/upload/v1670249613/mawi%20cuisine/logo_cptyxq.png"
//                     alt=""
//                   />
//                 </a>
//               </div>
//               {/* <!-- Copywrite --> */}
//               {/* <p><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
//               Copyright &copy;
//               <script>document.write(new Date().getFullYear());</script> All
//               rights reserved | This template is made with{" "}
//               <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
//               <a href="https://colorlib.com" target="_blank">
//                 Colorlib
//               </a>
//               {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p> */}
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
};

export default Recipies;
