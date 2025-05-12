"use client";
import React, { useState, useEffect } from "react";
import PagSec from "@/components/PlantillaPagMat";
import BotonesMat from "@/components/BotonesMat";
import "../../app/globals.css";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800"],
  styles: ["italic", "normal", "bold", "bold italic", "italic bold"],
  subsets: ["latin"],
});

function Materiales() {
  // const [currentPage, setCurrentPage] = useState(1);
  const primariaData = [
    {
      titulo: "Lengua y comunicación 1",
      imagen: "/Modalidad1.jpg", // ruta pública en /public
      descarga: "/Modalidad1.jpg",
      vista: "/Modalidad1.jpg", // ruta para previsualización si aplica
    },

  ];

  const [opcionSeleccionada, setOpcionSeleccionada] =
    useState("alfabetizacion");
  const handleOpcionSeleccionada = (opcion) => {
    setOpcionSeleccionada(opcion);
  };

  return (
    <div className={`${montserrat.className}  text-[#333334]  text-start `}>
      <PagSec
        Titulo={"Descarga de materiales"}
      >
        <div className="row-span-1">
          <div id="pestañas">
            <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 leading-7">
              <li className="p-0">
                <a
                  aria-current="page"
                  className={`${
                    montserrat.className
                  } inline-block p-4 text-[18px] ${
                    opcionSeleccionada === "alfabetizacion"
                      ? "text-[#A57F2C]  font-bold bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-[#A57F2C]"
                      : "text-[#333334] border border-gray-200 rounded-t-lg hover:text-[#611232] hover:font-bold hover:bg-slate-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                  }`}
                  onClick={() => handleOpcionSeleccionada("alfabetizacion")}
                >
                  Alfabetización
                </a>
              </li>
              <li className="p-0">
                <a
                  // href="#"
                  className={`${
                    montserrat.className
                  } inline-block p-4 text-[18px] ${
                    opcionSeleccionada === "primaria"
                      ? "text-[#A57F2C]  font-bold bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-[#A57F2C]"
                      : "text-[#333334] border border-gray-200 rounded-t-lg hover:text-[#611232] hover:font-bold hover:bg-slate-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                  }`}
                  onClick={() => handleOpcionSeleccionada("primaria")}
                >
                  Primaría
                </a>
              </li>
              <li className="p-0">
                <a
                  // href=""
                  className={`${
                    montserrat.className
                  } inline-block p-4 text-[18px] ${
                    opcionSeleccionada === "secundaria"
                      ? "text-[#A57F2C] font-bold bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-[#A57F2C] "
                      : "text-[#333334] border border-gray-200 rounded-t-lg hover:text-[#611232] hover:font-bold hover:bg-slate-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                  }`}
                  onClick={() => handleOpcionSeleccionada("secundaria")}
                >
                  Secundaría
                </a>
              </li>
            </ul>
          </div>
          <div id="contenedorMateriales">
            {opcionSeleccionada === "alfabetizacion" && (
              <div className="row-span-1">
                <div className="mx-auto mb-4 w-full max-w-full ">
                  <div className="pt-4 leading-7 justify-start text-[#333334] text-[18px] ">
                    <strong>
                      Aquí puedes descargar tus modulos y materiales
                    </strong>
                    <p className="font-light">
                      Enlaces: 
                    </p>
                  </div>
                </div>

                
              </div>
            )}
            {opcionSeleccionada === "primaria" && (
              <div className="row-span-1">
                <div className="mx-auto mb-4 w-full max-w-full ">
                  <div className="pt-4 leading-7 justify-start text-[#333334] text-[18px]">
                    <strong>
                      Aquí puedes descargar tus modulos y materiales
                    </strong>
                    <p className="font-light">
                      Enlaces
                    </p>
                  </div>
                </div>
                
                 <div className="w-full flex-col">
                  <BotonesMat datos={primariaData}></BotonesMat>
                </div>
                
              </div>
            )}
            {opcionSeleccionada === "secundaria" && (
              // Luego implementamos lo de pulares ahorita puse las plazas
              <div className="row-span-1">
                <div className="mx-auto mb-4 w-full max-w-full ">
                  <div className="pt-4 leading-7 justify-start text-[#333334] text-[18px] ">
                    <strong>
                      Aquí puedes descargar tus modulos y materiales
                    </strong>
                    <p className="font-light">
                      Enlaces:
                    </p>
                  </div>
                </div>
                
              </div>
            )}
          </div>
        </div>
        
      </PagSec>
    </div>
  );
}

export default Materiales;
