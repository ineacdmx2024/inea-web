"use client";
import "../app/globals.css";
import React, { useState, useEffect } from "react";

const SkewedPages = ({ datos }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const handleAlcaldiaClick = (indexSlides) => {
    setCurrentPage(indexSlides); // Cambia la página actual usando IndexSlides
  };
  const colors = [
    "text-[#9C27B0]",
    "text-[#1A237E]",
    "text-[#E65100]",
    "text-yellow-500",
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

  return (
    <div className="">
      {/* botones */}
      <div className="flex flex-wrap">
        {alcaldias.map((elemento) => (
          <button
            key={elemento.IndexSlides}
            type="button"
            className="text-[#700425] hover:text-white border border-[#700425] hover:bg-[#700425] focus:ring-4 focus:outline-none focus:ring-[#3a0c1e] focus:bg-[#700425] focus:text-[white] font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2  text-lg flex"
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
      <div className="container mx-auto flex-column md:h-[90vh] bg-white mt-8">
        {datos.map((pageData, index) => (
          <div
            key={index}
            className={`border border-slate-300 grid grid-cols-2 grid-rows-1 gap-0 h-full bg-white ${
              index === currentPage
                ? "visible opacity-100 translate-y-0"
                : "hidden opacity-0 translate-y-full"
            } transition duration-500`}
            id="animation"
          >
            {/* Lado izquierdo */}
            <div
              className={`flex flex-col justify-center items-center p-3 bg-[#700425] text-white ${
                index === currentPage ? "translate-x-0" : "translate-x-full"
              } transition duration-500`}
            >
              <h1 className="mb-4 uppercase text-2xl text-center">
                {pageData.title}
              </h1>
              <p className="text-lg text-center">{pageData.nom}</p>
              <p className="text-lg text-center">Teléfono: {pageData.tel}</p>
              <p className="text-lg text-center">Email: {pageData.email}</p>
              <br />
              <p className="w-[100%]">{pageData.map}</p>
            </div>
            {/* Lado derecho */}
            <div
              className={`flex flex-col justify-center items-center bg-[#f6f6f6] p-3 ${
                index === currentPage ? "translate-x-0" : "-translate-x-full"
              } transition duration-500`}
            >
              {pageData.items.map((item, idx) => (
                <div
                  key={idx}
                  className="mb-4 text-center cursor-pointer"
                  onClick={() => window.open(item.url, "_blank")}
                >
                  <div className="flex justify-center m-[20px]">
                    <svg
                      className={`h-8 w-8 ${colors[idx % colors.length]}`}
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
                    <div className="m-[0%] uppercase text-2xl text-center">
                      {item.alcaldia}
                    </div>
                  </div>
                  <p>Dirección: {item.dir}</p>
                  <p>Tel: {item.atel}</p>
                  <p>{item.email}</p>
                  <br />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkewedPages;
