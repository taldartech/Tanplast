import Header from "../Header";
import Footers from "../Footers";
import { Link } from "react-router-dom";
import Client from "../Client";
function Construction() {
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

                            <li className="breadcrumb-item" aria-current="page" style={{ color: "#fbb31b" }} >Construction Industry</li>
                        </ol>
                    </nav>
                </div>
            </div>


            <div className="container-xxl py-3">
                <div className="container">
                    <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                        <p className="d-inline-block border rounded text-primary fw-bold py-1 px-3">CONSTRUCTION INDUSTRY</p>

                    </div>
                    <div className="row ">
                        <div className="col-lg-4 col-md-4 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item text-center rounded overflow-hidden pb-4">
                                <img src="img/products/black-pallet-wrap-1.jpg" className="my-2 w-100 rounded border" height="150px" />
                                <img src="img/tanplast_images/Construction_Industry/5.jpg" className="my-2 w-100 rounded border" height="150px" />
                                <img src="img/tanplast_images/Construction_Industry/2.jpg" className="my-2 w-100 rounded border" height="150px" />
                                
                            </div>
                        </div>
                        <div className="offset-1 col-lg-7 col-md-7 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item rounded overflow-hidden pb-4">

                                <h2 className="pb-3 pt-5" style={{color: "#fbb31b"}}> Description:</h2>
                                <h4 className="fw-semi-bold pb-5">We specialize in providing construction sheets for the
construction industry. Our products are made from
black and virgin materials, which are used for outdoor
flooring applications.</h4>
                               


                            </div>
                        </div>

                    </div>
                </div>

            </div>
           
            <Footers />
        </>
    )
}
export default Construction;