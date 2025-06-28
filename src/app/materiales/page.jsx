"use client";
import React, { useState, useEffect } from "react";
import PagSec from "@/components/PlantillaPagMat";
import BotonesMat from "@/components/BotonesMat";
import "../../app/globals.css";

import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  styles: ["italic", "normal", "bold", "bold italic", "italic bold"],
  subsets: ["latin"],
});

function Materiales() {
  const primariaData = [
    {
      title: "Módulos",
      map: "Módulos para el Estudiante",
      items: [
        {
          titulo: "",
          portada:
            "https://res.cloudinary.com/dce9xqd1e/image/upload/v1751077181/Portada_Primaria_Lengua_y_comunicacion_1_ndijvi.webp",
          linkDescarga: "https://archive.org/download/lyc-1/LYC1.pdf",
          linkVista: "https://archive.org/embed/lyc-1",
        },
        {
          titulo: "",
          portada:
            "https://res.cloudinary.com/dce9xqd1e/image/upload/v1751077183/Portada_Primaria_Lengua_y_comunicacion_2_qkof8p.webp",
          linkDescarga: "https://archive.org/download/lyc-2/LYC2.pdf",
          linkVista: "https://archive.org/embed/lyc-2",
        },
        {
          titulo: "",
          portada:
            "https://res.cloudinary.com/dce9xqd1e/image/upload/v1751077183/Portada_Primaria_Pensamiento_matematico_1_kg2afx.webp",
          linkDescarga: "https://archive.org/download/pm-1_20250421/PM1.pdf",
          linkVista: "https://archive.org/embed/pm-1_20250421",
        },
        {
          titulo: "",
          portada:
            "https://res.cloudinary.com/dce9xqd1e/image/upload/v1751077184/Portada_Primaria_Pensamiento_matematico_2_clr6je.webp",
          linkDescarga: "https://archive.org/download/pm-2_20250423/PM2.pdf",
          linkVista: "https://archive.org/embed/pm-2_20250423",
        },
        {
          titulo: "",
          portada:
            "https://res.cloudinary.com/dce9xqd1e/image/upload/v1751077187/Portada_Primaria_Vida_y_comunidad_1_ohu7fw.webp",
          linkDescarga: "https://archive.org/download/vyc-1/VYC1.pdf",
          linkVista: "https://archive.org/embed/vyc-1",
        },
      ],
    },
      { 
      title: "Guías",
      map: "Guía para certificar por exámenes",
      items: [
        {
          titulo: "",
          portada:
            "https://res.cloudinary.com/dce9xqd1e/image/upload/v1751077179/Portadas_Gu%C3%ADa_de_estudio_para_certificar_primaria_km8wx6.webp",
          linkDescarga:
            "https://archive.org/download/guia-certificar-primaria-completa/Gu%C3%ADa%20Certificar%20primaria%20completa.pdf",
          linkVista:
            "https://archive.org/embed/guia-certificar-primaria-completa",
        },
      ],
    },
    {
      title: "Materiales Estatales",
      map: "Ir a sitio externo",
      items: [
        {
          linkDescarga: "https://recursos-educativos-inea-cdmx.my.canva.site/dagi2tryx-u",
        },
      ],
    },
  ];

  const secundariaData = [
    {
      title: "Módulos",
      map: "Módulos para el Estudiante",
      items: [
        {
          titulo: "",
          portada:
            "https://res.cloudinary.com/dce9xqd1e/image/upload/v1751077188/Portada_Secundaria_Lengua_y_comunicacion_3_zbowpy.webp",
          linkDescarga: "https://archive.org/download/lyc-3/LYC3.pdf",
          linkVista: "https://archive.org/embed/lyc-3",
        },
        {
          titulo: "",
          portada:
            "https://res.cloudinary.com/dce9xqd1e/image/upload/v1751077190/Portada_Secundaria_Lengua_y_comunicacion_4_szaoix.webp",
          linkDescarga: "https://archive.org/download/lyc-4/LYC4.pdf",
          linkVista: "https://archive.org/embed/lyc-4",
        },
        {
          titulo: "",
          portada:
            "https://res.cloudinary.com/dce9xqd1e/image/upload/v1751077191/Portada_Secundaria_Pensamiento_matematico_3_ihfssk.webp",
          linkDescarga: "https://archive.org/download/pm-3_20250503/PM3.pdf",
          linkVista: "https://archive.org/embed/pm-3_20250503",
        },
        {
          titulo: "",
          portada:
            "https://res.cloudinary.com/dce9xqd1e/image/upload/v1751077191/Portada_Secundaria_Pensamiento_matematico_4_k0xxit.webp",
          linkDescarga: "https://archive.org/download/pm-4_20250503/PM4.pdf",
          linkVista: "https://archive.org/embed/pm-4_20250503",
        },
        {
          titulo: "",
          portada:
            "https://res.cloudinary.com/dce9xqd1e/image/upload/v1751077194/Portada_Secundaria_Pensamiento_matematico_5_ojmenh.webp",
          linkDescarga: "https://archive.org/download/pm-5_20250503/PM5.pdf",
          linkVista: "https://archive.org/embed/pm-5_20250503",
        },
        {
          titulo: "",
          portada:
            "https://res.cloudinary.com/dce9xqd1e/image/upload/v1751077195/Portada_secundaria_Vida_y_comunidad_2_bgttcj.webp",
          linkDescarga: "https://archive.org/download/vyc-2/VYC2.pdf",
          linkVista: "https://archive.org/embed/vyc-2",
        },
        {
          titulo: "",
          portada:
            "https://res.cloudinary.com/dce9xqd1e/image/upload/v1751077196/Portada_secundaria_Vida_y_comunidad_3_dhnyba.webp",
          linkDescarga: "https://archive.org/download/vyc-3/VYC3.pdf",
          linkVista: "https://archive.org/embed/vyc-3",
        },
      ],
    },
      { 
      title: "Guías",
      map: "Guía para certificar por exámenes",
      items: [
        {
          titulo: "",
          portada:
            "https://res.cloudinary.com/dce9xqd1e/image/upload/v1751077180/Portadas_Gu%C3%ADa_de_estudio_para_certificar_secundaria_okoqn4.webp",
          linkDescarga:
            "https://archive.org/download/guia-certificar-secundaria-completa/Gu%C3%ADa%20certificar%20secundaria%20completa.pdf",
          linkVista:
            "https://archive.org/embed/guia-certificar-secundaria-completa",
        },
      ],
    },
    {
      title: "Materiales Estatales",
      map: "Ir a sitio externo",
      items: [
        {
          linkDescarga: "https://recursos-educativos-inea-cdmx.my.canva.site/dagi2tryx-u",
        },
      ],
    },
  ];

  const alfabetizacionData = [
    {
      title: "Estudiante",
      map: "Materiales para el Estudiante",
      items: [
        {
          titulo: "",
          portada:
            "https://res.cloudinary.com/dce9xqd1e/image/upload/v1751077171/Portada_NyCM_Cuaderno_de_alfabetizacion_euq6sa.webp",
          linkDescarga:
            "https://archive.org/download/2-cuaderno-alfabetizacion-ny-cm-educando/2%20Cuaderno%20Alfabetizaci%C3%B3n%20NyCM_educando.pdf",
          linkVista:
            "https://archive.org/embed/2-cuaderno-alfabetizacion-ny-cm-educando",
        },
        {
          titulo: "",
          portada:
            "https://res.cloudinary.com/dce9xqd1e/image/upload/v1751077171/Portada_NyCM_Libro_cde_alfabetizacion_skywhs.webp",
          linkDescarga:
            "https://archive.org/download/libro-de-alfabetizacion-ny-cm-educando/Libro%20de%20Alfabetizaci%C3%B3n%20NyCM_Educando.pdf",
          linkVista:
            "https://archive.org/embed/libro-de-alfabetizacion-ny-cm-educando",
        },
        {
          titulo: "",
          portada:
            "https://res.cloudinary.com/dce9xqd1e/image/upload/v1751077177/Portada_Revisemos_lo_aprendido_Cuadernillo_para_el_educando_iaqgth.webp",
          linkDescarga:
            "https://archive.org/download/revisemos-lo-aprendido-cuadernillo-para-el-educando/Revisemos%20lo%20aprendido-%20Cuadernillo%20para%20el%20educando.pdf",
          linkVista:
            "https://archive.org/embed/revisemos-lo-aprendido-cuadernillo-para-el-educando",
        },
      ],
    },
    {
      title: "Alfabetizador",
      map: "Materiales para el Alfabetizador",
      items: [
        {
          titulo: "",
          portada:
            "https://res.cloudinary.com/dce9xqd1e/image/upload/v1751077175/Portada_NyCM_Libro_de_persona_alfabetizadora_l6cnns.webp",
          linkDescarga:
            "https://archive.org/download/ny-cm-alfabetizador/NyCM-Alfabetizador.pdf",
          linkVista: "https://archive.org/embed/ny-cm-alfabetizador",
        },
        {
          titulo: "",
          portada:
            "https://res.cloudinary.com/dce9xqd1e/image/upload/v1751077170/Portada_Gu%C3%ADa_de_aplicaci%C3%B3n_Para_el_alfabetizador_ika3xr.webp",
          linkDescarga:
            "https://archive.org/download/guia-de-aplicacion-para-el-alfabetizador/Gu%C3%ADa%20de%20aplicaci%C3%B3n%20-Para%20el%20alfabetizador.pdf",
          linkVista:
            "https://archive.org/embed/guia-de-aplicacion-para-el-alfabetizador",
        },
      ],
    },
    {
      title: "Materiales Estatales",
      map: "Ir a sitio externo",
      items: [
        {
          linkDescarga: "https://recursos-educativos-inea-cdmx.my.canva.site/dagi2tryx-u",
        },
      ],
    },
  ];

  const [opcionSeleccionada, setOpcionSeleccionada] =
    useState("alfabetizacion");
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
    <div
      className={`${notoSans.className} text-[#333334] text-start mt-[-32px] ml-[-16px`}
    >
      <PagSec Titulo={"Descarga de materiales"} mostrarCarrusel={false}>
        <div className="w-full">
          <div className="row-span-1">
            <div id="pestañas">
              <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 leading-7">
                {[
                  { key: "alfabetizacion", label: "Alfabetización" },
                  { key: "primaria", label: "Primaria" },
                  { key: "secundaria", label: "Secundaria" },
                ].map(({ key, label }) => (
                  <li key={key} className="p-0">
                    <a
                      className={`${
                        notoSans.className
                      } inline-block p-4 text-[18px] ${
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
                    <strong>
                      Aquí puedes descargar módulos y materiales para la alfabetización
                    </strong>
                    <p className="pt-4 leading-7 justify-start text-[#333334] text-[18px] text-justify">
                      Esta sección ofrece materiales gratuitos en PDF para
                      fortalecer el proceso de alfabetización: para estudiantes,
                      el libro {" "}<i>{" "}Nombrando y Contando al mundo{" "}</i>{" "}
                      (lectoescritura y matemáticas aplicadas) y el
                      {" "}<i>{" "}Cuadernillo del educando{" "}</i>{" "} 
                      (práctica gradual); para alfabetizadores, el {" "}<i>
                        {" "}Libro de la persona alfabetizadora{" "}</i>{" "} (metodologías pedagógicas) y la
                      {" "}<i>{" "}Guia de aplicación{" "}</i>{" "}.
                    </p>
                  </div>
                </div>
                <div className="w-full flex-col mb-4">
                  <BotonesMat
                    datos={alfabetizacionData}
                    onVistaClick={handleVistaClick}
                  />
                </div>
              </div>
            )}

            {opcionSeleccionada === "primaria" && (
              <div className="row-span-1">
                <div className="mx-auto mb-4 w-full max-w-full ">
                  <div className="pt-4 leading-7 justify-start text-[#333334] text-[18px]">
                    <strong>
                      Aquí puedes descargar módulos y materiales para la alfabetización
                    </strong>
                    <p className="pt-4 leading-7 justify-start text-[#333334] text-[18px] text-justify">
                      Los materiales gratuitos en formato PDF descargables
                      incluyen cinco módulos para primaria: {" "}<i>{" "}
                        Lengua y comunicación{" "}</i>{" "} 1 y 2, que se centran en la expresión oral y
                      escrita, el análisis textual y la diversidad lingüística;
                      {" "}<i>{" "}Pensamiento matemático{" "}</i>{" "} 1 y 2, que cubren 
                      operaciones básicas, geometría, estadística y la resolución de
                      problemas cotidianos; y {" "}<i>{" "}Vida y comunidad{" "}</i>{" "} 
                      1, que combina ciencias sociales y naturales. También podrás descargar la{" "}
                      <i className="fst-italic">
                        {" "}
                        Guía de estudio para certificar primaria{" "}
                      </i>{" "}
                      mediante exámenes que evalúan conocimientos previos. Así
                      como otros materiales.
                    </p>
                  </div>
                </div>
                <div className="">
                  <BotonesMat
                    datos={primariaData}
                    onVistaClick={handleVistaClick}
                  />
                </div>
              </div>
            )}

            {opcionSeleccionada === "secundaria" && (
              <div className="row-span-1">
                <div className="mx-auto mb-4 w-full max-w-full ">
                  <div className="pt-4 leading-7 justify-start text-[#333334] text-[18px]">
                    <strong>
                      Aquí puedes descargar módulos y materiales para la alfabetización
                    </strong>
                    <p className="pt-4 leading-7 justify-start text-[#333334] text-[18px] text-justify">
                      Los materiales gratuitos en PDF para secundaria incluyen:
                      {" "}<i>{" "}Lengua y comunicación{" "}</i>{" "} 
                      3 y 4 (análisis de textos, diversidad lingüística y convivencia); {" "}
                      <i>{" "}Pensamiento matemático{" "}</i>{" "} 3, 4 y 5 
                      (números reales, álgebra, estadística y probabilidad aplicada); 
                      y {" "}<i>{" "}Vida y comunidad{" "}</i>{" "} 2 y 3
                      (diversidad biocultural, historia comunitaria y sociedades
                      democráticas). Todos vinculan habilidades comunicativas,
                      matemáticas y valores socioambientales. También podrás descargar la{" "}
                      <i> Guía de estudio para certificar secundaria </i>{" "}
                      mediante exámenes que evalúan conocimientos previos. Así
                      como otros materiales.
                    </p>
                  </div>
                </div>
                <div className="w-full flex-col">
                  <BotonesMat
                    datos={secundariaData}
                    onVistaClick={handleVistaClick}
                  />
                </div>
              </div>
            )}
            {iframeVista && (
              <div
                id="iframe-vista"
                className="w-full flex justify-center mt-8"
              >
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
        </div>
      </PagSec>
    </div>
  );
}

export default Materiales;
