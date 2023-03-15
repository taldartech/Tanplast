
import Header from "../Header";
import Carousel from "../Carousel";
import Services from "../Services";
import Client from "../Client";
import Footers from "../Footers";
import Topbar from "../Topbar";


function Home() {
  return (
    <>

      <Header />
      <Carousel />
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4 align-items-end mb-">

            <div className="text-center  wow fadeInUp" data-wow-delay="0.3s">
              <p className="d-inline-block border rounded text-primary fw-bold py-1 px-3 ">About Us</p>

              <p className="mb-4"> </p>
              <div className="row rounded p-4">
                <div className="col-md-5 wow fadeInUp " data-wow-delay="0.1s">
                  <img className="img-fluid rounded" src="img/about.jpg" style={{ height: "300px" }} />



                </div>
                <div className="col-md-7 border rounded shadow p-4 ">
                  <nav>

                    <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                      <button className="nav-link fw-bold text-primary active" id="nav-mission-tab" data-bs-toggle="tab" data-bs-target="#nav-mission" type="button" role="tab" aria-controls="nav-mission" aria-selected="true">Mission</button>
                      <button className="nav-link fw-bold text-primary" id="nav-vision-tab" data-bs-toggle="tab" data-bs-target="#nav-vision" type="button" role="tab" aria-controls="nav-vision" aria-selected="false" >Vision</button>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-story" role="tabpanel" aria-labelledby="nav-story-tab">
                    </div>
                    <div className="tab-pane fade show active text-start" id="nav-mission" role="tabpanel" aria-labelledby="nav-mission-tab">
                      <p>Tanplast Ghana Limited is committed to providing quality
                        packaging solutions to all industries and stakeholders, and it
                        dutifully complies with industry-standardized systems in order
                        to ensure the safety of people and the environment.</p>
                    </div>
                    <div className="tab-pane fade text-start" id="nav-vision" role="tabpanel" aria-labelledby="nav-vision-tab">
                      <p>To be the most refined and sought-after manufacturer in the
                        plastic packaging industry by using highly standardized
                        systems, state-of-the-art technology and equipment, and
                        innovative solutions that will satisfy our clients' needs</p>
                    </div>
                  </div>

                </div>

              </div>
</div>
            </div>
            <div class="container border rounded p-4 wow fadeInUp" data-wow-delay="0.1s">
              <div class="row g-4">
                <div class="col-md-4 wow fadeIn" data-wow-delay="0.1s">
                  <div class="h-100">
                    <div class="d-flex">
                      <div class="flex-shrink-0 btn-lg-square rounded-circle bg-dark">
                        <i class="fa fa-shipping-fast" style={{color:"#fbb31b"}}></i>
                      </div>
                      <div class="ps-3">
                        <h4>Free delivery</h4>
                        <span>Free delivery all over ghana and accra</span>
                      </div>
                      <div class="border-end d-none d-lg-block"></div>
                    </div>
                    <div class="border-bottom mt-4 d-block d-lg-none"></div>
                  </div>
                </div>
                <div class="col-md-4 wow fadeIn" data-wow-delay="0.3s">
                  <div class="h-100">
                    <div class="d-flex">
                      <div class="flex-shrink-0 btn-lg-square rounded-circle bg-dark">
                        <i class="fa fa-wallet " style={{color:"#fbb31b"}}></i>
                      </div>
                      <div class="ps-3">
                        <h4>Cash on Delivery</h4>
                        <span>Pay Cash at your doorstep on delivery </span>
                      </div>
                      <div class="border-end d-none d-lg-block"></div>
                    </div>
                    <div class="border-bottom mt-4 d-block d-lg-none"></div>
                  </div>
                </div>
                <div class="col-md-4 wow fadeIn" data-wow-delay="0.5s">
                  <div class="h-100">
                    <div class="d-flex">
                      <div class="flex-shrink-0 btn-lg-square rounded-circle bg-dark">
                        <i class="fa fa-check" style={{color:"#fbb31b"}}></i>
                      </div>
                      <div class="ps-3">
                        <h4>High Quality</h4>
                        <span>High Quality Products, Certified and guaranteed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      </div>
      <Services />

      <Client />

      <Footers />
    </>
  )
}
export default Home;