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