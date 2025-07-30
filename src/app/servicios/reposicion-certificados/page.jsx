"use client";
import React, { useState, useEffect } from "react";
import PagSec from "@/components/PlantillaPagSec";
import { Noto_Sans } from "next/font/google";
import AddressComponent from "@/components/address";
import ControlEscolarPrimaria from "@/components/ControlEscolarPrimaria";
import RequisitosHorarios from "@/components/RequisitosHorarios";
import "./reposicion.css";

const notoSans = Noto_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  styles: ["italic", "normal", "bold", "bold italic", "italic bold"],
  subsets: ["latin"],
});

function Reposicion_certificados() {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState("internet");

  const handleOpcionSeleccionada = (opcion) => {
    setOpcionSeleccionada(opcion);
  };

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
            //`https://inea-web-backend.onrender.com/api/enlaces-de-interes-laterales?filters[Pinear][$eq]=false&populate=%2A&sort[0]=Fecha:desc`
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

  const datosPrimaria = [
    {
      titulo: "Direccion de Educacion Primaria No.1",
      direccion:
        "Melchor Ocampo No. 91, Col. Tlaxpana, Alcaldía Miguel Hidalgo, C.P. 11370, Ciudad de México",
      url: "https://maps.app.goo.gl/vgEVhVhvU3moQZdi6",
      telefonos: ["5536018400 Ext. 48250"],
      correos: ["msussy.padillar@aefcm.gob.mx", "msussy.padillar@aefcm.gob.mx"],
      horario: "Lunes a viernes de 09:00 a 15:00 hrs y de 16:00 a 18:00 hrs.",
      alcaldias: " Miguel Hidalgo, Cuauhtémoc, Cuajimalpa y Álvaro Obregón.",
    },
    {
      titulo: "Dirección de Educación Primaria No. 2",
      direccion:
        "Av. Poniente 140 No. 475, Col. Nueva Vallejo, Alcaldía Gustavo A. Madero, C.P. 07750, Ciudad de México.",
      url: "https://maps.app.goo.gl/MNEtTuTsQ3d6RtrG8",
      telefonos: ["5591307511"],
      correos: ["tomasfr@aefcm.gob.mx", "nadia.hernandez@aefcm.gob.mx"],
      horario: "Lunes a viernes de 09:00 a 15:00 hrs y de 16:00 a 18:00 hrs.",
      alcaldias: "Azcapotzalco y G.A.M",
    },
    {
      titulo: "Dirección de Educación Primaria No. 3",
      direccion:
        "Avenida Coyoacán No. 521, 2° piso, Col. Del Valle, Alcaldía Benito Juárez, C.P. 03100, Ciudad de México",
      url: "https://maps.app.goo.gl/gVfrwtanw1u6DEar7",
      telefonos: ["5536018400 Ext. 48622", "56878860"],
      correos: [
        "control.escolard3@aefcm.gob.mx",
        "edgar.gonzalezr@aefcm.gob.mx",
      ],
      horario: "Lunes a viernes de 09:00 a 15:00 hrs y de 16:00 a 18:00 hrs.",
      alcaldias: "Benito Juárez, Venustiano Carranza, Iztacalco y Coyoacán",
    },
    {
      titulo: "Dirección de Educación Primaria No. 4",
      direccion:
        "Calzada México Xochimilco No. 4832. Col. San Lorenzo Huipulco, Alcaldía Tlalpan, C.P. 14370, Ciudad de México.",
      url: "https://maps.app.goo.gl/u3PuvEYe8jeGL3ha7",
      telefonos: ["5591300906"],
      correos: [
        "andrea.betancour@aefcm.gob.mx",
        "gestionescolard4@aefcm.gob.mx",
      ],
      horario: "Lunes a viernes de 09:00 a 15:00 hrs y de 16:00 a 18:00 hrs.",
      alcaldias:
        "Magdalena Contreras, Tlalpan, Xochimilco, Tláhuac Milpa Alta.",
    },
  ];

  const datosSecundaria = [
    {
      titulo: "Dirección Operativa 1",
      direccion:
        "Maestro Rural No. 57, Col. Un Hogar para Nosotros, Alcaldía Miguel Hidalgo",
      url: "https://maps.app.goo.gl/nRajSiLKwrTsZr2z8",
      alcaldias:
        "Álvaro Obregón, Cuajimalpa de Morelos, Cuauhtémoc y Miguel Hidalgo.",
    },
    {
      titulo: "Dirección Operativa 2",
      direccion:
        "Schumann y Constantino S/N Col. Vallejo, Alcaldía Gustavo A. Madero, C.P. 07870",
      url: "https://maps.app.goo.gl/tt4gB1mt5ZXAUZZe9",
      alcaldias: "Azcapotzalco y Gustavo A. Madero",
    },
    {
      titulo: "Dirección Operativa 3",
      direccion:
        "Sur 65-A No. 3228, Col. Viaducto Piedad, C.P. 08200, Alcaldía Iztacalco, Ciudad de México.",
      url: "https://maps.app.goo.gl/KUvDoP6WV5TiJjiZ6",
      alcaldias:
        "Benito Juárez, Coyoacán, Iztacalco, Venustiano Carranza e Iztapalapa para Telesecundarias",
    },
    {
      titulo: "Dirección Operativa 4",
      direccion:
        "Anillo Periférico No. 7650, Col. Ex Hacienda Coapa, Alcaldía Tlalpan, C.P. 14330, Ciudad de México.",
      url: "https://maps.app.goo.gl/NnfJHhmTrkfxonAL8",
      alcaldias:
        "Magdalena Contreras, Milpa Alta, Tláhuac, Tlalpan y Xochimilco",
    },
  ];

  return (
    <div>
      <PagSec
        Enlaces={enlacesL}
        Titulo="Duplicado de certificado de terminación de estudios de primaria y/o secundaria en escuelas de la Ciudad de México"
      >
        <div className={`${notoSans.className} text-[#333334] text-start max-w-[1200px]`}>
          <div id="pestañas">
            <ul className="flex flex-wrap text-sm font-medium text-center border-b border-gray-200 dark:border-gray-700 leading-7">
              {[
                { key: "internet", label: "Por internet" },
                { key: "presencial", label: "Presencial" },
              ].map(({ key, label }) => (
                <li key={key} className="p-0">
                  <button
                    className={`${
                      notoSans.className
                    } inline-block p-4 text-[18px] ${
                      opcionSeleccionada === key
                        ? "text-[#A57F2C] font-bold bg-gray-100 rounded-t-lg active dark:bg-gray-800"
                        : "text-[#333334] border border-gray-200 rounded-t-lg hover:text-[#611232] hover:font-bold hover:bg-slate-50"
                    }`}
                    onClick={() => handleOpcionSeleccionada(key)}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        {opcionSeleccionada === "internet" && (
          // <div className="content mt-[20px] ">
          <div className="pt-[25px] text-lg mt-[20px] ">
            {/* <ul className="ul-sep"> */}
            <ul className="list-disc ml-[25px]">
              <li className="mb-5 break-words">
                De todas las escuelas, siempre y cuando hayas concluido y
                acreditado el Ciclo Escolar. Si obtuviste tu certificado{" "}
                <strong> antes de julio del 2017 </strong> o concluiste tus
                estudios en un CEDEX, deberás continuar con este trámite a
                través de la siguiente página de internet: &nbsp;
                <a
                  // className="a-sep"
                  className="text-[#611232] cursor-pointer hover:text-[#D3C09B] hover:underline"
                  href=" https://www10.aefcm.gob.mx:8006/ugd/rce/"
                >
                  https://www10.aefcm.gob.mx:8006/ugd/rce/
                </a>
              </li>

              <li className="mb-5 break-words">
              Si obtuviste tu certificado de estudios de primaria o secundaria 
              <strong> a partir del mes de julio de 2017</strong>, lo puedes
              descargar a través de la siguiente página de internet:&nbsp;
              <a
                // className="a-sep"
                className="text-[#611232] cursor-pointer hover:text-[#D3C09B] hover:underline"
                href="https://www.controlescolar.aefcm.gob.mx/valida"
              >
                https://www.controlescolar.aefcm.gob.mx/valida.
              </a>
              <p>
                Siempre y cuando tengas a la mano el folio SEP del documento 
                el cual consta de 36 caracteres incluyendo guion medio o por 
                medio del lector de código QR (código de respuesta rápida) 
                desde tu dispositivo Android.
              </p>
            </li>
            </ul>
          </div>
        )}

        {opcionSeleccionada === "presencial" && (
          // <div className="content presencial flex flex-col gap-10">
          <div className="pt-[25px] text-lg mt-[20px] presencial flex flex-col gap-10">
            <div className="flex flex-wrap mb-6">
            {[
              { id: "primaria", label: "Primaria" },
              { id: "secundaria", label: "Secundaria" },
            ].map(({ id, label }) => (
            <button
              key={id}
              type="button"
              className="text-[#611232] rounded-lg hover:text-white border border-[#611232] hover:bg-[#611232] focus:ring-4 focus:outline-none focus:ring-[#A57F2C] focus:bg-[#611232] focus:text-white font-medium px-5 py-2.5 text-center me-2 mb-2 text-lg flex items-center justify-center gap-2"
              onClick={() => {
                const section = document.getElementById(id);
                if (section) {
                  const offset = 120;
                  const top = section.getBoundingClientRect().top + window.scrollY - offset;
                  window.scrollTo({ top, behavior: "smooth" });
                }
              }}
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 3.75H8.25A2.25 2.25 0 006 6v12a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25V7.5L16.5 3.75z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 3.75V7.5h3.75M9 10.5h6M9 13.5h6M9 16.5h6"
                />
              </svg>
              {label}
            </button>
            ))}
          </div>
            <div id="primaria" className="mt-[-5px]">
              <div className="mb-4">
                {/* <h2 className="patria title-sep">Primaria</h2> */}
                <h2 className="patria text-2xl font-bold mb-4">Primaria</h2>
                <div className="flex items-center">
                  <div className="w-9 h-[5px] bg-[#b38e61] mt-1"></div>
                  <div className="flex-grow h-px bg-gray-300"></div>
                </div>
                <div className="space-y-6 mt-6">
                  <ControlEscolarPrimaria />
                </div>
                <div className="space-y-6 mt-10">
                    <RequisitosHorarios />
                </div>
              </div>
              
              {/* Nuevo Título de sección */}
              <div className="mb-4">
                {/* <h2 className="patria title-sep mt-12">Direcciones adicionales</h2> */}
                <h2 className="patria text-2xl font-bold mb-4 mt-12">Direcciones adicionales</h2>
                  <div className="flex items-center">
                      <div className="w-9 h-[5px] bg-[#b38e61] mt-1"></div>
                      <div className="flex-grow h-px bg-gray-300"></div>
                  </div>
              </div>
                
              {/* <div className="addresses flex flex-col gap-4"> */}
              <div className="grid grid-cols-1 gap-5 mt-6 ">
                {datosPrimaria.map((datos, index) => (
                  <div key={index}>
                    <AddressComponent datos={datos} />
                  </div>
                ))}
              </div>
            </div>

            <div id="secundaria">
              <div className="mb-4">
                {/* <h2 className="patria title-sep mt-6">Secundaria</h2> */}
                <h2 className="patria text-2xl font-bold mb-4 mt-6">Secundaria</h2>
                <div className="flex items-center">
                  <div className="w-9 h-[5px] bg-[#b38e61] mt-1"></div>
                  <div className="flex-grow h-px bg-gray-300"></div>
                </div>
              </div>
              {/* <h3 className="subtitle-sep mt-4"> */}
              <h3 className="font-bold mt-4">
                Coordinación Sectorial de Educación Secundaria.{" "} <br />
                Departamento de Control Escolar.
              </h3>
              {/* <div className="data-container flex flex-row items-start gap-[10px]"> */}
              <div className=" flex flex-row items-start gap-[10px]">
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
                  href="https://maps.app.goo.gl/MGe9SWn1Gzqv3XBu7"
                  target="_blank"
                  rel="noopener noreferrer"
                  // className="link-hover text-underline"
                  className="cursor-pointer transition-colors duration-200 ease-in-out no-underline hover:underline hover:text-[#D3C09B] text-underline"
                >
                  Nezahualcóyotl, No. Ext: 127, No. Int: Piso 8, C.P. 06080,
                  Alcaldía Cuauhtémoc, Ciudad de México.
                </a>
              </div>

            {/* <div className="data-container flex items-start gap-2"> */}
            <div className="flex flex-row items-start gap-[10px]">
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
              <span className="text-[#333334]">5536018400 Ext. 48380</span>
            </div>

              {/* <div className="data-container flex items-start gap-2"> */}
              <div className="flex flex-row items-start gap-[10px]">
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
                <a
                  href="mailto:control.escolar.cses@aefcm.gob.mx"
                  // className="link-hover"
                  className="cursor-pointer transition-colors duration-200 ease-in-out no-underline hover:underline hover:text-[#D3C09B]"
                >
                  control.escolar.cses@aefcm.gob.mx
                </a>
              </div>
            </div>

            {/* <div className="addresses flex flex-col gap-4"> */}
            <div className="grid grid-cols-1 gap-5 mt-6">
              {datosSecundaria.map((datos, index) => (
                <div key={index}>
                  <AddressComponent datos={datos} />
                </div>
              ))}
            </div>
          </div>
        )}
        </div>
      </PagSec>
    </div>
  );
}

export default Reposicion_certificados;
