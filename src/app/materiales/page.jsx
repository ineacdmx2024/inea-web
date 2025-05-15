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
      title: "Educando",
      map: "Materiales para estudiantes",
      items: [
        {
          titulo: "Lengua y comunicación 1",
          portada: "https://res.cloudinary.com/dce9xqd1e/image/upload/f_auto,q_auto/Portada_Primaria_Lengua_y_comunicacion_1_nqahvr",
          linkDescarga: "https://res.cloudinary.com/dce9xqd1e/image/upload/f_auto,q_auto/Portada_Primaria_Lengua_y_comunicacion_1_nqahvr",
          linkVista: "https://archive.org/embed/manualzilla-id-6854751",
        },
        {
          titulo: "Lengua y comunicación 2",
          portada: "https://res.cloudinary.com/dce9xqd1e/image/upload/f_auto,q_auto/Portada_Primaria_Lengua_y_comunicacion_2_i4pkyt",
          linkDescarga: "/Modalidad1.jpg",
          linkVista: "https://archive.org/embed/manualsonline-id-c0afeec3-9b65-4bfb-99ee-60580a7e2aa3",
        },
        {
          titulo: "Pensamiento matemático 1",
          portada: "https://res.cloudinary.com/dce9xqd1e/image/upload/f_auto,q_auto/Portada_Primaria_Pensamiento_matematico_1_mb1p9m",
          linkDescarga: "/Modalidad1.jpg",
          linkVista: "https://archive.org/embed/manualzilla-id-6854751",
        },
        {
          titulo: "Pensamiento matemático 2",
          portada: "https://res.cloudinary.com/dce9xqd1e/image/upload/f_auto,q_auto/Portada_Primaria_Pensamiento_matematico_2_mhxqno",
          linkDescarga: "/Modalidad1.jpg",
          linkVista: "https://archive.org/embed/manualzilla-id-6854751",
        },
        {
          titulo: "Vida y comunidad 1",
          portada: "https://res.cloudinary.com/dce9xqd1e/image/upload/f_auto,q_auto/Portada_Primaria_Vida_y_comunidad_1_qv4h72",
          linkDescarga: "/Modalidad1.jpg",
          linkVista: "https://archive.org/embed/manualzilla-id-6854751",
        },
      ],
    },
    {
      title: "Educador",
      map: "Materiales para profesores",
      items: [
        {
          titulo: "Lengua y comunicación 1",
          portada: "/Modalidad1.jpg",
          linkDescarga: "/Modalidad1.jpg",
          linkVista: "https://archive.org/embed/manualzilla-id-6854751",
        },
      ],
    },
  ];

  const secundariaData = [
    {
      title: "Educando",
      map: "Materiales para estudiantes",
      items: [
        {
          titulo: "Lengua y comunicación 3",
          portada: "https://res.cloudinary.com/dce9xqd1e/image/upload/f_auto,q_auto/Portada_Secundaria_Lengua_y_comunicacion_3_vi632d",
          linkDescarga: "/Modalidad1.jpg",
          linkVista: "https://archive.org/embed/manualzilla-id-6854751",
        },
        {
          titulo: "Lengua y comunicación 4",
          portada: "https://res.cloudinary.com/dce9xqd1e/image/upload/f_auto,q_auto/Portada_Secundaria_Lengua_y_comunicacion_4_ybeus8",
          linkDescarga: "/Modalidad1.jpg",
          linkVista: "https://archive.org/embed/manualzilla-id-6854751",
        },
        {
          titulo: "Pensamiento matemático 3",
          portada: "https://res.cloudinary.com/dce9xqd1e/image/upload/f_auto,q_auto/Portada_Secundaria_Pensamiento_matematico_3_vojt00",
          linkDescarga: "/Modalidad1.jpg",
          linkVista: "https://archive.org/embed/manualzilla-id-6854751",
        },
        {
          titulo: "Pensamiento matemático 4",
          portada: "https://res.cloudinary.com/dce9xqd1e/image/upload/f_auto,q_auto/Portada_Secundaria_Pensamiento_matematico_4_r5s3sv",
          linkDescarga: "/Modalidad1.jpg",
          linkVista: "https://archive.org/embed/manualzilla-id-6854751",
        },
        {
          titulo: "Pensamiento matemático 5",
          portada: "https://res.cloudinary.com/dce9xqd1e/image/upload/f_auto,q_auto/Portada_Secundaria_Pensamiento_matematico_5_eu6b9q",
          linkDescarga: "/Modalidad1.jpg",
          linkVista: "https://archive.org/embed/manualzilla-id-6854751",
        },
        {
          titulo: "Vida y comunidad 2",
          portada: "https://res.cloudinary.com/dce9xqd1e/image/upload/f_auto,q_auto/Portada_secundaria_Vida_y_comunidad_2_vkjt86",
          linkDescarga: "/Modalidad1.jpg",
          linkVista: "https://archive.org/embed/manualzilla-id-6854751",
        },
        {
          titulo: "Vida y comunidad 3",
          portada: "https://res.cloudinary.com/dce9xqd1e/image/upload/f_auto,q_auto/Portada_secundaria_Vida_y_comunidad_3_ntplbf",
          linkDescarga: "/Modalidad1.jpg",
          linkVista: "https://archive.org/embed/manualzilla-id-6854751",
        },
      ],
    },
    {
      title: "Educador",
      map: "Materiales para profesores",
      items: [
        {
          titulo: "Lengua y comunicación 3",
          portada: "https://res.cloudinary.com/dce9xqd1e/image/upload/f_auto,q_auto/Portada_Secundaria_Lengua_y_comunicacion_3_vi632d",
          linkDescarga: "/Modalidad1.jpg",
          linkVista: "https://archive.org/embed/manualzilla-id-6854751",
        },
        {
          titulo: "Lengua y comunicación 4",
          portada: "https://res.cloudinary.com/dce9xqd1e/image/upload/f_auto,q_auto/Portada_Secundaria_Lengua_y_comunicacion_4_ybeus8",
          linkDescarga: "/Modalidad1.jpg",
          linkVista: "https://archive.org/embed/manualzilla-id-6854751",
        },
      ],
    },
  ];

  const alfabetizacionData = [
    {
      title: "Educando",
      map: "Materiales para estudiantes",
      items: [
        {
          titulo: "Cuaderno de Alfabetización",
          portada: "https://res.cloudinary.com/dce9xqd1e/image/upload/f_auto,q_auto/Portada_NyCM_Cuaderno_de_alfabetizacion_xfbhr4",
          linkDescarga: "/Modalidad1.jpg",
          linkVista: "https://archive.org/embed/manualzilla-id-6854751",
        },
        {
          titulo: "Libro de Alfabetización",
          portada: "https://res.cloudinary.com/dce9xqd1e/image/upload/f_auto,q_auto/Portada_NyCM_Libro_cde_alfabetizacion_s1bkfb",
          linkDescarga: "/Modalidad1.jpg",
          linkVista: "https://archive.org/embed/manualzilla-id-6854751",
        },
        {
          titulo: "Revisemos lo aprendido",
          portada: "https://res.cloudinary.com/dce9xqd1e/image/upload/f_auto,q_auto/Portada_Revisemos_lo_aprendido_Cuadernillo_para_el_educando_axevdc",
          linkDescarga: "/Modalidad1.jpg",
          linkVista: "https://archive.org/embed/manualzilla-id-6854751",
        },
      ],
    },
    {
      title: "Alfabetizador",
      map: "Materiales para profesores",
      items: [
        {
          titulo: "Libro para persona alfabetizadora",
          portada: "https://res.cloudinary.com/dce9xqd1e/image/upload/f_auto,q_auto/Portada_NyCM_Libro_de_persona_alfabetizadora_qwx32q",
          linkDescarga: "/Modalidad1.jpg",
          linkVista: "https://archive.org/embed/manualzilla-id-6854751",
        },
        {
          titulo: "Guía de aplicación",
          portada: "https://res.cloudinary.com/dce9xqd1e/image/upload/f_auto,q_auto/Portada_Gu%C3%ADa_de_aplicaci%C3%B3n_Para_el_alfabetizador_beixhe",
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
