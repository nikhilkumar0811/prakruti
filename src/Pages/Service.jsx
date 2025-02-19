import React, { useEffect } from "react";
import bannerone from "../Images/bannerone.jpg";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { TfiArrowTopRight } from "react-icons/tfi"; // Importing the arrow icon from react-icons
import { NavLink, useLocation } from "react-router-dom";
import "./Service.css";
import Banner from "../Components/Banner";
import Servicedata from "../Data/Servicedata";
import imgone from "../Images/yoga.png";
import { RxArrowTopRight } from "react-icons/rx";
import { FaRegCheckCircle } from "react-icons/fa";
import imgfour from "../Images/widget-img.webp";
import pattern from "../Images/pattern.png";
import { FiPhoneCall } from "react-icons/fi";

const Service = () => {
  const path = useLocation();
  const search = path.pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [search]);
  return (
    <>
      {Servicedata.filter((data) => data.slug === search).map((data) => (
        <>
          <Banner banner={bannerone} titleone={data.name} />
          <div className="container-fluid p-4 my-5">
            <div className="row">
              <div className="col-12 col-md-9 p-2 px-lg-5  order-lg-2">
                <Fade>
                  <img src={data.image[0]} className="mainimgservice" alt="img" />
                </Fade>

                <h2 className="mt-5" style={{ fontFamily: "var(--head-font)" }}>
                  Our yoga is the foundation of youth
                </h2>
                <p
                  className="mt-4"
                  style={{
                    fontFamily: "var(--para-font)",
                    color: "gray",
                    fontWeight: "400",
                    fontSize: "18px",
                    textAlign: "justify",
                  }}
                >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dignissimos neque reiciendis, error impedit aut nam. Fugiat
                  excepturi distinctio inventore possimus molestiae nam ipsa
                  tempora numquam iste asperiores, soluta eum minima?
                </p>
                <p
                  className="mt-4"
                  style={{
                    fontFamily: "var(--para-font)",
                    color: "gray",
                    fontWeight: "400",
                    fontSize: "18px",
                    textAlign: "justify",
                  }}
                >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dignissimos neque reiciendis, error impedit aut nam. Fugiat
                  excepturi distinctio inventore possimus molestiae nam ipsa
                  tempora numquam iste asperiores, soluta eum minima? Lorem
                  ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
                  suscipit aliquid architecto minima velit sapiente, labore
                  soluta id ipsam optio, quasi, eaque culpa error perspiciatis
                  facilis alias laborum ad iure?
                </p>

                <h2 className="mt-4" style={{ fontFamily: "var(--head-font)" }}>
                  Different tpyes of yoga
                </h2>
                <p
                  className="mt-4"
                  style={{
                    fontFamily: "var(--para-font)",
                    color: "gray",
                    fontWeight: "400",
                    fontSize: "18px",
                    textAlign: "justify",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
                  quibusdam asperiores saepe exercitationem consequuntur beatae
                  ipsum aperiam consequatur eius maxime, ipsa rerum dolorum
                  magni
                </p>

                <div className="row">
                  <div className="col-12 col-md-4 mt-4">
                    <article
                      class="pbmit-service-style-1 swiper-slide swiper-slide-active"
                      role="group"
                      aria-label="1 / 6"
                    >
                      <div class="pbminfotech-post-item">
                        <div class="pbminfotech-box-content">
                          <div class="pbmit-box-content-wrap">
                            <div class="pbmit-box-content-inner">
                              <div class="pbmit-contant-box">
                                <div class="pbmit-serv-cat">
                                  <NavLink
                                    to="/"
                                    style={{
                                      color: "var(--primary-color)",
                                      textDecoration: "none",
                                    }}
                                  >
                                    DJ Yoga Trainer
                                  </NavLink>
                                </div>
                                <h3 class="mt-2 pbmit-service-title">
                                  <NavLink
                                    to="/"
                                    style={{
                                      color: "black",
                                      textDecoration: "none",
                                    }}
                                  >
                                    Ardha Chakrasana
                                  </NavLink>
                                </h3>
                              </div>
                              <div class="pbmit-service-icon">
                                <i class="pbmit-yoge-icon pbmit-yoge-icon-yoga-pose">
                                  <img
                                    className="my-4"
                                    src={imgone}
                                    style={{ height: "85px", opacity: ".5" }}
                                    alt="img"
                                  />
                                </i>
                              </div>
                            </div>
                          </div>
                          <NavLink to="/abc">
                            <a
                              class="pbmit-service-btn"
                              title="Ardha Chakrasana"
                              style={{
                                backgroundColor: "var(--secondary-color)",
                              }}
                            >
                              <span class="pbmit-button-icon-wrappera">
                                <span
                                  class="pbmit-button-icona"
                                  style={{ fontFamily: "var(--head-font)" }}
                                >
                                  01
                                </span>
                              </span>
                            </a>
                          </NavLink>
                        </div>
                        <NavLink
                          to=""
                          class="pbmit-link"
                          href="service-details.html"
                        ></NavLink>
                      </div>
                    </article>
                  </div>
                  <div className="col-12 col-md-4 mt-4">
                    <article
                      class="pbmit-service-style-1 swiper-slide swiper-slide-active"
                      role="group"
                      aria-label="1 / 6"
                    >
                      <div class="pbminfotech-post-item">
                        <div class="pbminfotech-box-content">
                          <div class="pbmit-box-content-wrap">
                            <div class="pbmit-box-content-inner">
                              <div class="pbmit-contant-box">
                                <div class="pbmit-serv-cat">
                                  <NavLink
                                    to="/"
                                    style={{
                                      color: "var(--primary-color)",
                                      textDecoration: "none",
                                    }}
                                  >
                                    DJ Yoga Trainer
                                  </NavLink>
                                </div>
                                <h3 class="mt-2 pbmit-service-title">
                                  <NavLink
                                    to="/"
                                    style={{
                                      color: "black",
                                      textDecoration: "none",
                                    }}
                                  >
                                    Ardha Chakrasana
                                  </NavLink>
                                </h3>
                              </div>
                              <div class="pbmit-service-icon">
                                <i class="pbmit-yoge-icon pbmit-yoge-icon-yoga-pose">
                                  <img
                                    className="my-4"
                                    src={imgone}
                                    style={{ height: "85px", opacity: ".5" }}
                                    alt="img"
                                  />
                                </i>
                              </div>
                            </div>
                          </div>
                          <NavLink to="/abc">
                            <a
                              class="pbmit-service-btn"
                              title="Ardha Chakrasana"
                              style={{
                                backgroundColor: "var(--secondary-color)",
                              }}
                            >
                              <span class="pbmit-button-icon-wrappera">
                                <span
                                  class="pbmit-button-icona"
                                  style={{ fontFamily: "var(--head-font)" }}
                                >
                                  02
                                </span>
                              </span>
                            </a>
                          </NavLink>
                        </div>
                        <NavLink
                          to=""
                          class="pbmit-link"
                          href="service-details.html"
                        ></NavLink>
                      </div>
                    </article>
                  </div>
                  <div className="col-12 col-md-4 mt-4">
                    <article
                      class="pbmit-service-style-1 swiper-slide swiper-slide-active"
                      role="group"
                      aria-label="1 / 6"
                    >
                      <div class="pbminfotech-post-item">
                        <div class="pbminfotech-box-content">
                          <div class="pbmit-box-content-wrap">
                            <div class="pbmit-box-content-inner">
                              <div class="pbmit-contant-box">
                                <div class="pbmit-serv-cat">
                                  <NavLink
                                    to="/"
                                    style={{
                                      color: "var(--primary-color)",
                                      textDecoration: "none",
                                    }}
                                  >
                                    DJ Yoga Trainer
                                  </NavLink>
                                </div>
                                <h3 class="mt-2 pbmit-service-title">
                                  <NavLink
                                    to="/"
                                    style={{
                                      color: "black",
                                      textDecoration: "none",
                                    }}
                                  >
                                    Ardha Chakrasana
                                  </NavLink>
                                </h3>
                              </div>
                              <div class="pbmit-service-icon">
                                <i class="pbmit-yoge-icon pbmit-yoge-icon-yoga-pose">
                                  <img
                                    className="my-4"
                                    src={imgone}
                                    style={{ height: "85px", opacity: ".5" }}
                                    alt="img"
                                  />
                                </i>
                              </div>
                            </div>
                          </div>
                          <NavLink to="/abc">
                            <a
                              class="pbmit-service-btn"
                              title="Ardha Chakrasana"
                              style={{
                                backgroundColor: "var(--secondary-color)",
                              }}
                            >
                              <span class="pbmit-button-icon-wrappera">
                                <span
                                  class="pbmit-button-icona"
                                  style={{ fontFamily: "var(--head-font)" }}
                                >
                                  03
                                </span>
                              </span>
                            </a>
                          </NavLink>
                        </div>
                        <NavLink
                          to=""
                          class="pbmit-link"
                          href="service-details.html"
                        ></NavLink>
                      </div>
                    </article>
                  </div>
                </div>

                <div className="row mt-5 pt-4">
                  <div className="col-12 col-md-6 pe-5 p-3">
                    <img
                      src={bannerone}
                      style={{
                        height: "250px",
                        borderRadius: "24px",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="col-12 col-md-6 p-3">
                    <h2
                      style={{
                        fontFamily: "var(--head-font)",
                        fontSize: "36px",
                      }}
                    >
                      Benefits of yoga session
                    </h2>
                    <p
                      className="mt-3"
                      style={{
                        fontFamily: "var(--para-font)",
                        color: "gray",
                        fontWeight: "400",
                        fontSize: "18px",
                        textAlign: "justify",
                      }}
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ratione culpa quam quibusdam corporis, dignissimos animi
                      laboriosam veniam
                    </p>

                    <div className="d-flex mt-4">
                      <FaRegCheckCircle
                        className="me-2"
                        color="var(--primary-color)"
                        size={20}
                      />
                      <h6
                        style={{
                          fontFamily: "var(--head-font)",
                          fontSize: "18px",
                        }}
                      >
                        Yoga improves strength , balance and flexibility
                      </h6>
                    </div>

                    <div className="d-flex mt-2">
                      <FaRegCheckCircle
                        className="me-2"
                        color="var(--primary-color)"
                        size={20}
                      />
                      <h6
                        style={{
                          fontFamily: "var(--head-font)",
                          fontSize: "18px",
                        }}
                      >
                        Yoga connects you with community
                      </h6>
                    </div>

                    <div className="d-flex mt-2">
                      <FaRegCheckCircle
                        className="me-2"
                        color="var(--primary-color)"
                        size={20}
                      />
                      <h6
                        style={{
                          fontFamily: "var(--head-font)",
                          fontSize: "18px",
                        }}
                      >
                        Yoga improves strength , balance and flexibility
                      </h6>
                    </div>

                    <div className="d-flex mt-2">
                      <FaRegCheckCircle
                        className="me-2"
                        color="var(--primary-color)"
                        size={20}
                      />
                      <h6
                        style={{
                          fontFamily: "var(--head-font)",
                          fontSize: "18px",
                        }}
                      >
                        Yoga connects you with community
                      </h6>
                    </div>

                    <div className="d-flex mt-2">
                      <FaRegCheckCircle
                        className="me-2"
                        color="var(--primary-color)"
                        size={20}
                      />
                      <h6
                        style={{
                          fontFamily: "var(--head-font)",
                          fontSize: "18px",
                        }}
                      >
                        Yoga improves strength , balance and flexibility
                      </h6>
                    </div>
                  </div>
                </div>

                {/* Accoordian Start */}
                <h2 className="mt-5" style={{ fontFamily: "var(--head-font)" }}>
                  Frequently asked questions
                </h2>

                <div className="accordion mb-5" id="accordionExample">
                  <div className=" mt-4">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button custom-button p-4"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        01.How many times a week should i practice ?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p
                          style={{
                            fontFamily: "var(--para-font)",
                            color: "gray",
                            fontWeight: "400",
                            fontSize: "18px",
                            textAlign: "justify",
                          }}
                        >
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Quasi repellendus mollitia ad! Enim, ad
                          voluptatem. Adipisci tempora est iure eos, saepe non
                          magnam, debitis eum officiis vero facere
                          exercitationem nesciunt.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" mt-4">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button custom-button collapsed p-4"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        02.What are the best poses for morning
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p
                          style={{
                            fontFamily: "var(--para-font)",
                            color: "gray",
                            fontWeight: "400",
                            fontSize: "18px",
                            textAlign: "justify",
                          }}
                        >
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Eveniet accusamus commodi ipsam quos esse
                          facere, perferendis quis quidem iste et ratione odio
                          laboriosam hic, unde deleniti exercitationem? Magnam,
                          sequi excepturi?
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" mt-4">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button custom-button collapsed p-4"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        03.What is the purpose of sun salutations
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p
                          style={{
                            fontFamily: "var(--para-font)",
                            color: "gray",
                            fontWeight: "400",
                            fontSize: "18px",
                            textAlign: "justify",
                          }}
                        >
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Repudiandae odit cum ullam, rem accusamus
                          laboriosam doloribus soluta ex, maxime repellendus
                          porro, laborum corrupti nam. Rem praesentium
                          voluptatibus autem ex nostrum.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Accoordian End */}
              </div>
              <div className="col-12 col-md-3 p-2 order-lg-1 px-4">
                <Slide>
                  <div
                    className="ulli p-4"
                    style={{ borderRadius: "24px", backgroundColor: "white" }}
                  >
                    <h4 className="mt-3 ps-4 serviceultitle">Our Service</h4>
                    <ul className="p-0 mt-5">
                      {Servicedata.filter(datas=>datas.type===data.type).map((data) => (
                        <>
                          <NavLink to={data.slug}>
                            {({ isActive }) => (
                              <li
                                className={
                                  isActive
                                    ? "py-1 serviceliactive"
                                    : "py-1 serviceli"
                                }
                              >
                                <div className="mt-4 d-flex justify-content-between">
                                  <h4 className=" px-4 pe-5 servicelititle">
                                    {data.name}
                                  </h4>
                                </div>
                                <div className="mt-4 serviceliarrow">
                                  <TfiArrowTopRight
                                    size={16}
                                    className={
                                      isActive ? "arrowactive" : "arrow"
                                    }
                                  />
                                </div>
                              </li>
                            )}
                          </NavLink>
                          <hr
                            className="my-1"
                            style={{ borderTop: "1px solid grey" }}
                          />
                        </>
                      ))}
                    </ul>
                  </div>
                </Slide>

                <div
                  className="mt-5 p-4 "
                  style={{
                    borderRadius: "24px",
                    backgroundColor: "var(--primary-color)",
                    backgroundImage: `url(${pattern})`,
                  }}
                >
                  <img
                    className="pt-4"
                    src={imgfour}
                    alt="img"
                    style={{ width: "100%", maxHeight: "200px" }}
                  />
                  <h2
                    className="mt-5 text-center"
                    style={{ fontFamily: "var(--head-font)", color: "white" }}
                  >
                    Book your yoga session
                  </h2>
                  <h5 className="mt-5 text-center text-white">
                    <FiPhoneCall
                      className="me-3"
                      color="var(--secondary-color)"
                    />
                    9619712712
                  </h5>

                  <button
                    href="#"
                    className="button my-5"
                    style={{
                      "--clr": "var(--secondary-color)",
                      display: "flex",
                      margin: "auto",
                    }}
                  >
                    CALL NOW
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
        </>
      ))}
    </>
  );
};

export default Service;
