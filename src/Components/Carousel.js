function Carousel(){
    return(
        <>
        <div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src="img/canva/carousel.png" alt="Image" height="700px" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-lg-8">
                      <p className="d-inline-block border border-white rounded text-primary fw-bold py-1 px-3 animated slideInDown">
                        Welcome to Tanplast</p>
                      <h1 className="display-1 mb-4 animated slideInDown">Welcome
                      </h1>
                      <a href className="btn btn-primary py-3 px-5 animated slideInDown">Contact us</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="img/canva/carousel2.png" alt="Image" height="700px" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-lg-7">
                      <p className="d-inline-block border border-white rounded text-primary fw-bold py-1 px-3 animated slideInDown">
                        Welcome to Tanplast</p>
                      <h1 className="display-1 mb-4 animated slideInDown">Tanplast</h1>
                      <a href className="btn btn-primary py-3 px-5 animated slideInDown">About us</a>
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

        </>
    )
}
export default Carousel;