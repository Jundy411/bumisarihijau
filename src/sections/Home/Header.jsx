import React, { useEffect } from "react";
import { FaEye, FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import headerImg from '../../assets/headerImg.jpg'
const Header = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const Image =
    headerImg

  const backgrounds = {
    backgroundImage: `url(${Image})`,

    backgroundColor: "black",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
  };
  return (
    <>
      <section
        className="hero-pattern h-screen min-h-150  text-white relative z-20"
        style={backgrounds}
      >
        <div className="flex items-center justify-center w-full h-screen bg-black/70 px-4 lg:px-1">
          <div
            data-aos="fade-up"
            className="container mx-auto text-center z-10"
          >
            <span
              data-aos="fade-up"
              className="bg-secondary text-white px-3 py-1 text-sm font-bold uppercase tracking-wider rounded mb-4 inline-block animate-fade-in-up"
            >
              Kontraktor Profesional Sejak 2012
            </span>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Mewujudkan Bangunan{" "}
              <span className="text-secondary">Impian Anda</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Kami menyediakan jasa konstruksi, renovasi, dan desain arsitektur
              dengan standar kualitas terbaik, tepat waktu, dan transparan.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <NavLink to={"portfolio"}>
                <a className="px-8 py-4 bg-secondary text-white font-bold rounded hover:bg-yellow-500 transition shadow-lg flex items-center justify-center gap-2 cursor-pointer">
                  <FaEye /> Lihat Karya Kami
                </a>
              </NavLink>
              <a
                href="https://wa.me/6285142611363?text=Halo,%20saya%20ingin%20konsultasi%20mengenai%20proyek%20bangunan."
                target="_blank"
                className="px-8 py-4 border-2 border-white text-white font-bold rounded hover:bg-white hover:text-dark transition flex items-center justify-center gap-2"
              >
                <FaWhatsapp /> Konsultasi
              </a>
            </div>
          </div>
          {/* <!-- Scroll Down Indicator --> */}
          <a className="absolute bottom-10 animate-bounce text-white text-2xl opacity-70">
            <i className="fa-solid fa-chevron-down"></i>
          </a>
        </div>
      </section>
    </>
  );
};

export default Header;
