import Header from "../Header";
import Footers from "../Footers";
import { Link } from "react-router-dom";
import Client from "../Client";
function Foodbeverage() {
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

                            <li className="breadcrumb-item" aria-current="page" style={{ color: "#fbb31b" }} >Food & Beverage Plant</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="container-xxl py-3">
                <div className="container">
                    <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                        <p className="d-inline-block border rounded text-primary fw-bold py-1 px-3">FOOD & BEVERAGE PLANT</p>

                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item text-center rounded overflow-hidden pb-4">
                                <div id="custCarousel" className="carousel slide" data-ride="carousel" align="center">

                                    <a data-toggle="modal" href="#image">
                                        <div className="carousel-inner border">
                                            <div className="carousel-item active"  >
                                                <img src="img/tanplast_images/Food_n_beverage/6.jpg" alt="Food_n_beverage Outlet" className="mainImage w-100 " />

                                            </div>

                                            <div className="carousel-item">
                                                <img src="img/tanplast_images/Food_n_beverage/7.jpg" alt="Food_n_beverage Outlet" className="mainImage w-100 " />
                                            </div>

                                            <div className="carousel-item">
                                                <img src="img/tanplast_images/Food_n_beverage/3.jpg" alt="Food_n_beverage Outlet" className="mainImage w-100 " />
                                            </div>

                                            <div className="carousel-item">
                                                <img src="img/tanplast_images/Food_n_beverage/4.jpg" alt="Food_n_beverage Outlet" className="mainImage w-100 " />
                                            </div>

                                            <div className="carousel-item">
                                                <img src="img/tanplast_images/Food_n_beverage/1.jpg" alt="Food_n_beverage Outlet" className="mainImage w-100 " />
                                            </div>

                                            <div className="carousel-item">
                                                <img src="img/tanplast_images/Food_n_beverage/8.jpg" alt="Food_n_beverage Outlet" className="mainImage w-100 " />
                                            </div>


                                        </div>
                                    </a>

                                    <ol className="carousel-indicators list-inline mt-2" id="custCarouselthumb">
                                        <li className="list-inline-item active">
                                            <a id="carousel-selector-0" className="selected" data-slide-to="0" data-target="#custCarousel">
                                                <img src="img/tanplast_images/Food_n_beverage/6.jpg" className="img-fluid thumb " />
                                            </a>
                                        </li>

                                        <li className="list-inline-item">
                                            <a id="carousel-selector-1" data-slide-to="1" data-target="#custCarousel">
                                                <img src="img/tanplast_images/Food_n_beverage/7.jpg" className="img-fluid thumb" />
                                            </a>
                                        </li>

                                        <li className="list-inline-item">
                                            <a id="carousel-selector-2" data-slide-to="2" data-target="#custCarousel">
                                                <img src="img/tanplast_images/Food_n_beverage/3.jpg" className="img-fluid thumb" />
                                            </a>
                                        </li>

                                        <li className="list-inline-item">
                                            <a id="carousel-selector-3" data-slide-to="3" data-target="#custCarousel">
                                                <img src="img/tanplast_images/Food_n_beverage/4.jpg" className="img-fluid thumb" />
                                            </a>
                                        </li>

                                        <li className="list-inline-item">
                                            <a id="carousel-selector-4" data-slide-to="4" data-target="#custCarousel">
                                                <img src="img/tanplast_images/Food_n_beverage/1.jpg" className="img-fluid thumb" />
                                            </a>
                                        </li>

                                        <li className="list-inline-item">
                                            <a id="carousel-selector-5" data-slide-to="5" data-target="#custCarousel">
                                                <img src="img/tanplast_images/Food_n_beverage/8.jpg" className="img-fluid thumb" />
                                            </a>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div className="offset-1 col-lg-7 col-md-7 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item rounded overflow-hidden pb-4">

                                <h2 className="pb-3 pt-5" style={{ color: "#fbb31b" }}> Description:</h2>
                                <h4 className="fw-semi-bold pb-5">Our specialty in this range is shrink wrap film for packing
                                    beverages. For packing food items, we can create
                                    attractive and innovative designs that make products
                                    stand out.</h4>



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
                            <h5 class="modal-title" id="example-Modal3">Food & Beverages</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div className="col-lg-12 col-md-12 wow fadeInUp" data-wow-delay="0.1s">

                                <div id="modalimage" className="carousel slide" data-ride="carousel" align="center">

                                    <div className="carousel-inner border">
                                        <div className="carousel-item active">
                                            <img src="img/tanplast_images/Food_n_beverage/6.jpg" alt="Food_n_beverage Outlet" className="modalimage w-100 " />
                                        </div>

                                        <div className="carousel-item">
                                            <img src="img/tanplast_images/Food_n_beverage/7.jpg" alt="Food_n_beverage Outlet" className="modalimage w-100 " />
                                        </div>

                                        <div className="carousel-item">
                                            <img src="img/tanplast_images/Food_n_beverage/3.jpg" alt="Food_n_beverage Outlet" className="modalimage w-100 " />
                                        </div>

                                        <div className="carousel-item">
                                            <img src="img/tanplast_images/Food_n_beverage/4.jpg" alt="Food_n_beverage Outlet" className="modalimage w-100 " />
                                        </div>

                                        <div className="carousel-item">
                                            <img src="img/tanplast_images/Food_n_beverage/1.jpg" alt="Food_n_beverage Outlet" className="modalimage w-100 " />
                                        </div>

                                        <div className="carousel-item">
                                            <img src="img/tanplast_images/Food_n_beverage/8.jpg" alt="Food_n_beverage Outlet" className="modalimage w-100 " />
                                        </div>


                                    </div>

                                    <ol className="carousel-indicators list-inline-block mt-4" id="custCarouselthumb">
                                        <li className="list-inline-item active">
                                            <a id="carousel-selector-0" className="selected" data-slide-to="0" data-target="#modalimage">
                                                <img src="img/tanplast_images/Food_n_beverage/6.jpg" className="img-fluid thumb " />
                                            </a>
                                        </li>

                                        <li className="list-inline-item">
                                            <a id="carousel-selector-1" data-slide-to="1" data-target="#modalimage">
                                                <img src="img/tanplast_images/Food_n_beverage/7.jpg" className="img-fluid thumb" />
                                            </a>
                                        </li>

                                        <li className="list-inline-item">
                                            <a id="carousel-selector-2" data-slide-to="2" data-target="#modalimage">
                                                <img src="img/tanplast_images/Food_n_beverage/3.jpg" className="img-fluid thumb" />
                                            </a>
                                        </li>

                                        <li className="list-inline-item">
                                            <a id="carousel-selector-3" data-slide-to="3" data-target="#modalimage">
                                                <img src="img/tanplast_images/Food_n_beverage/4.jpg" className="img-fluid thumb" />
                                            </a>
                                        </li>

                                        <li className="list-inline-item">
                                            <a id="carousel-selector-4" data-slide-to="4" data-target="#modalimage">
                                                <img src="img/tanplast_images/Food_n_beverage/1.jpg" className="img-fluid thumb" />
                                            </a>
                                        </li>

                                        <li className="list-inline-item">
                                            <a id="carousel-selector-5" data-slide-to="5" data-target="#modalimage">
                                                <img src="img/tanplast_images/Food_n_beverage/8.jpg" className="img-fluid thumb" />
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
export default Foodbeverage;