import { useState, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import accordionImg from '../../assets/accordionImg.jpg'

export default function Accordion() {
  const [open, setOpen] = useState(null);

  useEffect(()=> {
    Aos.init();
  },[])

  const items = [
    {
      id: 1,
      title: "Layanan Konstruksi",
      content:
        "Kami menyediakan layanan konstruksi terpadu yang mencakup pembangunan gedung, infrastruktur, renovasi, serta sistem design & build dengan mengutamakan kualitas, ketepatan waktu, dan kesesuaian dengan standar teknis, sehingga mampu menjawab kebutuhan proyek komersial, residensial, maupun fasilitas publik.",
    },
    {
      id: 2,
      title: "Keunggulan Perusahaan",
      content:
        "Perusahaan kami didukung oleh tenaga profesional berpengalaman, penggunaan material berkualitas tinggi, manajemen proyek yang terencana dengan baik, serta penerapan standar keselamatan kerja (K3) secara ketat untuk memastikan setiap proyek berjalan aman, efisien, dan menghasilkan bangunan yang andal.",
    },
    {
      id: 3,
      title: "Jenis Proyek",
      content:
        "Kami menangani berbagai jenis proyek konstruksi mulai dari bangunan komersial, residensial, industri, hingga fasilitas publik, dengan pendekatan kerja yang fleksibel dan solusi konstruksi yang disesuaikan dengan karakter serta kebutuhan setiap klien.",
    },
    {
      id: 4,
      title: "Tahapan Pekerjaan",
      content:
        "Setiap proyek dikerjakan melalui tahapan yang sistematis, dimulai dari perencanaan yang matang, pelaksanaan konstruksi sesuai spesifikasi, pengawasan kualitas dan keselamatan secara berkelanjutan, hingga proses serah terima proyek yang transparan dan profesional.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <div data-aos="fade-up">
      <div className="text-center mb-16">
        <h4 className="text-secondary font-bold uppercase tracking-wider mb-2">
          CV Bumi Sari Hijau
        </h4>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark">
          Mengapa Pilih Kami?
        </h2>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-start">
        

        {/* ACCORDION SECTION */}
        <div className="w-full lg:w-1/2 space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none"
              >
                
                <span className="font-bold text-xl text-gray-800 ">{item.title}</span>
                <span
                  className={`text-gray-500 transition-transform duration-300 ${
                    open === index ? "rotate-90" : "rotate-0"
                  }`}
                >
                  <FaChevronRight/>
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  open === index
                    ? "max-h-125 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 text-sm text-gray-600 leading-relaxed">
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* IMAGE SECTION */}
        <div className="hidden lg:block lg:w-1/2">
          <img
            src={accordionImg}
            alt="Konstruksi Bangunan"
            className="w-full h-full object-cover rounded-2xl shadow-sm"
          />
        </div>
      </div>
      </div>
    </div>
  );
}
