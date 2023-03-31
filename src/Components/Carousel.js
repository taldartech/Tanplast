import { Link, NavLink } from "react-router-dom";
function Carousel() {
  return (

    <div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s" >
      <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel" >
        <div className=" carousel-inner ">
          <div className="carousel-item active" >
            <img className="w-100" src="img/carousel/banner5.png" alt="Image" height="400px" />
            <div className="carousel-caption">
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-lg-8">

                    <h5 className="display-1 mb-4 animated slideInDown">Welcome To Tanplast
                    </h5>
                    <Link to="/contact" className="btn btn-primary py-3 px-5 animated slideInDown" style={{ backgroundColor: "#1f2859" }}>Contact us</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img className="w-100" src="img/carousel/banner6.png" alt="Image" height="400px" />
            <div className="carousel-caption">
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-lg-7">

                    <h5 className="display-1 mb-4 animated slideInDown">Plastic Packaging</h5>
                  </div>
                </div>
              </div>
            </div>

          </div> <div className="carousel-item">
            <img className="w-100" src="img/carousel/banner7.png" alt="Image" height="400px" />
            <div className="carousel-caption">
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-lg-7">

                    <h5 className="display-1 mb-4 animated slideInDown text-white">Industri<span style={{color:"#fbb31b"}}>al</span> Solutio<span style={{color:"#fbb31b"}}>ns</span></h5>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="carousel-item">
            <img className="w-100" src="img/carousel/banner8.png" alt="Image" height="400px" />
            <div className="carousel-caption">
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-lg-7">

                    <h5 className="display-1 mb-4 animated slideInDown text-white">Packagin<span style={{color:"#fbb31b"}}>g</span> Manufa<span style={{color:"#fbb31b"}}>ctu</span>rers</h5>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="carousel-item">
            <img className="w-100" src="img/carousel/banner9.png" alt="Image" height="400px" />
            <div className="carousel-caption">
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-lg-7">

                    <h5 className="display-1 mb-4 animated slideInDown text-white">Customi<span style={{color:"#fbb31b"}}>zed</span> Product<span style={{color:"#fbb31b"}}>s</span></h5>
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