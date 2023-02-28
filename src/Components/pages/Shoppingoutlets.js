import Header from "../Header";
import Footers from "../Footers";
import { Link } from "react-router-dom";
import Client from "../Client";
function Shoppingoutlets() {
    return (
        <>

            <Header />
            <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container text-center py-5">
                    <h1 className="display-2 mb-4 animated slideInDown" style={{ color: "#1f2859" }}>Our <span style={{ color: "#fbb31b" }} >Businesses</span> </h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="/business">Businesses</Link></li>

                            <li className="breadcrumb-item" aria-current="page" style={{ color: "#fbb31b" }} >Shopping Outlets</li>
                        </ol>
                    </nav>
                </div>
            </div>


            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                        <p className="d-inline-block border rounded text-primary fw-bold py-1 px-3">Shopping Outlets</p>

                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item text-center rounded overflow-hidden pb-4">
                                <img src="img/products/shoppingoutlets.jpg" className="w-100" height="220px" />
                                <h4 >Shopping Outlets</h4>
                            </div>
                        </div>
                        <div className="offset-1 col-lg-7 col-md-7 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item rounded overflow-hidden pb-4">

                                <h2 className="pb-3 pt-5" style={{color: "#fbb31b"}}> Description:</h2>
                                
                                    <h4 className="fw-semi-bold pb-5">We do customised shopping bags for retail outlets. Our
specialty is strong, durable and reusable branded
shopping bags. We have worked with PAPAYE, UCT,
FURNITURE CITY, NEW PEPPERS MULTICUISINE and many
other well-known brands.

                                </h4>


                            </div>
                        </div>

                    </div>
                </div>

            </div>
          
            <Footers />
        </>
    )
}
export default Shoppingoutlets;