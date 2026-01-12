import React from "react";

const Portfolio = () => {
  return (
    <>
      <section id="portfolio" Name="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h4 className="text-secondary font-bold uppercase tracking-wider mb-2">
              Galeri Proyek
            </h4>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark">
              Karya Terbaru Kami
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Lihat beberapa proyek yang telah kami selesaikan dengan standar
              kualitas tinggi.
            </p>
          </div>

          {/* <!-- Filter Buttons (Visual only for this demo) --> */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <button className="px-6 py-2 bg-primary text-white rounded-full text-sm font-medium hover:bg-blue-800 transition">
              Semua
            </button>
            <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-300 transition">
              Rumah Tinggal
            </button>
            <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-300 transition">
              Komersial
            </button>
            <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-300 transition">
              Interior
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* <!-- Project 1 --> */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer h-64">
              <img
                src="https://images.unsplash.com/photo-1600596542815-2a4304aa5d25?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Project 1"
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center p-4 text-center">
                <h3 className="text-white font-bold text-xl mb-1">
                  Rumah Modern Minimalis
                </h3>
                <p className="text-gray-200 text-sm">Brebes</p>
              </div>
            </div>

            {/* <!-- Project 2 --> */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer h-64">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Project 2"
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center p-4 text-center">
                <h3 className="text-white font-bold text-xl mb-1">
                  Renovasi Interior Mewah
                </h3>
                <p className="text-gray-200 text-sm">Surabaya</p>
              </div>
            </div>

            {/* <!-- Project 3 --> */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer h-64">
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Project 3"
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center p-4 text-center">
                <h3 className="text-white font-bold text-xl mb-1">Villa Tropis</h3>
                <p className="text-gray-200 text-sm">Bali</p>
              </div>
            </div>

            {/* <!-- Project 4 --> */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer h-64">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Project 4"
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center p-4 text-center">
                <h3 className="text-white font-bold text-xl mb-1">
                  Gedung Kantor 5 Lantai
                </h3>
                <p className="text-gray-200 text-sm">Bandung</p>
              </div>
            </div>

            {/* <!-- Project 5 --> */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer h-64">
              <img
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Project 5"
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center p-4 text-center">
                <h3 className="text-white font-bold text-xl mb-1">
                  Kitchen Set Industrial
                </h3>
                <p className="text-gray-200 text-sm">Tangerang</p>
              </div>
            </div>

            {/* <!-- Project 6 --> */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer h-64">
              <img
                src="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Project 6"
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center p-4 text-center">
                <h3 className="text-white font-bold text-xl mb-1">
                  Renovasi Façade Ruko
                </h3>
                <p className="text-gray-200 text-sm">Bekasi</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
