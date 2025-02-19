import React, { useEffect, useRef, useState } from "react";
import bannerthree from "../Images/bannerthree.jpg";
import imgone from "../Images/yoga.png";
import { TfiArrowTopRight } from "react-icons/tfi"; // Importing the arrow icon from react-icons

import "./Aboutone.css";
const Aboutone = () => {
  const CountUpOnScroll = ({ targetCount }) => {
    const [count, setCount] = useState(0);
    const divref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(divref.current); // Stop observing after it becomes visible
          }
        },
        { threshold: 0.1 } // Trigger when 10% of the element is visible
      );

      if (divref.current) {
        observer.observe(divref.current);
      }

      return () => {
        if (divref.current) {
          observer.unobserve(divref.current);
        }
      };
    }, []);

    useEffect(() => {
      if (isVisible) {
        let start = 0;
        const end = targetCount;
        const duration = 2000; // 2 seconds
        const incrementTime = Math.floor(duration / end); // time per increment

        const timer = setInterval(() => {
          start += 1;
          setCount(start);
          if (start === end) {
            clearInterval(timer);
          }
        }, incrementTime);
      }
    }, [isVisible, targetCount]);

    return (
      <h2
        ref={divref}
        className="display-5 text-center aboutoneh"
        style={{ fontWeight: "400", fontFamily: "var(--head-font)" }}
      >
        {count}
        <sup>+</sup>
      </h2>
    );
  };
  return (
    <>
      <div className="container-fluid p-lg-4 mt-5">
        <div className="row">
          <div className="col-md-6 p-4">
            <div
              className="d-flex align-items-end justify-content-end"
              style={{
                height: "600px",
                borderRadius: "24px",
                width: "100%",
                backgroundSize: "cover",
                backgroundImage: `url(${bannerthree})`,

                position: "relative",
              }}
            >
              <svg
                width="30px"
                height="30px"
                style={{ position: "absolute", top: "360px", right: "0" }}
                viewBox="0 0 30 30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30 30V0C30 16 16 30 0 30H30Z"
                  style={{ fill: "#e9f0ec" }}
                ></path>
              </svg>
              <svg
                width="30px"
                height="30px"
                style={{ position: "absolute", top: "570px", left: "56%" }}
                viewBox="0 0 30 30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30 30V0C30 16 16 30 0 30H30Z"
                  style={{ fill: "#e9f0ec" }}
                ></path>
              </svg>

              <div
                className="ps-4 pt-4"
                style={{
                  position: "relative",
                  borderStartStartRadius: "32px",
                  backgroundColor: "#e9f0ec",

                  width: "40%",
                  height: "35%",
                }}
              >
                <div
                  style={{
                    backgroundColor: "white",
                    height: "100%",
                    width: "100%",
                    borderRadius: "24px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <CountUpOnScroll targetCount={235} />

                    <hr />
                    <h6
                      style={{ fontFamily: "var(--head-font)", color: "gray" }}
                    >
                      Happy Club Member
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 p-3 px-5">
            <p className="px-4 p-1 homeoneserviceh6">About Us</p>
            <hr className="mt-4" style={{ opacity: "1" }} color="#181a17" />
            <h4
              className="display-5"
              style={{ fontFamily: "var(--head-font)", fontWeight: "500" }}
            >
              Outstanding life about for through yoga
            </h4>
            <p
              className="mt-4"
              style={{
                fontFamily: "var(--para-font)",
                color: "gray",
                fontWeight: "400",
                fontSize: "18px",
              }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
              quaerat iure? Quisquam, voluptates accusamus aliquam dignissimos
              atque provident distinctio aliquid. Maiores eius perferendis{" "}
            </p>
            <div className="row mt-5">
              <div className="col-6">
                <div
                  style={{
                    backgroundColor: "var(--secondary-color)",
                    height: "90px",
                    display: "flex",
                    width: "90px",
                    borderRadius: "50%",
                  }}
                >
                  <img
                    src={imgone}
                    alt="img"
                    style={{ height: "45px", margin: "auto", display: "flex" }}
                  />
                </div>
                <h4 className="mt-4" style={{ fontFamily: "var(--head-font)" }}>
                  Changing rooms
                </h4>
                <p
                  className="mt-4"
                  style={{
                    fontFamily: "var(--para-font)",
                    color: "gray",
                    fontWeight: "400",
                    fontSize: "18px",
                  }}
                >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
                </p>
              </div>
              <div className="col-6">
                <div
                  style={{
                    backgroundColor: "var(--secondary-color)",
                    height: "90px",
                    display: "flex",
                    width: "90px",
                    borderRadius: "50%",
                  }}
                >
                  <img
                    src={imgone}
                    alt="img"
                    style={{ height: "45px", margin: "auto", display: "flex" }}
                  />
                </div>
                <h4 className="mt-4" style={{ fontFamily: "var(--head-font)" }}>
                  Training Programs
                </h4>
                <p
                  className="mt-4"
                  style={{
                    fontFamily: "var(--para-font)",
                    color: "gray",
                    fontWeight: "400",
                    fontSize: "18px",
                  }}
                >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
                </p>
              </div>
            </div>

            <button
              href="#"
              className="button mt-3"
              style={{ "--clr": "var(--primary-color)" }}
            >
              <h6
                style={{
                  display: "flex",
                  margin: "auto",
                  color: "white",
                  fontFamily: "var(--head-font)",
                  fontSize: "14px",
                }}
              >
                {" "}
                KNOW MORE
              </h6>
              <span className="button__icon-wrapper">
                {/* First arrow icon */}
                <TfiArrowTopRight
                  size={16}
                  color="white"
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
    </>
  );
};

export default Aboutone;
