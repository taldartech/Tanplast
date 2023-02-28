import { useState } from "react"
import { Link } from "react-router-dom"
import Footers from "../Footers"
import Header from "../Header"
function Contact(){
  
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [subject,setSubject] = useState("");
  const [message,setMessage] = useState("");
  function submit(e) {
    e.preventDefault()

    let data = { name, email, subject, message }
    console.log(data)
    fetch("http://localhost:4000/products",
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((result) => {
            result.json()
            .then((resp) => {
                console.warn(resp)
            })
        })
        alert("Email sent succefully")
        
}
return(
    <div>
        <Header/>
        {/* Page Header Start */}
        <div className="container-fluid contact-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container text-center py-5">
                    <h1 className="display-2 mb-4 animated slideInDown" style={{ color: "#1f2859" }}>Contact <span style={{ color: "#fbb31b" }} >Us</span> </h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
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
            <div className="  row g-5">
              <div className="text-center col-lg-12 wow fadeIn pb-5" data-wow-delay="0.1s">
                <p className=" d-inline-block border rounded text-primary fw-bold py-1 px-3">Contact</p>
                <div className="col-lg-12 col-md-12 wow fadeIn" data-wow-delay="0.5s" style={{width: "100%"}}>
                <div className="position-relative rounded h-100 w-100">
                  <iframe className="position-relative w-100 h-100 pb-5" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameBorder={0} style={{minHeight: '450px', border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
                </div>
              </div>
              
                <form className="pb-5" onSubmit={submit}>
                <h3 className="text-start">Send us a Message</h3>
                  <div className="row g-3">
                    <div className="col-md-7">
                      <div className="form-floating pb-2">
                        <input type="text" className="form-control" id="name" placeholder="Your Name" onChange={(e) => setName(e.target.value)} />
                        <label htmlFor="name">Your Name</label>
                      </div>
                   
                      <div className="form-floating pb-2">
                        <input type="email" className="form-control" id="email" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    
                      <div className="form-floating pb-2">
                        <input type="text" className="form-control" id="subject" placeholder="Subject" onChange={(e) => setSubject(e.target.value)}/>
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="form-floating pb-2">
                        <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height:"187px"}} onChange={(e) => setMessage(e.target.value)} />
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12 text-end">
                      <button className="btn py-3 px-5 " type="submit" style={{backgroundColor:"#1f2859", color:"white"}}>Send Message</button>
                    </div>
                  </div>
                </form>
                <div className="row">
                    <h2>Contact us</h2>
                    <div className="col-md-6 text-start">
                    <div className="pb-2"><h4>ADDRESS</h4> <span>8,Kwatsons Warehouse,Printex Junction,Spintex Road,Accra</span></div>
                    <div className="pb-2"><h5>GHANA POST GPS</h5> <span>GT-335-3131</span></div>
                    <div className="pb-2"><h4>Email : </h4> <span>tanplastghana10@gmail.com</span></div>
                    </div>
                
                <div className="text-center col-md-6">
                    <h4>TELEPHONE NUMBERS</h4>
                    <ul><li>+233577774555</li>
                    <li> +233558396372</li>
                    <li> +233573555150</li>
                    </ul>
                </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        {/* Contact End */}
        <Footers/>
      </div>
      
)
}
export default Contact