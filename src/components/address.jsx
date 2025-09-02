"use client";
import React from "react";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  styles: ["italic", "normal", "bold", "bold italic", "italic bold"],
  subsets: ["latin"],
});

const AddressComponent = ({ datos }) => {
  return (
    // <div className="addressData">
    <div className="flex flex-col gap-[5px] mb-5">
      {/* <h2 className="subtitle-sep">{datos.titulo}</h2> */}
      <h2 className="font-bold">{datos.titulo}</h2>

      {/* <div className="data-container"> */}
      <div className="flex flex-row items-start gap-[10px]">
          <svg
            // className="icon"
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
          {/* <div className="text"> */}
          <div className="flex-1 break-words">
            <a
              href={datos.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#3a0c1e] hover:underline cursor-pointer"
            >
              {datos.direccion}
            </a>
          </div>
        </div>

      {datos.telefonos !== undefined && (
        // <div className="data-container">
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
              fill="#700425"
            />
          </svg>
          {/* <div className="text"> */}
          <div className="flex-1 break-words">
            {datos.telefonos.map((telefono, index) => (
              <p key={index}>{telefono}</p>
            ))}
          </div>
        </div> 
      )}

      {datos.correos?.length > 0 && (
        // <div className="data-container">
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
              fill="#700425"
            />
          </svg>
          {/* <div className="text"> */}
          <div className="flex-1 break-words">
            {datos.correos.map((correo, index) => (
              <a
                key={index}
                href={`mailto:${correo}`}
                // className="link-hover block"
                className="cursor-pointer transition-colors duration-200 ease-in-out no-underline hover:underline hover:text-[#3a0c1e] block"
              >
                {correo}
              </a>
            ))}
          </div>
        </div>
      )}

      {datos.horario !== undefined && (
        <div className="mt-4">
          {/* <h2 className="subtitle-sep">Horario de atención</h2> */}
          <h2 className="font-bold">Horario de atención</h2>
          {/* <div className="data-container"> */}
          <div className="flex flex-row items-start gap-[10px]">
            <svg
              // className="icon"
              className="flex-shrink-0 w-5 h-5 object-contain"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M10 18.5C12.1217 18.5 14.1566 17.6571 15.6569 16.1569C17.1571 14.6566 18 12.6217 18 10.5C18 8.37827 17.1571 6.34344 15.6569 4.84315C14.1566 3.34285 12.1217 2.5 10 2.5C7.87827 2.5 5.84344 3.34285 4.34315 4.84315C2.84285 6.34344 2 8.37827 2 10.5C2 12.6217 2.84285 14.6566 4.34315 16.1569C5.84344 17.6571 7.87827 18.5 10 18.5ZM10 0.5C11.3132 0.5 12.6136 0.758658 13.8268 1.2612C15.0401 1.76375 16.1425 2.50035 17.0711 3.42893C17.9997 4.35752 18.7362 5.45991 19.2388 6.67317C19.7413 7.88642 20 9.18678 20 10.5C20 13.1522 18.9464 15.6957 17.0711 17.5711C15.1957 19.4464 12.6522 20.5 10 20.5C4.47 20.5 0 16 0 10.5C0 7.84784 1.05357 5.3043 2.92893 3.42893C4.8043 1.55357 7.34784 0.5 10 0.5ZM10.5 5.5V10.75L15 13.42L14.25 14.65L9 11.5V5.5H10.5Z"
                fill="#700425"
              />
            </svg>
            {/* <div className="text"> */}
            <div className="flex-1 break-words">
              <p>{datos.horario}</p>
            </div>
          </div>
        </div>
      )}

      {/* <h2 className="subtitle-sep mt-4">Alcaldías que atienden</h2> */}
      <h2 className="font-bold mt-4">Alcaldías que atienden</h2>
      {/* <div className="text"> */}
      <div className="flex-1 break-words">
        <p>{datos.alcaldias}</p>
      </div>
    </div>
  );
};

export default AddressComponent;
