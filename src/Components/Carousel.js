import { Link, NavLink } from "react-router-dom";
function Carousel(){
    return(
      
        <div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className=" carousel-inner">
            <div className="carousel-item active" >
              <img className="w-100" src="img/canva/carousel.png" alt="Image" height="600px"  />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-lg-8">
                      
                      <h1 className="display-1 mb-4 animated slideInDown">Welcome To Tanplast
                      </h1>
                      <Link to="/contact" className="btn btn-primary py-3 px-5 animated slideInDown" style={{backgroundColor:"#1f2859"}}>Contact us</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="img/canva/carousel2.png" alt="Image" height="600px" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-lg-7">
                      
                      <h1 className="display-1 mb-4 animated slideInDown">Packaging Solutions</h1>
                      <Link to="/about" className="btn btn-primary py-3 px-5 animated slideInDown" style={{backgroundColor:"#1f2859"}}>About us</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    )
}
export default Carousel;