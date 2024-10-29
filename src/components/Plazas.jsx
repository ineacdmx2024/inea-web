"use client";
import "../app/globals.css";
import React, { useState, useEffect } from "react";

const Plazas = ({ datos }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const handleAlcaldiaClick = (indexSlides) => {
    setCurrentPage(indexSlides); // Cambia la página actual usando IndexSlides
  };
  const colors = [
    "text-[#9C27B0]", //1
    "text-[#1A237E]", //2
    "text-[#E65100]", //3
    "text-[#33C4FF]", // Cyan 4
    "text-[#33FF57]", // Bright green 5
    "text-[#FF33A8]", // Magenta 6
    "text-[#00CED1]", // Dark Turquoise 7
    "text-[#00FA9A]", // Medium Spring Green  8
    "text-[#FF33FF]", // Bright pink 9
    "text-[#FFA500]", // Orange 10
    "text-[#4B0082]", // Indigo 11
    "text-[#FFD700]", // Gold 12
    "text-[#FF4500]", // Orange Red 13
    "text-[#8A2BE2]", // Blue Violet 14
    "text-[#FF1493]", // Deep Pink 15
    "text-[#ADFF2F]", // Green Yellow 16
    "text-[#FF6347]", // Tomato 17
    "text-[#FFDAB9]", // Peach Puff 18
    "text-[#FF8C00]", // Dark Orange 19
    "text-[#7FFF00]", // Chartreuse 20
    "text-[#DC143C]", // Crimson 21
  ]; // Array de colores

  const alcaldias = [
    { alcaldia: "Álvaro Obregón", IndexSlides: 3 },
    { alcaldia: "Azcapotzalco", IndexSlides: 6 },
    { alcaldia: "Benito Juárez", IndexSlides: 5 },
    { alcaldia: "Coyoacán", IndexSlides: 2 },
    { alcaldia: "Cuajimalpa", IndexSlides: 1 },
    { alcaldia: "Cuauhtémoc", IndexSlides: 6 },
    { alcaldia: "Gustavo A. Madero", IndexSlides: 4 },
    { alcaldia: "Iztacalco", IndexSlides: 5 },
    { alcaldia: "Iztapalapa", IndexSlides: 7 },
    { alcaldia: "La Magdalena Contreras", IndexSlides: 3 },
    { alcaldia: "Miguel Hidalgo", IndexSlides: 6 },
    { alcaldia: "Milpa Alta", IndexSlides: 0 },
    { alcaldia: "Tláhuac", IndexSlides: 0 },
    { alcaldia: "Tlalpan", IndexSlides: 1 },
    { alcaldia: "Venustiano Carranza", IndexSlides: 5 },
    { alcaldia: "Xochimilco", IndexSlides: 2 },
  ];

  const ColContent = ({ items }) => {
    if (!items) return null;

    const columns = items.length > 10 ? "grid-cols-3" : "grid-cols-2";

    return (
      <div className={`grid ${columns}`}>
        {items.map((item, index) => (
          <div
            key={index}
            className="flex justify-start m-[20px]"
          >
            <svg
              className={`h-8 w-8 ${colors[index % colors.length]}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <div className="m-[0%] uppercase text-2xl text-center">
              {item.alcaldia}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="h-auto">
      {/* botones */}
      <div className="flex flex-wrap">
        {alcaldias.map((elemento) => (
          <button
            key={elemento.IndexSlides}
            type="button"
            className="text-[#611232] hover:text-white border border-[#611232] hover:bg-[#611232] focus:ring-4 focus:outline-none focus:ring-[#A57F2C] focus:bg-[#611232] focus:text-[white] font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2  text-lg flex"
            onClick={() => handleAlcaldiaClick(elemento.IndexSlides)}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokelinecap="round"
                strokelinejoin="round"
                strokewidth="{2}"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokelinecap="round"
                strokelinejoin="round"
                strokewidth="{2}"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {elemento.alcaldia}
          </button>
        ))}
      </div>
      {/* Contenido principal */}
      <div className="container mx-auto flex-column h-full bg-white mt-8">
        {datos.map((pageData, index) => (
          <div
            key={index}
            className={`mb-5 border border-slate-300 rounded-lg grid grid-cols-1 grid-rows-2 gap-0 h-full bg-white ${
              index === currentPage
                ? "visible opacity-100 translate-y-0"
                : "hidden opacity-0 translate-y-full"
            } transition duration-500`}
            id="animation"
          >
            {/* Arriba */}
            <div
              className={`flex flex-col justify-center items-center p-5 bg-[#611232] text-white ${
                index === currentPage ? "translate-x-0" : "translate-x-full"
              } transition duration-500`}
            >
              <h1 className="mb-4 uppercase text-2xl text-center">
                {pageData.title}
              </h1>
              <p className="w-[100%]">{pageData.map}</p>
            </div>
            {/* Abajo */}
            <div
              className={`flex flex-col justify-center items-center bg-[#f6f6f6] p-3 ${
                index === currentPage ? "translate-x-0" : "-translate-x-full"
              } transition duration-500`}
            >
              <ColContent items={pageData.items} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plazas;
