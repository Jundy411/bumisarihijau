import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Andi Pratama",
    text: "Pelayanan sangat memuaskan! Pekerjaan selesai tepat waktu dan hasilnya melebihi ekspektasi saya.",
  },
  {
    id: 2,
    name: "Siti Aisyah",
    text: "Desainnya rapi, modern, dan mudah digunakan. Sangat membantu untuk kebutuhan bisnis saya.",
  },
  {
    id: 3,
    name: "Budi Santoso",
    text: "Responsif dan profesional. Saya pasti akan merekomendasikan jasa ini ke rekan-rekan saya.",
  },
  {
    id: 4,
    name: "Rina Oktaviani",
    text: "Pengalaman yang sangat menyenangkan. Komunikasi lancar dan hasil akhirnya sangat berkualitas.",
  },
  {
    id: 5,
    name: "Dewi Lestari",
    text: "Proses pengerjaan sangat terstruktur dan hasilnya sesuai dengan kebutuhan saya.",
  },
  {
    id: 6,
    name: "Rizky Maulana",
    text: "Sangat recommended! Support cepat dan solusi yang diberikan sangat membantu.",
  },
  {
    id: 7,
    name: "Putra Wijaya",
    text: "Kualitas pekerjaan sangat baik, detail diperhatikan dengan serius.",
  },
  {
    id: 8,
    name: "Nabila Zahra",
    text: "Hasil akhirnya keren dan profesional. Saya sangat puas dengan pelayanannya.",
  },
];

export default function TestimonialPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-10">
      <div className="text-center mb-16">
        <h4 className="text-secondary font-bold uppercase tracking-wider mb-2">
          Testimoni
        </h4>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark">
          Apa Kata Mereka
        </h2>
      </div>

      <div className="w-full max-w-6xl">
        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
            >
              <p className="text-gray-600 mb-4">“{item.text}”</p>
              <h3 className="font-semibold text-gray-800">{item.name}</h3>
            </div>
          ))}
        </div>

        {/* Mobile Slider with Buttons */}
        <div className="md:hidden relative flex flex-col items-center">
          <div className="w-full bg-white rounded-2xl shadow-md p-6 text-center">
            <p className="text-gray-600 mb-4">
              “{testimonials[currentIndex].text}”
            </p>
            <h3 className="font-semibold text-gray-800">
              {testimonials[currentIndex].name}
            </h3>
          </div>

          <div className="flex gap-4 mt-6">
            <button
              onClick={prevSlide}
              className="px-5 py-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition"
            >
              Previous
            </button>
            <button
              onClick={nextSlide}
              className="px-5 py-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
