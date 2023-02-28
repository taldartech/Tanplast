import { Link } from "react-router-dom";

function Footers(){
    return(
        <>
         <div>
        <div className="container-fluid bg-dark text-light footer mt-5 wow fadeIn" data-wow-delay="0.1s">
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-lg-3 col-md-6">
                <h4 className="text-white mb-4">Tanplast</h4>
                <p className="mb-2"><i className="fa fa-map-marker-alt me-3" />8,Kwatsons Warehouse,
                  Printex Junction,Spintex Road,Accra</p>
                <p className="mb-2"><i className="fa fa-phone-alt me-3" />+233577774555</p>
                <p className="mb-2"><i className="fa fa-phone-alt me-3" />+233558396372</p>
                <p className="mb-2"><i className="fa fa-phone-alt me-3" />+233573555150</p>
                <p className="mb-2"><i className="fa fa-envelope me-3" />Tanplastghana10@gmail.com</p>
                
              </div>
              <div className="col-lg-3 col-md-6">
                <h4 className="text-white mb-4">Services</h4>
                <a className="btn btn-link" href>Water Sachet Producers</a>
                <a className="btn btn-link" href>Industrial Consumers</a>
                <a className="btn btn-link" href>Shopping Outlets</a>
                <a className="btn btn-link" href>Construction Industry</a>
                <a className="btn btn-link" href>Food & Beverage Plant</a>
              </div>
              <div className="col-lg-3 col-md-6">
                <h4 className="text-white mb-4">Quick Links</h4>
                <Link className="btn btn-link" to="/">Home</Link>
                <Link className="btn btn-link" to="/about">About Us</Link>
                <Link className="btn btn-link" to="/contact">Contact Us</Link>
                <Link className="btn btn-link" to="/business">Our Businesses</Link>
                
              </div>
              <div className="col-lg-3 col-md-6">
                <h4 className="text-white mb-4">Newsletter</h4>
                <p />
                <div className="position-relative w-100">
                  <input className="form-control bg-white border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                  <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                </div>
              </div>
               {/* Copyright Start */}
        
              <div className="col-md-12 text-center text-md-center">
                © <a className="border-bottom" href="#">Tanplast</a>, All Right Reserved.
              </div>
           
        {/* Copyright End */}
            </div>
          </div>
        </div>
        {/* Footer End */}
       
        {/* Back to Top */}
        <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i className="bi bi-arrow-up" /></a>
      </div>
        </>
    )
}
export default Footers;