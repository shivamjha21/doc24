import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import { Modal, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import axios from "axios";
import { toast } from "react-toastify";
import Router from "next/router";

export default function Ourdoctor() {
  const [show, setShow] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [diseaseData, setDiseaseData] = useState([]);
  const [doctorList, setDoctorList] = useState([]);
  const [isLoggesIn, setIsloggedIn] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [appointmentType, setAppointmentType] = useState("");
  const [selectDisease, setSelectedDisease] = useState("");
  const [note, setNote] = useState("");
  const [doctorId, setDoctorId] = useState("");

  useEffect(() => {
    fetchDisaseData();
    fetchDoctorData();
    if (sessionStorage.getItem("doc_id")) {
      setIsloggedIn(true);
    }
  }, [])

  function fetchDisaseData() {
    const options = {
      headers: { authorization: sessionStorage.getItem("doc_token") },
    };
    axios.post(process.env.API_URL + "fetch-disease", {}, options).then(res => {
      if (res.data.status == "success") {
        setDiseaseData(res.data.result);
        setTotalUsers(res.data.totalCount)
      } else {
        notify_error(res.data.message);
      }
    }).catch(err => console.log(err));
  }


  function fetchDoctorData() {
    const options = {
      headers: { authorization: sessionStorage.getItem("doc_token") },
    };
    axios.post(process.env.API_URL + "fetch-doctor", {}, options).then(res => {
      if (res.data.status == "success") {
        setDoctorList(res.data.result);
      } else {
        notify_error(res.data.message);
      }
    }).catch(err => console.log(err));
  }

  function handleMeeting(e) {
    e.preventDefault();
    axios.post(process.env.API_URL + "create-meeting", {
      user: sessionStorage.getItem("doc_id"),
      doctor: doctorId,
      date: selectedDate,
      time: selectedTimeSlot,
      disease: selectDisease,
      appointment_type: appointmentType,
      note
    }).then((respo) => {
      if (respo?.data?.status === "success") {
        toast.success(respo?.data?.message);
      } else {
        toast.error(respo?.data?.message);
      }
    })
  }
  return (
    <>
      <Head>
        <title>DOC 24 * 7 Our Doctors</title>
      </Head>
      <Header />

      <div className="container my-5">
        <div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Schedule an Appointment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={handleMeeting}>
                <div>
                  <label style={{ margin: "20px auto" }}>
                    Select a Date for Appointment!
                  </label>
                  <br />
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => { setStartDate(date); setSelectedDate(date); }}
                  />
                </div>
                <div style={{ margin: "20px auto" }}>
                  <label>Select your preferred Slot!</label>
                  <select className="form-select mt-3" value={selectedTimeSlot} onChange={(e) => setSelectedTimeSlot(e.target.value)}>
                    <option value={''}>
                      Select
                    </option>
                    <option value={'8 A.M.'}>
                      8 A.M.
                    </option>
                    <option value={'9 A.M.'}>
                      9 A.M.
                    </option>
                    <option value={'10 A.M.'}>
                      10 A.M.
                    </option>
                    <option value={'11 A.M.'}>
                      11 A.M.
                    </option>
                    <option value={'12 A.M.'}>
                      12 A.M.
                    </option>
                    <option value={'1 P.M.'}>
                      1 P.M.
                    </option>
                    <option value={'2 P.M.'}>
                      2 P.M.
                    </option>
                    <option value={'3 P.M.'}>
                      3 P.M.
                    </option>
                    <option value={'4 P.M.'}>
                      4 P.M.
                    </option>
                    <option value={'5 P.M.'}>
                      5 P.M.
                    </option>
                  </select>
                </div>
                <div style={{ margin: "20px auto" }}>
                  <label>Appointment Type</label>
                  <select className="form-select mt-3" value={appointmentType} onChange={(e) => setAppointmentType(e.target.value)}>
                    <option value={''}>
                      Select
                    </option>
                    <option value={'online'}>
                      Online
                    </option>
                    <option value={'offline'}>
                      Offline
                    </option>
                  </select>
                </div>
                <div style={{ margin: "20px auto" }}>
                  <label>Select your Disease!</label>
                  <select className="form-select mt-3" value={selectDisease} onChange={(e) => setSelectedDisease(e.target.value)}>
                    <option value={''}>
                      Select
                    </option>
                    {
                      diseaseData?.map((d, i) => (
                        <option value={d._id} key={i}>
                          {d.name}
                        </option>
                      ))
                    }
                  </select>
                </div>
                <div>
                  <label>Note</label>
                  <br />
                  <textarea className='form-control my-3  ' value={note} onChange={(e) => setNote(e.target.value)} rows="3"></textarea>
                </div>
                <div className="mt-5 mb-5">
                  {

                  }
                  <Button type="submit" style={{ backgroundColor: '#2888bb' }} variant="primary" onClick={handleClose}>
                    Scheduled Meeting
                  </Button>
                </div>
              </form>
            </Modal.Body>
            {/* <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button style={{ backgroundColor: '#2888bb' }} variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer> */}
          </Modal>
        </div>
        <div className="row">
          {
            doctorList?.map((doc, i) => (
              <div className="col-3" style={{ width: "22rem" }} key={i}>
                <div className="card">
                  <img
                    src="https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg?w=740&t=st=1685184424~exp=1685185024~hmac=f8c32233583702c3117cf7d15a5440450d3c22130eb20aabcad659011085d75b"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{doc.name}</h5>
                    <p className="card-text">{doc?.specialist}</p>
                    <p className="card-text">Address: {doc?.address}</p>
                    {!isLoggesIn ?
                      <button
                        onClick={() => Router.push("/signup")}
                        className="btn btn-secondary"
                        style={{ backgroundColor: '#2888bb' }}
                      >
                        Login to schedule a meet
                      </button>
                      : <button
                        onClick={() => { setShow(true); setDoctorId(doc?._id) }}
                        className="btn btn-secondary"
                        style={{ backgroundColor: '#2888bb' }}
                      >
                        Schedule an Appointment
                      </button>

                    }
                  </div>
                </div>
              </div>
            ))
          }

        </div>
      </div>

      <Footer />
    </>
  );
}
