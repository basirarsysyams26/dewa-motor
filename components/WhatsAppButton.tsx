import React from 'react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/6281234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50"
      aria-label="WhatsApp"
    >
      <div className="relative">
        <img src="/whatsapp.png" alt="WhatsApp" className="w-16 h-16 rounded-full shadow-lg" />
        <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs border-2 border-white">×</span>
      </div>
    </a>
  );
};

export default WhatsAppButton;
