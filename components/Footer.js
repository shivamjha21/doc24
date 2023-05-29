import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer id="footer" className="footer">
        <div className="container">
          <div className="footer-inner text-white pt-5">
            <div className="row">
              <div className="fottter">
                <div className="col-3 ">
                  <div className="footer-item">
                    <h3 className="footer-head">about us</h3>
                    <div className="icon">
                    <Link href={'/'}>
                    <img style={{cursor: 'pointer'}} src="images/logowhite.svg" alt="Logo" />
                    </Link>
                      
                    </div>
                    <p className="text text-md">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Debitis saepe incidunt fugiat optio corporis ea!
                    </p>
                    <p>
                      Medic Clinic <br />
                      69 Deerpark Rd, Mount Merrion <br />
                      Co. Dublin, A94 E9D3 <br />
                      Ireland
                    </p>
                  </div>
                </div>
                <div className="col-3  ">
                  <div className="footer-item">
                    <h3 className="footer-head">Services</h3>

                    <ul
                      className="tags-list"
                      style={{ marginLeft: "-32px", paddingTop: "10px" }}
                    >
                      <li>Medical Care</li>
                      <li style={{ background: "transparent" }}></li>
                      <li style={{ background: "transparent" }}></li>
                      <li style={{ background: "transparent" }}></li>
                      <li style={{ background: "transparent" }}></li>
                      <li>Emergency</li>
                      <li>Therapy</li>
                      
                      <li>Surgery</li>
                      <li>Medication</li>

                      
                      <li>Nurse</li>
                    </ul>
                  </div>
                </div>
                <div className="col-3 ">
                  <div className="footer-item">
                    <h3 className="footer-head">Quick Links</h3>
                    <ul
                      style={{
                        marginLeft: "-30px",
                        marginTop: "25px",
                        fontSize: "20px",
                      }}
                    >
                      <li>
                        <a href="#" className="text-white">
                          Our Services
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-white">
                          Our Plan
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-white">
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-white">
                          Appointment Schedule
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-3 ">
                  <div className="footer-item">
                    <h3 className="footer-head">make an appointment</h3>
                    <p className="text text-md">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatum, omnis.
                    </p>
                    <ul
                      className="appointment-info"
                      style={{ marginLeft: "-32px", fontSize: "15px" }}
                    >
                      <li>8:00 AM - 11:00 AM</li>
                      <li>2:00 PM - 05:00 PM</li>
                      <li>8:00 PM - 11:00 PM</li>
                      <li>
                        <i className="fa fa-envelope"></i>
                        <span>support@gmail.com</span>
                      </li>
                      <li>
                        <i className="fa fa-phone"></i>
                        <span>+91 00000 00000</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12" style={{textAlign: 'center'}}>
              <div className="footer-links">
                <a href="#" className="text-white" >
                  {" "}
                  <i className="fa fa-facebook-f"></i>
                </a>
                <a href="#" className="text-white">
                  {" "}
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#" className="text-white">
                  {" "}
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
