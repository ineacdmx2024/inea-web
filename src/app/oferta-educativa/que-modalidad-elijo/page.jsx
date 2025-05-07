"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import CollapsiblePanel from "@/components/PanelColapsable";
import PagSec from "@/components/PlantillaPagSec";
import { motion } from "framer-motion";
import "../../../../src/app/globals.css";
function Modalidad() {
  //enlaces laterales
  const [enlacesL, setenlacesL] = useState([]);

  useEffect(() => {
    let enlaces = [];
    const fetchEnlacesL = async () => {
      const resPineados = await fetch(
       // `https://inea-web-backend.onrender.com/api/enlaces-de-interes-laterales?filters[Pinear][$eq]=true&populate=%2A`
        `https://inea-web-backend-cg20.onrender.com/api/enlaces-de-interes-laterales?filters[Pinear][$eq]=true&populate=%2A`
      );
      const { data: enlacesPineados } = await resPineados.json();
      if (enlacesPineados.length < 3) {
        const resNoPineados = await fetch(
         // `https://inea-web-backend.onrender.com/api/enlaces-de-interes-laterales?filters[Pinear][$eq]=false&populate=%2A&sort[0]=Fecha:desc`
          `https://inea-web-backend-cg20.onrender.com/api/enlaces-de-interes-laterales?filters[Pinear][$eq]=false&populate=%2A&sort[0]=Fecha:desc`
        );
        const { data: enlacesNoPineados } = await resNoPineados.json();

        const enlacesCompletados = [
          ...enlacesPineados,
          ...enlacesNoPineados.slice(0, 3 - enlacesPineados.length),
        ];
        enlaces = enlacesCompletados;
      } else {
        enlaces = enlacesPineados;
      }
      const enlacesLData = enlaces.map((item) => ({
        title: item.attributes.Titulo,
        imageSrc: item.attributes?.Imagen.data[0]?.attributes?.url,
        buttonText: "Ir al sitio",
        link: item.attributes.URL_Externo
          ? item.attributes.URL_Externo
          : `/enlaces-de-interes/${item.attributes.slug}`,
      }));
      setenlacesL(enlacesLData);
    };
    fetchEnlacesL();
  }, []);

  return (
    <div>
      <PagSec
        Enlaces={enlacesL}
        Titulo={
          "¿Qué opción del INEA me conviene para certificar mi Primaria y/o Secundaria?"
        }
      >
        {/* Contenido principal en pantallas medianas y grandes */}
        <div
          className="ml-auto content-start justify-end"
          // id="animation"
        >
          {" "}
          <div className="mx-auto w-full">
            <CollapsiblePanel
              title="¿Quieres estudiar primaria o secundaria con materiales impresos en un lugar fijo o conoces a alguien que quiera aprender a leer y escribir?"
              content={
                <div>
                  <p className="font-semibold">
                    Te conviene el Programa Regular Presencial (Modelo de
                    Educación para la Vida - MEV AprendeINEA)
                  </p>
                  <p className="mt-2">
                    <strong>Descripción: </strong> Opción educativa presencial y
                    gratuita diseñada para personas de 15 años o más con tiempo
                    para dedicar al estudio que buscan alfabetizarse u obtener
                    el certificado de Primaria o Secundaria.
                  </p>
                  <p className="mt-2">
                    <strong>Objetivo: </strong> Brindar una alternativa
                    educativa accesible y de calidad para aquellos que nunca han
                    asistido a la escuela o no han concluido sus estudios.
                  </p>
                  <p className="mt-2">
                    <strong>Modalidad de atención: </strong> Presencial (en una
                    de las 120 Plazas Comunitarias del INEA en Ciudad de
                    México).
                  </p>
                  <p className="mt-2">
                    <strong>Material de estudio: </strong> Módulos impresos.
                  </p>
                  <p className="mt-2">
                    <strong>Estructura curricular: </strong> Cinco módulos
                    básicos y uno diversificado para Primaria; siete módulos
                    básicos y dos diversificados para Secundaria. Incluye áreas
                    como lectura, escritura, matemáticas, ciencias sociales y
                    naturales.
                  </p>
                  <p className="mt-2 mb-9">
                    <strong>Tiempo estimado de conclusión: </strong> 3 a 6 meses
                    dedicando 4 horas por semana.
                  </p>
                  <div
                    id="alert-additional-content-4"
                    className="p-4 mb-4 mt-2 text-yellow-950 border border-[#A57F2C] rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800"
                    role="alert"
                  >
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-yellow-950"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 15a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 12 17Zm1-4.5a1 1 0 0 1-2 0V7a1 1 0 0 1 2 0Z" />
                      </svg>
                      <span className="sr-only">Info</span>
                      <h3 className="text-lg font-medium">
                        <strong>Requisitos:</strong>
                      </h3>
                    </div>
                    <div className="mt-2 mb-4 text-lg">
                      <ul className="list-disc ml-8">
                        <li>Tener 15 años o más</li>
                        <li>Acta de nacimiento</li>
                        <li>CURP</li>
                        <li>Certificado</li>
                        <li>Primaria (en caso de comenzar Secundaria)</li>
                        <li>
                          Documento binacional (para personas provenientes del
                          extranjero)
                        </li>
                        <li>
                          En caso de haber cursado en grados escolarizados
                          (Primaria o Secundaria) se deben presentar las boletas
                          correspondientes
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Link href="/">
                    <motion.button
                      className="mt-4 px-4 py-2 bg-[#611232] text-white rounded-lg mx-auto block border-2 hover:bg-white hover:text-[#611232] hover:border-[#611232] focus:bg-[#A57F2C]"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Regístrate
                    </motion.button>
                  </Link>
                </div>
              }
              imageSrc="/Modalidad/programa_regular2.webp"
            />
            <CollapsiblePanel
              title="¿Cuentas con antecedentes escolares y deseas realizar solo un examen por nivel? "
              content={
                <div>
                  <p className="font-semibold">
                    Te conviene el Examen de Reconocimiento de Saberes (Examen
                    Único)
                  </p>
                  <p className="mt-2">
                    <strong>Descripción: </strong> Examen único para evaluar y
                    certificar los conocimientos y habilidades adquiridos por
                    personas de 15 años o más a lo largo de su vida.
                  </p>
                  <p className="mt-2">
                    <strong>Objetivo: </strong> Ofrecer una oportunidad rápida y
                    gratuita para obtener el certificado de Primaria o
                    Secundaria sin necesidad de cursar un programa educativo
                    completo.
                  </p>
                  <p className="mt-2">
                    <strong>Modalidad de atención: </strong>Presencial (una
                    única vez para aplicación del examen). El estudio es
                    autodidacta, con opción de asesorías presenciales o en
                    línea.
                  </p>
                  <p className="mt-2">
                    <strong>Material de estudio: </strong> Guía impresa de
                    preparación para el Examen Único.
                  </p>
                  <p className="mt-2">
                    <strong>Estructura curricular: </strong> Examen con 70
                    preguntas que evalúan áreas como lectura, escritura,
                    matemáticas, ciencias sociales y naturales con diferentes
                    niveles de profundidad según el nivel educativo.
                  </p>
                  <p className="mt-2 mb-9">
                    <strong>Tiempo estimado de conclusión: </strong> Inmediato
                  </p>
                  <div
                    id="alert-additional-content-4"
                    className="p-4 mb-4 mt-2 text-yellow-950 border border-[#A57F2C] rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800"
                    role="alert"
                  >
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-yellow-950"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 15a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 12 17Zm1-4.5a1 1 0 0 1-2 0V7a1 1 0 0 1 2 0Z" />
                      </svg>
                      <span className="sr-only">Info</span>
                      <h3 className="text-lg font-medium">
                        <strong>Requisitos:</strong>
                      </h3>
                    </div>
                    <div className="mt-2 mb-4 text-lg">
                      <ul className="list-disc ml-8">
                        <li>Tener 15 años o más</li>
                        <li>Identificación oficial con fotografía</li>
                        <li>
                          Portafolio de evidencias (reconocimientos, constancias
                          y diplomas)
                        </li>
                        <li>
                          Dos fotografías tamaño infantil (color o blanco y
                          negro)
                        </li>
                        <li>
                          Certificado de Primaria (sólo para quienes harán
                          examen de secundaria)
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Link href="/">
                    <motion.button
                      className="mt-4 px-4 py-2 bg-[#611232] text-white rounded-lg mx-auto block border-2 hover:bg-white hover:text-[#611232] hover:border-[#611232] focus:bg-[#A57F2C]"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Regístrate
                    </motion.button>
                  </Link>
                </div>
              }
              imageSrc="/Modalidad/examen_unico2024.jpg"
            />
            <CollapsiblePanel
              title="¿Deseas estudiar con el uso de dispositivos móviles o computadora desde casa?  "
              content={
                <div>
                  <p className="font-semibold">
                    Te conviene estudiar en AprendeINEA en Línea{" "}
                  </p>
                  <p className="mt-2">
                    <strong>Descripción: </strong>Plataforma educativa en línea
                    diseñada para que los adultos de 15 años o más completen su
                    educación Primaria o Secundaria en línea.
                  </p>
                  <p className="mt-2">
                    <strong>Objetivo: </strong>Proporcionar una vía flexible,
                    conveniente y gratuita para obtener el certificado de
                    Primaria o Secundaria.
                  </p>
                  <p className="mt-2">
                    <strong>Modalidad de atención: </strong>En línea.
                  </p>
                  <p className="mt-2">
                    <strong>Material de estudio: </strong>Materiales digitales
                    disponibles en la plataforma en línea (es necesario contar
                    con teléfono o computadora con acceso a internet).
                  </p>
                  <p className="mt-2">
                    <strong>Estructura curricular: </strong>Un propedéutico y 5
                    módulos para Primaria y un propedéutico y 7 módulos para
                    Secundaria.
                  </p>
                  <p className="mt-2 mb-9">
                    <strong>Tiempo estimado de conclusión: </strong> 2 a 3
                    semanas por módulo.
                  </p>
                  <div
                    id="alert-additional-content-4"
                    className="p-4 mb-4 mt-2 text-yellow-950 border border-[#A57F2C] rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800"
                    role="alert"
                  >
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-yellow-950"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 15a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 12 17Zm1-4.5a1 1 0 0 1-2 0V7a1 1 0 0 1 2 0Z" />
                      </svg>
                      <span className="sr-only">Info</span>
                      <h3 className="text-lg font-medium">
                        <strong>Requisitos:</strong>
                      </h3>
                    </div>
                    <div className="mt-2 mb-4 text-lg">
                      <ul className="list-disc ml-8">
                        <li>Tener 15 años o más</li>
                        <li>Acta de nacimiento</li>
                        <li>CURP</li>
                        <li>Certificado</li>
                        <li>Primaria (en caso de comenzar Secundaria)</li>
                        <li>
                          Documento binacional (para personas provenientes del
                          extranjero)
                        </li>
                        <li>
                          En caso de haber cursado en grados escolarizados
                          (Primaria o Secundaria) se deben presentar las boletas
                          correspondientes
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Link href="/">
                    <motion.button
                      className="mt-4 px-4 py-2 bg-[#611232] text-white rounded-lg mx-auto block border-2 hover:bg-white hover:text-[#611232] hover:border-[#611232] focus:bg-[#A57F2C]"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Regístrate
                    </motion.button>
                  </Link>
                </div>
              }
              imageSrc="/Modalidad/aprendeINEAenlinea2.webp"
            />

            <CollapsiblePanel
              title="¿Tienes antecedentes escolares que deseas sean considerados al realizar solo exámenes para concluir tus estudios? "
              content={
                <div>
                  <p className="font-semibold">
                    Te convienen los Exámenes Diagnóstico{" "}
                  </p>
                  <p className="mt-2">
                    <strong>Descripción: </strong>Modalidad para evaluar y certificar conocimientos de personas de 15 años o más, permitiendo acreditar Primaria o Secundaria a través de dos exámenes por nivel, reconociendo progresivamente lo aprendido.
                  </p>
                  <p className="mt-2">
                    <strong>Objetivo: </strong>Certificar conocimientos adquiridos y, si es necesario, ofrecer retroalimentación y orientación en los módulos de estudio requeridos en los que se divide cada examen para obtener el certificado de Primario y/o Secundaria.
                  </p>
                  <p className="mt-2">
                    <strong>Modalidad de atención: </strong>Sesiones de estudio presencial y asesoría a distancia opcional.
                  </p>
                  <p className="mt-2">
                    <strong>Material de estudio: </strong>Guías de Aprendizaje impresas o digitales, organizadas en unidades de aprendizaje.
                  </p>
                  <p className="mt-2">
                    <strong>Estructura curricular: </strong>Dos unidades de aprendizaje por nivel que abarcan lengua y comunicación, pensamiento matemático, y vida y comunidad.
                  </p>
                  <p className="mt-2 mb-9">
                    <strong>Tiempo estimado de conclusión: </strong>2 a 3 meses dedicando 2 horas por semana.
                  </p>
                  <div
                    id="alert-additional-content-4"
                    className="p-4 mb-4 mt-2 text-yellow-950 border border-[#A57F2C] rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800"
                    role="alert"
                  >
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-yellow-950"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 15a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 12 17Zm1-4.5a1 1 0 0 1-2 0V7a1 1 0 0 1 2 0Z" />
                      </svg>
                      <span className="sr-only">Info</span>
                      <h3 className="text-lg font-medium">
                        <strong>Requisitos:</strong>
                      </h3>
                    </div>
                    <div className="mt-2 mb-4 text-lg">
                      <ul className="list-disc ml-8">
                        <li>Tener 15 años o más</li>
                        <li>Acta de nacimiento</li>
                        <li>CURP</li>
                        <li>Certificado</li>
                        <li>Primaria (en caso de comenzar Secundaria)</li>
                        <li>
                          Documento binacional (para personas provenientes del
                          extranjero)
                        </li>
                        <li>
                          En caso de haber cursado en grados escolarizados
                          (Primaria o Secundaria) se deben presentar las boletas
                          correspondientes
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Link href="/">
                    <motion.button
                      className="mt-4 px-4 py-2 bg-[#611232] text-white rounded-lg mx-auto block border-2 hover:bg-white hover:text-[#611232] hover:border-[#611232] focus:bg-[#A57F2C]"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Regístrate
                    </motion.button>
                  </Link>
                </div>
              }
              imageSrc="/Modalidad/examenes_diagnostico.jpg"
            />
          </div>
          <div className="mt-8 text-center">
            {/* Descripción del botón */}
            {/* Botón */}
            <button
              className="bg-[#611232] text-white text-xs letras:text-[16.5px] py-2 px-4 rounded-full hover:bg-white hover:text-[#611232] border-2 border-[#611232] font-light"
              onClick={() =>
                (window.location.href = "https://inea-web-frontend.vercel.app/servicios/te-contactamos")
              }
            >
              Quiero que me contacten
            </button>
          </div>
        </div>
      </PagSec>
    </div>
  );
}

export default Modalidad;
