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
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="mb-8 border border-slate-300 rounded-lg h-[420px] p-5 pt-8 flex flex-col items-center mx-4">
        <div className="flex flex-col items-center h-[340px]">
          <div className="w-[300px] h-[200px] overflow-hidden rounded-lg">
=======
      <div className="border border-slate-300 shadow-none rounded-lg h-fit p-8 flex flex-col mb-8">
        <div className="flex flex-col items-center">
          {/* Imagen */}
          <div className="w-full aspect-[4/3] relative mb-4">
>>>>>>> 1ec61ba (Carrusel)
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
<<<<<<< HEAD
        <button
          className="bg-[#611232] text-white 
          hover:border-[#611232] hover:border-2 hover:bg-white hover:text-[#611232] 
          text-xs py-2 px-4 rounded-full mx-auto block mt-4"
>>>>>>> 3033da2 (Ajuste Noticias antiguas)
        >
          {buttonText}
        </button>
=======
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
>>>>>>> Gabriel-prueba
=======
>>>>>>> 1ec61ba (Carrusel)
      </div>
    </Link>
  );
};

export default Card;