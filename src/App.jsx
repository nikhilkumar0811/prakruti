import { useState } from 'react'
import { BrowserRouter, Routes ,Route, useLocation, Outlet } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'
import Service from './Pages/Service'
import Servicedata from './Data/Servicedata'
import Serviceparticular from './Pages/Serviceparticular'


function App() {

  return (
    <>
    <BrowserRouter>
      
      <Routes >
        <Route element={<><Outlet/><Footer/></>}>
          <Route path='/' element={<Home/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {Servicedata.map((data)=>(
          <Route path={data.slug} element={<Service />} />
        ))}
        
        {Servicedata.map((data)=>(
          <Route path={data.type.toLowerCase().replace(' ','-')} element={<Serviceparticular />} />
        ))}
{/*           
          
          
          <Route path="/termsofuse" element={<Termsofuse />} />
          <Route path="/privacypolicy" element={<Privacypolicy />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/checkout" element={<CheckOutPage  cartItem={cartItems} deletefromcart={deletefromcart}/>} />
          <Route path="/success/:id" element={<SuccessPage updatecart={updatecart}/>} />
          <Route path="/failed/:id" element={<FailedPage />} />
          <Route path="/shippinganddelivery" element={<Shippinganddelivery />} />
          <Route path="/exchangepolicy" element={<Exchangepolicy />} />
          <Route path="/pay" element={<Pay />} /> */}
    </Route>
       
      </Routes>
  </BrowserRouter>
    
    </>
  )
}

export default App
