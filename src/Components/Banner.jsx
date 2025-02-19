import React from "react";
import {  Slide } from "react-awesome-reveal";
import { GrFormSearch } from "react-icons/gr";
import logo from "../Images/logo.jpg";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Servicedata from "../Data/Servicedata";
import { IoIosMenu } from "react-icons/io";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

const Banner = (props) => {
  const uniqueTypes = [...new Set(Servicedata.map(item => item.type))];
    
    const items =uniqueTypes.map((type, index) => ({
  key: `${index}`, // You can use index as the key
  label:(
    <NavLink to={`/${type.toLowerCase().replace(' ','-')}`}> {type}</NavLink>
  ),
}));
  return (
    <>
      <div
        className="homepage-first-section p-4"
        style={{ borderRadius: "16px", position: "relative", height: "600px" }}
      >
        <nav className="navbar navbar-expand-lg " style={{ zIndex: "1" }}>
          <div className="container-fluid mt-3">
            <a className="navbar-brand" href="#">
              <NavLink to="/">
                <img src={logo} alt="img" style={{ height: "45px" }} />
              </NavLink>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="">
                <IoIosMenu color="white" size={32} />
              </span>
            </button>
            <div
              className="collapse navbar-collapse d-flex justify-content-between px-5"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item mx-3">
                  <NavLink to="/">
                    <a className="nav-link" href="#">
                      Home
                    </a>
                  </NavLink>
                </li>{" "}
                <li className="nav-item mx-3">
                  <NavLink to="/about">
                    <a className="nav-link" href="#">
                      About
                    </a>
                  </NavLink>
                </li>
                <li className="nav-item mt-1 mx-3 dropdown">
                  <Dropdown menu={{ items }}>
                      <a onClick={(e) => e.preventDefault()}>
                        <Space style={{color:"white"}}>
                          Services
                          <DownOutlined />
                        </Space>
                      </a>
                    </Dropdown>
                </li>
                {/* <li className="nav-item mx-3">
                  <a className="nav-link" href="#">
                    Gallery
                  </a>
                </li> */}
                <li className="nav-item mx-3">
                  <NavLink to="/contact">
                    <a className="nav-link" href="#">
                      Contact
                    </a>
                  </NavLink>
                </li>
              </ul>
              <div
                className="p-2"
                style={{ backgroundColor: "white", borderRadius: "50%" }}
              >
                <GrFormSearch size={30} />
              </div>
            </div>
          </div>
        </nav>

        <div
          className="p-4"
          style={{
            height: "600px",
            zIndex: "0",
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
          }}
        >
          <div
            className="slide-content"
            style={{
              position: "relative",
              backgroundColor: "black",
              borderRadius: "24px",
            }}
          >
            <img
              src={props.banner}
              alt="img"
              style={{
                height: "600px",
                width: "100%",
                objectFit: "cover",
                objectPosition: "top",
                borderRadius: "24px",
                opacity: ".5",
              }}
            />
          </div>

          <div
            className="slide-content-box"
            style={{ position: "absolute", top: "50%" }}
          >
            <div className="p-4">
              <Slide>
                <h2
                  className="px-4 display-5"
                  style={{
                    fontWeight: "700",
                    color: "white",
                    fontFamily: "var(--head-font)",
                  }}
                >
                  {props.title}
                </h2>
              </Slide>
              <h6 className="px-4" style={{ color: "white" }}>
                HOME{" "}
                <MdKeyboardDoubleArrowRight
                  color="var(--secondary-color)"
                  size={22}
                  className="mx-2"
                />
                {props.titleone}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
