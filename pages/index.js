import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import { Carousel } from 'react-responsive-carousel';
import App from "next/app";
import Banner from "@/components/Banner";


export default function Home() {
  return <>
    <Head>
      <title>DOC 24 * 7</title>
    </Head>
    <Header />
    <div className="">
      <div>
        <Carousel
          showArrows={true}
          dynamicHeight={true}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          width={"100%"}
          showStatus={false}
          showThumbs={false}
        >
          <div>
            <img src="/images/img7.jpg" />
          </div>
        </Carousel>
      </div>
      <div style={{ background: 'rgb(40,136,187)' }}>
        <div className="container">
          <div className="home_high">
            <div className="row">
              <div className="col">
                <div className="card">
                  <div className="card-img-top">
                    <i className="fa fa-ambulance"></i>
                  </div>
                  <div className="card-body">
                    <h5>Appointment Booking</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="card-img-top">
                    <i className="fa fa-user-md"></i>
                  </div>
                  <div className="card-body">
                    <h5>Our Doctors</h5>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card">
                  <div className="card-img-top">
                    <i className="fa fa-hospital-o"></i>
                  </div>
                  <div className="card-body">
                    <h5>Hospital Search</h5>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="why_us">
          <div className="row">
            <div className="col-7">
              <h2>About Us?</h2>
              <p>Dr. 24 * 7 is an innovative online platform designed to simplify the process of booking doctor appointments for patients with diverse health concerns. Whether seeking dental care, treatment for injuries, mental health support, addressing muscle strains, managing obesity, or dealing with arthritis and asthma, our website provides a convenient solution. Our primary aim is to address the challenges faced by individuals, especially those from middle and low-income backgrounds, in accessing timely appointments due to doctors' busy schedules and the high costs associated with hospitals. By offering a user-friendly interface and a wide range of available clinics, we strive to empower patients to secure the medical care they need promptly, mitigating the potential consequences of delayed or unavailable appointments.</p>
              <button className="btn btn-secondary info mt-3">Read More</button>
            </div>
            <div className="col-5">
              <img src="/images/img4.jpg" />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Contact />
        <Banner />
      </div>
    </div>
    
    <Footer />
  </>
}