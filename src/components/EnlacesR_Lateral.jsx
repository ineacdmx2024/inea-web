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
<<<<<<< HEAD
    <Link href={link} className="block">
      <div className="mb-8 border border-slate-300 rounded-lg h-[400px] letras:h-[420px] p-5 flex flex-col items-center justify-between">
        {/* Contenedor principal de la tarjeta */}
        
        {/* Contenido superior con imagen */}
        <img
          src={imageSrc}
          alt={title}
          className="w-11/12 h-[210px] rounded-lg"
        />
        
        {/* Título centralizado */}
        <h3 className="my-4 px-4 text-center text-[18px] letras:text-[22px] text-[#333334] font-medium">
          {truncateText(title, 35)}
        </h3>

        {/* Botón centrado */}
        <button
          className="focus:border-[#611232] bg-[#611232] text-white 
          hover:border-[#611232] hover:border-2 hover:bg-white hover:text-[#611232] 
          text-xs letras:text-[13.5px] py-2 px-4 rounded-full"
=======
    <Link href={link}>
      <div className="mb-8 border border-slate-300 rounded-lg h-[420px] p-5 pt-8 flex flex-col items-center mx-4">
        <div className="flex flex-col items-center h-[340px]">
          <div className="w-[300px] h-[200px] overflow-hidden rounded-lg">
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="h-16 overflow-hidden mt-4 px-4 text-center text-[18px] font-medium text-[#333334]">
            {truncateText(title, 35)}
          </h3>
        </div>
        <button
          className="bg-[#611232] text-white 
          hover:border-[#611232] hover:border-2 hover:bg-white hover:text-[#611232] 
          text-xs py-2 px-4 rounded-full mx-auto block mt-4"
>>>>>>> 3033da2 (Ajuste Noticias antiguas)
        >
          {buttonText}
        </button>
      </div>
    </Link>
  );
};

export default Card;
