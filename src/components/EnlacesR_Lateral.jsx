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
    <Link href={link}>
      <div className="border border-slate-300 shadow-none rounded-lg h-fit p-8 flex flex-col mb-8">
        <div className="flex flex-col items-center">
          {/* Imagen */}
          <div className="w-full aspect-[4/3] relative mb-4">
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Titulo */}
          <h3 className="text-center text-[16px] tablet:text-[22px] text-[#333334] font-medium mb-2">
            {truncateText(title, 21)}
          </h3>

          {/* Botón */}
          <div className="flex justify-center mt-auto">
            <button className="bg-[#611232] text-white text-xs py-2 px-4 rounded-full hover:bg-white hover:text-[#611232] border-2 border-[#611232] mx-auto block">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;