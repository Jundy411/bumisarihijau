import React from "react";

const Whatsapp = () => {
  return (
    <>
      <div
        onClick={() =>
          window.open(
            "https://wa.me/6285142611363?text=Halo,%20saya%20tertarik%20menggunakan%20jasa%20kontraktor%20Tukang%20Bangunan%20Dumeling."
          )
        }
        target="_blank"
        className="fixed bottom-6 right-6 z-50 group"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
          <div class="relative bg-green-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg text-white text-3xl hover:bg-green-600 transition transform hover:-translate-y-1">
            <i className="fa-brands fa-whatsapp"></i>
          </div>
          {/* <!-- Tooltip --> */}
          <div className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 px-3 py-1 rounded shadow-md text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none">
            Chat Kami Sekarang!
          </div>
        </div>
      </div>
    </>
  );
};

export default Whatsapp;
