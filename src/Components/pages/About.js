
import Header from "../Header";
import Footers from "../Footers";
import { Link } from "react-router-dom";
import Client from "../Client";
function About() {
  return (
    <>

      <Header />
      <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-start py-5 ">
          <h1 className="display-2 mb-4 pt-5 animated slideInDown" style={{ color: "#1f2859" }}>About <span style={{ color: "#fbb31b" }} >Us</span> </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-start mb-0 ">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>

              <li className="breadcrumb-item" aria-current="page" style={{ color: "#fbb31b" }} >About</li>
            </ol>
          </nav>
        </div>
      </div>


      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
            <p className="d-inline-block border rounded text-primary fw-bold py-1 px-3">Who we are</p>

          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-4 wow fadeInUp" data-wow-delay="0.1s">
              <div className="team-item rounded overflow-hidden pb-4">

                <img src="img/logovertical.png" height="350px" />
                


              </div>
            </div>
            <div className="col-lg-8 col-md-8 wow fadeInUp" data-wow-delay="0.1s">
              <div className="team-item rounded overflow-hidden pb-4">

                <h2> Mission</h2>
                <h4 className="fw-semi-bold pb-5">Tanplast Ghana Limited is committed to providing quality
                  packaging solutions to all industries and stakeholders, and it
                  dutifully complies with industry-standardized systems in order
                  to ensure the safety of people and the environment.</h4>

                <h2> Vision</h2>
                <h4 className="fw-semi-bold">To be the most refined and sought-after manufacturer in the
                  plastic packaging industry by using highly standardized
                  systems, state-of-the-art technology and equipment, and
                  innovative solutions that will satisfy our clients' needs.</h4>

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