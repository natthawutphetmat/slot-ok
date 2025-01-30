import React from 'react'
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";

function HomePage() {
  return (
    <>
 
 <Navbar/>
  <div className="container">
      
 
  <Header/>
  <About/>

  </div>
  <Footer/>


    </>
  )
}

export default HomePage