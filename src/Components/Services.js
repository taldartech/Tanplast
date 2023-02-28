import Links from "./Links";
import Javascript from "./Javascript";
import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from "react-router-dom";

function Services(){
const state={
  responsive:{
      0: {
          items: 1,
      },
      450: {
          items: 1,
      },
      600: {
          items: 2,
      },
      1000: {
          items: 3,
      },
  },
}
  return (
    <> {/* Service Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
            <p className="d-inline-block border rounded text-primary fw-bold py-1 px-3">Our Businesses</p>
            <h1 className="display-5 mb-5" />
          </div>
          <OwlCarousel className="service-carousel" responsive={state.responsive} margin={8} autoplay={true} loop  data-wow-delay="0.3s">
            <div className="project-item pe-5 pb-5 ">
              <div className="project-img mb-3">
                <img className="img-fluid rounded" src="img/products/WATERSACHET.jpg" alt="" style={{ height: '250px' }} />
                <Link to="/watersachet"><i className="fa fa-link fa-3x text-primary" /></Link>
              </div>
              <div className="project-title">
                <h4 className="mb-0">Water sachet producers</h4>
              </div>
            </div>
            <div className="project-item pe-5 pb-5">
              <div className="project-img mb-3">
                <img className="img-fluid rounded" src="img/products/shoppingoutlets.jpg" alt="" style={{ height: '250px' }} />
                <Link to="shoppingoutlets"><i className="fa fa-link fa-3x text-primary" /></Link>
              </div>
              <div className="project-title">
                <h4 className="mb-0">Shopping outlets</h4>
              </div>
            </div>
            <div className="project-item pe-5 pb-5">
              <div className="project-img mb-3">
                <img className="img-fluid rounded" src="img/products/shrink-film-rolls-250-mm-to-800mm-.jpg" alt="" style={{ height: '250px' }} />
                <Link to="/construction"><i className="fa fa-link fa-3x text-primary" /></Link>
              </div>
              <div className="project-title">
                <h4 className="mb-0">Construction Industry</h4>
              </div>
            </div>
            <div className="project-item pe-5 pb-5">
              <div className="project-img mb-3">
                <img className="img-fluid rounded" src="img/products/FOOD&BEVERAGE.jpg" alt="" style={{ height: '250px' }} />
                <Link to="/fandb"><i className="fa fa-link fa-3x text-primary" /></Link>
              </div>
              <div className="project-title">
                <h4 className="mb-0">Food &amp; Beverage</h4>
              </div>
            </div>
            <div className="project-item pe-5 pb-5">
              <div className="project-img mb-3">
                <img className="img-fluid rounded" src="img/products/black-pallet-wrap-1.jpg" alt="" style={{ height: '250px' }} />
                <Link to="/industrial"><i className="fa fa-link fa-3x text-primary" /></Link>
              </div>
              <div className="project-title">
                <h4 className="mb-0">Industrial Consumers</h4>
              </div>
            </div>
          </OwlCarousel>
        </div>

      </div>
    {/* Service End */ }
    </>
  )
}
export default Services;