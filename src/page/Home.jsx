<<<<<<< HEAD
import React from "react";
import Header from "../sections/Home/Header";
import About from "../sections/Home/About";
// import Services from '../sections/Service/Services'

import Statistic from "../sections/Home/Statistic";
// import Contact from '../sections/Contact'
import Footer from "../sections/Footer";
import ScrollTop from "../content/ScrollTop";
import Address from "../sections/Home/Address";
import Sponsor from "../sections/Home/Sponsor";
import Accordion from "../sections/Home/Accordion";
import TestimonialPage from "../sections/Home/Testimonials";
// import Portfolio from '../sections/Portfolio/Portfolio'
const Home = () => {
  return (
    <>
      <ScrollTop />
      <Header />
      <About />
      {/* <Services/> */}
      <Statistic />
      <Accordion />
      {/* <Portfolio/> */}
      <Sponsor />
      <TestimonialPage />
      <Address />
      {/* <Contact/> */}
      <Footer />
    </>
  );
};

export default Home;
=======
import React from 'react'
import Header from '../sections/Header'
import About from '../sections/About'
import Services from '../sections/Service/Services'

import Statistic from '../sections/Statistic'
// import Contact from '../sections/Contact'
import Footer from '../sections/Footer'
import ScrollTop from '../content/ScrollTop'
import Address from '../sections/Address'
import Sponsor from '../sections/Sponsor'
import Portfolio from '../sections/Portfolio/Portfolio'
const Home = () => {
  return (
    <>
    <ScrollTop/>
    <Header/>
    <About/>
    <Services/>
    <Statistic/>
    <Portfolio/>
    <Sponsor/>
    <Address/>
    {/* <Contact/> */}
    <Footer/>
    </>
  )
}

export default Home
>>>>>>> b671a8f757c4163f69561e8900edb3d0bb1f9d21
