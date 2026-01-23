import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaMapMarkerAlt, FaFacebookSquare, FaTiktok } from "react-icons/fa";

const Address = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const urlMap =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d982.9629145816643!2d109.02071148466682!3d-6.849019536625204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fb03eff414865%3A0x1e022dbfad8faf39!2sINDOMARET%20SAWOJAJAR!5e1!3m2!1sen!2sid!4v1768445302941!5m2!1sen!2sid";
  return (
    <>
      <section id="about" className="py-20 bg-light">
        <div className="container mx-auto px-4 " data-aos="fade-up">
          <div className="flex flex-col items-center bg-white rounded-2xl gap-10 py-6">
            <div className=" text-center">
              <h4 className="text-secondary font-bold uppercase tracking-wider mb-2">
                Lokasi Kami
              </h4>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-10">
                CV Bumi Sari Hijau
              </h2>
              <div className=" flex flex-col lg:flex-row justify-between items-center gap-10 p-2">
                <iframe
                  title="lokasi"
                  src={`${urlMap}`}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  className="w-full h-[70vh] rounded-lg shadow-[0px_0px_10px_2px_#00000024]"
                />
                <div className=" w-full flex flex-col items-center justify-center">
                  <p className="text-gray-600 mb-6 leading-relaxed ">
                    Jalan jalan dikota, senang bertemu anda, Rt 02 Rw 04 UH 12,
                    Kota Semarang, Jawa Tengah
                  </p>
                  <div className=" flex flex-col md:flex-row justify-center gap-5">
                    <button
                      onClick={() => window.open(urlMap)}
                      className=" w-37.5 px-5 py-2 bg-[#EA4335] flex justify-center items-center gap-1 text-white rounded transition shadow-lg cursor-pointer "
                    >
                      <span><FaMapMarkerAlt/></span>Maps
                    </button>
                    <button className=" w-37.5 px-5 py-3 flex justify-center items-center gap-1 bg-blue-800 text-white rounded shadow-lg cursor-pointer">
                      <span><FaFacebookSquare/></span>Facebook
                    </button>
                    <button className="w-37.5 px-5 py-2 flex justify-center items-center gap-1 bg-black text-white rounded  shadow-lg  cursor-pointer">
                      <span><FaTiktok/></span>Tik tok
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Address;
