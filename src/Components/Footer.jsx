import React from "react";
import logo from "../Images/logo.jpg";
import { FaFacebook } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Servicedata from "../Data/Servicedata";

const Footer = () => {
  return (
    <>
      <div className="container-fluid pt-5 px-5 pb-4 bg-white">
        <div className="row pt-3 pt-5">
          <div className="col-12 col-md-5">
            <div className="row">
              <div className="col-6">
                <NavLink to="/">
                  <img src={logo} style={{ height: "45px" }} alt="logo" />
                </NavLink>
                <p
                  className="mt-4"
                  style={{
                    fontFamily: "var(--para-font)",
                    fontSize: "18px",
                    color: "black",
                  }}
                >
                  Embrace holistic healing and inner peace with the power of
                  naturopathy and yoga.{" "}
                </p>
              </div>
              <div className="col-6"></div>
              <div className="d-flex">
                <div
                  className="mx-1"
                  style={{
                    height: "45px",
                    width: "45px",
                    borderRadius: "50%",
                    border: "1px solid black",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FaFacebook size={25} />
                </div>
                <div
                  className="mx-1"
                  style={{
                    height: "45px",
                    width: "45px",
                    borderRadius: "50%",
                    border: "1px solid black",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <LuInstagram size={25} />
                </div>
                <div
                  className="mx-1"
                  style={{
                    height: "45px",
                    width: "45px",
                    borderRadius: "50%",
                    border: "1px solid black",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FaWhatsapp size={25} />
                </div>
                <div
                  className="mx-1"
                  style={{
                    height: "45px",
                    width: "45px",
                    borderRadius: "50%",
                    border: "1px solid black",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FaYoutube size={25} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-7">
            <h3 className="px-2" style={{ fontFamily: "var(--head-font)" }}>
              Prakruthi Naturopathy & Yog – Heal Naturally, Live Blissfull.{" "}
            </h3>
            <div className="row mt-5">
              <div className="col-12 col-md-4">
                <h5
                  style={{ fontFamily: "var(--head-font)", fontSize: "18px" }}
                >
                  Useful Links
                </h5>
                <ul
                  className="p-0 "
                  style={{
                    listStyleType: "none",
                    fontFamily: "var(--para-font)",
                    fontSize: "16px",
                  }}
                >
                  <NavLink to="/about">
                    <li className="mt-4 text-black">About</li>
                  </NavLink>
                  {Servicedata.slice(0, 1).map((data) => (
                    <NavLink to={data.slug}>
                      <li className="mt-2 text-black">Services</li>
                    </NavLink>
                  ))}
                  <NavLink to="/contact">
                    <li className="mt-2 text-black">Contact</li>
                  </NavLink>
                </ul>
              </div>
              <div className="col-12 col-md-4">
                <h5
                  style={{ fontFamily: "var(--head-font)", fontSize: "18px" }}
                >
                  Working Time
                </h5>
                <ul
                  className="p-0"
                  style={{
                    listStyleType: "none",
                    fontFamily: "var(--para-font)",
                    fontSize: "16px",
                  }}
                >
                  <li className="mt-4">Mon-Fri : 06am to 08pm</li>
                  <li className="mt-2">Sat : 08am to 06pm</li>
                  <li className="mt-2">Sun : 06am to 08pm</li>
                </ul>
              </div>
              <div className="col-12 col-md-4">
                <h5
                  style={{ fontFamily: "var(--head-font)", fontSize: "18px" }}
                >
                  Our Address
                </h5>
                <p
                  className="pe-4 mt-4"
                  style={{ pfontFamily: "var(--para-font)", fontSize: "16px" }}
                >
                  Address to be written here with the pincode 000000
                </p>
              </div>
            </div>
            <hr />
            <h6
              className="text-center"
              style={{ fontFamily: "var(--head-font)", fontSize: "14px" }}
            >
              Copyright © 2025, All Right Reserved Prakruti Naturopathy
            </h6>
            <h6
              className="text-center"
              style={{ fontFamily: "var(--head-font)", fontSize: "14px" }}
            >
              Designed by Shree krishna digital marketing
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
