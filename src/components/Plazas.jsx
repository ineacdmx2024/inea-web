"use client";
import "../app/globals.css";
import React, { useState, useEffect } from "react";

const Plazas = ({ datos }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const handleAlcaldiaClick = (indexSlides) => {
    setCurrentPage(indexSlides); // Cambia la página actual usando IndexSlides
  };
  const colors = [
    "text-[#880D4F]", //1
    "text-[#A52714]", //2
    "text-[#E55100]", //3
    "text-[#F57C02]", // Cyan 4
    "text-[#FFD603]", // Bright green 5
    "text-[#817717]", // Magenta 6
    "text-[#548B2F]", // Dark Turquoise 7
    "text-[#0A7138]", // Medium Spring Green  8
    "text-[#006064]", // Bright pink 9
    "text-[#00579B]", // Orange 10
    "text-[#1A237E]", // Indigo 11
    "text-[#673AB7]", // Gold 12
    "text-[#4E342E]", // Orange Red 13
    "text-[#C2185B]", // Blue Violet 14
    "text-[#FF5252]", // Deep Pink 15
    "text-[#F57C02]", // Green Yellow 16
    "text-[#FBC02D]", // Tomato 17
    "text-[#FFEA00]", // Peach Puff 18
    "text-[#AFB42C]", // Dark Orange 19
    "text-[#7CB342]", // Chartreuse 20
    "text-[#0097A6]", // Crimson 21
  ]; // Array de colores

  const alcaldias = [
    { alcaldia: "Álvaro Obregón", IndexSlides: 0 },
    { alcaldia: "Azcapotzalco", IndexSlides: 1 }, //v
    { alcaldia: "Benito Juárez", IndexSlides: 2 }, //V
    { alcaldia: "Coyoacán", IndexSlides: 3 },
    { alcaldia: "Cuajimalpa", IndexSlides: 4 },
    { alcaldia: "Cuauhtémoc", IndexSlides: 5 },
    { alcaldia: "Gustavo A. Madero", IndexSlides: 6 },
    { alcaldia: "Iztacalco", IndexSlides: 7 }, //V
    { alcaldia: "Iztapalapa", IndexSlides: 8 },
    { alcaldia: "La Magdalena Contreras", IndexSlides: 9 },
    { alcaldia: "Miguel Hidalgo", IndexSlides: 10 },
    { alcaldia: "Milpa Alta", IndexSlides: 11 }, //v
    { alcaldia: "Tláhuac", IndexSlides: 12 }, //V
    { alcaldia: "Tlalpan", IndexSlides: 13 }, //v
    { alcaldia: "Venustiano Carranza", IndexSlides: 14 }, //v
    { alcaldia: "Xochimilco", IndexSlides: 15 }, // v
  ];

  const ColContent = ({ items }) => {
    if (!items) return null;

    const columns =
      items.length > 10 ? "grid-cols-3 text-lg" : "grid-cols-2 text-xl";

    return (
      <div
        className={`grid ${columns} flex flex-col justify-center items-center`}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="mb-4 text-start justify-start cursor-pointer"
            onClick={() => window.open(item.url, "_blank")}
          >
            <div className="flex justify-start m-[20px]">
              <div className="flex h-auto w-auto">
                <svg
                  className={`h-7 w-7 ${colors[index % colors.length]}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
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
              </div>

              <div className="m-[0%] uppercase">{item.alcaldia}</div>
            </div>
            <div className="justify-center m-[20px]">
              {item.dir && <p>{item.dir}</p>}
              {item.atel && <p>Tel: {item.atel}</p>}
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
            className="text-[#611232] rounded-lg hover:text-white border border-[#611232] hover:bg-[#611232] focus:ring-4 focus:outline-none focus:ring-[#A57F2C] focus:bg-[#611232] focus:text-[white] font-medium px-5 py-2.5 text-center me-2 mb-2  text-lg flex"
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
            className={`mb-5 border border-slate-300 rounded-lg  ${
              index === currentPage ? "visible" : "hidden"
            }`}
          >
            {/* Arriba */}
            <div
              className={`flex flex-col rounded-t-lg justify-center items-center p-5 bg-[#611232] text-white max-h-max ${
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
              className={`flex flex-col rounded-b-lg justify-center items-center bg-[#f6f6f6] p-3 ${
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
