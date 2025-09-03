"use client";
import React from "react";
import Breadcrumb from "@/components/Breadcrumb";
import Card from "@/components/EnlacesR_Lateral";
import CarouselEL from "@/components/CarouselEL";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  styles: ["italic", "normal", "bold", "bold italic", "italic bold"],
  subsets: ["latin"],
});

function PagSec({ Enlaces, Titulo, Subtitulo, children, mostrarCarrusel = true }) {
  return (
    <div className="mt-[8vh]"> {/* Reducir el margen superior */}
      <div className="mx-auto w-11/12 medida3:w-4/5 md:w-[1200px] grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
        
        {/* Breadcrumb ajustado */}
        {/* <div className="col-span-12 md:col-start-1 md:col-span-8 mb-4 -mt-2"> */}
        <div className="col-span-12 md:col-start-1 md:col-span-8 mb-4 mt-2">
          <div className="!text-[18px]">
            <Breadcrumb />
          </div>
        </div>

        {/* Contenido principal */}
        <div className="col-span-12 md:col-span-8 -mt-4">
          {Titulo && (
            <h1 className={`${notoSans.className} text-[38px] font-semibold text-[#333334] mb-5 leading-tight`}>
              {Titulo}
            </h1>
          )}
          {Subtitulo && (
            <h2 className={`${notoSans.className} text-[27px] font-light text-[#333334] mb-4 leading-9`}>
              {Subtitulo}
            </h2>
          )}
          {children}
        </div>

        {/* Enlaces laterales - usando grid correctamente */}
        <div className="hidden md:block md:col-span-4 self-start">
          <div className="flex flex-col gap-[2rem] ml-[2rem] -mt-4">
            {Enlaces.map((enlace) => (
              <Card
                key={enlace.title}
                title={enlace.title}
                imageSrc={enlace.imageSrc}
                buttonText={enlace.buttonText}
                link={enlace.link}
                className="w-full h-auto object-cover mx-auto"
              />
            ))}
          </div>
        </div>

        {/* Carrusel de Cards (visible en pantallas pequeñas) */}
        {mostrarCarrusel && (
          <div className="md:hidden col-span-12 w-full">
            <CarouselEL cards={Enlaces} />
          </div>
        )}
      </div>
    </div>
  );
}

export default PagSec;