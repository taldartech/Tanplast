import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Client() {
  return (
    <>
      <div className='pt-5'>
        <div className='container' >
        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
            <p className="d-inline-block border rounded text-primary fw-bold py-1 px-3"  style={{marginRight:"50px"}}>Our Super Clients</p>
            <h1 className="display-5 mb-5" />
          </div>
      </div>
    </div>



     {/* Clients carousel Start */}
     <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto" style={{maxWidth: '500px'}}>
            
          </div>
          <div className="row g-5">
            <div className="col-lg-3 d-none d-lg-block">
              <div className="client2-left h-100">
                <img className="img-fluid animated pulse infinite" src="img/clients/SBLLOGO.png" alt="" />
                <img className="img-fluid animated pulse infinite" src="img/clients/pepperslogo.jpg" alt="" />
                <img className="img-fluid animated pulse infinite" src="img/clients/papaye-logo.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <OwlCarousel className="owl-carousel client2-carousel" items={1} nav margin={3} autoplay={true} loop data-wow-delay="0.3s">
                <div className="client2-item text-center">
                  <img className="img-fluid rounded mx-auto mb-4" src="img/clients/SBLLOGO.png" alt="" />
                  <p className="fs-5">
                  </p>
                  <h5>SBL</h5>
                </div>
                <div className="client2-item text-center">
                  <img className="img-fluid rounded mx-auto mb-4" src="img/clients/pepperslogo.jpg" alt="" />
                  <p className="fs-5">
                  </p>
                  <h5>PEPPERS</h5>
                </div>
                <div className="client2-item text-center">
                  <img className="img-fluid rounded mx-auto mb-4" src="img/clients/papaye-logo.png" alt="" />
                  <p className="fs-5">
                  </p>
                  <h5>Papaye Fast Food</h5>
                </div>
                <div className="client2-item text-center">
                  <img className="img-fluid rounded mx-auto mb-4" src="img/clients/fcity_logo.png" alt="" />
                  <p className="fs-5">
                  </p>
                  <h5>FURNITURE CITY</h5>
                </div>
                <div className="client2-item text-center">
                  <img className="img-fluid rounded mx-auto mb-4" src="img/clients/fareastlogo.png" alt="" />
                  <p className="fs-5">
                  </p>
                  <h5>Fareast Mercantile Co. Ltd</h5>
                </div>
                <div className="client2-item text-center">
                  <img className="img-fluid rounded mx-auto mb-4" src="img/clients/electroland-ghana-ltd_logo.png" alt="" />
                  <p className="fs-5">
                  </p>
                  <h5>EGL</h5>
                </div>
            </OwlCarousel>
              </div>
            <div className="col-lg-3 d-none d-lg-block">
              <div className="client2-right h-100 ">
                <img className="img-fluid animated pulse infinite" src="img/clients/fcity_logo.png" alt="" />
                <img className="img-fluid animated pulse infinite" src="img/clients/fareastlogo.png" alt="" />
                <img className="img-fluid animated pulse infinite" src="img/clients/electroland-ghana-ltd_logo.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* client2 End */}
    </>
  
  )
}



export default Client 