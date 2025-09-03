"use client";
import React, { useState } from "react";

// Función para capitalizar el texto
const capitalizarTexto = (texto) => {
  return texto
    .toLowerCase() // Convierte todo el texto a minúsculas
    .split(" ") // Divide el texto en palabras
    .map((palabra) => {
      // Capitaliza la primera letra y deja el resto en minúsculas
      return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    })
    .join(" "); // Vuelve a juntar las palabras
};

const SkewedPagesResponsive = ({ datos }) => {
  const [currentPage, setCurrentPage] = useState(0);

  // Mapeo de alcaldías a IndexSlides
  const alcaldiaToIndex = {
    "Álvaro Obregón": 3,
    Azcapotzalco: 6,
    "Benito Juárez": 5,
    Coyoacán: 2,
    Cuajimalpa: 3, // Queremos mostrar la info de "Justo Sierra"
    Cuauhtémoc: 6,
    "Gustavo A. Madero": 4,
    Iztacalco: 5,
    Iztapalapa: 7,
    "La Magdalena Contreras": 1,
    "Miguel Hidalgo": 6,
    "Milpa Alta": 0,
    Tláhuac: 0,
    Tlalpan: 1,
    "Venustiano Carranza": 5,
    Xochimilco: 2,
  };

  const handleAlcaldiaClick = (alcaldia) => {
    const indexSlides = alcaldiaToIndex[alcaldia];
    setCurrentPage(indexSlides); // Cambia la página actual usando IndexSlides

    //Centrar en los mapas
    const datosMapa = document.getElementById("datosMapa");
    if (datosMapa) {
      // datosMapa.scrollIntoView({ behavior: "smooth", block: "center" });
      const offset = 115; // Espacio de 115 píxeles arriba del top del elemento
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
    "text-red-500",
    "text-blue-500",
    "text-green-500",
    "text-yellow-500",
  ];

  const alcaldias = [
    { alcaldia: "Álvaro Obregón" },
    { alcaldia: "Azcapotzalco" },
    { alcaldia: "Benito Juárez" },
    { alcaldia: "Coyoacán" },
    { alcaldia: "Cuajimalpa" },
    { alcaldia: "Cuauhtémoc" },
    { alcaldia: "Gustavo A. Madero" },
    { alcaldia: "Iztacalco" },
    { alcaldia: "Iztapalapa" },
    { alcaldia: "La Magdalena Contreras" },
    { alcaldia: "Miguel Hidalgo" },
    { alcaldia: "Milpa Alta" },
    { alcaldia: "Tláhuac" },
    { alcaldia: "Tlalpan" },
    { alcaldia: "Venustiano Carranza" },
    { alcaldia: "Xochimilco" },
  ];

  return (
    <div className="h-auto">
      <div className="flex flex-wrap top-0">
        {alcaldias.map((elemento) => (
          <button
            key={elemento.alcaldia}
            type="button"
            className="text-[#611432] rounded-lg top-0 hover:text-white border border-[#611432] hover:bg-[#611432] focus:ring-4 focus:outline-none focus:ring-[#3a0c1e] focus:bg-[#611432] focus:text-[white] font-medium px-5 py-2.5 text-center me-2 mb-2  text-lg flex"
            onClick={() => handleAlcaldiaClick(elemento.alcaldia)}
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
      <br />
      <div
        id="datosMapa"
        className="sticky container mx-auto flex-column h-full bg-white"
      >
        {datos.map((pageData, index) => (
          <div
            key={index}
            className={`sticky mb-5  border border-slate-300 rounded-lg ${
              index === currentPage ? "visible" : "hidden"
            }`}
          >
            {/* Lado izquierdo- Arriba */}
            <div className="left-0 top-0">
              <div className="flex-column items-center justify-center text-center p-2 h-full bg-cover bg-[#611432] rounded-t-lg text-white">
                <h1 className="mt-3 uppercase text-[25px] text-center">
                  {pageData.title}
                </h1>
                <div>
                  <p className="text-[18px] text-center">{pageData.nom}</p>

                  <p className="text-[18px] text-center">
                    Email: {pageData.email}
                  </p>
                </div>

                <br />
                <p className="mb-5 p-4">{pageData.map}</p>
              </div>
            </div>

            {/* Lado derecho- abajo */}
            <div className="right-0 bottom-0">
              <div className="flex-column items-center justify-center text-center p-2 h-full bg-cover bg-[#f6f6f6] rounded-t-lg p-7">
                {pageData.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="cursor-pointer"
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
                      <div className="m-[0%] capitalize textoAlcaldia  text-xl text-center">
                        {capitalizarTexto(item.alcaldia)}
                        {/* {item.alcaldia}  */}
                      </div>
                    </div>
                    <div className="px-2 capitalize text-normal text-center">
                      {item.dir}
                      <br />
                      Tel: {item.atel}
                    </div>
                    {item.aemail}
                    <br />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkewedPagesResponsive;
