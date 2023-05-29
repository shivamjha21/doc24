import React from 'react'

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";

export default function service() {
    return (
        <>
            <Head>
                <title>DOC 24 * 7 Our Doctors</title>
            </Head>
            <Header />

            <div className="container">
                <div className="home_high">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-img-top">
                                    <i className="fa fa-ambulance"></i>
                                </div>
                                <div className="card-body">
                                    <h5>Ambulance Service</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="card-img-top">
                                    <i className="fa fa-heartbeat"></i>
                                </div>
                                <div className="card-body">
                                    <h5>Emergency 24*7</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card">
                                <div className="card-img-top">
                                    <i className="fa fa-home"></i>
                                </div>
                                <div className="card-body">
                                    <h5>Rehabilitation </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home_high">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-img-top">
                                    <i className="fa fa-medkit"></i>
                                </div>
                                <div className="card-body">
                                    <h5>Pharmacy</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="card-img-top">
                                    <i className="	fa fa-tint"></i>
                                </div>
                                <div className="card-body">
                                    <h5>Blood Bank</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="card-img-top">
                                    <i className="	fa fa-user-md"></i>
                                </div>
                                <div className="card-body">
                                    <h5>Consultancy</h5>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="container">
                    <div className="home_high">
                        <div className="row">

                            <div className="col">
                                <div className="card">
                                    <div className="card-img-top">
                                        <i className="fa fa-flask"></i>
                                    </div>
                                    <div className="card-body">
                                        <h5>Laboratory Services</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <div className="card-img-top">
                                        <i className="	fa fa-wheelchair"></i>
                                    </div>
                                    <div className="card-body">
                                        <h5>Extra Support</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>






            </div>
            <Footer />
        </>
    )
}
