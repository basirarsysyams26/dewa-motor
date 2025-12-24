"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

const SliderControls = () => {
  const router = useRouter();
  return (
    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-8 z-30">
      <button className="w-16 h-16 rounded-full bg-white/80 text-black flex items-center justify-center text-4xl font-bold shadow-xl hover:bg-white transition-all duration-200">{'<'}</button>
      <div className="flex gap-4">
        <span className="w-5 h-5 rounded-full bg-white border-2 border-blue-400 inline-block shadow" />
        <span className="w-5 h-5 rounded-full bg-white/60 border-2 border-white inline-block" />
        <span className="w-5 h-5 rounded-full bg-white/60 border-2 border-white inline-block" />
      </div>
      <button
        className="w-16 h-16 rounded-full bg-white/80 text-black flex items-center justify-center text-4xl font-bold shadow-xl hover:bg-white transition-all duration-200"
        onClick={() => router.push('/promo')}
        aria-label="Lihat Promo"
      >
        {'>'}
      </button>
    </div>
  );
};

export default SliderControls;
