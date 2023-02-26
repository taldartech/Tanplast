import { Link } from "react-router-dom";

function Footers(){
    return(
        <>
         <div>
        <div className="container-fluid bg-dark text-light footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s">
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-lg-3 col-md-6">
                <h4 className="text-white mb-4">Tanplast</h4>
                <p className="mb-2"><i className="fa fa-map-marker-alt me-3" />8,Kwatsons Warehouse,
                  Printex Junction,Spintex Road,Accra</p>
                <p className="mb-2"><i className="fa fa-phone-alt me-3" />+233577774555</p>
                <p className="mb-2"><i className="fa fa-phone-alt me-3" /> +233558396372</p>
                <p className="mb-2"><i className="fa fa-phone-alt me-3" />  +233573555150</p>
                <p className="mb-2"><i className="fa fa-envelope me-3" />Tanplastghana10@gmail.com</p>
                <div className="d-flex pt-2">
                  <a className="btn btn-square btn-outline-light rounded-circle me-2" href><i className="fab fa-twitter" /></a>
                  <a className="btn btn-square btn-outline-light rounded-circle me-2" href><i className="fab fa-facebook-f" /></a>
                  <a className="btn btn-square btn-outline-light rounded-circle me-2" href><i className="fab fa-youtube" /></a>
                  <a className="btn btn-square btn-outline-light rounded-circle me-2" href><i className="fab fa-linkedin-in" /></a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <h4 className="text-white mb-4">Services</h4>
                <a className="btn btn-link" href>Water Sachet</a>
                <a className="btn btn-link" href>Industrial Consumers</a>
                <a className="btn btn-link" href>Shopping Outlets</a>
                <a className="btn btn-link" href>Business Loans</a>
                <a className="btn btn-link" href>Business Analysis</a>
              </div>
              <div className="col-lg-3 col-md-6">
                <h4 className="text-white mb-4">Quick Links</h4>
                <a className="btn btn-link" href>About Us</a>
                <a className="btn btn-link" href>Contact Us</a>
                <a className="btn btn-link" href>Our Services</a>
                <a className="btn btn-link" href>Terms &amp; Condition</a>
                <a className="btn btn-link" href>Support</a>
              </div>
              <div className="col-lg-3 col-md-6">
                <h4 className="text-white mb-4">Newsletter</h4>
                <p />
                <div className="position-relative w-100">
                  <input className="form-control bg-white border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                  <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer End */}
        {/* Copyright Start */}
        <div className="container-fluid copyright py-4">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                © <a className="border-bottom" href="#">Tanplast</a>, All Right Reserved.
              </div>
            </div>
          </div>
        </div>
        {/* Copyright End */}
        {/* Back to Top */}
        <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i className="bi bi-arrow-up" /></a>
      </div>
        </>
    )
}
export default Footers;