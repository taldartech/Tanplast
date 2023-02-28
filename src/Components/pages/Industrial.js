import Header from "../Header";
import Footers from "../Footers";
import { Link } from "react-router-dom";
import Client from "../Client";
function Industrial() {
    return (
        <>

            <Header />
            <div className="container-fluid business-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container text-center py-5">
                    <h1 className="display-2 mb-4 pt-5 animated slideInDown" style={{ color: "#1f2859" }}>Our <span style={{ color: "#fbb31b" }} >Businesses</span> </h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="/business">Businesses</Link></li>

                            <li className="breadcrumb-item" aria-current="page" style={{ color: "#fbb31b" }} >Industrial Consumers</li>
                        </ol>
                    </nav>
                </div>
            </div>


            <div className="container-xxl py-3">
                <div className="container">
                    <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                        <p className="d-inline-block border rounded text-primary fw-bold py-1 px-3">Industrial Consumers</p>

                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-4 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item text-center rounded overflow-hidden pb-4">
                                <img src="img/products/shrink-film-rolls-250-mm-to-800mm-.jpg" className="w-75" height="220px" />
                                <h4 >Industrial Consumers</h4>
                            </div>
                        </div>
                        <div className="offset-1 col-lg-7 col-md-7 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item rounded overflow-hidden pb-4">

                                <h2 className="pb-3 pt-3" style={{color: "#fbb31b"}}> Description:</h2>
                                <h4 className="fw-semi-bold pb-5">We offer our customers a cost-saving alternative to
corrugated packaging with plastic film. Our plastic film
can be used to wrap your products, making it possible
for you to reduce your production costs.</h4>
                               


                            </div>
                        </div>

                    </div>
                </div>

            </div>
           
            <Footers />
        </>
    )
}
export default Industrial;