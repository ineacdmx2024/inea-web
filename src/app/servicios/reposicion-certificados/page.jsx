"use client";
import React, { useState, useEffect } from "react";
import PagSec from "@/components/PlantillaPagSec";
import { Noto_Sans } from "next/font/google";
import AddressComponent from "@/components/address";
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
      telefonos: ["5536018400 Ext. 48250"],
      correos: ["msussy.padillar@aefcm.gob.mx", "msussy.padillar@aefcm.gob.mx"],
      horario: "Lunes a viernes de 09:00 a 15:00 hrs y de 16:00 a 18:00 hrs.",
      alcaldias: " Miguel Hidalgo, Cuauhtémoc, Cuajimalpa y Álvaro Obregón.",
    },
    {
      titulo: "Dirección de Educación Primaria No. 2",
      direccion:
        "Av. Poniente 140 No. 475, Col. Nueva Vallejo, Alcaldía Gustavo A. Madero, C.P. 07750, Ciudad de México.",
      telefonos: ["5591307511"],
      correos: ["tomasfr@aefcm.gob.mx", "nadia.hernandez@aefcm.gob.mx"],
      horario: "Lunes a viernes de 09:00 a 15:00 hrs y de 16:00 a 18:00 hrs.",
      alcaldias: "Azcapotzalco y G.A.M",
    },
    {
      titulo: "Dirección de Educación Primaria No. 3",
      direccion:
        "Avenida Coyoacán No. 521, 2° piso, Col. Del Valle, Alcaldía Benito Juárez, C.P. 03100, Ciudad de México",
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
      alcaldias:
        "Álvaro Obregón, Cuajimalpa de Morelos, Cuauhtémoc y Miguel Hidalgo.",
    },
    {
      titulo: "Dirección Operativa 2",
      direccion:
        "Schumann y Constantino S/N Col. Vallejo, Alcaldía Gustavo A. Madero, C.P. 07870",
      alcaldias: "Azcapotzalco y Gustavo A. Madero",
    },
    {
      titulo: "Dirección Operativa 3",
      direccion:
        "Sur 65-A No. 3228, Col. Viaducto Piedad, C.P. 08200, Alcaldía Iztacalco, Ciudad de México.",
      alcaldias:
        "Benito Juárez, Coyoacán, Iztacalco, Venustiano Carranza e Iztapalapa para Telesecundarias",
    },
    {
      titulo: "Dirección Operativa 4",
      direccion:
        "Anillo Periférico No. 7650, Col. Ex Hacienda Coapa, Alcaldía Tlalpan, C.P. 14330, Ciudad de México.",
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
        <div className="mx-auto max-w-4xl px-4 text-[#333334]">
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
          <div className="content mt-2">
            <ul className="ul-sep">
              <li>
                De todas las escuelas, siempre y cuando hayas concluido y
                acreditado el Ciclo Escolar. Si obtuviste tu certificado{" "}
                <strong> antes de julio del 2017 </strong> o concluiste tus
                estudios en un CEDEX, deberás continuar con este trámite a
                través de la siguiente página de internet: &nbsp;
                <a
                  className="a-sep"
                  href=" https://www10.aefcm.gob.mx:8006/ugd/rce/"
                >
                  https://www10.aefcm.gob.mx:8006/ugd/rce/
                </a>
              </li>

              <li>
              Si obtuviste tu certificado de estudios de primaria o secundaria 
              <strong> a partir del mes de julio de 2017</strong>, lo puedes
              descargar a través de la siguiente página de internet:&nbsp;
              <a
                className="a-sep"
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
          <div className="content presencial flex flex-col gap-8 mt-2">
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
                    const offset = 120; // ajusta si quieres compensar navbar fija
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
                    d="M4.5 16.5v1.125c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V16.5M7.5 12l4.5 4.5m0 0l4.5-4.5m-4.5 4.5V3"
                  />
                </svg>
                {label}
              </button>
            ))}
          </div>
            <div id="primaria">
              <h2 className="title-sep">Primaria</h2>
              <h3 className="subtitle-sep">
                Dirección General de Operación de Servicios Educativos.
              </h3>
              <h3 className="subtitle-sep">
                Coordinación Sectorial de Educación Primaria Departamento de
                Control Escolar
              </h3>
              <div className="data-container flex items-start gap-2">
                <svg
                  className="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 20"
                  fill="none"
                >
                  <path
                    d="M7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 9.5 7C9.5 7.3283 9.43534 7.65339 9.3097 7.95671C9.18406 8.26002 8.99991 8.53562 8.76777 8.76777C8.53562 8.99991 8.26002 9.18406 7.95671 9.3097C7.65339 9.43534 7.3283 9.5 7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5ZM7 0C8.85652 0 10.637 0.737498 11.9497 2.05025C13.2625 3.36301 14 5.14348 14 7C14 12.25 7 20 7 20C7 20 0 12.25 0 7C0 5.14348 0.737498 3.36301 2.05025 2.05025C3.36301 0.737498 5.14348 0 7 0ZM7 2C5.67392 2 4.40215 2.52678 3.46447 3.46447C2.52678 4.40215 2 5.67392 2 7C2 8 2 10 7 16.71C12 10 12 8 12 7C12 5.67392 11.4732 4.40215 10.5355 3.46447C9.59785 2.52678 8.32608 2 7 2Z"
                    fill="#611232"
                  />
                </svg>
                <p>
                  Nezahualcóyotl, No. Ext: 127, No. Int: Piso 8, C.P. 06080,
                  Alcaldía Cuauhtémoc, Ciudad de México.
                </p>
              </div>
              <div className="data-container flex items-start gap-2">
                <svg
                  className="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 16"
                  fill="none"
                >
                  <path
                    d="M20 2C20 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2ZM18 2L10 7L2 2H18ZM18 14H2V4L10 9L18 4V14Z"
                    fill="#611232"
                  />
                </svg>
                <p>edgar.gutierrezr@aefcm.gob.mx</p>
              </div>
            </div>

            <div className="addresses flex flex-col gap-4">
              {datosPrimaria.map((datos, index) => (
                <div key={index}>
                  <AddressComponent datos={datos} />
                </div>
              ))}
            </div>

            <div>
              <h2 className="title-sep">Requisitos y horarios de atencion</h2>
              <p>Lunes a viernes de 09:00 a 15:00 hrs.</p>
              <ul className="ul-sep2">
                <li>
                  Solicitud del trámite:
                  https://www10.aefcm.gob.mx:8006/ugd/rce/
                </li>
                <li>Copia de Acta de Nacimiento o documento equivalente.</li>
                <li>Constancia de CURP (en caso de contar con ella).</li>
                <li>Comprobante original de pago de derechos.</li>
                <li>
                  Antecedentes escolares o la referencia en su caso de la
                  escuela.
                </li>
                <li>Identificación oficial con fotografía (en su caso).</li>
                <li>
                  Tiene un costo de $67 (cantidad vigente para el año 2023).
                </li>
                <li>
                  El pago puede ser En cualquiera de las instituciones de
                  crédito autorizadas, excepto Banco Azteca y Bancoppel.
                </li>
              </ul>
            </div>

            <div id="secundaria">
              <h2 className="title-sep">Secundaria</h2>
              <h3 className="subtitle-sep">
                Coordinación Sectorial de Educación Secundaria.{" "}
              </h3>
              <h3 className="subtitle-sep">Departamento de Control Escolar.</h3>
              <div className="data-container flex items-start gap-2">
                <svg
                  className="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 20"
                  fill="none"
                >
                  <path
                    d="M7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 9.5 7C9.5 7.3283 9.43534 7.65339 9.3097 7.95671C9.18406 8.26002 8.99991 8.53562 8.76777 8.76777C8.53562 8.99991 8.26002 9.18406 7.95671 9.3097C7.65339 9.43534 7.3283 9.5 7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5ZM7 0C8.85652 0 10.637 0.737498 11.9497 2.05025C13.2625 3.36301 14 5.14348 14 7C14 12.25 7 20 7 20C7 20 0 12.25 0 7C0 5.14348 0.737498 3.36301 2.05025 2.05025C3.36301 0.737498 5.14348 0 7 0ZM7 2C5.67392 2 4.40215 2.52678 3.46447 3.46447C2.52678 4.40215 2 5.67392 2 7C2 8 2 10 7 16.71C12 10 12 8 12 7C12 5.67392 11.4732 4.40215 10.5355 3.46447C9.59785 2.52678 8.32608 2 7 2Z"
                    fill="#611232"
                  />
                </svg>
                <p>
                  Nezahualcóyotl, No. Ext: 127, No. Int: Piso 8, C.P. 06080,
                  Alcaldía Cuauhtémoc, Ciudad de México.
                </p>
              </div>
              <div className="data-container flex items-start gap-2">
                <svg
                  className="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 16"
                  fill="none"
                >
                  <path
                    d="M20 2C20 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2ZM18 2L10 7L2 2H18ZM18 14H2V4L10 9L18 4V14Z"
                    fill="#611232"
                  />
                </svg>

                <p>control.escolar.cses@aefcm.gob.mx</p>
              </div>
            </div>

            <div className="addresses flex flex-col gap-4">
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
