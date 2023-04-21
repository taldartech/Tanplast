import Header from "../Header";
import Footers from "../Footers";
import { Link } from "react-router-dom";
import Client from "../Client";
import { useEffect } from "react";
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
                            <div className="team-item text-center  rounded overflow-hidden pb-4">
                                <div id="custCarousel" className="carousel slide" data-ride="carousel" align="center">
                                    <a data-toggle="modal" href="#image">
                                        <div className="carousel-inner border">
                                            <div className="carousel-item active">
                                                <img src="img/tanplast_images/Watersachet/1.jpg" alt="water sachet" className="mainImage w-100 " />
                                            </div>

                                            <div className="carousel-item">
                                                <img src="img/tanplast_images/Watersachet/3.jpg" alt="water sachet" className="mainImage w-100" />
                                            </div>

                                            <div className="carousel-item">
                                                <img src="img/tanplast_images/Watersachet/4.jpg" alt="water sachet" className="mainImage w-100" />
                                            </div>

                                            <div className="carousel-item">
                                                <img src="img/tanplast_images/Watersachet/5.jpg" alt="water sachet" className="mainImage w-100" />
                                            </div>

                                            <div className="carousel-item">
                                                <img src="img/tanplast_images/Watersachet/6.jpg" alt="water sachet" className="mainImage w-100" />
                                            </div>
                                            <div className="carousel-item">
                                                <img src="img/tanplast_images/Watersachet/2.png" alt="water sachet" className="mainImage w-100" />
                                            </div>
                                        </div>
                                    </a>




                                    <ol className="carousel-indicators list-inline mt-2">
                                        <li className="list-inline-item active">
                                            <a id="carousel-selector-0" className="selected" data-slide-to="0" data-target="#custCarousel">
                                                <img src="img/tanplast_images/Watersachet/1.jpg" className="img-fluid thumb" />
                                            </a>
                                        </li>

                                        <li className="list-inline-item">
                                            <a id="carousel-selector-1" data-slide-to="1" data-target="#custCarousel">
                                                <img src="img/tanplast_images/Watersachet/3.jpg" className="img-fluid thumb" />
                                            </a>
                                        </li>

                                        <li className="list-inline-item">
                                            <a id="carousel-selector-2" data-slide-to="2" data-target="#custCarousel">
                                                <img src="img/tanplast_images/Watersachet/4.jpg" className="img-fluid thumb" />
                                            </a>
                                        </li>

                                        <li className="list-inline-item">
                                            <a id="carousel-selector-3" data-slide-to="3" data-target="#custCarousel">
                                                <img src="img/tanplast_images/Watersachet/5.jpg" className="img-fluid thumb" />
                                            </a>
                                        </li>

                                        <li className="list-inline-item">
                                            <a id="carousel-selector-4" data-slide-to="4" data-target="#custCarousel">
                                                <img src="img/tanplast_images/Watersachet/6.jpg" className="img-fluid thumb" />
                                            </a>
                                        </li>


                                        <li className="list-inline-item">
                                            <a id="carousel-selector-5" data-slide-to="5" data-target="#custCarousel">
                                                <img src="img/tanplast_images/Watersachet/2.png" className="img-fluid thumb" />
                                            </a>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div className="offset-1 col-lg-7 col-md-7 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item rounded overflow-hidden pb-4">

                                <h2 className="pb-3" style={{ color: "#fbb31b" }}>Description:</h2>
                                <h4 className="">We cater to the growing demand for water sachet
                                    producers. </h4><h5>Our wide range of products includes:</h5><br />
                                <h4 className="fw-bold">Printed Rolls For Production Of Water Sachet</h4>
                                <h5 className="">cellulose rolls are the best in the market. We use only
                                    the finest raw materials, which results in rolls that are
                                    smooth, strong and free of flaws.

                                </h5>
                                <h4 className="fw-bold" >Branded And Unbranded Packing Bags</h4><h5>Our customers have ranked us at the top of all brands
                                    for our strength, sturdiness and capability for holding
                                    water sachet for long periods of time.</h5>



                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <Footers />
            <div class="modal fade" id="image" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog" role="document">

                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="example-Modal3">Food and beverages</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div className="col-lg-12 col-md-12 wow fadeInUp" data-wow-delay="0.1s">

                                <div id="modalimage" className="carousel slide" data-ride="carousel" align="center">

                                    <div className="carousel-inner border">
                                        <div className="carousel-item active">
                                            <img src="img/tanplast_images/Watersachet/1.jpg" alt="water sachet" className="modalimage w-100 " />
                                        </div>

                                        <div className="carousel-item">
                                            <img src="img/tanplast_images/Watersachet/3.jpg" alt="water sachet" className="modalimage w-100" />
                                        </div>

                                        <div className="carousel-item">
                                            <img src="img/tanplast_images/Watersachet/4.jpg" alt="water sachet" className="modalimage w-100" />
                                        </div>

                                        <div className="carousel-item">
                                            <img src="img/tanplast_images/Watersachet/5.jpg" alt="water sachet" className="modalimage w-100" />
                                        </div>

                                        <div className="carousel-item">
                                            <img src="img/tanplast_images/Watersachet/6.jpg" alt="water sachet" className="modalimage w-100" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="img/tanplast_images/Watersachet/2.png" alt="water sachet" className="modalimage w-100" />
                                        </div>
                                    </div>





                                    <ol className="carousel-indicators list-inline mt-2">
                                        <li className="list-inline-item active">
                                            <a id="carousel-selector-0" className="selected" data-slide-to="0" data-target="#modalimage">
                                                <img src="img/tanplast_images/Watersachet/1.jpg" className="img-fluid thumb" />
                                            </a>
                                        </li>

                                        <li className="list-inline-item">
                                            <a id="carousel-selector-1" data-slide-to="1" data-target="#modalimage">
                                                <img src="img/tanplast_images/Watersachet/3.jpg" className="img-fluid thumb" />
                                            </a>
                                        </li>

                                        <li className="list-inline-item">
                                            <a id="carousel-selector-2" data-slide-to="2" data-target="#modalimage">
                                                <img src="img/tanplast_images/Watersachet/4.jpg" className="img-fluid thumb" />
                                            </a>
                                        </li>

                                        <li className="list-inline-item">
                                            <a id="carousel-selector-3" data-slide-to="3" data-target="#modalimage">
                                                <img src="img/tanplast_images/Watersachet/5.jpg" className="img-fluid thumb" />
                                            </a>
                                        </li>

                                        <li className="list-inline-item">
                                            <a id="carousel-selector-4" data-slide-to="4" data-target="#modalimage">
                                                <img src="img/tanplast_images/Watersachet/6.jpg" className="img-fluid thumb" />
                                            </a>
                                        </li>


                                        <li className="list-inline-item">
                                            <a id="carousel-selector-5" data-slide-to="5" data-target="#modalimage">
                                                <img src="img/tanplast_images/Watersachet/2.png" className="img-fluid thumb" />
                                            </a>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Watersachet;