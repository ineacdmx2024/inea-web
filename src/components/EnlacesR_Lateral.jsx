"use client";
import Link from "next/link";

const truncateText = (text, maxLetters) => {
  if (text.length > maxLetters) {
    return text.slice(0, maxLetters) + "...";
  }
  return text;
};

const Card = ({ title, imageSrc, buttonText, link }) => {
  return (
    <Link href={link} className="block">
      <div className="mb-8 border border-slate-300 rounded-lg h-[400px] p-5 flex flex-col items-center justify-between">
        {/* Contenedor principal de la tarjeta */}
        <div className="flex flex-col items-center">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-[200px] object-cover rounded-lg"
          />
          <h3 className="text-center text-[18px] font-medium mt-4">
            {truncateText(title, 40)}
          </h3>
        </div>
        <button className="bg-[#611232] text-white text-xs py-2 px-4 rounded-full hover:bg-white hover:text-[#611232] border-2 border-[#611232] mx-auto block mt-4">
          {buttonText}
        </button>
      </div>
    </Link>
  );
};

export default Card;