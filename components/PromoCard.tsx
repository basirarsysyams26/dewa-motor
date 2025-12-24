import React from "react";

interface PromoCardProps {
  image: string;
  alt: string;
}

const PromoCard: React.FC<PromoCardProps> = ({ image, alt }) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg bg-white/10 backdrop-blur-md w-[300px] h-[320px] flex items-center justify-center">
      <img src={image} alt={alt} className="object-cover w-full h-full" />
    </div>
  );
};

export default PromoCard;
