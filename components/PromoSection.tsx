import React from "react";
import PromoCard from "./PromoCard";

const promos = [
  {
    image: "/paket-servis.png",
    alt: "Paket Servis Ngebut",
  },
  {
    image: "/promo-cvt.png",
    alt: "Promo CVT Meriah",
  },
  {
    image: "/promo-payday.png",
    alt: "Promo Payday Sale",
  },
];

const PromoSection = () => {
  return (
    <section className="w-full min-h-[600px] flex flex-col items-center justify-center bg-gradient-to-b from-[#1e3a8a] to-[#2563eb] py-16 px-4">
      <div className="mb-4">
        <span className="px-5 py-1 rounded-full bg-white/10 text-white text-sm font-semibold tracking-wider border border-white/30">PENAWARAN SPESIAL</span>
      </div>
      <h2 className="text-4xl font-bold text-white mb-10 text-center drop-shadow-lg">Promo Menarik Bulan Ini</h2>
      <div className="flex flex-wrap gap-8 justify-center mb-10">
        {promos.map((promo, idx) => (
          <PromoCard key={idx} image={promo.image} alt={promo.alt} />
        ))}
      </div>
      <button className="mt-2 px-8 py-3 bg-white text-blue-700 font-semibold rounded-full shadow hover:bg-blue-100 transition flex items-center gap-2">
        Lihat Semua Promo <span className="text-xl">→</span>
      </button>
    </section>
  );
};

export default PromoSection;
