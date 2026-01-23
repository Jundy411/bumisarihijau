import React from "react";
import Blank from "../Blank";
import Footer from "../Footer";
import ScrollTop from "../../content/ScrollTop";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  FaHouse,
  FaHammer,
  FaCompassDrafting,
  FaTrowelBricks,
  FaCouch,
  FaClipboardCheck,
} from "react-icons/fa6";
const BangunanBaru = () => {
  const navigate = useNavigate();
  return (
    <>
      <ScrollTop />
      <Blank />
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className=" mb-10">
            <div className=" flex items-center gap-3 font-bold uppercase text-gray-600">
              <span className=" cursor-pointer" onClick={() => navigate("/")}>
                Beranda
              </span>{" "}
              /
              <span
                className=" cursor-pointer"
                onClick={() => navigate("/service")}
              >
                Layanan
              </span>
              / <span>Bangunan Baru</span>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1636367393690-1f07c7413851?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Tim Konstruksi"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded shadow-xl border-l-4 border-secondary hidden md:block">
                <p className="text-4xl font-heading font-bold text-primary">15+</p>
                <p className="text-gray-600 text-sm font-medium">
                  Tahun Pengalaman
                </p>
              </div> */}
            </div>
            <div className="lg:w-1/2">
              <h4 className="text-secondary font-bold uppercase tracking-wider mb-2">
                Layanan Kami
              </h4>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6">
                Membangun Bangunan Baru
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                <strong>CV Bumi Sari Hijau </strong>Kami menyediakan layanan
                pembangunan bangunan baru yang dikerjakan secara profesional,
                terencana, dan sesuai standar konstruksi. Mulai dari rumah
                tinggal, ruko, gedung perkantoran, hingga bangunan komersial
                lainnya, setiap proyek kami kerjakan dengan perhitungan teknis
                yang matang dan material berkualitas.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Tim kami akan mendampingi klien dari tahap perencanaan hingga
                bangunan siap digunakan. Dengan manajemen proyek yang rapi,
                transparan, dan tepat waktu, kami memastikan hasil bangunan
                kokoh, aman, serta sesuai dengan kebutuhan dan anggaran klien.
              </p>

              {/* <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <i className="fa-solid fa-check-circle text-secondary text-xl mt-1"></i>
                  <div>
                    <h5 className="font-bold text-dark">Tepat Waktu</h5>
                    <p className="text-sm text-gray-500">
                      Manajemen proyek efisien.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <i className="fa-solid fa-check-circle text-secondary text-xl mt-1"></i>
                  <div>
                    <h5 className="font-bold text-dark">Transparan</h5>
                    <p className="text-sm text-gray-500">
                      RAB detail & tanpa biaya tersembunyi.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {/* <!-- Service 1 --> */}
            {/* <NavLink to={"/bangunan-baru"}>
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
            </NavLink> */}

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
      <Footer />
    </>
  );
};

export default BangunanBaru;
