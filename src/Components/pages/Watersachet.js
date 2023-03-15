import Header from "../Header";
import Footers from "../Footers";
import { Link } from "react-router-dom";
import Client from "../Client";
function Watersachet() {
    return (
        <>

            <Header />
            <div className="container-fluid business-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container text-start py-5">
                    <h1 className="display-2 mb-4 animated slideInDown" style={{ color: "#1f2859" }}>Our <span style={{ color: "#fbb31b" }} >Products</span> </h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-start mb-0">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="/business">Products</Link></li>

                            <li className="breadcrumb-item" aria-current="page" style={{ color: "#fbb31b" }} >Water sachet producers</li>
                        </ol>
                    </nav>
                </div>
            </div>


            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                        <p className="d-inline-block border rounded text-primary fw-bold py-1 px-3">WATER SACHET PRODUCERS</p>

                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-4 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item text-center rounded overflow-hidden pb-4">
                                <img src="img/products/WATERSACHET.jpg" className="w-100 rounded border" height="280px" />
                                <h4 className="pt-4">WATER SACHET PRODUCERS</h4>
                            </div>
                        </div>
                        <div className="offset-1 col-lg-7 col-md-7 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item rounded overflow-hidden pb-4">

                                <h2 className="pb-3" style={{color: "#fbb31b"}}>Description:</h2>
                                <h4 className="fw-semi-bold pb-5">We cater to the growing demand for water sachet
                                    producers. Our wide range of products includes:</h4>
                                <h4 className="fw-bold">Printed Rolls For Production Of Water Sachet</h4>
                                    <h4 className="fw-semi-bold pb-5">cellulose rolls are the best in the market. We use only
                                    the finest raw materials, which results in rolls that are
                                    smooth, strong and free of flaws.
                                    
                                </h4>
                                <h4 className="fw-bold" >Branded And Unbranded Packing Bags<h4 className="fw-semi-bold pb-5">Our customers have ranked us at the top of all brands
for our strength, sturdiness and capability for holding
water sachet for long periods of time.</h4></h4>



                            </div>
                        </div>

                    </div>
                </div>

            </div>
         
            <Footers />
        </>
    )
}
export default Watersachet;