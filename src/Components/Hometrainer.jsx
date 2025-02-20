import React from "react";
import { TfiArrowTopRight } from "react-icons/tfi";
import "./Hometrainer.css";
import { Slide } from "react-awesome-reveal";
import Trainerdata from "../Data/Trainerdata";

const Hometrainer = () => {
  return (
    <>
      {/* <div className="container-fluid p-4 my-5">
        <div
          className="d-flex justify-content-center pb-4"
          style={{ flexWrap: "wrap" }}
        >
          <Slide>
            <h2
              className="display-1"
              style={{ fontWeight: "600", fontFamily: "var(--head-font)" }}
            >
              QUALIFIED
            </h2>
          </Slide>
          <Slide direction="right">
            <h2
              className="display-1 mx-2"
              style={{
                fontWeight: "600",
                fontFamily: "var(--head-font)",
                WebkitTextFillColor: "#e9f0ec",
                textShadow:
                  "1px 1px 0 rgba(24, 26, 23,.8), -1px -1px 0 rgba(24, 26, 23,.8), 1px -1px 0 rgba(24, 26, 23,.8), -1px 1px 0 rgba(24, 26, 23,.8), 1px 1px 0 rgba(24, 26, 23,.8)",
              }}
            >
              INSTRUCTORS
            </h2>
          </Slide>
        </div>
        <hr className="mt-4" style={{ opacity: "1" }} color="#181a17" />
        {Trainerdata.map((data) => (
          <>
            <div className="d-flex justify-content-between hometrainercard">
              <div className="d-flex align-items-center">
                <h4
                  style={{ fontWeight: "400", fontFamily: "var(--head-font)" }}
                  className="display-4"
                >
                  {data.name}
                </h4>
                <h6 className="mt-4" style={{ color: "grey" }}>
                  / {data.designation}
                </h6>
              </div>

              <img src={data.img} alt="img" className="hometrainercardimg" />

              <div className="">
                <button
                  href="#"
                  className="button mt-3"
                  style={{ "--clr": "transparent", border: "1px solid black" }}
                >
                  KNOW MORE
                  <span className="button__icon-wrapper">
                    <TfiArrowTopRight size={16} className="button__icon-svg" />

                    <TfiArrowTopRight
                      size={16}
                      color="white"
                      className="button__icon-svg button__icon-svg--copy"
                    />
                  </span>
                </button>
              </div>
            </div>
            <hr className="mt-4" style={{ opacity: "1" }} color="#181a17" />
          </>
        ))}
      </div> */}
    </>
  );
};

export default Hometrainer;
