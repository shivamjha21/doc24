import React, { Component } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

const Banner = () => {
  return (
    <>
      <div>
        <section id="banner-one" className="banner-one text-center" style={{textAlign: 'center'}}>
          <div className="container" >
            <p className="lead">
            {/* <i className="fa fa-quote-left"></i> When you are young and
              healthy, it never occurs to you that in a single second your whole
              life could change. <i className="fa fa-quote-right"></i> */}
            </p>
            {/* <small className="text text-sm"> - Anonim Nano</small> */}
          </div>
        </section>
      </div>
    </>
  );
};

export default Banner;
