import React from "react";
import bannerone from "../Images/bannerone.jpg";
import "./Homeabout.css";
import imgone from "../Images/yoga.png";
import bannertwo from "../Images/bannertwo.jpg";
import { FaRegCircleCheck } from "react-icons/fa6";
import { TfiArrowTopRight } from "react-icons/tfi"; // Importing the arrow icon from react-icons

const Homeabout = () => {
  return (
    <>
      <div className="container-fluid p-lg-5 py-5">
        <div className="row p-2 homeabout">
          <div className="col-12 col-md-5 py-4 ps-lg--4">
            <img
              src={bannerone}
              style={{
                height: "550px",
                width: "100%",
                objectFit: "cover",
                borderRadius: "24px",
              }}
            />
          </div>
          <div
            className="col-12 col-md-7 p-4 px-5 scrollable-content"
            style={{ overflowY: "auto", height: "550px" }}
          >
            <p className="px-4 mt-5 p-1 homeoneserviceh6">About Us</p>
            <hr className="mt-4" style={{ opacity: "1" }} color="#181a17" />
            <h4
              className="display-5"
              style={{ fontFamily: "var(--head-font)", fontWeight: "500" }}
            >
              Outstanding life about for through yoga
            </h4>
            <div className="ps-5 mt-4">
              <p
                className="mt-4"
                style={{ color: "gray", fontFamily: "var(--para-font)" }}
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don’t look even.
              </p>
              <div className="row mt-5">
                <div
                  className="col-3"
                  style={{
                    backgroundColor: "var(--secondary-color)",
                    height: "90px",
                    width: "90px",
                    display: "flex",
                    borderRadius: "50%",
                  }}
                >
                  <img
                    src={imgone}
                    alt="img"
                    style={{ height: "45px", margin: "auto", display: "flex" }}
                  />
                </div>
                <div className="col-9 ps-4 d-flex align-items-center">
                  <div>
                    <h5 style={{ fontFamily: "var(--head-font)" }}>
                      Heading Title
                    </h5>
                    <p
                      className="m-0"
                      style={{ fontFamily: "var(--para-font)", color: "gray" }}
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quos maiores pariatur ea expedita.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div
                  className="col-3"
                  style={{
                    backgroundColor: "var(--secondary-color)",
                    height: "90px",
                    width: "90px",
                    display: "flex",
                    borderRadius: "50%",
                  }}
                >
                  <img
                    src={imgone}
                    alt="img"
                    style={{ height: "45px", margin: "auto", display: "flex" }}
                  />
                </div>
                <div className="col-9 ps-4 d-flex align-items-center">
                  <div>
                    <h5 style={{ fontFamily: "var(--head-font)" }}>
                      Heading Title
                    </h5>
                    <p
                      className="m-0"
                      style={{ fontFamily: "var(--para-font)", color: "gray" }}
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quos maiores pariatur ea expedita.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-2 p-2">
                <img
                  className="mt-5"
                  src={bannertwo}
                  alt="img"
                  style={{
                    height: "200px",
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "16px",
                    objectPosition: "top",
                  }}
                />
              </div>
              <div className="mt-4 p-2">
                <h4 style={{ fontFamily: "var(--head-font)" }}>
                  Heading Title
                </h4>
                <p
                  className="m-0 mt-3"
                  style={{ fontFamily: "var(--para-font)", color: "gray" }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  maiores pariatur ea expedita Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Quos maiores pariatur ea
                  expedita.
                </p>
              </div>

              <div className="mt-2 p-2">
                <div className="row">
                  <div className="col-md-6">
                    <ul className="p-0" style={{ listStyleType: "none" }}>
                      <li
                        className="mt-2"
                        style={{
                          fontFamily: "var(--para-font)",
                          fontSize: "16px",
                        }}
                      >
                        <FaRegCircleCheck
                          color="var(--primary-color)"
                          className="mx-2"
                        />
                        Effective Exercises
                      </li>
                      <li
                        className="mt-2"
                        style={{
                          fontFamily: "var(--para-font)",
                          fontSize: "16px",
                        }}
                      >
                        <FaRegCircleCheck
                          color="var(--primary-color)"
                          className="mx-2"
                        />
                        Body condition improving
                      </li>
                      <li
                        className="mt-2"
                        style={{
                          fontFamily: "var(--para-font)",
                          fontSize: "16px",
                        }}
                      >
                        <FaRegCircleCheck
                          color="var(--primary-color)"
                          className="mx-2"
                        />
                        Mood & feeling control
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="p-0" style={{ listStyleType: "none" }}>
                      <li
                        className="mt-2"
                        style={{
                          fontFamily: "var(--para-font)",
                          fontSize: "16px",
                        }}
                      >
                        <FaRegCircleCheck
                          color="var(--primary-color)"
                          className="mx-2"
                        />
                        Self-actualization increase
                      </li>
                      <li
                        className="mt-2"
                        style={{
                          fontFamily: "var(--para-font)",
                          fontSize: "16px",
                        }}
                      >
                        <FaRegCircleCheck
                          color="var(--primary-color)"
                          className="mx-2"
                        />
                        Attention improves
                      </li>
                      <li
                        className="mt-2"
                        style={{
                          fontFamily: "var(--para-font)",
                          fontSize: "16px",
                        }}
                      >
                        <FaRegCircleCheck
                          color="var(--primary-color)"
                          className="mx-2"
                        />
                        Learning efficiency improves
                      </li>
                    </ul>
                  </div>

                  <button
                    href="#"
                    className="button mt-3"
                    style={{ "--clr": "var(--secondary-color)" }}
                  >
                    KNOW MORE
                    <span className="button__icon-wrapper">
                      {/* First arrow icon */}
                      <TfiArrowTopRight
                        size={16}
                        className="button__icon-svg"
                      />

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
        </div>
      </div>
    </>
  );
};

export default Homeabout;
