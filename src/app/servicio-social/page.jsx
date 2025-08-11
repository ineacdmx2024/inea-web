"use client";
import React, { useState, useEffect } from "react";
import PagSec from "@/components/PlantillaPagSec";
import { Noto_Sans } from "next/font/google";
import Image from "next/image";
import Link from 'next/link'
import RequisitosLiberacion from "@/components/RequisitosLiberacion";
import "./serviciosocial.css";

const notoSans = Noto_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  styles: ["italic", "normal", "bold", "bold italic", "italic bold"],
  subsets: ["latin"],
});

function ServicioSocial() {
  const [enlacesL, setEnlacesL] = useState([]);
  const [imagenFicha, setImagenFicha] = useState("");

  useEffect(() => {
    const fetchEnlacesL = async () => {
      const resPineados = await fetch(
        `https://inea-web-backend-cg20.onrender.com/api/enlaces-de-interes-laterales?filters[Pinear][$eq]=true&populate=%2A`
      );
      const { data: enlacesPineados } = await resPineados.json();

      let enlaces = enlacesPineados;

      if (enlacesPineados.length < 3) {
        const resNoPineados = await fetch(
          `https://inea-web-backend-cg20.onrender.com/api/enlaces-de-interes-laterales?filters[Pinear][$eq]=false&populate=%2A&sort[0]=Fecha:desc`
        );
        const { data: enlacesNoPineados } = await resNoPineados.json();

        enlaces = [
          ...enlacesPineados,
          ...enlacesNoPineados.slice(0, 3 - enlacesPineados.length),
        ];
      }

      const enlacesLData = enlaces.map((item) => ({
        title: item.attributes.Titulo,
        imageSrc: item.attributes?.Imagen.data[0]?.attributes?.url,
        buttonText: "Ir al sitio",
        link: item.attributes.URL_Externo
          ? item.attributes.URL_Externo
          : `/enlaces-de-interes/${item.attributes.slug}`,
      }));
      setEnlacesL(enlacesLData);

      const fichaServicioSocial = enlaces.find((e) =>
        e.attributes?.Titulo?.toLowerCase().includes("servicio social")
      );
      if (fichaServicioSocial) {
        setImagenFicha(
          fichaServicioSocial.attributes?.Imagen?.data[0]?.attributes?.url || ""
        );
      }
    };

    fetchEnlacesL();
  }, []);

  return (
    <div>
      <PagSec Enlaces={enlacesL} Titulo="Realiza tu servicio social en el INEA Ciudad de México">
        <div
          // className={`${notoSans.className} content text-start max-w-[1200px]`}
          className={`${notoSans.className} pt-[25px] text-lg text-[#333334] leading-[1.7] text-start max-w-[1200px]`}
        >
          {/* Imagen */}
          {imagenFicha && (
            <div className="m-auto -my-7 rounded-lg overflow-hidden max-h-[550px] flex items-center justify-center">
              <Image
                src={imagenFicha}
                alt="Ficha Servicio Social"
                className="w-full h-auto object-contain"
                width={1000}
                height={700}
              />
            </div>
          )}

          {/* Vacantes */}
          <div className="mb-4">
            {/* <h2 className="patria title-sep mt-12">Vacantes</h2> */}
            <h2 className="patria text-2xl font-bold mb-[15px] mt-12">Vacantes</h2>
            <div className="flex items-center">
              <div className="w-9 h-[5px] bg-[#b38e61] mt-1"></div>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              {/* <h3 className="subtitle-sep">Asesor educativo</h3> */}
              <h3 className="font-bold text-xl">Asesor educativo</h3>
              <p>
                Brindando atención directa a jóvenes y adultos que desean concluir su educación basica.
              </p><br />
              {/* <ul className="ul-sep"> */}
              <ul className="list-disc ml-[25px]">
                <li className="mb-5 break-words">Brindar asesorias a jóvenes y adultos en primaria o secundaria</li>
                <li className="mb-5 break-words">Apoyar avance académico y registro en sistema.</li>
                <li className="mb-5 break-words">Elaborar reportes mensuales y evidencias de atención.</li>
              </ul>
            </div>

            <div>
              {/* <h3 className="subtitle-sep">Apoyo administrativo</h3> */}
              <h3 className="font-bold text-xl">Apoyo administrativo</h3>
              <p>
                Colaborando en tareas organizativas y de gestión interna.
              </p><br />
              {/* <ul className="ul-sep"> */}
              <ul className="list-disc ml-[25px]">
                <li className="mb-5 break-words">Apoyar en tareas de organización y control de documentos.</li>
                <li className="mb-5 break-words">Registrar datos y actividades.</li>
                <li className="mb-5 break-words">Asistir en procesos internos del INEA.</li>
              </ul>
            </div>
          </div>
          <br />
          <p>
            En estas modalidades de apoyo, aplicaras los conocimientos adquiridos en el aula,
            completando tu formacion academica, mientras obtienes nuevos conocimientos, habilidades
            y herramientas para tu desempeño profesional.
          </p>

          {/* Requisitos */}
          <div className="mb-4">
            {/* <h2 className="patria title-sep mt-12">Requisitos y liberación</h2> */}
            <h2 className="patria text-2xl font-bold mb-[15px] mt-12">Requisitos y liberación</h2>
            <div className="flex items-center">
              <div className="w-9 h-[5px] bg-[#b38e61] mt-1"></div>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>
          </div>
          <div className="space-y-6 mt-6">
            <RequisitosLiberacion />
          </div>

          {/* Sedes */}
          <div className="mb-4">
            {/* <h2 className="patria title-sep mt-12">Sedes en CDMX</h2> */}
            <h2 className="patria text-2xl font-bold mb-[15px] mt-12">Sedes en CDMX</h2>
            <div className="flex items-center">
              <div className="w-9 h-[5px] bg-[#b38e61] mt-1"></div>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>
          </div>
          <p>
            Puedes realizar tu servicio social en cualquiera de nuestras sedes en la Ciudad de México, 
            eligiendo la más cercana a tu escuela o domicilio.
          </p> <br />
          <p><Link href="/ubicacion" 
            // className="link-hover"
            className="text-[#333334] cursor-pointer transition-colors duration-200 ease-in-out no-underline hover:underline hover:text-[#D3C09B]"
            >
            Consulta aqui las sedes disponibles
            donde puedes realizarlo</Link>
          </p><br />
          <div className="space-y-6">
          {/* Ubicación */}
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-[64px] h-[64px] bg-[#611232] rounded-lg">
              <svg className="w-[59px] h-[48px] text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
              </svg>
            </div>
            <p className="text-[#333334]">Si decides apoyar como asesor educativo, realizarías tus actividades en un grupo de estudio.</p>
          </div>

          {/* Checklist */}
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-[64px] h-[64px] bg-[#611232] rounded-lg">
              <svg className="w-[59px] h-[48px] text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM12 3c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-1 14H7v-2h4v2zm6-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
            </div>
            <p className="text-[#333334]">Como apoyo administrativo, realizarías tus actividades en alguna de nuestras oficinas distribuidas en toda la ciudad.</p>
          </div>

          {/* Casa WiFi */}
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-[64px] h-[64px] bg-[#611232] rounded-lg">
              <svg className="w-[59px] h-[48px] text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm0 5a5 5 0 0 1 5 5h-2a3 3 0 0 0-6 0H7a5 5 0 0 1 5-5zm0 3a2 2 0 0 1 2 2h-4a2 2 0 0 1 2-2z"/>
              </svg>
            </div>
            <p className="text-[#333334]">Contamos con un proyecto de modalidad mixta, presencial y a distancia, enfocada en la educación en línea. Pregunta por vacantes.</p>
          </div>
        </div>

          
          {/* CONTACTO */}
          <div className="mb-4">
            {/* <h2 className="patria title-sep mt-12">Contáctanos</h2> */}
            <h2 className="patria text-2xl font-bold mb-[15px] mt-12">Contáctanos</h2>
            <div className="flex items-center">
              <div className="w-9 h-[5px] bg-[#b38e61] mt-1"></div>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>
          </div>

          {/* Dirección */}
          {/* <div className="data-container mb-2"> */}
          <div className="flex flex-row items-start gap-[10px] mb-2">
            <svg
              // className="icon"
              className="flex-shrink-0 w-5 h-5 object-contain"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 20"
              fill="none"
            >
              <path
                d="M7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 9.5 7C9.5 7.3283 9.43534 7.65339 9.3097 7.95671C9.18406 8.26002 8.99991 8.53562 8.76777 8.76777C8.53562 8.99991 8.26002 9.18406 7.95671 9.3097C7.65339 9.43534 7.3283 9.5 7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5ZM7 0C8.85652 0 10.637 0.737498 11.9497 2.05025C13.2625 3.36301 14 5.14348 14 7C14 12.25 7 20 7 20C7 20 0 12.25 0 7C0 5.14348 0.737498 3.36301 2.05025 2.05025C3.36301 0.737498 5.14348 0 7 0ZM7 2C5.67392 2 4.40215 2.52678 3.46447 3.46447C2.52678 4.40215 2 5.67392 2 7C2 8 2 10 7 16.71C12 10 12 8 12 7C12 5.67392 11.4732 4.40215 10.5355 3.46447C9.59785 2.52678 8.32608 2 7 2Z"
                fill="#611232"
              />
            </svg>
            <a
              href="https://maps.app.goo.gl/6iEqnNmKDSi33vSa6"
              target="_blank"
              rel="noopener noreferrer"
              // className="link-hover"
              className="text-[#333334] cursor-pointer transition-colors duration-200 ease-in-out no-underline hover:underline hover:text-[#D3C09B]"
            >
              Francisco Márquez No. 160, planta baja, Col. Condesa, Alcaldía Cuauhtémoc, CDMX, C.P. 06140
            </a>
          </div>

          {/* Teléfono */}
          {/* <div className="data-container mb-2"> */}
          <div className="flex flex-row items-start gap-[10px] mb-2">
            <svg
              // className="icon"
              className="flex-shrink-0 w-5 h-5 object-contain"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 19"
              fill="none"
            >
              <path
                d="M17 13C15.8 13 14.5 12.8 13.4 12.4C13.3 12.4 13.2 12.4 13.1 12.4C12.8 12.4 12.6 12.5 12.4 12.7L10.2 14.9C7.4 13.4 5 11.1 3.6 8.3L5.8 6.1C6.1 5.8 6.2 5.4 6 5.1C5.7 4 5.5 2.7 5.5 1.5C5.5 1 5 0.5 4.5 0.5H1C0.5 0.5 0 1 0 1.5C0 10.9 7.6 18.5 17 18.5C17.5 18.5 18 18 18 17.5V14C18 13.5 17.5 13 17 13ZM2 2.5H3.5C3.6 3.4 3.8 4.3 4 5.1L2.8 6.3C2.4 5.1 2.1 3.8 2 2.5ZM16 16.5C14.7 16.4 13.4 16.1 12.2 15.7L13.4 14.5C14.2 14.7 15.1 14.9 16 14.9V16.5Z"
                fill="#611232"
              />
            </svg>
            <span>5552110815 Ext. 216</span>
          </div>

          {/* Correo */}
          {/* <div className="data-container mb-2"> */}
          <div className="flex flex-row items-start gap-[10px] mb-2">
            <svg
              // className="icon"
              className="flex-shrink-0 w-5 h-5 object-contain"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 16"
              fill="none"
            >
              <path
                d="M20 2C20 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2ZM18 2L10 7L2 2H18ZM18 14H2V4L10 9L18 4V14Z"
                fill="#611232"
              />
            </svg>
            <a href="mailto:cdmx_ssocial@inea.gob.mx"      
            // className="link-hover"
            className="text-[#333334] cursor-pointer transition-colors duration-200 ease-in-out no-underline hover:underline hover:text-[#D3C09B]"
            >
              cdmx_ssocial@inea.gob.mx
            </a>
          </div>

          {/* Facebook */}
          {/* <div className="data-container mb-2"> */}
          <div className="flex flex-row items-start gap-[10px] mb-2">
            <svg
              // className="icon"
              className="flex-shrink-0 w-5 h-5 object-contain"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#611232"
            >
              <path d="M22 12C22 6.48 17.52 2 12 2S2 6.48 2 12c0 4.84 3.44 8.84 8 9.8v-6.92H7.5V12H10V9.5c0-2.5 1.5-3.9 3.77-3.9 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.55V12h2.78l-.44 2.88h-2.34v6.92c4.56-.96 8-4.96 8-9.8Z" />
            </svg>
              <span>uoinea.cdmx</span>
          </div>

          {/* Sitio Web */}
          {/* <div className="data-container"> */}
          <div className="flex flex-row items-start gap-[10px]">
            <svg
              // className="icon"
              className="flex-shrink-0 w-5 h-5 object-contain"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#611232"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 8h-2.07c-.46-2.28-1.49-4.17-2.93-5.43C14.74 5.02 16.39 6.92 17 10zm-5-6c1.93 1.55 3.35 4.03 3.85 7H8.15c.5-2.97 1.92-5.45 3.85-7zM7 10H5c.61-3.08 2.26-5.57 4.07-6.43C8.56 5.83 7.53 7.72 7 10zm0 4h2.07c.46 2.28 1.49 4.17 2.93 5.43C9.26 18.98 7.61 17.08 7 14zm5 6c-1.93-1.55-3.35-4.03-3.85-7h7.7c-.5 2.97-1.92 5.45-3.85 7zM17 14h2c-.61 3.08-2.26 5.57-4.07 6.43C15.44 18.17 16.47 16.28 17 14z" />
            </svg>
            <Link href="https://cdmx.inea.gob.mx" target="_blank" 
            // className="link-hover"
            className="text-[#333334] cursor-pointer transition-colors duration-200 ease-in-out no-underline hover:underline hover:text-[#D3C09B]"
            >
              cdmx.inea.gob.mx
            </Link>
          </div>
        </div>
      </PagSec>
    </div>
  );
}

export default ServicioSocial;
