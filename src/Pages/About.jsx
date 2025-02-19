import React, { useEffect } from 'react'
import Banner from '../Components/Banner'
import bannertwo from '../Images/bannertwo.jpg'
import Aboutone from '../Components/Aboutone'
import Abouttwo from '../Components/Abouttwo'
import Aboutthree from '../Components/Aboutthree'
import AboutMarquee from '../Components/AboutMarquee'
import Hometrainer from '../Components/Hometrainer'
import Hometestimonial from '../Components/Hometestimonial'

const About = () => {
   useEffect(() => {
            window.scrollTo(0, 0);
        },[]);
  return (
    <>
    <Banner banner={bannertwo} title='|| धर्मार्थकाममोक्षानां आरोग्यमं मूल उत्तममं ||' titleone='About Us'/>
    <Aboutone/> 
    <Abouttwo/>
    <AboutMarquee/>
    <Aboutthree/>
   <Hometrainer/>
   <Hometestimonial/>
    </>
  )
}

export default About
