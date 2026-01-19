import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const images = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  src: `https://picsum.photos/seed/${i + 1}/600/400`,
  title: `Gambar ${i + 1}`,
}));

const GalleryPhoto = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <>
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h4 className="text-secondary font-bold uppercase tracking-wider mb-2">
              Gallery Kami
            </h4>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark">
              Karya Terbaru Kami
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Lihat beberapa proyek yang telah kami selesaikan dengan standar
              kualitas tinggi.
            </p>
          </div>

          {/* Grid Gallery */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {images.map((img) => (
              <div
                key={img.id}
                className="cursor-pointer group"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-40 object-cover rounded-lg shadow group-hover:scale-105 transition"
                />
              </div>
            ))}
          </div>

          {/* Modal Detail Gambar */}
          {selectedImage && (
            <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg max-w-3xl w-full mx-4 p-4 relative">
                <button
                  className="absolute top-2 right-2 cursor-pointer text-gray-600 hover:text-black bg-white rounded-full p-1"
                  onClick={() => setSelectedImage(null)}
                >
                  <i className=" text-2xl"><FaTimes/></i>
                </button>

                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full max-h-[70vh] object-contain rounded"
                />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default GalleryPhoto;