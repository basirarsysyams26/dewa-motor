'use client';

import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Promo', href: '#promo' },
    { name: 'Lokasi', href: '#lokasi' },
    { name: 'Aplikasi', href: '#aplikasi' },
    { name: 'Produk', href: '#produk' },
    { name: 'Galeri', href: '#galeri' },
    { name: 'Artikel', href: '#artikel' },
  ];

  return (
    <nav className="w-full flex justify-center pt-6 pb-2 z-50 px-4">
      <div className="flex items-center w-full max-w-6xl px-6 py-3 bg-white/5 backdrop-blur-lg rounded-full border border-white/70 shadow-lg gap-6 md:gap-10">
        
        {/* Logo */}
        <img 
          src="/logo-dm.png" 
          alt="Dewa Motor Logo" 
          className="h-12 md:h-14 flex-shrink-0" 
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white font-bold uppercase text-sm lg:text-base tracking-wide ml-auto mr-2 drop-shadow-sm">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a 
                href={item.href} 
                className="hover:text-blue-200 transition duration-300 ease-in-out"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden ml-auto text-white text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-20 left-4 right-4 bg-white/10 backdrop-blur-lg rounded-xl border border-white/30 p-4 z-40 md:hidden">
          <ul className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href} 
                  className="text-white font-bold uppercase text-sm hover:text-blue-200 transition block"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
