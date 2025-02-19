import React from "react";
import bannerone from "../Images/bannerone.jpg";
import bannertwo from "../Images/bannertwo.jpg";
import bannerthree from "../Images/bannerthree.jpg";
import { TfiArrowTopRight } from "react-icons/tfi"; // Importing the arrow icon from react-icons
import "./Abouttwo.css";
const Abouttwo = () => {
  return (
    <>
      <div className="container-fluid p-lg-5">
        <div className="row mt-5 abouttworow">
          <div className="col-12 col-md-6 p-0">
            <img
              src={bannerone}
              style={{
                // width: "90%",
                height: "350px",
                objectFit: "cover",
                borderRadius: "32px",
              }}
              className="abouttwoimg"
            />
          </div>
          <div className="col-12 col-md-6 p-5 d-flex  align-items-center">
            <div className="position-relative">
              <h2
                className="display-1"
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  fontFamily: "var(--head-font)",
                  fontWeight: "800",
                  WebkitTextFillColor: "white",
                  opacity: ".2",
                  textShadow:
                    "1px 1px 0 rgba(24, 26, 23,.8), -1px -1px 0 rgba(24, 26, 23,.8), 1px -1px 0 rgba(24, 26, 23,.8), -1px 1px 0 rgba(24, 26, 23,.8), 1px 1px 0 rgba(24, 26, 23,.8)",
                }}
              >
                01
              </h2>
              <h2 className="mt-4" style={{ fontFamily: "var(--head-font)" }}>
                Protection From Injury
              </h2>
              <p
                className="mt-5"
                style={{
                  fontFamily: "var(--para-font)",
                  color: "gray",
                  fontWeight: "400",
                  fontSize: "18px",
                }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
                quaerat iure? Quisquam, voluptates{" "}
              </p>
              <button
                href="#"
                className="button mt-4"
                style={{ "--clr": "transparent", border: "1px solid black" }}
              >
                <h6
                  style={{
                    display: "flex",
                    margin: "auto",
                    fontFamily: "var(--head-font)",
                    fontSize: "14px",
                  }}
                >
                  {" "}
                  READ MORE
                </h6>
                <span className="button__icon-wrapper">
                  {/* First arrow icon */}
                  <TfiArrowTopRight size={16} className="button__icon-svg" />

                  {/* Second arrow icon (copy) */}
                  <TfiArrowTopRight
                    size={16}
                    color="white"
                    className="button__icon-svg button__icon-svg--copy"
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="row mt-5 abouttworow">
          <div className="col-12 col-md-6 p-0">
            <img
              src={bannertwo}
              style={{
                // width: "90%",
                height: "350px",
                objectFit: "cover",
                borderRadius: "32px",
              }}
              className="abouttwoimg"
            />
          </div>
          <div className="col-12 col-md-6 p-5 d-flex  align-items-center">
            <div className="position-relative">
              <h2
                className="display-1"
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  fontFamily: "var(--head-font)",
                  fontWeight: "800",
                  WebkitTextFillColor: "white",
                  opacity: ".2",
                  textShadow:
                    "1px 1px 0 rgba(24, 26, 23,.8), -1px -1px 0 rgba(24, 26, 23,.8), 1px -1px 0 rgba(24, 26, 23,.8), -1px 1px 0 rgba(24, 26, 23,.8), 1px 1px 0 rgba(24, 26, 23,.8)",
                }}
              >
                02
              </h2>
              <h2 className="mt-4" style={{ fontFamily: "var(--head-font)" }}>
                Weight Reduction
              </h2>
              <p
                className="mt-5"
                style={{
                  fontFamily: "var(--para-font)",
                  color: "gray",
                  fontWeight: "400",
                  fontSize: "18px",
                }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
                quaerat iure? Quisquam, voluptates{" "}
              </p>
              <button
                href="#"
                className="button mt-4"
                style={{ "--clr": "transparent", border: "1px solid black" }}
              >
                <h6
                  style={{
                    display: "flex",
                    margin: "auto",
                    fontFamily: "var(--head-font)",
                    fontSize: "14px",
                  }}
                >
                  {" "}
                  READ MORE
                </h6>
                <span className="button__icon-wrapper">
                  {/* First arrow icon */}
                  <TfiArrowTopRight size={16} className="button__icon-svg" />

                  {/* Second arrow icon (copy) */}
                  <TfiArrowTopRight
                    size={16}
                    color="white"
                    className="button__icon-svg button__icon-svg--copy"
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="row mt-5 abouttworow">
          <div className="col-12 col-md-6 p-0">
            <img
              src={bannerthree}
              style={{
                // width: "90%",
                height: "350px",
                objectFit: "cover",
                borderRadius: "32px",
              }}
              className="abouttwoimg"
            />
          </div>
          <div className="col-12 col-md-6 p-5 d-flex  align-items-center">
            <div className="position-relative">
              <h2
                className="display-1"
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  fontFamily: "var(--head-font)",
                  fontWeight: "800",
                  WebkitTextFillColor: "white",
                  opacity: ".2",
                  textShadow:
                    "1px 1px 0 rgba(24, 26, 23,.8), -1px -1px 0 rgba(24, 26, 23,.8), 1px -1px 0 rgba(24, 26, 23,.8), -1px 1px 0 rgba(24, 26, 23,.8), 1px 1px 0 rgba(24, 26, 23,.8)",
                }}
              >
                03
              </h2>
              <h2 className="mt-4" style={{ fontFamily: "var(--head-font)" }}>
                Increased Flexibility
              </h2>
              <p
                className="mt-5"
                style={{
                  fontFamily: "var(--para-font)",
                  color: "gray",
                  fontWeight: "400",
                  fontSize: "18px",
                }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
                quaerat iure? Quisquam, voluptates{" "}
              </p>
              <button
                href="#"
                className="button mt-4"
                style={{ "--clr": "transparent", border: "1px solid black" }}
              >
                <h6
                  style={{
                    display: "flex",
                    margin: "auto",
                    fontFamily: "var(--head-font)",
                    fontSize: "14px",
                  }}
                >
                  {" "}
                  READ MORE
                </h6>
                <span className="button__icon-wrapper">
                  {/* First arrow icon */}
                  <TfiArrowTopRight size={16} className="button__icon-svg" />

                  {/* Second arrow icon (copy) */}
                  <TfiArrowTopRight
                    size={16}
                    color="white"
                    className="button__icon-svg button__icon-svg--copy"
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Abouttwo;
