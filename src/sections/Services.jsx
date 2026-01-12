import React from "react";

const Services = () => {
  return (
    <>
      <section id="services" className="py-20 bg-light">
        <div className="container mx-auto px-4">
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
            <div className="service-card bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300 border-b-4 border-transparent hover:border-secondary group">
              <div className="icon-box w-14 h-14 bg-blue-50 text-primary rounded-full flex items-center justify-center text-2xl mb-6 transition duration-300">
                <i className="fa-solid fa-house-chimney"></i>
              </div>
              <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition">
                Bangun Baru
              </h3>
              <p className="text-gray-600">
                Jasa pembangunan rumah tinggal, ruko, atau kantor dari nol
                hingga serah terima kunci dengan spesifikasi sesuai budget.
              </p>
            </div>

            {/* <!-- Service 2 --> */}
            <div className="service-card bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300 border-b-4 border-transparent hover:border-secondary group">
              <div className="icon-box w-14 h-14 bg-blue-50 text-primary rounded-full flex items-center justify-center text-2xl mb-6 transition duration-300">
                <i className="fa-solid fa-hammer"></i>
              </div>
              <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition">
                Renovasi
              </h3>
              <p className="text-gray-600">
                Perbaikan atap, penambahan lantai, pengecatan ulang, hingga
                renovasi total interior dan eksterior bangunan Anda.
              </p>
            </div>

            {/* <!-- Service 3 --> */}
            <div className="service-card bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300 border-b-4 border-transparent hover:border-secondary group">
              <div className="icon-box w-14 h-14 bg-blue-50 text-primary rounded-full flex items-center justify-center text-2xl mb-6 transition duration-300">
                <i className="fa-solid fa-compass-drafting"></i>
              </div>
              <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition">
                Desain & Arsitek
              </h3>
              <p className="text-gray-600">
                Layanan konsultasi desain 2D/3D, gambar kerja, dan perhitungan
                struktur untuk memastikan bangunan aman dan indah.
              </p>
            </div>

            {/* <!-- Service 4 --> */}
            <div className="service-card bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300 border-b-4 border-transparent hover:border-secondary group">
              <div className="icon-box w-14 h-14 bg-blue-50 text-primary rounded-full flex items-center justify-center text-2xl mb-6 transition duration-300">
                <i className="fa-solid fa-trowel-bricks"></i>
              </div>
              <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition">
                Pekerjaan Sipil
              </h3>
              <p className="text-gray-600">
                Pembuatan pagar, saluran air, pemasangan paving block, dan
                pekerjaan struktur beton bertulang.
              </p>
            </div>

            {/* <!-- Service 5 --> */}
            <div className="service-card bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300 border-b-4 border-transparent hover:border-secondary group">
              <div className="icon-box w-14 h-14 bg-blue-50 text-primary rounded-full flex items-center justify-center text-2xl mb-6 transition duration-300">
                <i className="fa-solid fa-couch"></i>
              </div>
              <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition">
                Interior Custom
              </h3>
              <p className="text-gray-600">
                Pembuatan kitchen set, lemari pakaian, backdrop TV, dan furnitur
                custom lainnya berbahan HPL atau Duco.
              </p>
            </div>

            {/* <!-- Service 6 --> */}
            <div className="service-card bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300 border-b-4 border-transparent hover:border-secondary group">
              <div className="icon-box w-14 h-14 bg-blue-50 text-primary rounded-full flex items-center justify-center text-2xl mb-6 transition duration-300">
                <i className="fa-solid fa-clipboard-check"></i>
              </div>
              <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition">
                Konsultasi RAB
              </h3>
              <p className="text-gray-600">
                Membantu Anda menghitung Rencana Anggaran Biaya agar proyek
                berjalan efisien tanpa pembengkakan dana.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
