import { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import { toast } from "react-toastify";
import axios from "axios";
import Router from "next/router";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");

  const [emaillogin, setEmaillogin] = useState("");
  const [passwordlogin, setPasswordlogin] = useState("");
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      return toast.error("Password does not match");
    }
    axios
      .post(process.env.API_URL + "signup", {
        fullname: name,
        email,
        password,
        phone: phoneNumber,
        gender,
        address,
      })
      .then((resp) => {
        if (resp?.data?.status === "success") {
          toast.success(resp?.data?.message);
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          setName("");
          setPhoneNumber("");
          setAddress("");
          setGender("");
          toast.success("Please login to get your appointment.");
        } else if (resp?.data.status === "error") {
          toast.error(resp?.data?.message);
        }
      });
  };

  const handleSubmitLogin = (event) => {
    event.preventDefault();
    if (!emaillogin) {
      return toast.error("Please enter email id to login");
    }
    if (!passwordlogin) {
      return toast.error("Please enter password to login");
    }
    // Perform signup logic with name, email, password, and confirmPassword
    axios
      .post(process.env.API_URL + "signin", {
        email: emaillogin,
        password: passwordlogin,
      })
      .then((resp) => {
        if (resp?.data?.status === "success") {
          toast.success(resp?.data?.message);
          sessionStorage.setItem("doc_token", resp?.data?.token);
          sessionStorage.setItem("doc_data", JSON.stringify(resp?.data?.result));
          sessionStorage.setItem("doc_id", resp?.data?.result?._id);
          sessionStorage.setItem("doc_id", resp?.data?.result?._id);
          Router.push("/dashboard");
          // console.log(resp?.data?.result)
        } else if (resp?.data.status === "error") {
          toast.error(resp?.data?.message);
        }
      });
  };

  return (
    <>
      <Head>
        <title>Register/Login page</title>
      </Head>
      <div>
        <Header />
        <div
          style={{
            backgroundImage: "url(./images/img8.png)",
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="signup-container">
                  <form onSubmit={handleSubmitLogin}>
                    <h2 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
                      SIGN IN
                    </h2>
                    <hr />
                    <div className="form-group">
                      <label htmlFor="email">Email:</label>
                      <input
                        type="email"
                        id="email"
                        value={emaillogin}
                        onChange={(e) => setEmaillogin(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password:</label>
                      <input
                        type="password"
                        id="password"
                        value={passwordlogin}
                        onChange={(e) => setPasswordlogin(e.target.value)}
                      />
                    </div>
                    <button
                      style={{
                        backgroundColor: "#ffffff",
                        color: "#2888bb",
                        width: "40%",
                      }}
                      type="submit"
                      className="btn btn-secondary mt-3"
                    >
                      Sign In
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-md-7">
                <div className="signup-container ml-5" style={{ width: "80%" }}>
                  <form onSubmit={handleSubmit}>
                    <h2 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
                      SIGN UP
                    </h2>
                    <hr />
                    <div className="form-group">
                      <label htmlFor="name">Name:</label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={handleNameChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email:</label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phoneNumber">Phone Number:</label>
                      <input
                        type="text"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password:</label>
                      <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="confirmPassword">Confirm Password:</label>
                      <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        required
                      />
                    </div>
                    <div
                      className="form-group"
                      style={{ display: "inline-block" }}
                    >
                      <label class="form-check-label" for="flexRadioDefault1">
                        Gender
                      </label>
                      <br />
                      <div
                        class="form-check"
                        style={{
                          display: "inline-block",
                          marginRight: "80px",
                          marginLeft: "20px",
                        }}
                      >
                        <input
                          class="form-check-input"
                          type="radio"
                          name="gender"
                          id="flexRadioDefault1"
                          value={"Male"}
                          onChange={(e) => setGender(e.target.value)}
                        />
                        <label class="form-check-label" for="flexRadioDefault1">
                          Male
                        </label>
                      </div>
                      <div
                        class="form-check"
                        style={{ display: "inline-block", marginRight: "80px" }}
                      >
                        <input
                          class="form-check-input"
                          type="radio"
                          name="gender"
                          id="flexRadioDefault2"
                          value={"Female"}
                          onChange={(e) => setGender(e.target.value)}
                        />
                        <label class="form-check-label" for="flexRadioDefault2">
                          Female
                        </label>
                      </div>
                      <div
                        class="form-check"
                        style={{ display: "inline-block" }}
                      >
                        <input
                          class="form-check-input"
                          type="radio"
                          name="gender"
                          id="flexRadioDefault3"
                          value={"Other"}
                          onChange={(e) => setGender(e.target.value)}
                        />
                        <label class="form-check-label" for="flexRadioDefault3">
                          Other
                        </label>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="address">Address:</label>
                      <textarea
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="form-control"
                        required
                      />
                    </div>
                    <button
                      style={{
                        backgroundColor: "#ffffff",
                        color: "#2888bb",
                        width: "40%",
                      }}
                      type="submit"
                      className="btn btn-secondary mt-3 mb-3"
                    >
                      Sign Up
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
