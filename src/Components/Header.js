import { Link, NavLink } from "react-router-dom";
import Links from "./Links"
import Javascript from "./Javascript";
import { useEffect } from "react";
import Topbar from "./Topbar";
const Header = () => {
  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener('scroll', fixedtop);
    return () => {
      window.removeEventListener('scroll', fixedtop);
    };
  });


  /* Method that will fix header after a specific scrollable */
  const fixedtop = (e) => {
    const header = document.querySelector('.navbar');
    const scrollTop = window.scrollY;
    scrollTop >= 90 ? header.classList.add('fixed-top') : header.classList.remove('fixed-top');
  };

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });


  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector('.navbar');
    const scrollTop = window.scrollY;
    scrollTop >= 90 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
  };
  return (
    <>
      <Links />
      <Javascript />
      <Topbar/>
      <div className="container-fluid fixed-top py-4 px-0 wow fadeIn " data-wow-delay="0.1s">

        <nav className="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
          <Link to="/" className="navbar-brand ms-4 ms-lg-0">
            <img src="img/tanplast.png" height="60px" />
          </Link>
          <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
              <NavLink to="/" activeClassName="active" className="nav-item nav-link">Home</NavLink>
              <NavLink to="/about" activeClassName="active" className="nav-item nav-link">About us</NavLink>
              <NavLink to="/business" activeClassName="active" className="nav-item nav-link">Our Products</NavLink>
              <NavLink to="/contact" activeClassName="active" className="nav-item nav-link">Contact us</NavLink>
            </div>

          </div>
        </nav>
      </div>

    </>
  )
}
export default Header;