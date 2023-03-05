
import Header from "../Header";
import Footers from "../Footers";
import { Link } from "react-router-dom";
import Client from "../Client";
function Businesses() {
    return (
        <>

            <Header />
            <div className="container-fluid business-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container text-start py-5">
                    <h1 className="display-2 mb-4 pt-5 animated slideInDown" style={{ color: "#1f2859" }}>Our <span style={{ color: "#fbb31b" }} >Products</span> </h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-start mb-0">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>

                            <li className="breadcrumb-item" aria-current="page" style={{ color: "#fbb31b" }} >Our Products</li>
                        </ol>
                    </nav>
                </div>
            </div>


            <div className="container-xxl py-5">
                <div className="container pt-5">
                    <div className="text-center mx-auto wow fadeInUp pb-5" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                        <p className="d-inline-block border rounded text-primary fw-bold py-1 px-3">OUR PRODUCTS</p>

                    </div>
                    <div className="service-carousel" data-wow-delay="0.3s" >
                        <div className="row g-4">
                       
                            <div className="project-item col-md-4 col-lg-4 pe-5 pb-5 ">
                                <div className="project-img mb-5">
                                    <img className="img-fluid rounded w-100" src="img/products/WATERSACHET.jpg" alt="" style={{ height: '250px' }} />
                                    <Link to="/watersachet"><i className="fa fa-link fa-3x text-primary" /></Link>
                                </div>
                                <div className="project-title">
                                    <h4 className="mb-0">WATER SACHET PRODUCERS</h4>
                                </div>
                            </div>
                            <div className="project-item col-md-4 col-lg-4 pe-5 pb-5">
                                <div className="project-img mb-5 ">
                                    <img className="img-fluid rounded w-100" src="img/products/shoppingoutlets.jpg" alt="" style={{ height: '250px' }} />
                                    <Link to="/shoppingoutlets"><i className="fa fa-link fa-3x text-primary" /></Link>
                                </div>
                                <div className="project-title">
                                    <h4 className="mb-0">SHOPPING OUTLETS</h4>
                                </div>
                            </div>
                            <div className="project-item col-md-4 col-lg-4 pe-5 pb-5">
                                <div className="project-img mb-5 ">
                                    <img className="img-fluid rounded w-100" src="img/products/black-pallet-wrap-1.jpg" alt="" style={{ height: '250px' }} />
                                    <Link to="/construction"><i className="fa fa-link fa-3x text-primary" /></Link>
                                </div>
                                <div className="project-title">
                                    <h4 className="mb-0">CONSTRUCTION INDUSTRY</h4>
                                </div>
                            </div>
                            <div className="project-item col-md-4 col-lg-4 pe-5 pb-5">
                                <div className="project-img mb-5 ">
                                    <img className="img-fluid rounded w-100" src="img/products/FOOD&BEVERAGE.jpg" alt="" style={{ height: '250px' }} />
                                    <Link to="/fandb"><i className="fa fa-link fa-3x text-primary" /></Link>
                                </div>
                                <div className="project-title">
                                    <h4 className="mb-0">FOOD &amp; BEVERAGE</h4>
                                </div>
                            </div>
                            <div className="project-item col-md-4 col-lg-4 pe-5 pb-5">
                                <div className="project-img mb-5 ">
                                    <img className="img-fluid rounded w-100" src="img/products/shrink-film-rolls-250-mm-to-800mm-.jpg" alt="" style={{ height: '250px' }} />
                                    <Link to="/industrial"><i className="fa fa-link fa-3x text-primary" /></Link>
                                </div>
                                <div className="project-title">
                                    <h4 className="mb-0">INDUSTRIAL CONSUMERS</h4>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Client />
            <Footers />
        </>
    )
}
export default Businesses;