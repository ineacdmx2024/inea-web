"use client";
import "../app/globals.css";
import React, { useState, useEffect } from "react";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800"],
  styles: ["italic", "normal", "bold", "bold italic", "italic bold"],
  subsets: ["latin"],
});

const Plazas = ({ datos }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const handleAlcaldiaClick = (indexSlides) => {
    setCurrentPage(indexSlides); // Cambia la página actual usando IndexSlides
    //Centrar en los mapas
    const datosMapa = document.getElementById("datosMapaPlazas");
    if (datosMapa) {
      // datosMapa.scrollIntoView({ behavior: "smooth", block: "start" });
      const offset = 115; // Espacio de 115 píxeles arriba del top del div para que no lo cubra el navbar
      const elementPosition =
        datosMapa.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
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
    //"text-[#F57C02]", // Green Yellow 16
    //"text-[#FBC02D]", // Tomato 17
    //"text-[#FFEA00]", // Peach Puff 18
    //"text-[#AFB42C]", // Dark Orange 19
    "text-[#7CB342]", // Chartreuse 20
    "text-[#0097A6]", // Crimson 21
    //"text-[#0F9D58]",//22
    //"text-[#0097A7]",//23
    "text-[#0288D1]", //24
    "text-[#3949AB]", //25
    "text-[#9C27B0]", //26
    "text-[#795548]", //27
    "text-[#BDBDBD]", //28
    "text-[#757575]", //29
    "text-[#424242]", //30
    "text-[#000000]", //31
  ];

  // Array de colores
  const color = [
    "text-[#880D4F]", //1
    "text-[#F57C02]", //4
    "text-[#FFD603]", //5
    "text-[#548B2F]", //7
    "text-[#00579B]", //10
    "text-[#673AB7]", //12
    "text-[#C2185B]", //14
    "text-[#FF5252]", //15
    "text-[#7CB342]", // Chartreuse 20
    "text-[#0097A6]", // Crimson 21
    "text-[#0F9D58]", //22
    "text-[#0097A7]", //23
    "text-[#0288D1]", //24
    "text-[#3949AB]", //25
    "text-[#9C27B0]", //26
    "text-[#795548]", //27
    "text-[#424242]", //28
  ];

  const alcaldias = [
    { alcaldia: "Estudiante", IndexSlides: 0 },
    { alcaldia: "Profesor", IndexSlides: 1 }, //v
  ];

  const ColContent = ({ items }) => {
    if (!items) return null;

    const columns =
      items.length > 10
        ? "md:grid-cols-2  md:text-lg"
        : "md:grid-cols-2  md:text-lg";

    return (
      <div
        className={`grid grid-cols-1 ${columns} text-xl flex flex-col justify-center`}
        style={{ alignItems: "baseline" }}
      >
        {items.map((item, index) => {
          // Determina el paso dinámicamente
          const arreglo = items.length < 10 ? color : colors;
          return (
            <div
              key={index}
              className={`${montserrat.className}  text-[#333334] mb-4  text-start leading-none justify-start cursor-pointer`}
              onClick={() => window.open(item.url, "_blank")}
            >
              {
                //step} {arreglo}
              }
              <div className="flex mt-[20px] mb-1 mx-[20px] justify-normal">
                {/* <div className="flex m-[0%] uppercase justify-normal text-left"> */}
                 <div className="flex m-[0%]  justify-normal text-left"> 
                  <div className="flex h-auto w-auto mr-1">
                    <svg
                      className={`h-6 w-6 ml-1 ${
                        arreglo[(index * 1) % arreglo.length]
                      }`}
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
                  {item.alcaldia}
                </div>
              </div>
              <div className="justify-normal text-left mb-[20px] mx-[20px]">
                {item.dir && <p>{item.dir}</p>}
                {item.atel && <p>Tel: {item.atel}</p>}
              </div>
            </div>
          );
        })}
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
      <div
        id="datosMapaPlazas"
        className="container mx-auto flex-column h-full bg-white mt-8"
      >
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
              <h1 className="mb-3 uppercase text-2xl text-center">
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
