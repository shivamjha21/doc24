import React, { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Head from 'next/head';
import Router from 'next/router';
import { toast } from 'react-toastify';
import axios from 'axios';
import moment from 'moment/moment';

export default function Dashboard() {
  const [selectedSection, setSelectedSection] = useState("Dashboard");
  const [userData, setUserData] = useState([]);
  const [meetingsData, setMeetingsData] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");


  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  useEffect(() => {
    if (sessionStorage.getItem("doc_token")) {
      setUserData(JSON.parse(sessionStorage.getItem("doc_data")));
    } else {
      toast.error("You need to Login/ Signup get access to this page")
      Router.push("/signup");
    }
    if (sessionStorage.getItem("doc_data")) {
      setUserData(JSON.parse(sessionStorage.getItem("doc_data")));
      setName(JSON.parse(sessionStorage.getItem("doc_data"))?.name);
      setEmail(JSON.parse(sessionStorage.getItem("doc_data"))?.email);
      setPhone(JSON.parse(sessionStorage.getItem("doc_data"))?.phone);

    }
    fetchMeetingsData();
  }, [])


  function fetchMeetingsData() {
    axios.post(process.env.API_URL + "fetch-meetings", {
      user: userData?.user_type === "user" ? userData?._id : "",
      doctor: userData?.user_type === "doctor" ? userData?._id : ""
    })
      .then(resp => {
        setMeetingsData(resp?.data?.result)
      })
  };

  function updateMeetingStatus(status, id) {
    axios.post(process.env.API_URL + "update-meeting-status", { status, id })
      .then(resp => {
        if (resp?.data?.status === "success") {
          toast.success(resp?.data?.message);
          fetchMeetingsData();
        } else {
          toast.error(resp?.data?.message)
        }
      })
  };

  function handleProfileUdate(e) {
    e.preventDefault();
    axios.post(process.env.API_URL + 'update-profile',
      { name: name, email: email, phone, password, id: sessionStorage.getItem("doc_id") }).then(resp => {
        if (resp?.data?.status === "success") {
          toast.success(resp?.data?.message);
          sessionStorage.setItem("doc_data", JSON.stringify(resp?.data?.result));
        } else {
          toast.error(resp?.data?.message)
        }
      })
  }

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Header />
      <div className="dashboard-container">
        <div className="sidebar">
          <ul>
            <li
              className={selectedSection === 'Dashboard' ? 'active' : ''}
              onClick={() => handleSectionClick('Dashboard')}
            >
              <i class="fa fa-dashboard"></i> <span>Dashboard</span>
            </li>
            <li
              className={selectedSection === 'Meetings' ? 'active' : ''}
              onClick={() => handleSectionClick('Meetings')}
            >
              <i class="fa fa-calendar"></i> <span>Meetings</span>
            </li>
            <li
              className={selectedSection === 'UserInfo' ? 'active' : ''}
              onClick={() => handleSectionClick('UserInfo')}
            >
              <i class="fa fa-user"></i> <span>User Info</span>
            </li>
            {/* <li
              className={selectedSection === 'Patients' ? 'active' : ''}
              onClick={() => handleSectionClick('Patients')}
            >
              <i class="fa fa-wheelchair"></i> <span>Patients</span>
            </li> */}
            <li
              className={selectedSection === 'LogOut' ? 'active' : ''}
              onClick={() => {
                sessionStorage.removeItem("doc_token");
                sessionStorage.removeItem("doc_data");
                sessionStorage.removeItem("doc_id");
                sessionStorage.removeItem("doc_name");

                Router.push("/");
              }}
            >
              <i class="fa fa-sign-out"></i>
              <span>
                Logout
              </span>
            </li>



          </ul>
        </div>

        <main className="dashboard-content">
          {selectedSection && (
            <div className="dashboard-box">
              {selectedSection === 'Dashboard' && (
                <div>
                  <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-primary shadow h-100 py-2">
                      <div class="card-body">
                        <div class="row no-gutters align-items-center ml-2 mr-3">
                          <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                              Total Meetings
                            </div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">{meetingsData?.length}</div>
                          </div>
                          <div class="col-auto">
                            <i class="fa fa-calendar fa-2x" style={{ color: "#2888bb" }}></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-primary shadow h-100 py-2">
                      <div class="card-body">
                        <div class="row no-gutters align-items-center ml-2 mr-3">
                          <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                              Free Coupons left
                            </div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">{userData?.free_meetings}</div>
                          </div>
                          <div class="col-auto">
                            <i class="fa fa-percent fa-2x" style={{ color: "#2888bb" }}></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {selectedSection === 'Meetings' && userData?.user_type === "user" && (
                <>
                  <h5>Total Meetings ( {meetingsData?.length} )</h5>
                  <div className='row mt-3'>
                    {
                      meetingsData?.map((m, i) => (
                        <div className='col-4'>
                          <div className='card'>
                            <div className='card-header'>
                              {
                                m?.status === "pending" &&
                                <span className='btn mt-2 mb-2 btn-warning'>{m?.status}</span>
                              }
                              {
                                m?.status === "accepted" &&
                                <span className='btn mt-2 mb-2 btn-success'>{m?.status}</span>
                              }
                              {
                                m?.status === "decline" &&
                                <span className='btn mt-2 mb-2 btn-danger'>{m?.status}</span>
                              }
                              <p className='ml-5'>
                                Doctor Details:-
                                <br />
                                {m?.doctor?.name}
                                <br />
                                {m?.doctor?.phone}
                                <br />
                                {m?.doctor?.email}
                              </p>
                            </div>
                            <div className='card-body'>
                              <p>
                                Meeting Details:-
                                <br />
                                {m?.appointment_type}
                                <br />
                                {moment(m?.date).format("DD-MM-YYYY")}
                                <br />
                                {m?.time}
                              </p>
                              <p style={{ margin: "auto 0" }}>Total Amount :- {m?.amount}</p>
                              <p style={{ margin: "auto 0" }}>Payment Status :- {m?.amount_status}</p>
                              {
                                m?.amount_status === "unpaid" && <button className='btn btn-outline-primary mt-4'>Pay Now</button>
                              }
                            </div>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </>
              )}

              {selectedSection === 'Meetings' && userData?.user_type === "doctor" && (
                <>
                  <h5>Total Meetings ( {meetingsData?.length} )</h5>
                  <div className='row mt-3'>
                    {
                      meetingsData?.map((m, i) => (
                        <div className='col-4'>
                          <div className='card'>
                            <div className='card-header'>
                              {
                                m?.status === "pending" &&
                                <span className='btn mt-2 mb-2 btn-warning'>{m?.status}</span>
                              }
                              {
                                m?.status === "accepted" &&
                                <span className='btn mt-2 mb-2 btn-success'>{m?.status}</span>
                              }
                              {
                                m?.status === "decline" &&
                                <span className='btn mt-2 mb-2 btn-danger'>{m?.status}</span>
                              }
                              <p className='ml-5'>
                                Doctor Details:-
                                <br />
                                {m?.doctor?.name}
                                <br />
                                {m?.doctor?.phone}
                                <br />
                                {m?.doctor?.email}
                              </p>
                            </div>
                            <div className='card-body'>
                              <p>
                                Meeting Details:-
                                <br />
                                {m?.appointment_type}
                                <br />
                                {moment(m?.date).format("DD-MM-YYYY")}
                                <br />
                                {m?.time}
                              </p>
                              <p style={{ margin: "auto 0" }}>Total Amount :- {m?.amount}</p>
                              <p style={{ margin: "auto 0" }}>Payment Status :- {m?.amount_status}</p>
                              <div className='my-3'>
                                <button style={{ width: "150px" }} className='btn btn-primary mt-2' onClick={() => updateMeetingStatus("accepted", m?._id)}>Accept</button>
                                <button style={{ width: "150px" }} className='btn btn-outline-danger mt-2' onClick={() => updateMeetingStatus("decline", m?._id)}>Decline</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </>
              )}
              {selectedSection === 'UserInfo' && (
                <div>
                  <h5>UPDATE DETAILS</h5>
                  <form className='my-5' onSubmit={handleProfileUdate}>
                    <div className="form-group">
                      <label htmlFor="name">Name:</label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}

                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email:</label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}

                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phoneNumber">Phone Number:</label>
                      <input
                        type="text"
                        id="phoneNumber"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}

                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phoneNumber">Password</label>
                      <input
                        type="password"
                        id="phoneNumber"
                        value={password}
                        onChange={e => setPassword(e.target.value)}

                      />
                    </div>
                    <div>
                      <button type="submit" className='btn btn-outline-success'>Save Changes</button>
                    </div>

                  </form>
                </div>

              )}
              {/* {selectedSection === 'Patients' && (
                <h2>Patients</h2>

              )} */}
              {selectedSection === 'LogOut' && (
                <h2>LogOut</h2>

              )}

            </div>
          )}
        </main>
      </div>

      <Footer />



    </>
  );
}
