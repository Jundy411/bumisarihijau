
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


