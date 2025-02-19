import React, { useEffect } from 'react'
import Banner from '../Components/Banner'
import bannerthree from '../Images/bannerthree.jpg'
import Contactone from '../Components/Contactone'
import Contacttwo from '../Components/Contacttwo'

const Contact = () => {
   useEffect(() => {
            window.scrollTo(0, 0);
        },[]);
  return (
    <>
    <Banner banner={bannerthree} titleone='CONTACT US'/>
    <Contactone/>
    <Contacttwo/>
    </>
  )
}

export default Contact
