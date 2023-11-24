import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import logo from "../Assets/ManjalLogo.png";
import { Link } from "react-router-dom";
import login from "../Assets/login.png";

function Login() {
  return (
    <>
      <div className="signup-page d-flex justify-content-center align-items-center">
        <MDBContainer className="  " style={{ maxWidth: "800px" }}>
          <MDBCard>
            <MDBRow className="g-0">
              <MDBCol md="6">
                <MDBCardBody className="d-flex flex-column">
                  <div className="d-flex flex-row mt-2">
                    <Link to={'/'}><img style={{ width: "50px" }} src={logo} alt="" /></Link>
                  </div>

                  <h5
                    className="fw-normal my-4 pb-3"
                    style={{ letterSpacing: "1px" }}
                  >
                    Sign into your account
                  </h5>

                  <MDBInput
                    wrapperClass="mb-4"
                    label="Email address"
                    id="formControlLg"
                    type="email"
                    size="lg"
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Password"
                    id="formControlLg"
                    type="password"
                    size="lg"
                  />

                  <button className="mb-4 px-5 btn btn-dark">Log in</button>

                  <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                    Or{" "}
                    <Link
                      to={"/signup"}
                      style={{ color: "#393f81", textDecoration: "none" }}
                    >
                      Sign up
                    </Link>
                  </p>

                  <div className="d-flex flex-row justify-content-start">
                    <p style={{ fontSize: "10px" }}>
                      By clicking Login, I accept the{" "}
                      <a href="#!" className="small text-muted">
                        Terms & Conditions & Privacy Policy
                      </a>
                    </p>
                  </div>
                </MDBCardBody>
              </MDBCol>
              <MDBCol md="6">
                <MDBCardImage
                  src={login}
                  alt="login form"
                  className="rounded-start w-100"
                />
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBContainer>
      </div>
    </>
  );
}

export default Login;
