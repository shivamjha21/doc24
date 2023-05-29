import React, { Component, useEffect, useState } from "react";
import Link from "next/link";
import TopHeader from "./TopHeader";


export default function Header() {
  const [isLoggesIn, setIsloggedIn] = useState(false);

  useEffect(() => {
    if (sessionStorage?.getItem("doc_token")) {
      setIsloggedIn(true)
    }
    else {
      setIsloggedIn(false)
    }
  }, [isLoggesIn])
  return <>
    <TopHeader />
    <nav
      className="navbar navbar-expand  topbar  shadow"
      style={{
        background: "#ffffff",
        zIndex: "1",
        position: "relative",
      }}
    >
      <div className="header">
        <a href="/">
          <img
            src="/images/logo.svg"
            style={{ width: "100px", margin: "auto 5rem" }}
          />
        </a>
        <div style={{ marginLeft: "170px" }}>
          <div>
            <a href="/ourdoctor">Our Doctors</a>
          </div>
          <div>
            <a href="/service">Services</a>
          </div>
          <div>
            <a href="/about">About</a>
          </div>
          <div>
            <a href="/#contact">Contact</a>
          </div>
          {/* <div>
              <a href="#">Patient Portal</a>
            </div> */}
          <div>
          <a style={{color: 'red', fontWeight: '800'}} target="_blank" href="https://blood999.000webhostapp.com/">Blood Bank</a>
          </div>
          <div className="" style={{ marginLeft: " " }}>
            {
              isLoggesIn ? <Link href={"/dashboard"}>
                <button className="btn btn-secondary ml-15" style={{ width: "100%", backgroundColor: '#2888bb' }}> Dashboard</button>
              </Link>
                : <Link href={"/signup"}>
                  <button className="btn btn-secondary ml-15" style={{ width: "100%", backgroundColor: '#2888bb' }}> Register / Login</button>
                </Link>
            }
          </div>
        </div>
      </div>
    </nav>
  </>
}  