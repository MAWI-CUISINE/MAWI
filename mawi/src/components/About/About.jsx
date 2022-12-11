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
            Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt,
            sodales nunc id, finibus nibh. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos. Fusce
            nec ante vitae lacus aliquet vulputate. Donec scelerisque accumsan
            molestie. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia Curae
          </h6>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque
            tortor. Aenean congue sed metus in iaculis. Cras a tortor enim.
            Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Proin malesuada et mauris ut lobortis. Sed eu iaculis
            sapien, eget luctus quam. Aenean hendrerit varius massa quis
            laoreet. Donec quis metus ac arcu luctus accumsan. Nunc in justo
            tincidunt, sodales nunc id, finibus nibh. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque
            tortor. Aenean congue sed metus in iaculis. Cras a tortor enim.
            Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Proin malesuada et mauris ut lobortis. Sed eu iaculis
            sapien, eget luctus quam. Aenean hendrerit varius massa quis
            laoreet. Donec quis metus ac arcu luctus accumsan. Nunc in justo
            tincidunt, sodales nunc id, finibus nibh. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos.
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
          Lorem ipsum dolor sit amet consectetur.
        </h3>
      </div>
      <ul className="timeline">
        <li>
          <div className="timeline-image">
            <img
              className="rounded-circle img-fluid"
              src="assets/img/about/1.jpg"
              alt="..."
            />
          </div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4>2009-2011</h4>
              <h4 className="subheading">Our Humble Beginnings</h4>
            </div>
            <div className="timeline-body">
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                ut voluptatum eius sapiente, totam reiciendis temporibus qui
                quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
                dolore laudantium consectetur!
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
              <h4>March 2011</h4>
              <h4 className="subheading">An Agency is Born</h4>
            </div>
            <div className="timeline-body">
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                ut voluptatum eius sapiente, totam reiciendis temporibus qui
                quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
                dolore laudantium consectetur!
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
              <h4>December 2015</h4>
              <h4 className="subheading">Transition to Full Service</h4>
            </div>
            <div className="timeline-body">
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                ut voluptatum eius sapiente, totam reiciendis temporibus qui
                quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
                dolore laudantium consectetur!
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
              <h4>July 2020</h4>
              <h4 className="subheading">Phase Two Expansion</h4>
            </div>
            <div className="timeline-body">
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                ut voluptatum eius sapiente, totam reiciendis temporibus qui
                quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
                dolore laudantium consectetur!
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
        <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
        <h3 className="section-subheading text-muted">
          Lorem ipsum dolor sit amet consectetur.
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
              href="#!"
              aria-label="Parveen Anand Twitter Profile"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              className="btn btn-dark btn-social mx-2"
              href="#!"
              aria-label="Parveen Anand Facebook Profile"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              className="btn btn-dark btn-social mx-2"
              href="#!"
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
              href="#!"
              aria-label="Diana Petersen Twitter Profile"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              className="btn btn-dark btn-social mx-2"
              href="#!"
              aria-label="Diana Petersen Facebook Profile"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              className="btn btn-dark btn-social mx-2"
              href="#!"
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
              href="#!"
              aria-label="Larry Parker Twitter Profile"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              className="btn btn-dark btn-social mx-2"
              href="#!"
              aria-label="Larry Parker Facebook Profile"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              className="btn btn-dark btn-social mx-2"
              href="#!"
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque,
            laboriosam veritatis, quos non quis ad perspiciatis, totam corporis
            ea, alias ut unde.
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