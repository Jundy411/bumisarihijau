import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import img1 from '../../assets/project1.jpeg'
import img2 from '../../assets/project2.jpeg'
import img3 from '../../assets/project3.jpeg'
import img4 from '../../assets/project4.jpeg'
import img5 from '../../assets/project5.jpeg'
import img6 from '../../assets/project6.jpeg'
import img7 from '../../assets/project7.jpeg'
import img8 from '../../assets/project8.jpeg'

const images = [
  {
    id:1,
    src:img1,
    title:"gambar 1"
  },
  {
    id:2,
    src:img2,
    title:"gambar 2"
  },
  {
    id:3,
    src:img3,
    title:"gambar 3"
  },
  {
    id:4,
    src:img4,
    title:"gambar 4"
  },
  {
    id:5,
    src:img5,
    title:"gambar 5"
  },
  {
    id:6,
    src:img6,
    title:"gambar 6"
  },
  {
    id:7,
    src:img7,
    title:"gambar 7"
  },
  {
    id:8,
    src:img8,
    title:"gambar 8"
  },
];

const GalleryPhoto = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const navigate = useNavigate();

  return (
    <>
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className=" flex items-center gap-3 font-bold uppercase text-gray-600">
            <span className=" cursor-pointer" onClick={() => navigate("/")}>
              Beranda
            </span>
            / <span>Galeri</span>
            
          </div>
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