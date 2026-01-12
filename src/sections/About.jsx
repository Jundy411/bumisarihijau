import React from "react";

const About = () => {
  return (
    <>
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Tim Konstruksi"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded shadow-xl border-l-4 border-secondary hidden md:block">
                <p className="text-4xl font-heading font-bold text-primary">15+</p>
                <p className="text-gray-600 text-sm font-medium">
                  Tahun Pengalaman
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h4 className="text-secondary font-bold uppercase tracking-wider mb-2">
                Tentang Kami
              </h4>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6">
                Membangun Kepercayaan Melalui Kualitas
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                <strong>Tukang Bangunan Dumeling</strong> didirikan pada tahun
                2010 dengan visi untuk menjadi mitra konstruksi yang paling
                dapat diandalkan di Indonesia. Kami memulai sebagai tim kecil
                yang menangani renovasi rumah, dan kini telah berkembang menjadi
                perusahaan kontraktor yang menangani proyek komersial dan
                residensial skala besar.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Kami percaya bahwa setiap bangunan memiliki cerita. Tim insinyur
                dan arsitek kami bekerja dengan integritas tinggi, memastikan
                setiap detail konstruksi aman, estetis, dan tahan lama.
              </p>

              <div className="grid grid-cols-2 gap-6">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
