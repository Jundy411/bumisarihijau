import React from "react";

export default function Sponsor() {
  const sponsors = [
    {
      id: 1,
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    {
      id: 2,
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    },
    {
      id: 3,
      name: "Apple",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    },
    {
      id: 4,
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    },
    {
      id: 5,
      name: "Adidas",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
    },
  ];

  return (
    <div className="w-full bg-gray-900 py-10">
      <div className="text-center mb-16">
        <h4 className="text-secondary font-bold uppercase tracking-wider mb-2">
          Sponsor Kami
        </h4>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
          Partner Yang Mendukung Kami
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 items-center gap-6">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="flex items-center justify-center bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 w-full"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
