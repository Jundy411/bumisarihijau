import React,{useEffect} from "react";
import { NavLink } from "react-router-dom";
import {
  FaHouse,
  FaHammer,
  FaCompassDrafting,
  FaTrowelBricks,
  FaCouch,
  FaClipboardCheck,
} from "react-icons/fa6";
import Aos from "aos";
import "aos/dist/aos.css";

const Services = () => {

  useEffect(() => {
    Aos.init();
  },[])
  return (
    <>
      <section id="services" className="py-20 bg-light">
        <div className="container mx-auto px-4" data-aos="fade-up">
          <div className="text-center mb-16">
            <h4 className="text-secondary font-bold uppercase tracking-wider mb-2">
              Layanan Kami
            </h4>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark">
              Solusi Konstruksi Terpadu
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* <!-- Service 1 --> */}
            <NavLink to={"/bangunan-baru"}>
              <div className="service-card bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300 border-b-4 border-transparent hover:border-secondary group">
                <div className="icon-box w-14 h-14 bg-blue-50 text-primary rounded-full flex items-center justify-center text-2xl mb-6 transition duration-300">
                  <FaHouse />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition">
                  Bangun Baru
                </h3>
                <p className="text-gray-600">
                  Jasa pembangunan rumah tinggal, ruko, atau kantor dari nol
                  hingga serah terima kunci dengan spesifikasi sesuai budget.
                </p>
              </div>
            </NavLink>

            {/* <!-- Service 2 --> */}
            <NavLink to={"/renovasi"}>
              <div className="service-card bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300 border-b-4 border-transparent hover:border-secondary group">
                <div className="icon-box w-14 h-14 bg-blue-50 text-primary rounded-full flex items-center justify-center text-2xl mb-6 transition duration-300">
                  <FaHammer />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition">
                  Renovasi
                </h3>
                <p className="text-gray-600">
                  Perbaikan atap, penambahan lantai, pengecatan ulang, hingga
                  renovasi total interior dan eksterior bangunan Anda.
                </p>
              </div>
            </NavLink>

            {/* <!-- Service 3 --> */}
            <NavLink to={"/arsitek"}>
              <div className="service-card bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300 border-b-4 border-transparent hover:border-secondary group">
                <div className="icon-box w-14 h-14 bg-blue-50 text-primary rounded-full flex items-center justify-center text-2xl mb-6 transition duration-300">
                  <FaCompassDrafting />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition">
                  Desain & Arsitek
                </h3>
                <p className="text-gray-600">
                  Layanan konsultasi desain 2D/3D, gambar kerja, dan perhitungan
                  struktur untuk memastikan bangunan aman dan indah.
                </p>
              </div>
            </NavLink>

            {/* <!-- Service 4 --> */}
            <NavLink to={"/sipil"}>
              <div className="service-card bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300 border-b-4 border-transparent hover:border-secondary group">
                <div className="icon-box w-14 h-14 bg-blue-50 text-primary rounded-full flex items-center justify-center text-2xl mb-6 transition duration-300">
                  <FaTrowelBricks />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition">
                  Pekerjaan Sipil
                </h3>
                <p className="text-gray-600">
                  Pembuatan pagar, saluran air, pemasangan paving block, dan
                  pekerjaan struktur beton bertulang.
                </p>
              </div>
            </NavLink>

            {/* <!-- Service 5 --> */}
            <NavLink to={"/interior"}>
              <div className="service-card bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300 border-b-4 border-transparent hover:border-secondary group">
                <div className="icon-box w-14 h-14 bg-blue-50 text-primary rounded-full flex items-center justify-center text-2xl mb-6 transition duration-300">
                  <FaCouch />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition">
                  Interior Custom
                </h3>
                <p className="text-gray-600">
                  Pembuatan kitchen set, lemari pakaian, backdrop TV, dan
                  furnitur custom lainnya berbahan HPL atau Duco.
                </p>
              </div>
            </NavLink>

            {/* <!-- Service 6 --> */}
            <NavLink to={"/konsultasi"}>
              <div className="service-card bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300 border-b-4 border-transparent hover:border-secondary group">
                <div className="icon-box w-14 h-14 bg-blue-50 text-primary rounded-full flex items-center justify-center text-2xl mb-6 transition duration-300">
                  <FaClipboardCheck />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition">
                  Konsultasi RAB
                </h3>
                <p className="text-gray-600">
                  Membantu Anda menghitung Rencana Anggaran Biaya agar proyek
                  berjalan efisien tanpa pembengkakan dana.
                </p>
              </div>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
