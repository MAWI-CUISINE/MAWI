import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./foot.css"
const Foot = () => {
    const Im = [
        "https://res.cloudinary.com/dugewmeeh/image/upload/v1670248932/mawi%20cuisine/insta1_qlet3h.jpg",
        "https://res.cloudinary.com/dugewmeeh/image/upload/v1670248989/mawi%20cuisine/insta2_uwrmlo.jpg",
        "https://res.cloudinary.com/dugewmeeh/image/upload/v1670249063/mawi%20cuisine/insta3_ehnaae.jpg",
        "https://res.cloudinary.com/dugewmeeh/image/upload/v1670249083/mawi%20cuisine/insta4_nd6wrw.jpg",
        "https://res.cloudinary.com/dugewmeeh/image/upload/v1670249105/mawi%20cuisine/insta5_oyivr8.jpg",
        "https://res.cloudinary.com/dugewmeeh/image/upload/v1670249126/mawi%20cuisine/insta6_rlzig6.jpg",
        "https://res.cloudinary.com/dugewmeeh/image/upload/v1670249146/mawi%20cuisine/insta7_rjzno4.jpg",
      ];
  return (
    <div>
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
          {Im.map((e, i) => (
            <div key={i}>
              {/* <!-- Single Insta Feeds --> */}
              <div className="single-insta-feeds">
                <img src={e} alt="" />
                <div className="insta-icon">
                  <a target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    <FontAwesomeIcon icon="fa-brands fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <!-- footer  --> */}
      <footer className="footer-area">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-12 h-100 d-flex flex-wrap align-items-center justify-content-between">
              {/* <!-- Footer Social Info --> */}
              <div className="footer-social-info text-right">
                <a target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                  <FontAwesomeIcon icon="fa-brands fa-pinterest" />
                </a>
                <a target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                  <FontAwesomeIcon icon="fa-brands fa-facebook" />
                </a>
                <a target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                  <FontAwesomeIcon icon="fa-brands fa-twitter" />
                </a>
                <a target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                  <FontAwesomeIcon icon="fa-brands fa-dribbble" />
                </a>
                <a target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                  <FontAwesomeIcon icon="fa-brands fa-behance" />
                </a>
                <a target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                  <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                </a>
              </div>
              {/* <!-- Footer Logo --> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Foot