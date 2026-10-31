import { Link } from "react-router-dom"
import Footers from "../Footers"
import Header from "../Header"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact=()=> {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jyzkia1', 'template_fzrzv98', form.current, 'XIYZa-eYQkmPWID2Y')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      alert("email sent successfully")
  };
  

  
  return (
    <div>
      <Header />
      {/* Page Header Start */}
      <div className="container-fluid contact-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-start py-5">
          <h1 className="display-2 mb-4 pt-5 animated slideInDown" style={{ color: "#1f2859" }}>Contact <span style={{ color: "#fbb31b" }} >Us</span> </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-start mb-0">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>

              <li className="breadcrumb-item" aria-current="page" style={{ color: "#fbb31b" }} >Contact</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}
      {/* Contact Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="text-center col-lg-12 wow fadeIn pb-5" data-wow-delay="0.1s">
             

              <form className="pb-5" ref={form} onSubmit={sendEmail}>
                <h3 className="text-start">Send us a Message</h3>
                <div className="row g-3">
                  <div className="col-md-7">
                    <div className="form-floating pb-2">
                      <input type="text" className="form-control" id="name" placeholder="Your Name" name="name"  />
                      <label htmlFor="name">Your Name</label>
                    </div>

                    <div className="form-floating pb-2">
                      <input type="email" className="form-control" id="email" placeholder="Your Email" name="email"  />
                      <label htmlFor="email">Your Email</label>
                    </div>

                    <div className="form-floating pb-2">
                      <input type="text" className="form-control" id="subject" placeholder="Subject" name="subject"/>
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="form-floating pb-2">
                      <textarea className="form-control" placeholder="Leave a message here" id="message" name="message" style={{ height: "187px" }}  />
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12 text-end">
                    <button className="btn py-3 px-5 " type="submit" value="send" style={{ backgroundColor: "#1f2859", color: "white" }}>Send Message</button>
                  </div>
                </div>
              </form>
              <div className="row border py-2 ">
                <h2 className="text-start pb-3">Contact us</h2>
                <div className="col-md-6 text-start">
                  <div className="pb-2"><h5 className="fw-bold"><i className="fa fa-map-marker-alt text-primary me-2" />ADDRESS</h5> <h5 className="">8,Kwatsons Warehouse,Printex Junction,Spintex Road,Accra</h5></div>
                  <div className="pb-2"><h5 className="fw-bold">GHANA POST GPS</h5> <h5 className=""> GT-335-3131</h5></div>
                  <div className="pb-2"><h5 className="fw-bold"><i className="fa fa-envelope text-primary me-2" />Email</h5> <h5 className="">info@tanplastghana.com</h5></div>
                </div>

                <div className="text-start right col-md-4">
                  <h5 className="fw-bold"><i className="fa fa-phone-alt text-primary me-2" />TELEPHONE NUMBERS</h5>
                  <h5 className="">+233577774555</h5>
                  <h5 className="">+233558396372</h5>
                  <h5 className="">+233573555150</h5>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* Contact End */}
      <Footers />
    </div>

  )
}
export default Contact