import React, { useEffect } from "react";
import Banner from "../Components/Banner";
import bannerthree from "../Images/bannerthree.jpg";
import Contactone from "../Components/Contactone";
import Contacttwo from "../Components/Contacttwo";
import contactthree from "../Images/contactthree.jpg";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Banner banner={contactthree} titleone="CONTACT US" />
      <Contactone />
      <Contacttwo />
    </>
  );
};

export default Contact;
