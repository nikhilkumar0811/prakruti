import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Homeone from "../Components/Homeone";
import Homemarqueeone from "../Components/Homemarqueeone";
import Homeabout from "../Components/Homeabout";
import Homethree from "../Components/Homethree";
import Hometrainer from "../Components/Hometrainer";
import Hometestimonial from "../Components/Hometestimonial";
import Homewcu from "../Components/Homewcu";
import Footer from "../Components/Footer";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      {/* <Homeone/> */}
      <Homemarqueeone />
      <Homeabout />
      <Homethree />
      <Hometrainer />
      <Homewcu />
      <Hometestimonial />
    </>
  );
};

export default Home;
