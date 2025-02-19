import React, { useState } from "react";
import "./Navbar.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import { FaArrowRight, FaCopy } from "react-icons/fa"; // Import React Icons
import { IoIosMenu } from "react-icons/io";
import { FaArrowDown } from "react-icons/fa6";

// Import Swiper styles correctly
import "swiper/css"; // Main styles
import "swiper/css/navigation"; // For navigation styles (optional)
import "swiper/css/pagination"; // For pagination styles (optional)
import logo from "../Images/logo.jpg";
import bannerone from "../Images/bannerone.jpg";
import bannertwo from "../Images/bannertwo.jpg";
import bannerthree from "../Images/bannerthree.jpg";
import bannerfour from "../Images/bannerfour.jpg";
import bannerfive from "../Images/bannerfive.jpg";
import bannersix from "../Images/bannersix.jpg";

import pattern from "../Images/pattern.png";
import homeone from "../Images/homeoneimg.webp";
import hometwo from "../Images/hometwoimg.webp";

import { GrFormSearch } from "react-icons/gr";
import { TfiArrowTopRight } from "react-icons/tfi"; // Importing the arrow icon from react-icons
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";
import Servicedata from "../Data/Servicedata";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const uniqueTypes = [...new Set(Servicedata.map((item) => item.type))];

  const items = uniqueTypes.map((type, index) => ({
    key: `${index}`, // You can use index as the key
    label: (
      <NavLink to={`/${type.toLowerCase().replace(" ", "-")}`}> {type}</NavLink>
    ),
  }));

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <>
      <div className="container-fluid p-lg-4 p-0">
        <div
          className="homepage-first-section"
          style={{
            borderRadius: "16px",
            position: "relative",
            height: "800px",
          }}
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
                    <NavLink to="">
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
                  <li className="nav-item mx-3 mt-1 dropdown">
                    <Dropdown menu={{ items }}>
                      <a onClick={(e) => e.preventDefault()}>
                        <Space style={{ color: "white" }}>
                          Services
                          <DownOutlined />
                        </Space>
                      </a>
                    </Dropdown>
                  </li>
                  {/* <li className="nav-item mx-3">
          <a className="nav-link" href="#">Gallery</a>
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

          <Swiper
            onSlideChange={handleSlideChange}
            modules={[Navigation, Pagination, Autoplay, A11y]}
            direction="vertical"
            navigation={false}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: "10000",
            }}
            loop // Enable looping (optional)
            className="banner-home-page"
            style={{
              height: "800px",
              position: "absolute",
              top: "0",
              left: "0",
              right: "0",
            }}
          >
            <SwiperSlide>
              <div
                className="slide-content"
                style={{
                  position: "relative",
                  backgroundColor: "black",
                  borderRadius: "24px",
                }}
              >
                <img
                  src={bannersix}
                  alt="img"
                  style={{
                    height: "800px",
                    width: "100%",
                    objectFit: "cover",
                    objectPosition: "top",
                    borderRadius: "24px",
                    opacity: ".5",
                  }}
                />
              </div>

              <div className="slide-content-box">
                <div className="p-3">
                  <Fade direction="in" duration={2000}>
                    <h6>Practice Positive Energy</h6>
                  </Fade>
                  <Slide>
                    <h1 className="display-1" style={{ fontSize: "40px" }}>
                      {/* || धर्मार्थकाममोक्षानां     */}
                      Welcome To Magic
                      {/* Heal Yourself */}
                    </h1>
                  </Slide>
                  <Slide>
                    <h2 className="display-1" style={{ fontSize: "40px" }}>
                      {/* आरोग्यमं मूल उत्तममं ॥ */}
                      World of Yogic Science
                      {/* through yoga */}
                    </h2>
                  </Slide>
                  <hr style={{ borderTop: "1px solid white", opacity: "1" }} />
                  <Zoom direction="out">
                    <p
                      style={{
                        width: "500px",
                        whitespace: "normal",
                        wordWrap: "break-word",
                        overflow: "hidden",
                      }}
                    >
                      Looking for the best Naturopathy and Health services in
                      town? Our team of experienced Naturopathist offers all the
                      Health services  with holistic approch you’ve been waiting
                      for.{" "}
                    </p>
                  </Zoom>
                  <Fade direction="in">
                    <button
                      href="#"
                      className="button"
                      style={{ "--clr": "white" }}
                    >
                      CONTACT US
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
                  </Fade>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="slide-content"
                style={{
                  position: "relative",
                  backgroundColor: "black",
                  borderRadius: "24px",
                }}
              >
                <img
                  src={bannerfive}
                  alt="img"
                  style={{
                    height: "800px",
                    width: "100%",
                    objectFit: "cover",
                    objectPosition: "top",
                    borderRadius: "24px",
                    opacity: ".5",
                  }}
                />
              </div>
              <div className="slide-content-box">
                <div className="p-3">
                  <Fade direction="in" duration={2000}>
                    <h6>Practice Positive Energy</h6>
                  </Fade>
                  <Slide>
                    <h1 className="display-1" style={{ fontSize: "40px" }}>
                      {/* Heal yourself  */}
                      {/* || धर्मार्थकाममोक्षानां   */}
                      Welcome To Magic
                    </h1>
                  </Slide>
                  <Slide>
                    <h2 className="display-1" style={{ fontSize: "40px" }}>
                      {/* through yoga */}
                      {/* आरोग्यमं मूल उत्तममं ॥ */}
                      World of Yogic Science
                    </h2>
                  </Slide>
                  <hr style={{ borderTop: "1px solid white", opacity: "1" }} />
                  <Zoom direction="out">
                    <p
                      style={{
                        width: "500px",
                        wordWrap: "break-word",
                        overflow: "hidden",
                      }}
                    >
                      Looking for the best Naturopathy and Health services in
                      town? Our team of experienced Naturopathist offers all the
                      Health services  with holistic approch you’ve been waiting
                      for.{" "}
                    </p>
                  </Zoom>
                  <Fade direction="in">
                    <button
                      href="#"
                      className="button"
                      style={{ "--clr": "white" }}
                    >
                      CONTACT US
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
                  </Fade>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="slide-content"
                style={{
                  position: "relative",
                  backgroundColor: "black",
                  borderRadius: "24px",
                }}
              >
                <img
                  src={bannerfour}
                  alt="img"
                  style={{
                    height: "800px",
                    width: "100%",
                    objectFit: "cover",
                    objectPosition: "top",
                    borderRadius: "24px",
                    opacity: ".5",
                  }}
                />
              </div>
              <div className="slide-content-box">
                <div className="p-3">
                  <Fade direction="in" duration={2000}>
                    <h6>Practice Positive Energy</h6>
                  </Fade>
                  <Slide>
                    <h1 className="display-1" style={{ fontSize: "40px" }}>
                      {/* Heal yourself  */}
                      {/* || धर्मार्थकाममोक्षानां   */}
                      Welcome To Magic
                    </h1>
                  </Slide>
                  <Slide>
                    <h2 className="display-1" style={{ fontSize: "40px" }}>
                      {/* through yoga */}
                      {/* आरोग्यमं मूल उत्तममं ॥ */}
                      World of Yogic Science
                    </h2>
                  </Slide>
                  <hr style={{ borderTop: "1px solid white", opacity: "1" }} />
                  <Zoom direction="out">
                    <p
                      style={{
                        width: "500px",
                        wordWrap: "break-word",
                        overflow: "hidden",
                      }}
                    >
                      Looking for the best Naturopathy and Health services in
                      town? Our team of experienced Naturopathist offers all the
                      Health services  with holistic approch you’ve been waiting
                      for.{" "}
                    </p>
                  </Zoom>
                  <Fade direction="in">
                    <button
                      href="#"
                      className="button"
                      style={{ "--clr": "white" }}
                    >
                      CONTACT US
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
                  </Fade>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div
          className="row mx-0 pt-5"
          style={{
            marginTop: "-25px",
            zIndex: "-2",
            position: "relative",
            borderEndEndRadius: "24px",
            borderEndStartRadius: "24px",
            backgroundColor: "var(--secondary-color)",
            backgroundImage: `url(${pattern})`,
          }}
        >
          <div className="col-12 col-lg-4 p-3 pb-5">
            <div className="pbmit-ihbox-style-1 h-100">
              <div className="pbmit-ihbox-headingicon h-100 d-flex align-items-center">
                <div className="pbmit-ihbox-icon">
                  <div className="pbmit-ihbox-icon-wrapper pbmit-ihbox-icon-type-image">
                    <img
                      src={homeone}
                      className="img-fluid"
                      alt="Best Yoga Trainner in Andheri "
                    />
                  </div>
                </div>
                <div className="pbmit-ihbox-contents">
                  <p
                    style={{
                      fontFamily: "var(--para-font)",
                      fontSize: "20px",
                      textAlign: "start",
                      paddingLeft: "20px",
                    }}
                    className="pbmit-element-title"
                  >
                    More than <span>9.5k members</span> are connected with us
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 p-3 pb-5">
            <div className="spinner_box">
              <div
                className="pbmit-spinner-box-style-1"
                style={{ position: "relative" }}
              >
                <FaArrowDown
                  size={40}
                  color="black"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                  }}
                />
                <a className="pbmit-scroll-section" href="#">
                  <div className="pbmit-ihbox-box">
                    <div className="pbmit-ihbox-icon">
                      <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                        <i className="pbmit-Yoga-icon pbmit-Yoga-icon-down-arrow" />
                      </div>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      viewBox="0 0 200 200"
                    >
                      <defs>
                        <path
                          d="M0, 100a100, 100 0 1, 0 200, 0a100, 100 0 1, 0 -200, 0"
                          id="txt-path"
                        />
                      </defs>
                      <circle cx={150} cy={100} r={75} fill="none" />
                      <text
                        fontSize={15}
                        fontFamily="Sora,sans-serif"
                        fontWeight={500}
                      >
                        <textPath startOffset={0} xlinkHref="#txt-path">
                          Scroll Down . Scroll Down . Scroll Down . Scroll Down
                          . Scroll Down . Scroll Down .
                        </textPath>
                      </text>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 p-3 pb-5">
            <div className="pbmit-ihbox-style-3 h-100">
              <div className="pbmit-ihbox-headingicon d-flex align-items-center h-100">
                <div className="pbmit-ihbox-contents">
                  <p
                    style={{
                      fontFamily: "var(--para-font)",
                      fontSize: "20px",
                      textAlign: "end",
                      paddingRight: "20px",
                    }}
                    className="pbmit-element-title"
                  >
                    Click on this video to check how work with our clients
                  </p>
                </div>
                <a
                  className="pbmin-lightbox-video"
                  href="https://www.youtube.com/watch?v=SZEflIVnhH8"
                >
                  <div className="pbmit-feature-wrapper-img">
                    <div className="pbmit-ihbox-wrapper">
                      <div className="pbmit-ihbox-icon-type-image">
                        <img
                          src={hometwo}
                          alt="Best Yoga Trainner in Andheri "
                          style={{ borderRadius: "24px" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="pbmit-ihbox-icon">
                    <div className="pbmit-ihbox-icon-wrapper">
                      <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                        <i className="pbmit-Yoga-icon-play" />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
