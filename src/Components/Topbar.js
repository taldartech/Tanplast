function Topbar(){
return(
    <div className="container-fluid fixed-top px-0 wow fadeIn" data-wow-delay="0.1s">
    <div className="top-bar row gx-0 align-items-center d-lg-flex">
    <div className="col-lg-6 px-5 text-start">
      <small><i className="fa fa-map-marker-alt text-primary me-2" />8,Kwatsons Warehouse,
        Printex Junction,Spintex Road,Accra</small>
      <small className="ms-4"><i className="fa fa-clock text-primary me-2" />9.00 am - 9.00 pm</small>
    </div>
    <div className="col-lg-6 px-5 text-end">
      <small><i className="fa fa-envelope text-primary me-2" />Tanplastghana10@gmail.com</small>
      <small className="ms-4"><i className="fa fa-phone-alt text-primary me-2" />+233577774555</small>
    </div>
  </div>
  </div>
)
}
export default Topbar;