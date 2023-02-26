
import Header from "../Header";
import Footers from "../Footers";
import { Link } from "react-router-dom";
import Client from "../Client";
function About() {
  return (
    <>
      
      <Header />
      <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-5">
          <h1 className="display-2 text-white mb-4 animated slideInDown">About Us</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>

              <li className="breadcrumb-item text-primary" aria-current="page">About</li>
            </ol>
          </nav>
        </div>
      </div>


      <div className="container-xxl py-5">
        <div className="container">
          <div className=" text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>

          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-4 wow fadeInUp" data-wow-delay="0.1s">
              <div className="team-item rounded overflow-hidden pb-4">
                <p className=" fs-5 fw-medium text-primary">Who we are</p>
                <img src="img/tanplastlogo.png" />
                <h5>
                  <img src="img/logotext.png" />

                </h5>


              </div>
            </div>
            <div className="col-lg-4 col-md-4 wow fadeInUp" data-wow-delay="0.1s">
              <div className="team-item rounded overflow-hidden pb-4">
                <img className="img-fluid mb-4" src="img/mission.png" alt="" />
                <h5>Our Mission</h5>
                <span className="text-primary">Tanplast Ghana Limited is committed to providing quality
                  packaging solutions to all industries and stakeholders, and it
                  dutifully complies with industry-standardized systems in order
                  to ensure the safety of people and the environment.</span>
                <ul className="team-social">
                  <li><a className="btn btn-square" href><i className="fab fa-facebook-f" /></a></li>
                  <li><a className="btn btn-square" href><i className="fab fa-twitter" /></a></li>
                  <li><a className="btn btn-square" href><i className="fab fa-instagram" /></a></li>
                  <li><a className="btn btn-square" href><i className="fab fa-linkedin-in" /></a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 wow fadeInUp" data-wow-delay="0.3s">
              <div className="team-item rounded overflow-hidden pb-4">
                <img className="img-fluid mb-4" src="img/vision.png" alt="" />
                <h5>Our Vision</h5>
                <span className="text-primary text-left">To be the most refined and sought-after manufacturer in the
                  plastic packaging industry by using highly standardized
                  systems, state-of-the-art technology and equipment, and
                  innovative solutions that will satisfy our clients' needs.</span>
                <ul className="team-social">
                  <li><a className="btn btn-square" href><i className="fab fa-facebook-f" /></a></li>
                  <li><a className="btn btn-square" href><i className="fab fa-twitter" /></a></li>
                  <li><a className="btn btn-square" href><i className="fab fa-instagram" /></a></li>
                  <li><a className="btn btn-square" href><i className="fab fa-linkedin-in" /></a></li>
                </ul>
              </div>
            </div>

          </div>
        </div>

      </div>
      <Client />
      <Footers />
    </>
  )
}
export default About;