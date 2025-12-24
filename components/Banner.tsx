import React from 'react';

const Banner = () => {
  return (
    <section
      className="relative w-full h-[540px] flex items-center justify-center overflow-hidden mt-[-12px]"
      style={{
        backgroundImage: 'url(/hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'brightness(0.95)',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#2B4A6Fbb] via-[#2B4A6F77] to-[#E04B4Bbb] z-10" />
      <div className="relative z-20 flex flex-col items-center justify-center w-full h-full">
        {/* Slider content placeholder, kosong sesuai permintaan */}
      </div>
    </section>
  );
};

export default Banner;
