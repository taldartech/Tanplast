import { Link } from "react-router-dom";
import { useEffect } from "react";

function Footers() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <div>
        <div className="container-fluid bg-dark text-light footer mt-5 wow fadeIn" data-wow-delay="0.1s" >
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-lg-4 col-md-6">
                <h4 className="text-white mb-4">Tanplast</h4>
                <p className="mb-2"><i className="fa fa-map-marker-alt me-3" />8,Kwatsons Warehouse,
                  Printex Junction,Spintex Road,Accra</p>
                <p className="mb-2"><i className="fa fa-phone-alt me-3" />+233577774555</p>
                <p className="mb-2"><i className="fa fa-phone-alt me-3" />+233558396372</p>
                <p className="mb-2"><i className="fa fa-phone-alt me-3" />+233573555150</p>
                <p className="mb-2"><i className="fa fa-envelope me-3" />tanplastghana10@gmail.com</p>

              </div>
              <div className="col-lg-3 col-md-6">
                <h4 className="text-white mb-4">Our Products</h4>
                <Link className="btn btn-link" to="/watersachet">Water Sachet Producers</Link>
                <Link className="btn btn-link" to="/industrial">Industrial Consumers</Link>
                <Link className="btn btn-link" to="/shoppingoutlets">Shopping Outlets</Link>
                <Link className="btn btn-link" to="/construction">Construction Industry</Link>
                <Link className="btn btn-link" to="/fandb">Food & Beverage Plant</Link>
              </div>
              <div className="col-lg-2 col-md-6">
                <h4 className="text-white mb-4">Quick Links</h4>
                <Link className="btn btn-link" to="/">Home</Link>
                <Link className="btn btn-link" to="/about">About Us</Link>
                <Link className="btn btn-link" to="/business">Our Products</Link>
                <Link className="btn btn-link" to="/contact">Contact Us</Link>

              </div>
              <div className="col-lg-3 col-md-6">
                <h4 className="text-white mb-4">Our Promoters</h4>
                <p />
                <Link className="btn btn-link" target="_blank" to="https://sblelectronics.com/">SBL</Link>
              </div>
              {/* Copyright Start */}

              <div className="col-md-12 text-center text-md-center">
                © <p className="border-bottom">Copyright, All Right Reserved.<p>Developed and Managed by Taldar Tech Consultancy</p></p>
              </div>


              {/* Copyright End */}
            </div>
          </div>
        </div>
        {/* Footer End */}

        {/* Back to Top */}
        <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top" style={{backgroundColor:"#fbb31b"}}><i className="bi bi-arrow-up" /></a>
      </div>
    </>
  )
}
export default Footers;