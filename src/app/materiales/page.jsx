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
  const primariaData = [
    {
      title: "Estudiante",
      map: "Materiales para estudiantes",
      items: [
        {
          titulo: "Lengua y comunicación 1",
          portada: "/Modalidad1.jpg",
          linkDescarga: "/Modalidad1.jpg",
          linkVista: "https://archive.org/embed/manualzilla-id-6854751",
        },
        {
          titulo: "Lengua y comunicación 2",
          portada: "/Modalidad1.jpg",
          linkDescarga: "/Modalidad1.jpg",
          linkVista: "https://archive.org/embed/manualsonline-id-c0afeec3-9b65-4bfb-99ee-60580a7e2aa3",
        },
        {
          titulo: "Lengua y comunicación 2",
          portada: "/Modalidad1.jpg",
          linkDescarga: "/Modalidad1.jpg",
          linkVista: "https://archive.org/embed/manualzilla-id-6854751",
        },
        {
          titulo: "Lengua y comunicación 2",
          portada: "/Modalidad1.jpg",
          linkDescarga: "/Modalidad1.jpg",
          linkVista: "https://archive.org/embed/manualzilla-id-6854751",
        },
      ],
    },
    {
      title: "Profesor",
      map: "Materiales para profesores",
      items: [
        {
          titulo: "Lengua y comunicación 1",
          portada: "/Modalidad1.jpg",
          linkDescarga: "/Modalidad1.jpg",
          linkVista: "https://archive.org/embed/manualzilla-id-6854751",
        },
        {
          titulo: "Lengua y comunicación 2",
          portada: "/Modalidad1.jpg",
          linkDescarga: "/Modalidad1.jpg",
          linkVista: "https://archive.org/embed/manualzilla-id-6854751",
        },
      ],
    },
  ];

  const secundariaData = [
    {
      title: "Estudiante",
      map: "Materiales para estudiantes",
      items: [
        {
          titulo: "Lengua y comunicación 1",
          portada: "/Modalidad1.jpg",
          linkDescarga: "/Modalidad1.jpg",
          linkVista: "https://archive.org/embed/manualzilla-id-6854751",
        },
        {
          titulo: "Lengua y comunicación 2",
          portada: "/Modalidad1.jpg",
          linkDescarga: "/Modalidad1.jpg",
          linkVista: "https://archive.org/embed/manualzilla-id-6854751",
        },
        {
          titulo: "Lengua y comunicación 2",
          portada: "/Modalidad1.jpg",
          linkDescarga: "/Modalidad1.jpg",
          linkVista: "https://archive.org/embed/manualzilla-id-6854751",
        },
        {
          titulo: "Lengua y comunicación 2",
          portada: "/Modalidad1.jpg",
          linkDescarga: "/Modalidad1.jpg",
          linkVista: "https://archive.org/embed/manualzilla-id-6854751",
        },
      ],
    },
    {
      title: "Profesor",
      map: "Materiales para profesores",
      items: [
        {
          titulo: "Lengua y comunicación 1",
          portada: "/Modalidad1.jpg",
          linkDescarga: "/Modalidad1.jpg",
          linkVista: "https://archive.org/embed/manualzilla-id-6854751",
        },
        {
          titulo: "Lengua y comunicación 2",
          portada: "/Modalidad1.jpg",
          linkDescarga: "/Modalidad1.jpg",
          linkVista: "https://archive.org/embed/manualzilla-id-6854751",
        },
      ],
    },
  ];

  const alfabetizacionData = [
    {
      title: "Estudiante",
      map: "Materiales para estudiantes",
      items: [
        {
          titulo: "Lengua y comunicación 1",
          portada: "/Modalidad1.jpg",
          linkDescarga: "/Modalidad1.jpg",
          linkVista: "https://archive.org/embed/manualzilla-id-6854751",
        },
        {
          titulo: "Lengua y comunicación 2",
          portada: "/Modalidad1.jpg",
          linkDescarga: "/Modalidad1.jpg",
          linkVista: "https://archive.org/embed/manualzilla-id-6854751",
        },
        {
          titulo: "Lengua y comunicación 2",
          portada: "/Modalidad1.jpg",
          linkDescarga: "/Modalidad1.jpg",
          linkVista: "https://archive.org/embed/manualzilla-id-6854751",
        },
        {
          titulo: "Lengua y comunicación 2",
          portada: "/Modalidad1.jpg",
          linkDescarga: "/Modalidad1.jpg",
          linkVista: "https://archive.org/embed/manualzilla-id-6854751",
        },
      ],
    },
    {
      title: "Profesor",
      map: "Materiales para profesores",
      items: [
        {
          titulo: "Lengua y comunicación 1",
          portada: "/Modalidad1.jpg",
          linkDescarga: "/Modalidad1.jpg",
          linkVista: "https://archive.org/embed/manualzilla-id-6854751",
        },
        {
          titulo: "Lengua y comunicación 2",
          portada: "/Modalidad1.jpg",
          linkDescarga: "/Modalidad1.jpg",
          linkVista: "https://archive.org/embed/manualzilla-id-6854751",
        },
      ],
    },
  ];

  const [opcionSeleccionada, setOpcionSeleccionada] = useState("alfabetizacion");
  const [iframeVista, setIframeVista] = useState(null);

  const handleOpcionSeleccionada = (opcion) => {
    setOpcionSeleccionada(opcion);
    setIframeVista(null);
  };

  const handleVistaClick = (link) => {
    setIframeVista(link);
    const div = document.getElementById("iframe-vista");
    if (div) {
      const offset = 100;
      const top = div.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className={`${montserrat.className} text-[#333334] text-start`}>
      <PagSec Titulo={"Descarga de materiales"} mostrarCarrusel={false}>
        <div className="row-span-1">
          <div id="pestañas">
            <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 leading-7">
              {[
                { key: "alfabetizacion", label: "Alfabetización" },
                { key: "primaria", label: "Primaría" },
                { key: "secundaria", label: "Secundaría" },
              ].map(({ key, label }) => (
                <li key={key} className="p-0">
                  <a
                    className={`${montserrat.className} inline-block p-4 text-[18px] ${
                      opcionSeleccionada === key
                        ? "text-[#A57F2C] font-bold bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-[#A57F2C]"
                        : "text-[#333334] border border-gray-200 rounded-t-lg hover:text-[#611232] hover:font-bold hover:bg-slate-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                    }`}
                    onClick={() => handleOpcionSeleccionada(key)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {opcionSeleccionada === "alfabetizacion" && (
            <div className="row-span-1">
              <div className="mx-auto mb-4 w-full max-w-full ">
                <div className="pt-4 leading-7 justify-start text-[#333334] text-[18px]">
                  <strong>Aquí puedes descargar tus módulos y materiales</strong>
                  <p className="font-light">Enlaces</p>
                </div>
              </div>
              <div className="w-full flex-col">
                <BotonesMat datos={alfabetizacionData} onVistaClick={handleVistaClick} />
              </div>
            </div>
          )}

          {opcionSeleccionada === "primaria" && (
            <div className="row-span-1">
              <div className="mx-auto mb-4 w-full max-w-full ">
                <div className="pt-4 leading-7 justify-start text-[#333334] text-[18px]">
                  <strong>Aquí puedes descargar tus módulos y materiales</strong>
                  <p className="font-light">Enlaces</p>
                </div>
              </div>
              <div className="w-full flex-col">
                <BotonesMat datos={primariaData} onVistaClick={handleVistaClick} />
              </div>
            </div>
          )}

            {opcionSeleccionada === "secundaria" && (
            <div className="row-span-1">
              <div className="mx-auto mb-4 w-full max-w-full ">
                <div className="pt-4 leading-7 justify-start text-[#333334] text-[18px]">
                  <strong>Aquí puedes descargar tus módulos y materiales</strong>
                  <p className="font-light">Enlaces</p>
                </div>
              </div>
              <div className="w-full flex-col">
                <BotonesMat datos={secundariaData} onVistaClick={handleVistaClick} />
              </div>
            </div>
          )}
          {iframeVista && (
            <div id="iframe-vista" className="w-full flex justify-center mt-8">
              <div className="relative w-full max-w-[560px]">
                <button
                  onClick={() => setIframeVista(null)}
                  className="absolute -top-3 -right-3 bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-red-700"
                >
                  ✕
                </button>
                <iframe
                  src={iframeVista}
                  width="560"
                  height="384"
                  frameBorder="0"
                  allowFullScreen
                  className="rounded-lg shadow-md border w-full"
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </PagSec>
    </div>
  );
}

export default Materiales;
