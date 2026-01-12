import React from "react";

const Contact = () => {
  return (
    <>
      <section id="contact" className="py-20 bg-light relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* <!-- Contact Info --> */}
            <div className="lg:w-2/5 bg-dark p-10 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-heading font-bold mb-6">
                  Hubungi Kami
                </h3>
                <p className="text-gray-400 mb-8">
                  Siap mewujudkan proyek impian Anda. Hubungi kami untuk
                  konsultasi gratis dan penawaran terbaik.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center text-secondary shrink-0">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div>
                      <h5 className="font-bold">Alamat Kantor</h5>
                      <p className="text-gray-400 text-sm">
                        JL KH akhmad dahlan dumeling brebes
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center text-secondary shrink-0">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div>
                      <h5 className="font-bold">Telepon / WhatsApp</h5>
                      <p className="text-gray-400 text-sm">+62 851 4261 1363</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center text-secondary shrink-0">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div>
                      <h5 className="font-bold">Email</h5>
                      <p className="text-gray-400 text-sm">
                        info@tukangbangun.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <p className="font-bold mb-4">Ikuti Kami</p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-secondary hover:text-white transition"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-secondary hover:text-white transition"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-secondary hover:text-white transition"
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Contact Form --> */}
            <div className="lg:w-3/5 p-10">
              <h3 className="text-2xl font-heading font-bold text-dark mb-6">
                Kirim Pesan
              </h3>
              <form
                id="contactForm"
                onsubmit="handleFormSubmit(event)"
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
                      placeholder="Nama Anda"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nomor Telepon
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
                      placeholder="0812..."
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Layanan yang Dibutuhkan
                  </label>
                  <select className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition">
                    <option>Bangun Baru</option>
                    <option>Renovasi</option>
                    <option>Desain Interior</option>
                    <option>Lainnya</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan Anda
                  </label>
                  <textarea
                    rows="4"
                    required
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
                    placeholder="Ceritakan detail proyek Anda..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-3 bg-secondary text-white font-bold rounded hover:bg-yellow-500 transition shadow-lg"
                >
                  Kirim Pesan
                </button>   

                {/* <!-- Success Message (Hidden by default) --> */}
                <div
                  id="successMessage"
                  className="hidden mt-4 p-4 bg-green-100 text-green-700 rounded border border-green-300"
                >
                  Terima kasih! Pesan Anda telah terkirim. Tim kami akan segera
                  menghubungi Anda.
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
