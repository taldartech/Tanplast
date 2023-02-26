import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Client() {
  return (
    <>
      <div>
        <div className='container' >
        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
            <p className="d-inline-block border rounded text-primary fw-bold py-1 px-3">Our Super Clients</p>
            <h1 className="display-5 mb-5" />
          </div>
      </div>
      <div className='container' >
        <OwlCarousel items={6} margin={8} autoplay={true} loop data-wow-delay="0.3s">
          <div ><img className="img" src={'img/clients/sbllogo.png'} alt="client logo" /></div>
          <div ><img className="img" src={'img/clients/papaye.png'} alt="client logo"/></div>
          <div ><img className="img" src={'img/clients/furniturecity.png'} alt="client logo"/></div>
          <div ><img className="img" src={'img/clients/peppers.png'} alt="client logo"/></div>
          <div ><img className="img" src={'img/clients/egl.png'} alt="client logo"/></div>
          <div ><img className="img" src={'img/clients/fareast.png'} alt="client logo"/></div>
          
        </OwlCarousel>
      </div>
    </div>
    </>
  
  )
}



export default Client 