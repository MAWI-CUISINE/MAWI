import React from 'react'
import "./about.css"

// import ReactDOM from 'react-dom';
import { useSpring, animated } from 'react-spring';

import  Navbar from "../user/navbar/Navbar.jsx"
import Foot from "../user/footer/Foot.jsx"

const About = () => {
 
  const Number=({n})=>{
    const {number} = useSpring(
      {
        from: {number :0},
        number: n,
        delay:200,
        config: { mass: 40, tension: 30 , friction: 100}
      }
    );
    return <animated.div>{number.to((n)=>n.toFixed(0))}</animated.div>
  }
  return (
    <div>


 <Navbar />
  {/* ##### Breadcumb Area Start ##### */} 


  <div
    className="breadcumb-area bg-img bg-overlay"
    style={{ backgroundImage: "url(https://res.cloudinary.com/dnwi9wvci/image/upload/v1670755836/mawi/breadcumb1_mcta1t.jpg)" }}
  >
    <div className="container h-100">
      <div className="row h-100 align-items-center">
        <div className="col-12">
          <div className="breadcumb-text text-center">
            <h2>About us</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* ##### Breadcumb Area End ##### */}
  {/* ##### About Area Start ##### */}
  <section className="about-area section-padding-80">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-heading">
            <h3>Who we are and what we do?</h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h6 className="sub-heading pb-5">
          Abdelkefi Mariem , Amdouni Amine and Mimouni Wiem
         we are 3 web developpers ,  ambitious students and especially food lovers that's why
           we created this website to give people the chance to make their life feel tasty .
          </h6>
          <p className="text-center">
          Food for us comes from our relatives, whether they have wings or fins or roots. 
          That is how we consider food. Food has a culture. It has a history. It has a story. It has relationships. 

          </p>
        </div>
      </div>
      <div className="row align-items-center mt-70">
        {/* Single Cool Fact */}
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="single-cool-fact">
            <img src="https://res.cloudinary.com/dnwi9wvci/image/upload/v1670768244/mawi/salad_oxtet6.png" alt="" />
            <h3>
            <Number n={1287}/>
            </h3>
            <h6>Amazing receipies</h6>
          </div>
        </div>
        {/* Single Cool Fact */}
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="single-cool-fact">
            <img src="https://res.cloudinary.com/dnwi9wvci/image/upload/v1670768290/mawi/hamburger_qhqhif.png" alt="" />
            <h3>
            <Number n={25}/>
            </h3>
            <h6>Burger receipies</h6>
          </div>
        </div>
        {/* Single Cool Fact */}
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="single-cool-fact">
            <img src="https://res.cloudinary.com/dnwi9wvci/image/upload/v1670768314/mawi/rib_j2triu.png" alt="" />
            <h3>
            <Number n={471}/>
            </h3>
            <h6>Meat receipies</h6>
          </div>
        </div>
        {/* Single Cool Fact */}
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="single-cool-fact">
            <img src="https://res.cloudinary.com/dnwi9wvci/image/upload/v1670768333/mawi/pancake_kixcwc.png" alt="" />
            <h3>
            <Number n={326}/>
            </h3>
            <h6>Desert receipies</h6>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <img className="mb-70" src="https://res.cloudinary.com/dnwi9wvci/image/upload/v1670756844/mawi/about_pswo9u.png" alt="" />
          <p className="text-center">
          Food brings people together on many different levels. It’s nourishment of the soul and body; it’s truly love.
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* ##### About Area End ##### */}
  
  {/* About*/}
  <section className="page-section" id="about">
    <div className="container">
      <div className="text-center">
        <h2 className="section-heading text-uppercase">About</h2>
        <h3 className="section-subheading text-muted">
          
        </h3>
      </div>
      <ul className="timeline">
        <li>
          <div className="timeline-image">
            <img
              className="rounded-circle img-fluid"
              src="https://res.cloudinary.com/dnwi9wvci/image/upload/v1670813365/mawi/wcsjusjc14vj4srsrat7.png"
              alt="..."
            />
          </div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4>septembre 2022</h4>
              <h4 className="subheading">Our Humble Beginnings</h4>
            </div>
            <div className="timeline-body">
              <p className="text-muted">
                RBK was the component that held us as props and from there the story begins
              </p>
            </div>
          </div>
        </li>
        <li className="timeline-inverted">
          <div className="timeline-image">
            <img
              className="rounded-circle img-fluid"
              src="assets/img/about/2.jpg"
              alt="..."
            />
          </div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4>October 2022</h4>
              <h4 className="subheading">A baby developer is Born</h4>
            </div>
            <div className="timeline-body">
              <p className="text-muted">
               we've passed to the junior phase after passing 6 weeks in Bootstrap suffering from the infinite for loops , while loops , recursion , "google it " and "search for it by your own"
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="timeline-image">
            <img
              className="rounded-circle img-fluid"
              src="assets/img/about/3.jpg"
              alt="..."
            />
          </div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4>from october to november</h4>
              <h4 className="subheading">Junior phase</h4>
            </div>
            <div className="timeline-body">
              <p className="text-muted">
                Actually during this period when you can truly suffer and maybe you will try  to throw your laptop out of the window thats why junior phase where the strongest survive and you should keep trying , trusting the process and believing in chkara7oms.
              </p>
            </div>
          </div>
        </li>
        <li className="timeline-inverted">
          <div className="timeline-image">
            <img
              className="rounded-circle img-fluid"
              src="assets/img/about/4.jpg"
              alt="..."
            />
          </div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4>December 2022</h4>
              <h4 className="subheading">Seniors</h4>
            </div>
            <div className="timeline-body">
              <p className="text-muted">
                the fruit of our hard work during the passed three months is the senior phase , where MAWI Kitchen has been  born 
              </p>
            </div>
          </div>
        </li>
        <li className="timeline-inverted">
          <div className="timeline-image">
            <h4>
              Be Part
              <br />
              Of Our
              <br />
              Story!
            </h4>
          </div>
        </li>
      </ul>
    </div>
  </section>
  <>
  {/* Team*/}
  <section className="page-section bg-light" id="team">
    <div className="container">
      <div className="text-center">
        <h2 className="section-heading text-uppercase">Amazing Team</h2>
        <h3 className="section-subheading text-muted">
          
        </h3>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <div className="team-member">
            <img
              className="mx-auto rounded-circle"
              src="https://res.cloudinary.com/dnwi9wvci/image/upload/v1670769790/mawi/IMG-20221103-WA0000_yi64mr.jpg"
              alt="..."
            />
            <h4>Abdelkefi Mariem</h4>
            <p className="text-muted">Scrum Master , The Hardest</p>
            <a
              className="btn btn-dark btn-social mx-2"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              aria-label="Parveen Anand Twitter Profile"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              className="btn btn-dark btn-social mx-2"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              aria-label="Parveen Anand Facebook Profile"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              className="btn btn-dark btn-social mx-2"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              aria-label="Parveen Anand LinkedIn Profile"
            >
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="team-member">
            <img
              className="mx-auto rounded-circle"
              src="https://res.cloudinary.com/dnwi9wvci/image/upload/c_scale,h_3000/v1670770180/mawi/IMG202112181610562_y4umds.jpg"
              alt="..."
            />
            <h4>Amdouni Amine</h4>
            <p className="text-muted">The Genuis</p>
            <a
              className="btn btn-dark btn-social mx-2"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              aria-label="Diana Petersen Twitter Profile"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              className="btn btn-dark btn-social mx-2"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              aria-label="Diana Petersen Facebook Profile"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              className="btn btn-dark btn-social mx-2"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              aria-label="Diana Petersen LinkedIn Profile"
            >
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="team-member">
            <img
              className="mx-auto rounded-circle"
              src="https://res.cloudinary.com/dnwi9wvci/image/upload/v1670769872/mawi/me_zvqhda.jpg"
              alt="..."
            />
            <h4>Mimouni Wiem</h4>
            <p className="text-muted">The kindest , The Greatest</p>
            <a
              className="btn btn-dark btn-social mx-2"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              aria-label="Larry Parker Twitter Profile"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              className="btn btn-dark btn-social mx-2"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              aria-label="Larry Parker Facebook Profile"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              className="btn btn-dark btn-social mx-2"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              aria-label="Larry Parker LinkedIn Profile"
            >
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <p className="large text-muted">
         
          </p>
        </div>
      </div>
    </div>
  </section>
</>
<Foot />



    </div>
  )
}

export default About;