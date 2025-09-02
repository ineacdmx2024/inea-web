"use client";
import React from "react";

export default function ControlEscolarPrimaria() {
  return (
    <div>
      {/* <h3 className="subtitle-sep font-bold text-[#333334]"> */}
      <h3 className="font-bold text-[#333334]">
        Dirección General de Operación de Servicios Educativos.
      </h3>

      <div
        id="alert-control-escolar-primaria"
        className="p-4 mb-4 mt-2 border border-[#3a0c1e] rounded-lg bg-yellow-50 dark:bg-gray-800 text-[#333334] dark:text-yellow-300 dark:border-yellow-800"
        role="alert"
      >
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">
            Coordinación Sectorial de Educación Primaria <br />
            Departamento de Control Escolar
          </h3>

          {/* Dirección */}
          {/* <div className="data-container flex items-start gap-2"> */}
          <div className="flex flex-row items-start gap-[10px]">
            <svg
              className="flex-shrink-0 w-5 h-5 object-contain"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 20"
              fill="none"
            >
              <path
                d="M7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 9.5 7C9.5 7.3283 9.43534 7.65339 9.3097 7.95671C9.18406 8.26002 8.99991 8.53562 8.76777 8.76777C8.53562 8.99991 8.26002 9.18406 7.95671 9.3097C7.65339 9.43534 7.3283 9.5 7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5ZM7 0C8.85652 0 10.637 0.737498 11.9497 2.05025C13.2625 3.36301 14 5.14348 14 7C14 12.25 7 20 7 20C7 20 0 12.25 0 7C0 5.14348 0.737498 3.36301 2.05025 2.05025C3.36301 0.737498 5.14348 0 7 0ZM7 2C5.67392 2 4.40215 2.52678 3.46447 3.46447C2.52678 4.40215 2 5.67392 2 7C2 8 2 10 7 16.71C12 10 12 8 12 7C12 5.67392 11.4732 4.40215 10.5355 3.46447C9.59785 2.52678 8.32608 2 7 2Z"
                fill="#700425"
              />
            </svg>
            <a
              href="https://maps.app.goo.gl/MGe9SWn1Gzqv3XBu7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#333334] hover:text-[#3a0c1e] hover:underline cursor-pointer"
            >
              Nezahualcóyotl, No. Ext: 127, No. Int: Piso 8, C.P. 06080,
              Alcaldía Cuauhtémoc, Ciudad de México.
            </a>
          </div>

          {/* Teléfono */}
          {/* <div className="data-container flex items-start gap-2"> */}
          <div className="flex flex-row items-start gap-[10px]">
            <svg
              className="flex-shrink-0 w-5 h-5 object-contain"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 19"
              fill="none"
            >
              <path
                d="M17 13C15.8 13 14.5 12.8 13.4 12.4C13.3 12.4 13.2 12.4 13.1 12.4C12.8 12.4 12.6 12.5 12.4 12.7L10.2 14.9C7.4 13.4 5 11.1 3.6 8.3L5.8 6.1C6.1 5.8 6.2 5.4 6 5.1C5.7 4 5.5 2.7 5.5 1.5C5.5 1 5 0.5 4.5 0.5H1C0.5 0.5 0 1 0 1.5C0 10.9 7.6 18.5 17 18.5C17.5 18.5 18 18 18 17.5V14C18 13.5 17.5 13 17 13ZM2 2.5H3.5C3.6 3.4 3.8 4.3 4 5.1L2.8 6.3C2.4 5.1 2.1 3.8 2 2.5ZM16 16.5C14.7 16.4 13.4 16.1 12.2 15.7L13.4 14.5C14.2 14.7 15.1 14.9 16 14.9V16.5Z"
                fill="#700425"
              />
            </svg>
            <span className="text-[#333334]">5536018400 Ext. 48380</span>
          </div>

          {/* Correo */}
          {/* <div className="data-container flex items-start gap-2"> */}
          <div className="flex flex-row items-start gap-[10px]">
            <svg
              className="flex-shrink-0 w-5 h-5 object-contain"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 16"
              fill="none"
            >
              <path
                d="M20 2C20 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2ZM18 2L10 7L2 2H18ZM18 14H2V4L10 9L18 4V14Z"
                fill="#700425"
              />
            </svg>
            <a
              href="mailto:edgar.gutierrezr@aefcm.gob.mx"
              className="text-[#333334] hover:text-[#3a0c1e] hover:underline cursor-pointer"
            >
              edgar.gutierrezr@aefcm.gob.mx
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
