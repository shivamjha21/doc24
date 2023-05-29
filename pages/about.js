import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import React from "react";

const about = () => {
  return (
    <>
      <Head>
        <title>DOC 24 * 7 About Us</title>
      </Head>
      <Header />
      <div className="container mb-5" >
        <div className="row">
          <p
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              color: "#000000",
              fontSize: "30px",
              textAlign: "center",
              marginTop: "20px",
              textTransform: "uppercase",
            }}
          >
            <i className="fa fa-quote-left"></i>
            Your health is your most valuable asset. Trust our experienced
            doctors to provide personalized care and guide you towards a
            healthier, happier life.
            
            <i className="fa fa-quote-right"></i>
          </p>
          <div className="col-6">
            <img
              src="https://img.freepik.com/free-vector/people-walking-sitting-hospital-building-city-clinic-glass-exterior-flat-vector-illustration-medical-help-emergency-architecture-healthcare-concept_74855-10130.jpg?w=826&t=st=1685167117~exp=1685167717~hmac=129393511b814ac427308aef94daf57455b1a10285c3a6704f25f3930c85ca50"
              alt="image 1"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-6 text">
            <p>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-6 text">
            <p>
              Additional Text Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen
              book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged. It
              was popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="col-6">
            <img
              src="https://img.freepik.com/free-photo/medium-shot-nurse-doctor-checking-patient_23-2148973496.jpg?w=740&t=st=1685169425~exp=1685170025~hmac=bf859ba00400a2867989c5b7718f6df4602ad575125f2730edcca2ac094ba81c"
              alt="image 2"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <img
              src="https://img.freepik.com/free-photo/interior-view-operating-room_1170-2254.jpg?w=740&t=st=1685169465~exp=1685170065~hmac=90d0db1f75f85f723bd864768faace459862a2e3ec266201416725a3c7fa8b20"
              alt="image 3"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-6 text">
            <p>
              Additional Text Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen
              book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged. It
              was popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default about;
